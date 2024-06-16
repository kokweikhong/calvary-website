import Image from "next/image";
import { getMosoImageUrl } from "../_lib/utils";
import { ArrowRightIcon } from "lucide-react";

const mosoXtremeLogo = getMosoImageUrl("moso-xtreme-logo.png");

const benefits: { title: string; description: string[]; image: string }[] = [
  {
    title: "Warranty",
    description: ["25 Years Warranty"],
    image: getMosoImageUrl("benefits/warranty.png"),
  },
  {
    title: "Termite Resistant",
    description: ["Class M (EN 350 / EN 117)"],
    image: getMosoImageUrl("benefits/termite-resistant.png"),
  },
  {
    title: "Slip Resistance",
    description: ["R10/R13 (CEN/TS 16165)"],
    image: getMosoImageUrl("benefits/slip-resistance.png"),
  },
  {
    title: "Sustainable",
    description: ["EN 16449", "EPD (EN 15804)"],
    image: getMosoImageUrl("benefits/sustainable.png"),
  },
  {
    title: "Fire Resistance",
    description: ["Class A (ASTM E84)", "Bfl-s1 (EN 13501-1)"],
    image: getMosoImageUrl("benefits/fire-resistance.png"),
  },
  {
    title: "Biological Durability",
    description: ["Class 1 (EN 350 / CEN/TS 15083-2)"],
    image: getMosoImageUrl("benefits/biological-durability.png"),
  },
];

const features = [
  "25 Years Warranty",
  "Carbon Storage",
  "High Fire Rating",
  "Termite Resistant",
  "Fungal Resistant",
];

const featureImages = [
  getMosoImageUrl("features/25-warranty.png"),
  getMosoImageUrl("features/carbon-storage.png"),
  getMosoImageUrl("features/class-1.png"),
  getMosoImageUrl("features/class-4.png"),
  getMosoImageUrl("features/class-a.png"),
  getMosoImageUrl("features/class-m.png"),
  getMosoImageUrl("features/epd.png"),
  getMosoImageUrl("features/stored-carbon.png"),
  getMosoImageUrl("features/technical.png"),
  getMosoImageUrl("features/technical_bfl-s1.png"),
  getMosoImageUrl("features/fsc.png"),
  getMosoImageUrl("features/breeam.png"),
];

const Features = () => {
  return (
    <div>
      <div className="bg-moso w-full py-4 flex justify-center items-center text-white">
        <h2 className="text-2xl text-center font-medium uppercase tracking-wider">
          MOSO® BAMBOO FEATURES
        </h2>
      </div>
      <div className="container-cp space-y-5 py-10">
        <p>
          {`MOSO® Bamboo stands out as a sustainable resource, offering highest durability and ecological advantages — an ideal material for crafting high-performance exterior products. Through Thermo-Density® process, it achieves enhanced hardness, stability, fire resistance, and durability, surpassing hardwood species.`}
        </p>

        <div className="flex items-center space-y-1 md:flex-row md:space-x-4">
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2">
                <ArrowRightIcon size={16} />
                <span className="text-[#805C00]">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="w-auto h-[250px] flex justify-center items-center md:w-3/4">
            <Image
              src={mosoXtremeLogo}
              alt="Moso Xtreme Logo"
              width={300}
              height={300}
              priority
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-wrap gap-2 md:gap-4 lg:gap-8 justify-center">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-4 rounded-lg flex flex-col items-center justify-center space-y-2"
              >
                <h3 className="text-sm font-bold uppercase">{benefit.title}</h3>
                <div className="w-24 h-24 relative md:w-32 md:h-32 lg:w-40 lg:h-40">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    width={150}
                    height={150}
                    priority
                    className="w-full h-full object-contain"
                  />
                </div>
                <ul className="text-xs text-center">
                  {benefit.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="py-10">
          <div className="flex items-center justify-center mb-4">
            <h3 className="text-2xl text-center font-bold uppercase border-y border-y-black py-2">
              accreditations
            </h3>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-4 lg:gap-8 justify-center">
            {featureImages.map((image, index) => (
              <div
                key={index}
                className="p-4 flex flex-col items-center space-y-2"
              >
                <div className="w-20 h-20 relative">
                  <Image
                    src={image}
                    alt={`Feature ${index}`}
                    width={300}
                    height={300}
                    priority
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
