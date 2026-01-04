import { NextResponse, NextRequest } from "next/server";
import { promises as fs } from "fs";
import { Project } from "@/interfaces/project";

const country = process.env.NEXT_PUBLIC_COUNTRY || "Singapore";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const file = await fs.readFile(
    process.cwd() + "/src/data/projects.json",
    "utf-8"
  );
  const data: Project[] = JSON.parse(file);
  const project = data
    .filter((project) =>
      project.countries.includes(country === "Singapore" ? "sg" : "my")
    )
    .find((project) => project.url.includes(slug));
  console.log(project);
  if (!project) {
    return NextResponse.error();
  }
  return NextResponse.json(project);
}
