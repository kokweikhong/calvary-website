"use client";

import ProductCard from "@/components/ProductCard";
import { Product } from "@/interfaces/product";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { deckingAndOutdoorDescription } from "@/constants/misc";
import { useEffect, useState } from "react";
import LoadingState from "@/components/LoadingState";

async function getProducts(): Promise<Product[]> {
  const res = await fetch("/api/products");
  const data: Product[] = await res.json();
  return data;
}

const Products = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    async function fetchProducts() {
      const data = await getProducts();
      setProducts(data);
      setIsLoading(false);
    }
    fetchProducts();
  }, []);

  if (isLoading) {
    return <LoadingState />;
  }

  if (!products) {
    return (
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 text-center mt-16">
        No products found.
      </div>
    );
  }

  return (
    <section className="section white">
      <div className="row">
        {/* Section Header */}
        <div className="relative mb-12">
          <div className="py-6 border-y-2 border-gray-200 w-full text-center relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-green-50/30 to-transparent"></div>

            <h2 className="relative text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wider text-gray-900">
              Our Products
            </h2>

            {/* Decorative Line */}
            <div className="w-24 h-1 bg-linear-to-r from-green-500 to-blue-600 mx-auto mt-4"></div>
          </div>
        </div>
        <div className="container mx-auto sm:px-6 lg:px-8 my-6">
          <h3 className="mb-4">
            Diverse Wood Selection: WPC, Sustainable Engineered Flooring,
            Natural Timber, and Treated Options -
          </h3>
          <div className="flex flex-wrap gap-4">
            <div>
              <div className="text-[#805C00] font-medium text-lg flex space-x-2 items-center">
                <ArrowLongRightIcon className="w-4 h-4" />
                <h4>Engieered Flooring</h4>
              </div>
              <p className="pl-6">KANDINSKY, KANDINSKY Lite, TimberWise</p>
            </div>
            <div>
              <div className="text-[#805C00] font-medium text-lg flex space-x-2 items-center">
                <ArrowLongRightIcon className="w-4 h-4" />
                <h4>Decking and Outdoor</h4>
              </div>
              <p className="pl-6">{deckingAndOutdoorDescription}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto sm:px-6 lg:px-8">
        <div className="row">
          <div className="grid grid-cols-12 auto-rows-fr gap-6">
            {products.map((product) => (
              <div
                key={product.title}
                className="lg:col-span-4 md:col-span-6 col-span-full h-full"
              >
                <ProductCard data={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
