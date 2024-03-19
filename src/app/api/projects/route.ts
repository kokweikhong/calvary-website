import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import { Project } from "@/interfaces/project";

const country = process.env.NEXT_PUBLIC_COUNTRY || "Singapore";

export async function GET() {
  const file = await fs.readFile(
    process.cwd() + "/src/data/projects.json",
    "utf-8"
  );
  const data = JSON.parse(file) as Project[];
  const filteredData = data.filter((project) =>
    project.countries.includes(country === "Singapore" ? "sg" : "my")
  );
  return NextResponse.json(filteredData);
}
