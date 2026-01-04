"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import SelectedColourSwatch from "./SelectedColourSwatch";

const ASSETS_URL = process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL;

type ColourSwatch = {
  name: string;
  image: string;
  active: boolean;
  color: "white" | "black";
};

const colourSwatches: ColourSwatch[] = [
  {
    name: "903 Basalt Grey",
    image: `${ASSETS_URL}/websites/accoya/colour-swatches/Basalt%20Grey%20903.jpg`,
    active: true,
    color: "black",
  },
  {
    name: "Chacoya",
    image: `${ASSETS_URL}/websites/accoya/colour-swatches/chacoya.jpg`,
    active: false,
    color: "white",
  },
  {
    name: "712 Ebony",
    image: `${ASSETS_URL}/websites/accoya/colour-swatches/Ebony712.jpg`,
    active: false,
    color: "white",
  },
  {
    name: "Ember",
    image: `${ASSETS_URL}/websites/accoya/colour-swatches/Ember.jpg`,
    active: false,
    color: "white",
  },
  {
    name: "927 Fir Green",
    image: `${ASSETS_URL}/websites/accoya/colour-swatches/Fir%20Green%20927.jpg`,
    active: false,
    color: "white",
  },
  {
    name: "Glazed",
    image: `${ASSETS_URL}/websites/accoya/colour-swatches/Glazed.jpg`,
    active: false,
    color: "black",
  },
  {
    name: "703 Mahogany",
    image: `${ASSETS_URL}/websites/accoya/colour-swatches/Mahogany%20703.jpg`,
    active: false,
    color: "white",
  },
  {
    name: "Natural",
    image: `${ASSETS_URL}/websites/accoya/colour-swatches/Natural.jpg`,
    active: false,
    color: "black",
  },
  {
    name: "706 Oak",
    image: `${ASSETS_URL}/websites/accoya/colour-swatches/Oak%20706.jpg`,
    active: false,
    color: "white",
  },
  {
    name: "905 Patina",
    image: `${ASSETS_URL}/websites/accoya/colour-swatches/Patina%20905.jpg`,
    active: false,
    color: "white",
  },
  {
    name: "907 Quartz Grey",
    image: `${ASSETS_URL}/websites/accoya/colour-swatches/Quartz%20Grey%20907.jpg`,
    active: false,
    color: "white",
  },
  {
    name: "727 Rosewood",
    image: `${ASSETS_URL}/websites/accoya/colour-swatches/Rosewood%20727.jpg`,
    active: false,
    color: "white",
  },
  {
    name: "Silverwood",
    image: `${ASSETS_URL}/websites/accoya/colour-swatches/Silverwood.jpg`,
    active: false,
    color: "black",
  },
  {
    name: "708 Teak",
    image: `${ASSETS_URL}/websites/accoya/colour-swatches/Teak%20708.jpg`,
    active: false,
    color: "white",
  },
  {
    name: "707 Walnut",
    image: `${ASSETS_URL}/websites/accoya/colour-swatches/Walnut%20707.jpg`,
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
              {/* need square image */}
              <div className="w-full relative rounded-lg border border-gray-300 overflow-hidden mb-2 aspect-square">
                <Image
                  src={colourSwatch.image}
                  alt={colourSwatch.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="w-full h-full object-cover"
                />
              </div>
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
