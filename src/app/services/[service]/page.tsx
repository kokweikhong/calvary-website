"use client";

import ClientsSlider from "@/components/ClientsSlider";
import OurTeam from "@/components/OurTeam";
import ProductCard from "@/components/ProductCard";
import ServiceHero from "@/components/ServiceHero";
import ServiceProductSlider from "@/components/ServiceProductSlider";
import ServiceProjects from "@/components/ServiceProjects";
import { Product } from "@/interfaces/product";
import { useQuery } from "@tanstack/react-query";
import { use } from "react";

async function getProductsByService(service: string) {
  const res = await fetch(`/api/products/services/${service}`);
  const data: Product[] = await res.json();
  return data;
}

const serviceCategories = {
  interior: ["Kandinsky", "Oak", "Timberwise", "Solid Wood", "Teak", "Walnut"],
  exterior: ["Accoya®", "Oak", "Bamboo", "Solid Wood", "Teak", "Thermal Wood"],
  maintenance: ["OSMO®", "Timber coating", "Sand and Vanish", "Silverwood"],
};

export default function Page({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = use(params);
  const { data: products, isLoading } = useQuery({
    queryKey: ["service", service],
    queryFn: () => getProductsByService(service),
    enabled: !!service,
  });

  const categories =
    serviceCategories[service as keyof typeof serviceCategories];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ServiceHero service={service} />

      <ServiceProductSlider products={categories} />

      <ClientsSlider backgroundColor="white" iconColor="black" />

      <div
        id="service-products"
        className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-8"
      >
        <div className="grid grid-cols-12 gap-6">
          {products.map((product) => {
            return (
              <div
                key={product.name}
                className="lg:col-span-4 md:col-span-6 col-span-full h-full"
              >
                <ProductCard data={product} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <ServiceProjects service={service} />
      </div>

      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <OurTeam />
      </div>
    </div>
  );
}
