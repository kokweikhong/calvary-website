"use client";

import Image from "next/image";
import { useState } from "react";

const ASSETS_URL = process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL;
const swatches: { name: string; imgURL: string }[] = [
  {
    name: "Oak",
    imgURL: `${ASSETS_URL}/websites/composite-decking/colour-swatches/Oak.jpg`,
  },
  {
    name: "Nero",
    imgURL: `${ASSETS_URL}/websites/composite-decking/colour-swatches/Nero.jpg`,
  },
  {
    name: "Ivory",
    imgURL: `${ASSETS_URL}/websites/composite-decking/colour-swatches/Ivory.jpg`,
  },
  {
    name: "Rum",
    imgURL: `${ASSETS_URL}/websites/composite-decking/colour-swatches/Rum.jpg`,
  },
  {
    name: "Havana",
    imgURL: `${ASSETS_URL}/websites/composite-decking/colour-swatches/Havana.jpg`,
  },
];

const sideProfiles: {
  name: string;
  imgURL: string;
  iconURL: string;
  dimension: string;
  description: string;
}[] = [
  {
    name: "Fascia",
    imgURL: `${ASSETS_URL}/websites/composite-decking/side-profiles/fascia.png`,
    iconURL: `${ASSETS_URL}/websites/composite-decking/side-profiles/fascia-icon.svg`,
    dimension: "10MM X 120MM X 2200MM",
    description:
      "Our FASCIA boards are installed as riser for stirs or end termination.",
  },
  {
    name: "Grooved Edge Board",
    imgURL: `${ASSETS_URL}/websites/composite-decking/side-profiles/grooved-edge-board.png`,
    iconURL: `${ASSETS_URL}/websites/composite-decking/side-profiles/grooved-edge-board.svg`,
    dimension: "21MM X 140MM X 2400MM",
    description:
      "Our grooved edge boards are installed with our Ez-Rail Fastening System beneath the deck surface, leaving a tidy finish free of screw holes.",
  },
  {
    name: "Square Edge Board",
    imgURL: `${ASSETS_URL}/websites/composite-decking/side-profiles/square-edge-board.png`,
    iconURL: `${ASSETS_URL}/websites/composite-decking/side-profiles/square-edge-board.svg`,
    dimension: "21MM X 140MM X 2400MM",
    description:
      "Our square edge boards are installed traditionally like wood - with decking screws.",
  },
];

// fascia-icon.svg
// square-edge-board.svg
// grooved-edge-board.svg
// fascia.png
// square-edge-board.png
// grooved-edge-board.png

const ColourSwatch = () => {
  const [selectedSwatch, setSelectedSwatch] = useState<{
    name: string;
    imgURL: string;
  }>(swatches[0]);

  function handleSwatchClick(swatch: { name: string; imgURL: string }) {
    setSelectedSwatch(swatch);
  }
  return (
    <div>
      <div className="text-white bg-calvarycomposite text-center py-6">
        <h3 className="font-medium text-xl sm:text-2xl uppercase">
          Colour Swatch
        </h3>
      </div>

      <div className="mt-8 sm:mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="flex flex-col gap-3 items-center justify-center w-full h-auto">
              <div className="w-full aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={selectedSwatch.imgURL}
                  alt={selectedSwatch.name}
                  width={600}
                  height={600}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg font-medium">{selectedSwatch.name}</p>
            </div>
            <div className="grid grid-cols-3 gap-3 sm:gap-4 items-start">
              {swatches.map((swatch, index) => (
                <div
                  key={index}
                  onClick={() => handleSwatchClick(swatch)}
                  className="flex flex-col gap-2 justify-start items-center cursor-pointer relative group hover:scale-105 transition-transform duration-200"
                >
                  <div className="w-full aspect-square rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={swatch.imgURL}
                      alt={swatch.name}
                      width={200}
                      height={200}
                      priority
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-center">
                    {swatch.name}
                  </p>

                  {selectedSwatch.name === swatch.name && (
                    <div className="absolute top-0 left-0 w-full h-full bg-calvaryComposite/80 flex justify-center items-center rounded-lg">
                      <p className="text-white font-medium text-xs sm:text-sm text-center px-2">
                        Selected
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-t-2 border-gray-300 my-8 sm:my-12" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-medium text-xl sm:text-2xl text-center mb-6 sm:mb-8">
            Profiles
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sideProfiles.map((profile, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 items-center justify-start border-2 border-gray-200 p-4 sm:p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 bg-white"
              >
                <div className="w-full">
                  <Image
                    src={profile.imgURL}
                    alt={profile.name}
                    width={400}
                    height={300}
                    priority
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div className="w-1/2 h-auto">
                  <Image
                    src={profile.iconURL}
                    alt={profile.name}
                    width={150}
                    height={150}
                    priority
                    className="w-full h-full object-contain"
                  />
                </div>

                <p className="font-semibold text-base sm:text-lg text-center">
                  {profile.name}
                </p>

                <div className="space-y-3 text-sm sm:text-base text-center">
                  <div>
                    <p className="font-medium text-gray-700">{`Actual Dimensions:`}</p>
                    <p className="text-gray-600">{profile.dimension}</p>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {profile.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColourSwatch;
