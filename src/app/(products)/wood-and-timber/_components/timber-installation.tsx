import { cn } from "@/lib/utils";
import Image from "next/image";

const ASSETS_URL = process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL;

const installationIcons: { name: string; img: string }[] = [
  {
    name: "Fences",
    img: `${ASSETS_URL}/websites/wood-and-timber/timber-installation-icons/fences.jpg`,
  },
  {
    name: "Trellis",
    img: `${ASSETS_URL}/websites/wood-and-timber/timber-installation-icons/trellis.jpg`,
  },
  {
    name: "Decking",
    img: `${ASSETS_URL}/websites/wood-and-timber/timber-installation-icons/decking.jpg`,
  },
  {
    name: "Stairs",
    img: `${ASSETS_URL}/websites/wood-and-timber/timber-installation-icons/stairs.jpg`,
  },
];

const installationAreas: { name: string; img: string; desc: string }[] = [
  {
    name: "planter box",
    img: `${ASSETS_URL}/websites/wood-and-timber/planter-box.jpeg`,
    desc: `It is very common for our clients to install timber decking on their planter boxes to extend their balconies.`,
  },
  {
    name: "trellis and benches",
    img: `${ASSETS_URL}/websites/wood-and-timber/trellis-and-benches.jpeg`,
    desc: `Wood trellis and benches complement each other and creates a natural landscape in the outdoor area.`,
  },
  {
    name: "balcony area",
    img: `${ASSETS_URL}/websites/wood-and-timber/balcony-area.jpg`,
    desc: `Wood Decks and plants complement each other and creates a natural landscape in the balcony area.`,
  },
  {
    name: "pool decking area",
    img: `${ASSETS_URL}/websites/wood-and-timber/pool-decking-area.jpg`,
    desc: `Natural wood has anti-slipping properties which provides a good base for pool areas.`,
  },
  {
    name: "roof area",
    img: `${ASSETS_URL}/websites/wood-and-timber/roof-area.jpeg`,
    desc: `Commercial properties normally convert their roof area into a resting lounge and wood decking is normally the preferred choice as it helps to create a natural landscape for people to relax.`,
  },
];

const TimberInstallation = () => {
  return (
    <div className="container-cp pt-4 pb-8">
      <div>
        <h2 className="text-2xl font-semibold font-montserrat text-center mt-10">
          Where Are Timber Decking Installed?
        </h2>
        <p className="text-center text-gray-600 font-light font-montserrat text-lg mt-2">
          Explore Our Popular Timber Installations.
        </p>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {installationIcons.map((icon, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-24 h-24 relative">
                  <Image
                    src={icon.img}
                    alt="icon"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <p className="text-center text-gray-600 font-light font-montserrat text-lg mt-2">
                  {icon.name}
                </p>
              </div>
            ))}
          </div>
          <div>
            {installationAreas.map((area, index) => (
              <div
                key={index}
                className={cn(
                  "flex flex-col items-center mt-10 md:grid md:grid-rows-[50px_1fr]",
                  "md:grid-cols-2 md:gap-4 md:items-start",
                )}
              >
                <div className="w-full h-96 relative md:row-span-full">
                  <Image
                    src={area.img}
                    alt="icon"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3
                  className={cn(
                    "uppercase text-2xl font-semibold font-montserrat text-center mt-2",
                    "md:text-left",
                  )}
                >
                  {area.name}
                </h3>
                <p
                  className={cn(
                    "text-center text-gray-600 font-light font-montserrat text-lg mt-2",
                    "md:text-left",
                  )}
                >
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimberInstallation;
