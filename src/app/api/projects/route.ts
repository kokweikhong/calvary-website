import { type NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import { Project } from "@/interfaces/project";
// import { NextApiRequest, NextApiResponse } from "next";

const country = process.env.NEXT_PUBLIC_COUNTRY || "Singapore";

type ProjectsResponse = {
  data: Project[];
  length: number;
};

export async function GET(request: NextRequest) {
  // get param from url for country filter
  // limit and offset also
  const searchParams = request.nextUrl.searchParams;
  const countryParam = searchParams.get("country");
  const limitParam = searchParams.get("limit");
  const offsetParam = searchParams.get("offset");

  console.log("API Projects Country Param:", countryParam);

  const file = await fs.readFile(
    process.cwd() + "/src/data/projects.json",
    "utf-8"
  );
  const data = JSON.parse(file) as Project[];
  let filteredData = data;

  const country = countryParam === "my" ? "Malaysia" : "Singapore";

  // filter by country if countryParam is provided
  if (countryParam) {
    filteredData = filteredData.filter(
      (project) => project.country === country
    );
  }
  // apply limit and offset if provided
  const offset = offsetParam ? parseInt(offsetParam) : 0;
  const limit = limitParam ? parseInt(limitParam) : filteredData.length;

  filteredData = filteredData.slice(offset, offset + limit);

  console.log("API Projects Returned Length:", filteredData.length);

  return NextResponse.json({
    data: filteredData,
    length: filteredData.length,
  } as ProjectsResponse);
}
