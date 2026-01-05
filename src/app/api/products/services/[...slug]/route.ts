import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import { Product } from "@/interfaces/product";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  const { slug } = await params;
  console.log("Service Slug Params:", slug);
  const country = process.env.NEXT_PUBLIC_COUNTRY;
  const countryParam = country === "Singapore" ? "sg" : "my";
  const file = await fs.readFile(
    process.cwd() + "/src/data/products.json",
    "utf-8"
  );
  const data: Product[] = JSON.parse(file);
  // Filter products by services
  const products = data.filter((product) => product.services.includes(slug[0]));

  const filteredProducts = products.filter((product) =>
    product.countries.includes(countryParam)
  );

  return NextResponse.json(filteredProducts);
}
