import type { Product } from "@/interfaces/product";
import type { Project } from "@/interfaces/project";
import { MetadataRoute } from "next";

export const revalidate = 0;

const COUNTRY = process.env.NEXT_PUBLIC_COUNTRY;

const BASE_URL =
  COUNTRY === "Singapore"
    ? "https://calvarycarpentry.com"
    : "https://calvarycarpentry.com.my";

async function getProducts() {
  const res = await fetch(`${BASE_URL}/api/products`);
  return (await res.json()) as Product[];
}

async function getProjects() {
  const res = await fetch(`${BASE_URL}/api/projects`);
  const data = await res.json();
  return data as Project[];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Google's limit is 50,000 URLs per sitemap
  // const start = id * 50000;
  // const end = start + 50000;
  // const products = await getProducts();
  const [products, projects] = await Promise.all([
    getProducts(),
    getProjects(),
  ]);
  const productSitemaps = products
    .filter((product) => !product.href.startsWith("http"))
    .map((product) => {
      return {
        url: `${BASE_URL}${product.href}`,
        lastModified: new Date(),
      };
    });

  const projectSitemaps = projects.map((project: Project) => {
    return {
      url: `${BASE_URL}/projects/${project.url}`,
      lastModified: new Date(),
    };
  });
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/services/interior`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/services/exterior`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/services/maintenance`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/contact-us`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
    },
    ...projectSitemaps,
    ...productSitemaps,
  ];
}
