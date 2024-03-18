"use client";

// import { getAllFilesFromFolder } from "@/actions/dospace";
import { Project } from "@/interfaces/project";
import projectImageLoader from "@/lib/projectImageLoader";
import Image from "next/image";
import Link from "next/link";

// async function getAllFilesFromFolder(folder: string) {
//   // parse the folder string to url friendly string
//   const folderEncode = encodeURIComponent(folder);
//   const response = await fetch(
//     `${process.env.LOCAL_API_URL}/api/projects/folder/${folderEncode}`
//   );
//   const data = await response.json();
//   return data;
// }

const ProjectReferenceCard = ({ project }: { project: Project }) => {
  // const doSpaceEndpoint = process.env.DO_SPACES_ENDPOINT;
  // const projectFiles = await getAllFilesFromFolder(`${project.image_path}`);
  const thumbnail = project.images?.at(1);

  return (
    <div className="w-full h-full relative">
      <Link href={`/projects/${project.id}`} className="absolute inset-0 z-10">
        <div className="relative h-full w-full">
          {thumbnail && (
            <Image
              loader={projectImageLoader}
              // src={`${doSpaceEndpoint}/${thumbnail}`}
              src={thumbnail.replaceAll(" ", "%20")}
              alt={project.name}
              placeholder="blur"
              blurDataURL={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcWA8AAccBIgbXS5wAAAAASUVORK5CYII="}
              // priority
              width={300}
              height={300}
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
              className="w-full h-full object-cover"
            />
          )}
          <div className="bg-black/50 absolute inset-0 flex items-center justify-center"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-start justify-between text-white p-8 w-full">
          <div>
            <h3 className="capitalize font-semibold text-xl">{project.name}</h3>
            <h4 className="uppercase text-sm font-light">{`${project.year} - ${project.sectors ?? "N/A"
              }`}</h4>
          </div>

          <div className="flex flex-col items-start justify-between gap-4 w-full">
            <div>
              <h4 className="capitalize font-medium text-md">{`${project.country} - ${project.location}`}</h4>
            </div>
            <div className="grid grid-cols-[3fr_1fr] items-end text-sm w-full">
              <div className="flex gap-2 mt-2 flex-wrap">
                {project.products.map((product) => {
                  return (
                    <p
                      key={product}
                      className="capitalize text-sm rounded-md px-2 py-1 border border-white"
                    >
                      {product}
                    </p>
                  );
                })}
              </div>
              {/*
            <Link
              href={`/projects/${project.id}`}
              className="text-white text-nowrap border border-white px-2 py-1 text-center"
            >
              View Project
            </Link>
            */}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectReferenceCard;
