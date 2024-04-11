"use client";

import Image from "next/image";
import { useState } from "react";

const ASSETS_URL = process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL;
const swatches: { name: string; imgURL: string; }[] = [
  { name: "Oak", imgURL: `${ASSETS_URL}/websites/composite-decking/colour-swatches/Oak.jpg` },
  { name: "Nero", imgURL: `${ASSETS_URL}/websites/composite-decking/colour-swatches/Nero.jpg` },
  { name: "Ivory", imgURL: `${ASSETS_URL}/websites/composite-decking/colour-swatches/Ivory.jpg` },
  { name: "Rum", imgURL: `${ASSETS_URL}/websites/composite-decking/colour-swatches/Rum.jpg` },
  { name: "Havana", imgURL: `${ASSETS_URL}/websites/composite-decking/colour-swatches/Havana.jpg` },
]


const ColourSwatch = () => {
  const [selectedSwatch, setSelectedSwatch] = useState<{ name: string; imgURL: string; }>(swatches[0]);

  function handleSwatchClick(swatch: { name: string; imgURL: string; }) {
    setSelectedSwatch(swatch);
  }
  return (
    <div>
      <div className="text-white bg-calvaryComposite text-center py-4">
        <h3 className="font-medium text-2xl uppercase">Colour Swatch</h3>
      </div>

      <div className="mt-4">
        <div className="container mx-auto sm:px-6 lg:px-8 w-xl md:grid md:grid-cols-2 md:gap-4">
          <div className="flex flex-col gap-2 items-center justify-center w-full h-auto mx-auto">
            <Image
              src={selectedSwatch.imgURL}
              alt={selectedSwatch.name}
              width={500}
              height={500}
              priority
              className="w-full h-full object-cover"
            />
            <p>{selectedSwatch.name}</p>
          </div>
          <div className="grid grid-cols-5 gap-4 md:grid-cols-3 md:items-center">
            {swatches.map((swatch, index) => (
              <div
                key={index}
                onClick={() => handleSwatchClick(swatch)}
                className="flex flex-col gap-1 justify-start items-center cursor-pointer relative"
              >
                <div>
                  <Image
                    src={swatch.imgURL}
                    alt={swatch.name}
                    width={500}
                    height={500}
                    priority
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm">{swatch.name}</p>

                {selectedSwatch.name === swatch.name && (
                  <div className="absolute top-0 left-0 w-full h-full bg-white/50 flex justify-center items-center">
                    <p className="text-black/50 font-medium text-sm text-center">Currently Selected</p>
                  </div>
                )}

              </div>
            ))}
          </div>

        </div>

        <hr className="border border-black my-4" />

        <div className="container mx-auto sm:px-6 lg:px-8">
          <h3 className="font-medium text-center">Profiles</h3>

        </div>


      </div>
    </div>
  );
}

export default ColourSwatch;
