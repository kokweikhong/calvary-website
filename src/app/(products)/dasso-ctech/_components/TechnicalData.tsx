import Image from "next/image";
import { getWebsiteAssetsURLEnv } from "@/lib/env";

const ASSETS_URL = getWebsiteAssetsURLEnv();

type TechnicalData = {
  title: string;
  descriptions: string[];
};

const technicalData: TechnicalData[] = [
  {
    title: "Fabricated from non-combustible materials",
    descriptions: ["Bamboo 85%", "Phenolic Resin: 15%"],
  },
  {
    title: "Size",
    descriptions: [
      "Thickness: 20mm ",
      "Width: 137 / 178",
      "Length: 1850 / 3050",
    ],
  },
  {
    title: "Tolerance",
    descriptions: [
      "Length: ± 0,5mm ",
      "Width: ± 0,2mm ",
      "Thickness: ± 0,15mm",
      "T&G: ± 0,1mm",
    ],
  },
  {
    title: "Dimensional stability",
    descriptions: [" EN 15534-1", "Thickness: 4%", "Wdith: 0.6%", "Length: 0%"],
  },
  {
    title: "Density",
    descriptions: ["1200 kg/m3"],
  },
  {
    title: "Stiffness MOE",
    descriptions: ["16700 N/mm2"],
  },
  {
    title: "Moisture content",
    descriptions: ["8…12 %"],
  },
  {
    title: "Hardness",
    descriptions: [
      "Janka hardness: 17660",
      "DIN EN 1534: 79.2 N/mm2",
      "Brinell > 9.5kg/mm2 (EN 1534)",
    ],
  },
  {
    title: "Slip resistance (flat)",
    descriptions: [],
  },
  {
    title: "Slip resistance (reed)",
    descriptions: ["DIN 51097: 19° - B", "DIN 51097: 22° - B"],
  },
  {
    title: "Reaction to fire",
    descriptions: ["B, s1, d0 (EN 13501-1)", "Class A (ASTM E84)"],
  },
  {
    title: "Static bending strength",
    descriptions: ["73.8N/ mm2 (DIN EN 408)"],
  },
  {
    title: "Warping",
    descriptions: ["≤ 6mm and quantity is less than 10%"],
  },
  {
    title: "Bowing",
    descriptions: ["≤ 1mm along the length of the panels"],
  },
  {
    title: "Bamboo Nodes",
    descriptions: ["Nodes are separated its width ≤ 10mm"],
  },
  {
    title: "Height difference",
    descriptions: ["≤ 0.5mm"],
  },
];

const dassoDeckingBrochure =
  ASSETS_URL + "/websites/products/dasso/dassoctech%20decking.pdf";
const dassoWarrantyBrochure =
  ASSETS_URL + "/websites/products/dasso/8Warranty_dassoXTR&dassoCTECH).pdf";

const dassoPDFSvg = ASSETS_URL + "/websites/products/dasso/dassoPDF.svg";

const TechnicalData = () => {
  return (
    <section className="!mt-0">
      <div className="py-4 sm:py-6 bg-dasso text-white">
        <h2 className="text-xl sm:text-2xl font-semibold text-center uppercase px-4">
          Download
        </h2>
      </div>

      <div className="container-cp py-6 sm:py-8">
        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          <a
            href={dassoDeckingBrochure}
            target="_blank"
            className="group flex items-center justify-between gap-x-3 py-3 px-4 sm:px-6 border-2 border-gray-200 rounded-lg hover:border-dasso hover:shadow-lg transition-all duration-200"
          >
            <span className="uppercase text-sm sm:text-base font-medium group-hover:text-dasso transition-colors">{`dasso® ctech decking Brochure`}</span>
            <Image
              src={dassoPDFSvg}
              alt="PDF download"
              width={24}
              height={24}
              className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
            />
          </a>

          <a
            href={dassoWarrantyBrochure}
            target="_blank"
            className="group flex items-center justify-between gap-x-3 py-3 px-4 sm:px-6 border-2 border-gray-200 rounded-lg hover:border-dasso hover:shadow-lg transition-all duration-200"
          >
            <span className="uppercase text-sm sm:text-base font-medium group-hover:text-dasso transition-colors">{`dasso® ctech warranty Brochure`}</span>
            <Image
              src={dassoPDFSvg}
              alt="PDF download"
              width={24}
              height={24}
              className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
            />
          </a>
        </div>
      </div>

      <div className="py-4 sm:py-6 bg-dasso text-white">
        <h2 className="text-xl sm:text-2xl font-semibold text-center uppercase px-4">
          Technical Data
        </h2>
      </div>
      <div className="container-cp py-6 sm:py-8">
        <div>
          <ul className="space-y-4 sm:space-y-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
            {technicalData.map((data, index) => (
              <li key={index} className="py-2">
                <h3 className="text-lg font-medium">{data.title}</h3>
                <ul className="list-disc">
                  {data.descriptions.map((description, index) => (
                    <li key={index} className="pl-4 list-inside">
                      {description}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TechnicalData;
