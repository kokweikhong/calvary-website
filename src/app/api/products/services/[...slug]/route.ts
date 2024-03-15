import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import { Product } from "@/interfaces/product";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string[] } }
) {
  const file = await fs.readFile(process.cwd() + "/src/data/products.json", "utf-8");
  const data: Product[] = JSON.parse(file);
  const products = data.filter((product) => product.services.some((service) => params.slug.includes(service)));
  return NextResponse.json(products);
}
