import Link from "next/link";
import Image from "next/image";
import FeatureWeathering from "./FeatureWeathering";
import { getWebsiteAssetsURLEnv } from "@/lib/env";

const ASSETS_URL = getWebsiteAssetsURLEnv();

type Feature = {
  title: string;
  description: string[];
  image: string;
};

const features: Feature[] = [
  {
    title: "Termite Resistance",
    description: ["DC D (EN117)", "Class 1 (AS 5604)"],
    image:
      ASSETS_URL + "/websites/products/dasso/benefits/Termite%20Resistance.svg",
  },
  {
    title: "Biological Durability",
    description: ["Class 1 (EN 350:2016)"],
    image:
      ASSETS_URL +
      "/websites/products/dasso/benefits/Biological%20durability.svg",
  },
  {
    title: "Carbon Footprint",
    description: ["-2.1 KG CO2 EQ"],
    image:
      ASSETS_URL + "/websites/products/dasso/benefits/Carbon%20footprint.svg",
  },
  {
    title: "Fire Resistance",
    description: ["B, s1, d0 (EN 13501-1)"],
    image:
      ASSETS_URL + "/websites/products/dasso/benefits/Fire%20Resistance.svg",
  },
  {
    title: "Mould Resistance",
    description: ["Class 0 (EN ISO 846)"],
    image:
      ASSETS_URL + "/websites/products/dasso/benefits/Mould%20Resistance.svg",
  },
  {
    title: "Release of Formaldehyde",
    description: ["E1 (0.17mg/L) (GB/T17657-2013)"],
    image:
      ASSETS_URL +
      "/websites/products/dasso/benefits/Release%20of%20formaldehyde.svg",
  },
];

const warrantySvg = ASSETS_URL + "/websites/products/dasso/warrantry.svg";

type Application = {
  name: string;
  description: string;
  icon: string;
  image: string;
};

const applications: Application[] = [
  {
    name: "Decking",
    description: "Superior choice for all exterior decking applications",
    icon: ASSETS_URL + "/websites/products/dasso/decking/icon-decking.svg",
    image: ASSETS_URL + "/websites/products/dasso/decking/bg-decking2.jpg",
  },
  {
    name: "Cladding",
    description: "Best for commercial exterior cladding",
    icon: ASSETS_URL + "/websites/products/dasso/cladding/icon-cladding.svg",
    image: ASSETS_URL + "/websites/products/dasso/cladding/bg-cladding2.jpg",
  },
  {
    name: "Soffit",
    description: "Designed for interior and exterior use",
    icon: ASSETS_URL + "/websites/products/dasso/soffit/icon-soffit.svg",
    image: ASSETS_URL + "/websites/products/dasso/soffit/bg-soffit2.jpg",
  },
];

const Features = () => {
  return (
    <section>
      <div className="w-full py-4 sm:py-6 bg-dasso text-white mb-4">
        <h2 className="uppercase text-center w-full text-xl sm:text-2xl font-semibold px-4">
          dasso ctech KEY FEATURES
        </h2>
      </div>

      <div className="container-cp space-y-6 sm:space-y-8">
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          {`Dasso CTECH is a type of decking material that is made from bamboo, which is a highly sustainable and renewable resource. The material is created using a process called compression molding, which makes it highly durable and resistant to weather, mould, soft rot, and insects.`}
        </p>

        <div className="flex flex-col items-center justify-center gap-y-2">
          <Link
            href={"#"}
            className="bg-dasso text-white uppercase font-medium rounded-lg py-2.5 px-6 hover:bg-dasso/90 hover:shadow-lg transition-all duration-200 text-sm sm:text-base"
          >
            Check out dasso ctech
          </Link>
          <span className="text-xs sm:text-sm text-dasso uppercase font-medium">
            dasso ctech products
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-y-3 sm:gap-y-4 p-3 sm:p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col items-center gap-y-2">
                <h4 className="text-sm sm:text-base font-semibold">
                  {feature.title}
                </h4>
                <ul className="flex flex-col gap-y-1 list-disc">
                  {feature.description.map((desc, index) => (
                    <li
                      key={index}
                      className="text-xs sm:text-sm text-gray-700 list-inside"
                    >
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-dasso text-white py-8 sm:py-12 mt-4">
        <div className="container-cp space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-6 items-center justify-center">
            <div className="shrink-0">
              <Image
                src={warrantySvg}
                alt={"warranty"}
                width={96}
                height={96}
                className="w-20 h-20 sm:w-24 sm:h-24"
              />
            </div>
            <div className="flex flex-col gap-y-2 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-semibold">Warranty</h3>
              <p className="text-sm sm:text-base">
                25 years for Commercial and residential
              </p>
            </div>
          </div>
          <p className="text-sm sm:text-base leading-relaxed">
            {`Our Dasso CTECH decking products come with a 25-year warranty that covers defects in manufacturing, such as cracking, splitting, warping, and rotting. While we are confident in the superior performance of our decking products, we understand that unexpected issues can arise. We offer this warranty to guarantee our commitment to providing a high-quality product. If you have any questions about our warranty, please don't hesitate to contact us.`}
          </p>
        </div>
      </div>

      <div className="container-cp grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
        {applications.map((application, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-full aspect-video">
              <Image
                src={application.image}
                alt={application.name}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-5 space-y-3">
              <div className="flex items-center gap-x-3 sm:gap-x-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0">
                  <Image
                    src={application.icon}
                    alt={application.name}
                    width={56}
                    height={56}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">
                  {application.name}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600">
                {application.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <FeatureWeathering />
    </section>
  );
};

export default Features;
