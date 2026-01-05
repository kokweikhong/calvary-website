import Image from "next/image";
import { getMosoImageUrl } from "../_lib/utils";

const co2StorageVsProduction = getMosoImageUrl("co2-storage-vs-production.png");
const co2Grafiek = getMosoImageUrl("co2-opslag-grafiek-incl-ndurance.jpg");
const mosoMaintenance = getMosoImageUrl("moso-maintenance.jpg");
const mosoWeathering = getMosoImageUrl("moso-weathering.jpg");
const mosoDryAndWetCond = getMosoImageUrl("dry-and-wet-condition.jpg");

const downloads = [
  {
    title: "MOSO® Maintenance guide",
    url: "https://assets.calvarycarpentry.com/websites/moso/downloads/MOSO%20Maintanance-sikken.pdf",
  },
  {
    title: "MOSO® warranty Brochure",
    url: "https://assets.calvarycarpentry.com/websites/moso/downloads/EN_Bamboo_Decking_warranty_LQ.pdf",
  },
  {
    title: "MOSO® Accreditations",
    url: "https://assets.calvarycarpentry.com/websites/moso/downloads/MOSO%20Xtreme%20decking-test%20result.pdf",
  },
];

const bimFiles = [
  { title: "MOSO® X-treme decking", url: "#" },
  { title: "MOSO® N-durance decking", url: "#" },
];

const TechnicalData = () => {
  return (
    <div className="pb-10">
      <div>
        <div className="bg-moso w-full py-4 flex justify-center items-center text-white">
          <h2 className="text-2xl text-center font-medium uppercase tracking-wider">
            Large CO2 storage
          </h2>
        </div>
        <div className="container-cp space-y-5 py-10">
          <p>{`MOSO® has conducted several LCA studies, including carbon footprint studies, together with Delft University of Technology (TU Delft) and NIBE (LCA experts). The 2015 LCA report, available at www.moso-bamboo.com/lca, was the first of its kind and resulted in many new findings about the carbon footprint of bamboo products. The environmental impact of MOSO® Bamboo Products, excluding the carbon sequestration effect, has also been published in 2016 and updated in 2022 in an official Environmental Product Declaration (EPD) following EN 15804 (www.moso-bamboo.com/epd).`}</p>
          <div>
            <Image
              src={co2StorageVsProduction}
              alt="CO2 Storage vs Production"
              width={1920}
              height={1080}
              priority
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <Image
              src={co2Grafiek}
              alt="CO2 Storage Graph"
              width={1920}
              height={1080}
              priority
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="bg-moso w-full py-4 flex justify-center items-center text-white">
          <h2 className="text-2xl text-center font-medium uppercase tracking-wider">
            Bamboo Behaviour
          </h2>
        </div>
        <div className="container-cp space-y-5 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center justify-center mb-4">
                <h2 className="border-y border-black py-2 px-4 text-2xl uppercase">
                  Weathering
                </h2>
              </div>
              <div>
                <Image
                  src={mosoWeathering}
                  alt="Moso Maintenance"
                  width={1920}
                  height={1080}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <h2 className="border-y border-black py-2 px-4 text-2xl uppercase">
                  Maintenance
                </h2>
              </div>
              <div>
                <Image
                  src={mosoMaintenance}
                  alt="Moso Maintenance"
                  width={1920}
                  height={1080}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-center md:col-span-full">
              Maintaining MOSO® Bamboo X-treme® Decking is similar to caring for
              other tropical woods. Water-based finish oils provide excellent
              protection. Exposure to weather elements may lead to surface
              weathering, causing greying and the appearance of
              cracks/splinters. Regular maintenance with decking finish helps
              minimise these effects.
            </p>
          </div>

          <div>
            <div className="flex items-center justify-center mb-4">
              <h2 className="border-y border-black py-2 px-4 text-2xl uppercase">
                Wet & Dry Condition
              </h2>
            </div>
            <div className="w-1/2 mx-auto">
              <Image
                src={mosoDryAndWetCond}
                alt="Moso Dry and Wet Condition"
                width={1920}
                height={1080}
                priority
                className="w-full h-full object-cover"
              />
            </div>
            <div className="py-4 space-y-4">
              <p>
                The color change in MOSO® Bamboo X-treme® from wet to dry is a
                natural characteristic of the bamboo material.
              </p>
              <p>
                When wet, it may darken temporarily due to moisture affecting
                the fibres.
              </p>
              <p>As it dries, the color lightens again.</p>
              <p>{`
                This variation is typical for bamboo and wood products and is
                not a flaw. It's a normal and expected feature of MOSO® Bamboo
                X-treme® and similar materials.
              `}</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-moso w-full py-4 flex justify-center items-center text-white">
          <h2 className="text-2xl text-center font-medium uppercase tracking-wider">
            Download
          </h2>
        </div>
        <div className="container-cp space-y-5 py-10">
          <ul className="flex flex-col space-y-2">
            {downloads.map((download, index) => (
              <li
                key={index}
                className="bg-white py-2 flex items-center space-x-2 border-b border-black uppercase font-medium"
              >
                <a href={download.url} target="_blank" rel="noreferrer">
                  {download.title}
                </a>
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <rect
                    x="0.5"
                    width="16"
                    height="16"
                    fill="url(#pattern0_3769_1137)"
                  />
                  <defs>
                    <pattern
                      id="pattern0_3769_1137"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_3769_1137"
                        transform="scale(0.01)"
                      />
                    </pattern>
                    <image
                      id="image0_3769_1137"
                      width="100"
                      height="100"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <div className="bg-moso w-full py-4 flex justify-center items-center text-white">
          <h2 className="text-2xl text-center font-medium uppercase tracking-wider">
            BIM files & Textures
          </h2>
        </div>
        <div className="container-cp space-y-5 py-10">
          <ul className="flex flex-col space-y-2">
            {bimFiles.map((download, index) => (
              <li
                key={index}
                className="bg-white py-2 flex items-center space-x-2 border-b border-black uppercase font-medium"
              >
                <a href={download.url} target="_blank" rel="noreferrer">
                  {download.title}
                </a>
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <rect
                    x="0.5"
                    width="16"
                    height="16"
                    fill="url(#pattern0_3769_1137)"
                  />
                  <defs>
                    <pattern
                      id="pattern0_3769_1137"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_3769_1137"
                        transform="scale(0.01)"
                      />
                    </pattern>
                    <image
                      id="image0_3769_1137"
                      width="100"
                      height="100"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center space-y-4">
        <a
          href="https://assets.calvarycarpentry.com/websites/moso/downloads/MOSO%20Booklet_Bamboo_Deck_CC.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-center py-2 px-4 rounded-lg bg-moso text-white font-medium flex items-center justify-between"
        >
          Explore Decking
        </a>
        <a
          href="https://assets.calvarycarpentry.com/websites/moso/downloads/MOSO%20Booklet-Cladding_CC.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-center py-2 px-4 rounded-lg bg-moso text-white font-medium flex items-center justify-between"
        >
          <span>Explore Cladding</span>
        </a>
      </div>
    </div>
  );
};

export default TechnicalData;
