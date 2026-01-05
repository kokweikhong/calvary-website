import { Project } from "@/interfaces/project";
import { getCountryEnv } from "./env";

export async function getProjects(
  sectors?: string[],
  products?: string[],
  applications?: string[],
  years?: string[],
  projectName?: string,
  limit?: number,
  offset?: number
): Promise<Project[]> {
  const country = getCountryEnv();
  const countryParam = country === "my" ? "Malaysia" : "Singapore";
  const data = await fetch(
    `/api/projects?` +
      new URLSearchParams({
        country: countryParam,
        ...(sectors ? { sectors: sectors.join(",") } : {}),
        ...(products ? { products: products.join(",") } : {}),
        ...(applications ? { applications: applications.join(",") } : {}),
        ...(years ? { years: years.join(",") } : {}),
        ...(projectName ? { projectName } : {}),
        ...(limit ? { limit: limit.toString() } : {}),
        ...(offset ? { offset: offset.toString() } : {}),
      }).toString()
  ).then((res) => res.json());
  return data.data as Project[];
}
