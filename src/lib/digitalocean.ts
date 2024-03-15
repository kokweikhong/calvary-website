// "use server"

import { ListObjectsV2Command, S3 } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import axios from "axios";
import { parseString } from "xml2js";
import { xml2json } from "xml-js";

console.log(process.env.NEXT_PUBLIC_DO_SPACES_KEY);

const s3Client = new S3({
  forcePathStyle: false,
  endpoint: "https://sgp1.digitaloceanspaces.com",
  region: "sgp1",
  credentials: {
    accessKeyId: process.env.DO_SPACES_KEY!,
    secretAccessKey: process.env.DO_SPACES_SECRET!,
    expiration: new Date(2025, 1, 1),
  },
});

export async function getAllFilesFromFolder(folder: string): Promise<string[]> {
  // await getSignedUrlForFile();
  const command = new ListObjectsV2Command({
    Bucket: "calvarycarpentry-cloud-storage",
    Prefix: folder,
  });
  // console.log(folder);

  // const getUrl = await getSignedUrl(s3Client, command, {
  //   // 1 day
  //   expiresIn: 60 * 60 * 24,
  // });

  // console.log("getUrl", getUrl);

  // const contentRes = await getSignedUrlForFile(getUrl);
  // console.log(contentRes);
  // console.log(folder);
  // const files = Array.from(contentRes.ListBucketResult.Contents)
  //   .map((file: any) => file.Key._text)
  //   .filter((file: string) => file !== folder + "/");
  // console.log(files);
  // console.log(d);

  const response = await s3Client.listObjectsV2({
    Bucket: "calvarycarpentry-cloud-storage",
    Prefix: folder,
  });
  // console.log(response);
  let files: string[] = [];
  response.Contents?.forEach((file) => {
    files.push(file.Key as string);
  });
  return files;
}

export async function getFilesFromFolders(folder: string[]): Promise<string[]> {
  let files: string[] = [];
  for (const f of folder) {
    const command = new ListObjectsV2Command({
      Bucket: "calvarycarpentry-cloud-storage",
      Prefix: f,
    });
    const response = await s3Client.send(command);
    response.Contents?.forEach((file) => {
      files.push(file.Key as string);
    });
  }
  return files;
}

export async function getSignedUrlForFile(url: string) {
  // const url =
  //   "https://calvarycarpentry-cloud-storage.sgp1.digitaloceanspaces.com/projects";
  const res = await axios.get(url);
  const data = res.data;
  const jsonData = parseXMLtoJSON(data);
  return jsonData;
  // console.log(res);
}

function parseXMLtoJSON(xml: string) {
  const result = xml2json(xml, { compact: true, spaces: 2 });
  return JSON.parse(result);
}
