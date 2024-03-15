"use client";

import myImageLoader from "@/lib/imageLoader";
import Image from "next/image";
import { Exterior, Interior, Maintenance } from "./svg/services";

type ServiceHeroContent = {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  buttonText: string;
  buttonSubText: string;
};

type ServiceHeroProps = {
  interior: ServiceHeroContent;
  exterior: ServiceHeroContent;
  maintenance: ServiceHeroContent;
};

const serviceHeroContent: ServiceHeroProps = {
  interior: {
    title: "Interior",
    description:
      "Explore our range of premium engineered flooring and timber, ideal for exceptional interior design and structure.",
    image: "websites/services/interior-hero.jpg",
    icon: <Interior />,
    buttonText: "Explore Interior",
    buttonSubText: "Engineered Wood | Solid Wood",
  },
  exterior: {
    title: "Exterior",
    description:
      "Explore our industry-grade sustainable materials: Accoya® and Bamboo, perfect for diverse architectural needs.",
    image: "websites/services/exterior-hero.jpg",
    icon: <Exterior />,
    buttonText: "Explore Exterior",
    buttonSubText: "Accoya® | MOSO® | Timber",
  },
  maintenance: {
    title: "Maintenance",
    description:
      "Revitalise your timber: Discover treatments, restoration, and dedicated wood experts for lasting transformations.",
    image: "websites/services/maintenance-hero.jpg",
    icon: <Maintenance />,
    buttonText: "Explore Maintenance",
    buttonSubText: "OSMO® | Silverwood ",
  },
};

const ServiceHero = ({ service }: { service: string }) => {
  const doSpaceEndpoint = process.env.DO_SPACES_ENDPOINT + "/websites";
  const serviceContent = serviceHeroContent[service as keyof ServiceHeroProps];

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
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute w-full h-full bg-black/70 top-0 left-0"></div>
      </div>

      <div className="h-full absolute top-0 left-1/2 -translate-x-1/2 text-white flex flex-col items-center justify-center w-1/2 sm:w-1/2 mx-auto z-10 text-center">
        <div>{serviceContent.icon}</div>
        <h1 className="text-4xl mt-4">{serviceContent.title}</h1>
        <p className="my-[30px]">{serviceContent.description}</p>
        <div className="flex flex-col">
          <a
            href=""
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
