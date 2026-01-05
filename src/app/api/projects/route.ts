import { type NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import { Project } from "@/interfaces/project";
// import { NextApiRequest, NextApiResponse } from "next";

type ProjectsResponse = {
  data: Project[];
  length: number;
};

export async function GET(request: NextRequest) {
  // get param from url for country filter
  // limit and offset also
  const searchParams = request.nextUrl.searchParams;
  const countryParam =
    process.env.NEXT_PUBLIC_COUNTRY === "Malaysia" ? "my" : "sg";
  const limitParam = searchParams.get("limit");
  const offsetParam = searchParams.get("offset");

  // Get filter parameters
  const productsParam = searchParams.get("products");
  const sectorsParam = searchParams.get("sectors");
  const applicationsParam = searchParams.get("applications");
  const yearsParam = searchParams.get("years");
  const projectNameParam = searchParams.get("projectName");

  console.log("API Projects Country Param:", countryParam);

  const file = await fs.readFile(
    process.cwd() + "/src/data/projects.json",
    "utf-8"
  );
  const data = JSON.parse(file) as Project[];
  let filteredData = data;

  // filter by country if countryParam is provided
  if (countryParam) {
    filteredData = filteredData.filter((project) =>
      project.countries?.includes(countryParam)
    );
  }

  // Apply filters
  if (sectorsParam) {
    const sectors = sectorsParam.split(",").map((s) => s.toLowerCase());
    filteredData = filteredData.filter((project) =>
      // to lowercase for comparison and contains
      project.sectors.some((sector) => sectors.includes(sector.toLowerCase()))
    );
  }

  if (productsParam) {
    const products = productsParam.split(",").map((p) => p.toLowerCase());
    filteredData = filteredData.filter((project) =>
      project.products.some((product) =>
        products.includes(product.toLowerCase())
      )
    );
  }

  if (applicationsParam) {
    const applications = applicationsParam
      .split(",")
      .map((a) => a.toLowerCase());
    filteredData = filteredData.filter((project) =>
      project.applications?.some((application) =>
        applications.includes(application.toLowerCase())
      )
    );
  }

  if (yearsParam) {
    const years = yearsParam.split(",");
    filteredData = filteredData.filter((project) =>
      years.includes(project.year?.toString() || "")
    );
  }

  if (projectNameParam) {
    filteredData = filteredData.filter((project) =>
      project.name?.toLowerCase().includes(projectNameParam.toLowerCase())
    );
  }

  // Store total filtered count before pagination
  const totalFilteredCount = filteredData.length;

  // apply limit and offset if provided
  const offset = offsetParam ? parseInt(offsetParam) : 0;
  const limit = limitParam ? parseInt(limitParam) : filteredData.length;

  // sort by year descending
  filteredData.sort((a, b) => (b.year || 0) - (a.year || 0));

  filteredData = filteredData.slice(offset, offset + limit);

  return NextResponse.json({
    data: filteredData,
    length: totalFilteredCount,
  } as ProjectsResponse);
}
