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

const sideProfiles: { name: string; imgURL: string; iconURL: string; dimension: string; description: string; }[] = [
  {
    name: "Fascia",
    imgURL: `${ASSETS_URL}/websites/composite-decking/side-profiles/fascia.png`,
    iconURL: `${ASSETS_URL}/websites/composite-decking/side-profiles/fascia-icon.svg`,
    dimension: "10MM X 120MM X 2200MM",
    description: "Our FASCIA boards are installed as riser for stirs or end termination."
  },
  {
    name: "Grooved Edge Board",
    imgURL: `${ASSETS_URL}/websites/composite-decking/side-profiles/grooved-edge-board.png`,
    iconURL: `${ASSETS_URL}/websites/composite-decking/side-profiles/grooved-edge-board.svg`,
    dimension: "21MM X 140MM X 2400MM",
    description: "Our grooved edge boards are installed with our Ez-Rail Fastening System beneath the deck surface, leaving a tidy finish free of screw holes."
  },
  {
    name: "Square Edge Board",
    imgURL: `${ASSETS_URL}/websites/composite-decking/side-profiles/square-edge-board.png`,
    iconURL: `${ASSETS_URL}/websites/composite-decking/side-profiles/square-edge-board.svg`,
    dimension: "21MM X 140MM X 2400MM",
    description: "Our square edge boards are installed traditionally like wood - with decking screws."
  },
]


// fascia-icon.svg
// square-edge-board.svg
// grooved-edge-board.svg
// fascia.png
// square-edge-board.png
// grooved-edge-board.png


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
                    <p className="text-black/50 font-medium text-xs text-center">Currently Selected</p>
                  </div>
                )}

              </div>
            ))}
          </div>

        </div>

        <hr className="border border-black my-4" />

        <div className="container mx-auto sm:px-6 lg:px-8">
          <h3 className="font-medium text-center">Profiles</h3>

          <div className="space-y-4 md:grid md:grid-cols-3 md:space-y-0 md:space-x-2 mt-4">
            {sideProfiles.map((profile, index) => (
              <div key={index} className="flex flex-col gap-2 items-center justify-center border border-black p-4">
                <div>
                  <Image
                    src={profile.imgURL}
                    alt={profile.name}
                    width={500}
                    height={500}
                    priority
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-1/2 h-auto">
                  <Image
                    src={profile.iconURL}
                    alt={profile.name}
                    width={500}
                    height={500}
                    priority
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="font-medium my-4">{profile.name}</p>

                <div className="space-y-4 md:text-sm">
                  <div>
                    <p>{`Actual Dimensions:`}</p>
                    <p>{profile.dimension}</p>
                  </div>
                  <p>{profile.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>


      </div>
    </div>
  );
}

export default ColourSwatch;
