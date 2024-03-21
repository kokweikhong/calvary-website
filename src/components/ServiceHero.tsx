"use client";

import myImageLoader from "@/lib/imageLoader";
import Image from "next/image";
import { Exterior, Interior, Maintenance } from "./svg/services";
import { serviceHeroContent } from "@/constants/service-hero-contents";

const ServiceHero = ({ service }: { service: string }) => {
  const serviceContent =
    serviceHeroContent[service as keyof typeof serviceHeroContent];

  return (
    <div className="h-screen relative">
      <div className="relative h-full w-full">
        <div className="w-full h-full">
          <Image
            loader={myImageLoader}
            src={serviceContent.image}
            alt={`${service} hero`}
            width={500}
            height={500}
            priority
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute w-full h-full bg-black/70 top-0 left-0"></div>
      </div>

      <div className="h-full absolute top-0 left-1/2 -translate-x-1/2 text-white flex flex-col items-center justify-center w-1/2 sm:w-1/2 mx-auto z-10 text-center">
        <div>
          {service.toLowerCase() === "interior" ? (
            <Interior />
          ) : service.toLowerCase() === "exterior" ? (
            <Exterior />
          ) : (
            <Maintenance />
          )}
        </div>
        <h1 className="text-4xl mt-4">{serviceContent.title}</h1>
        <p className="my-[30px]">{serviceContent.description}</p>
        <div className="flex flex-col">
          <a
            href="#service-products"
            className="text-white border border-white px-4 py-2 mt-4 hover:bg-white hover:text-black transition-all"
          >
            {serviceContent.buttonText}
          </a>
          <span>{serviceContent.buttonSubText}</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
