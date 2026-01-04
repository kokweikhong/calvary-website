import { promises as fs } from "fs";
import { Project } from "@/interfaces/project";

const country = process.env.NEXT_PUBLIC_COUNTRY || "Singapore";
export async function getProjects(): Promise<Project[]> {
  const file = await fs.readFile(
    process.cwd() + "/src/data/projects.json",
    "utf-8"
  );
  const data: Project[] = JSON.parse(file);
  const filteredData = data.filter((project) =>
    project.countries.includes(country === "Singapore" ? "sg" : "my")
  );
  return filteredData;
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
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
  return project || null;
}
