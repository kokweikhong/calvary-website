import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import { Product } from "@/interfaces/product";

const country = process.env.NEXT_PUBLIC_COUNTRY || "Singapore";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  const { slug } = await params;
  const file = await fs.readFile(
    process.cwd() + "/src/data/products.json",
    "utf-8"
  );
  const data: Product[] = JSON.parse(file);
  const products = data.filter((product) =>
    product.services.some((service) => slug.includes(service))
  );
  const filteredProducts = products.filter((product) =>
    product.countries.includes(country === "Malaysia" ? "my" : "sg")
  );
  return NextResponse.json(filteredProducts);
}
