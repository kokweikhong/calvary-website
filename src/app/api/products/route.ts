import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import type { Product } from "@/interfaces/product";

export async function GET() {
  const file = await fs.readFile(process.cwd() + "/src/data/products.json", "utf-8");
  const data: Product[] = JSON.parse(file);
  const filteredData = data.filter((product) => product.countries.includes("my"));
  return NextResponse.json(filteredData);
}
