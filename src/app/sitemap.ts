import { Product } from "@/interfaces/product";
import { MetadataRoute } from "next";

const COUNTRY = process.env.NEXT_PUBLIC_COUNTRY;

const BASE_URL =
  COUNTRY === "Singapore"
    ? "https://calvarycarpentry.com"
    : "https://calvarycarpentry.com";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products");
  return (await res.json()) as Product[];
}

export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  // Google's limit is 50,000 URLs per sitemap
  // const start = id * 50000;
  // const end = start + 50000;
  const products = await getProducts();
  const productSitemaps = products
    .filter((product) => !product.href.startsWith("http"))
    .map((product) => {
      return {
        url: `${BASE_URL}${product.href}`,
        lastModified: new Date(),
      };
    });
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/projects`,
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
    ...productSitemaps,
  ];
}
