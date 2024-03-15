"use client";

import Image from "next/image";

const features: { name: string; image: string }[] = [
  {
    name: "Barefoot friendly",
    image: "/accoya/Key feature/Accoya-_Barefoot friendly .svg",
  },
  {
    name: "Consistant quality throughout",
    image: "/accoya/Key feature/Accoya-_Consistant quality throughout.svg",
  },
  {
    name: "Dimensionally stable",
    image: "/accoya/Key feature/Accoya-_Dimensionally stable .svg",
  },
  {
    name: "Excellent machinability",
    image: "/accoya/Key feature/Accoya-_Excellent machinability-27.svg",
  },
  {
    name: "From sustainable sources",
    image: "/accoya/Key feature/Accoya-_From sustainable sources.svg",
  },
  {
    name: "Insect barrier",
    image: "/accoya/Key feature/Accoya-_Insect barrier.svg",
  },
  {
    name: "Naturally Beautiful wood",
    image: "/accoya/Key feature/Accoya-_Naturally Beautiful wood.svg",
  },
  {
    name: "Naturally insulating",
    image: "/accoya/Key feature/Accoya-_Naturally insulating .svg",
  },
  {
    name: "Non-toxic and recyclable",
    image: "/accoya/Key feature/Accoya-_Non-toxic and recyclable.svg",
  },
  {
    name: "Outstanding durability",
    image: "/accoya/Key feature/Accoya-_Outstanding durability.svg",
  },
  {
    name: "Perfect for Coating",
    image: "/accoya/Key feature/Accoya-_Perfect for Coating.svg",
  },
  {
    name: "Retained strength and hardness",
    image: "/accoya/Key feature/Accoya-_Retained strength and hardness.svg",
  },
];

const Features = () => {
  return (
    <div className="bg-[#FAF8F0] py-4">
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
