"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import SelectedColourSwatch from "./SelectedColourSwatch";

type ColourSwatch = {
  name: string;
  image: string;
  active: boolean;
  color: "white" | "black";
};

const colourSwatches: ColourSwatch[] = [
  {
    name: "903 Basalt Grey",
    image: "/accoya/Accoya Color Swatch/Basalt Grey 903.jpg",
    active: true,
    color: "black",
  },
  {
    name: "Chacoya",
    image: "/accoya/Accoya Color Swatch/chacoya.jpg",
    active: false,
    color: "white",
  },
  {
    name: "712 Ebony",
    image: "/accoya/Accoya Color Swatch/Ebony712.jpg",
    active: false,
    color: "white",
  },
  {
    name: "Ember",
    image: "/accoya/Accoya Color Swatch/Ember.jpg",
    active: false,
    color: "white",
  },
  {
    name: "927 Fir Green",
    image: "/accoya/Accoya Color Swatch/Fir Green 927.jpg",
    active: false,
    color: "white",
  },
  {
    name: "Glazed",
    image: "/accoya/Accoya Color Swatch/Glazed.jpg",
    active: false,
    color: "black",
  },
  {
    name: "703 Mahogany",
    image: "/accoya/Accoya Color Swatch/Mahogany 703.jpg",
    active: false,
    color: "white",
  },
  {
    name: "Natural",
    image: "/accoya/Accoya Color Swatch/Natural.jpg",
    active: false,
    color: "black",
  },
  {
    name: "706 Oak",
    image: "/accoya/Accoya Color Swatch/Oak 706.jpg",
    active: false,
    color: "white",
  },
  {
    name: "905 Patina",
    image: "/accoya/Accoya Color Swatch/Patina 905.jpg",
    active: false,
    color: "white",
  },
  {
    name: "907 Quartz Grey",
    image: "/accoya/Accoya Color Swatch/Quartz Grey 907.jpg",
    active: false,
    color: "white",
  },
  {
    name: "727 Rosewood",
    image: "/accoya/Accoya Color Swatch/Rosewood 727.jpg",
    active: false,
    color: "white",
  },
  {
    name: "Silverwood",
    image: "/accoya/Accoya Color Swatch/Silverwood.jpg",
    active: false,
    color: "black",
  },
  {
    name: "708 Teak",
    image: "/accoya/Accoya Color Swatch/Teak 708.jpg",
    active: false,
    color: "white",
  },
  {
    name: "707 Walnut",
    image: "/accoya/Accoya Color Swatch/Walnut 707.jpg",
    active: false,
    color: "white",
  },
];

const ColourSwatches = () => {
  const [selectedColourSwatch, setSelectedColourSwatch] =
    useState<ColourSwatch>(colourSwatches[0]);

  return (
    <section id="#colour-swatches" className="bg-[#FAF8F0] py-4">
      <div className="w-full bg-accoya text-white py-4 px-2">
        <h2 className="text-xl text-center uppercase">
          ACCOYA® Colour swatches
        </h2>
      </div>
      <div className="p-4 md:grid md:grid-cols-2 md:items-center md:space-x-4">
        <SelectedColourSwatch {...selectedColourSwatch} />
        <div className="grid grid-cols-4 gap-2 mt-4 md:grid-cols-5">
          {colourSwatches.map((colourSwatch, index) => (
            <div
              key={`colour-swatch-${index}`}
              onClick={() => {
                colourSwatches.map((colourSwatch) => {
                  colourSwatch.active = false;
                });
                colourSwatch.active = true;
                setSelectedColourSwatch(colourSwatch);
              }}
              className={cn("text-center cursor-pointer relative")}
            >
              {colourSwatch.active && (
                <>
                  <div className="absolute top-0 left-0 z-20 w-full h-full backdrop-blur-[1px] bg-white/30"></div>
                  <div className="absolute top-0 left-0 z-30 w-full h-full flex items-center justify-center">
                    <span className="text-white uppercase font-semibold">
                      selected
                    </span>
                  </div>
                </>
              )}
              <AspectRatio
                ratio={1}
              // className="w-full h-48 relative"
              >
                <Image
                  src={colourSwatch.image}
                  alt={colourSwatch.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
              <span className="text-[10px] text-center">
                {colourSwatch.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-y-2 text-center items-center">
        <a
          href="https://wa.me/6587767837"
          target="_blank"
          className="bg-accoya text-white uppercase rounded-lg font-semibold px-4 py-2"
        >
          Get a free timber consultation
        </a>
        <span className="uppercase text-accoya text-sm">
          colour Customisation available
        </span>
      </div>
    </section>
  );
};

export default ColourSwatches;
