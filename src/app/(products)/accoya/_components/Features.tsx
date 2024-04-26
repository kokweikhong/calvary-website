"use client";

import Image from "next/image";

const ASSETS_URL = process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL;

const features: { name: string; image: string }[] = [
  {
    name: "Barefoot friendly",
    image: `${ASSETS_URL}/websites/accoya/key-features/Accoya-_Barefoot%20friendly%20.svg`,
  },
  {
    name: "Consistant quality throughout",
    image: `${ASSETS_URL}/websites/accoya/key-features/Accoya-_Consistant%20quality%20throughout.svg`,
  },
  {
    name: "Dimensionally stable",
    image: `${ASSETS_URL}/websites/accoya/key-features/Accoya-_Dimensionally%20stable%20.svg`,
  },
  {
    name: "Excellent machinability",
    image: `${ASSETS_URL}/websites/accoya/key-features/Accoya-_Excellent%20machinability-27.svg`,
  },
  {
    name: "From sustainable sources",
    image: `${ASSETS_URL}/websites/accoya/key-features/Accoya-_From%20sustainable%20sources.svg`,
  },
  {
    name: "Insect barrier",
    image: `${ASSETS_URL}/websites/accoya/key-features/Accoya-_Insect%20barrier.svg`,
  },
  {
    name: "Naturally Beautiful wood",
    image: `${ASSETS_URL}/websites/accoya/key-features/Accoya-_Naturally%20Beautiful%20wood.svg`,
  },
  {
    name: "Naturally insulating",
    image: `${ASSETS_URL}/websites/accoya/key-features/Accoya-_Naturally%20Beautiful%20wood.svg`,
  },
  {
    name: "Non-toxic and recyclable",
    image: `${ASSETS_URL}/websites/accoya/key-features/Accoya-_Non-toxic%20and%20recyclable.svg`,
  },
  {
    name: "Outstanding durability",
    image: `${ASSETS_URL}/websites/accoya/key-features/Accoya-_Outstanding%20durability.svg`,
  },
  {
    name: "Perfect for Coating",
    image: `${ASSETS_URL}/websites/accoya/key-features/Accoya-_Perfect%20for%20Coating.svg`,
  },
  {
    name: "Retained strength and hardness",
    image: `${ASSETS_URL}/websites/accoya/key-features/Accoya-_Retained%20strength%20and%20hardness.svg`,
  },
];

const Features = () => {
  return (
    <div id="accoya-features" className="bg-[#FAF8F0] py-4">
      <div className="bg-accoya font-medium text-white py-4 text-center tracking-wider">
        <h2>ACCOYA® WOOD KEY FEATURES</h2>
      </div>
      <p className="container-cp mt-4">
        A sustainably consistent supply of durable, non-toxic, and dimensionally
        stable wood makes it an ideal material for manufacturing high
        performance exterior timber products such as wood siding, outside
        decking, cladding, landscape timbers and joinery.
      </p>
      <div className="flex flex-col gap-y-2 mt-4 text-center justify-center items-center">
        <button
          className="bg-accoya text-white rounded-lg font-semibold uppercase px-4 py-2"
          onClick={() => {
            document.getElementById("#colour-swatches")?.scrollIntoView();
          }}
        >
          Check out the colours
        </button>
        <span className="text-accoya uppercase">accoya products</span>
      </div>
      <div className="container-cp space-y-3 mt-4 sm:grid sm:grid-cols-3 lg:grid-cols-4">
        {features.map((feature) => (
          <div key={feature.name} className="flex gap-x-2 items-center">
            <Image
              src={feature.image}
              alt={feature.name}
              width={50}
              height={50}
            />
            <span className="text-sm uppercase">{feature.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
