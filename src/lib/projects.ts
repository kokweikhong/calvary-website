import { Project } from "@/interfaces/project";
import supabase from "@/lib/supabase";
import { TypedSupabaseClient } from "@/utils/types";

export async function getProjects(
  limit?: number,
  products?: string[],
  sectors?: string[],
  services?: string[]
) {
  const { data, error } = await supabase
    .from("calvary_projects")
    .select("*")
    .contains("products", products || [""])
    .contains("sectors", sectors || [""])
    .contains("services", services || [""])
    .limit(limit || 100);
  if (error) {
    throw error;
  }
  return data as Project[];
}

export async function getProjectById(id: number) {
  const { data, error } = await supabase
    .from("calvary_projects")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    throw error;
  }
  return data as Project;
}

export async function getProjectsByService(
  service: string[],
  limit?: number
): Promise<Project[]> {
  const { data, error } = await supabase
    .from("calvary_projects")
    .select("*")
    .contains("services", service)
    // if limit is not provided, default to all
    .limit(limit || 100);
  if (error) {
    throw error;
  }
  return data;
}

export async function getProductDistinctValues() {
  const { data, error } = await supabase.from("distinct_products").select("*");
  if (error) {
    throw error;
  }
  const distinctValues = data
    .map((product: { distinct_values: string }) => {
      return product.distinct_values;
    })
    .filter((product: string) => product !== "");

  return distinctValues;
}

export async function getFilteredProjects(
  services: string[] = [""],
  products: string[] = [""],
  sectors: string[] = [""],
  limit?: number
) {
  return await supabase
    .from("calvary_projects")
    .select("*")
    .contains("services", services)
    .contains("products", products)
    .contains("sectors", sectors)
    .limit(limit || 100);
}
