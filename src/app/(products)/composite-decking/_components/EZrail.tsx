import Link from "next/link";
import Image from "next/image";
import { getCountryEnv } from "@/lib/env";

const ASSETS_URL = process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL;
const ezrailBannerURL = `${ASSETS_URL}/websites/composite-decking/ezrail-banner.png`;
const country = getCountryEnv();

const features: { name: string; iconURL: string }[] = [
  // { name: "", iconURL: `${ASSETS_URL}/websites/composite-decking/feature-icons/easy-to-maintain.svg` },
  {
    name: "Hidden Joist",
    iconURL: `${ASSETS_URL}/websites/composite-decking/feature-icons/hidden-joist.svg`,
  },
  {
    name: "Low Thermal Conductivity",
    iconURL: `${ASSETS_URL}/websites/composite-decking/feature-icons/low-thermal-conductivity.svg`,
  },
  {
    name: "R11 Anti-Slip",
    iconURL: `${ASSETS_URL}/websites/composite-decking/feature-icons/r11-anti-slip.svg`,
  },
  {
    name: "Fire rated (Class 2)",
    iconURL: `${ASSETS_URL}/websites/composite-decking/feature-icons/fire-rated-class-2.svg`,
  },
  {
    name: "SGS Certified",
    iconURL: `${ASSETS_URL}/websites/composite-decking/feature-icons/sgs-certified.svg`,
  },
  {
    name: "Replaceable",
    iconURL: `${ASSETS_URL}/websites/composite-decking/feature-icons/replaceable.svg`,
  },
  {
    name: "EZRAIL Compatible",
    iconURL: `${ASSETS_URL}/websites/composite-decking/feature-icons/compatible.svg`,
  },
  {
    name: "Easy Removal",
    iconURL: `${ASSETS_URL}/websites/composite-decking/feature-icons/removal.svg`,
  },
  {
    name: "10 Years Warrantry",
    iconURL: `${ASSETS_URL}/websites/composite-decking/feature-icons/10_years_limited_warranty.svg`,
  },
  {
    name: "STATS",
    iconURL: `${ASSETS_URL}/websites/composite-decking/feature-icons/stats.svg`,
  },
  {
    name: "SGBC Certified",
    iconURL: `${ASSETS_URL}/websites/composite-decking/feature-icons/sgbc_2_ticks.svg`,
  },
];

const ezrailCompatibleURL = `${ASSETS_URL}/websites/composite-decking/feature-icons/ezrail-compatible.svg`;

const ezrailBlueIconURL = `${ASSETS_URL}/websites/composite-decking/ezrail-blue-icon.svg`;

const ezrailCompositeDissectionURL = `${ASSETS_URL}/websites/composite-decking/ezrail-calvary-composite-dissection.jpg`;

const profiles: { name: string; iconURL: string }[] = [
  {
    name: `2 x 0.5"`,
    iconURL: `${ASSETS_URL}/websites/composite-decking/profiles/40.png`,
  },
  {
    name: `2 x 1"`,
    iconURL: `${ASSETS_URL}/websites/composite-decking/profiles/50-60.png`,
  },
  {
    name: `2 x 2"`,
    iconURL: `${ASSETS_URL}/websites/composite-decking/profiles/80.png`,
  },
];

const EZRail = () => {
  return (
    <div id="explore" className="space-y-4 mt-4">
      <div className="container mx-auto sm:px-6 lg:px-8 space-y-4">
        <h2 className="text-lg font-medium text-center">
          #1 Removable Decking in Singapore
        </h2>

        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="w-full h-full">
            <iframe
              className="w-full aspect-video object-cover"
              src="https://www.youtube.com/embed/OdwhJsE-Nqo?si=BFu99M8B56jRkIjR"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <span className="capitalize text-sm">
            patented technology by calvary Carpentry
          </span>
        </div>
        <div className="space-y-4">
          <p>{`
        EZ-rail® is the #1 removable decking clip system in Singapore, 
        making future maintenance easier. 
        Paired with our wide range of decking called Calvary Composite®, 
        designed specifically for Singapore’s weather conditions.
        `}</p>

          <p>{`
        Calvary Composite® is a low-maintenance and easy-to-remove decking 
        solution that addresses the industry problem of maintenance and removability. 
        `}</p>
        </div>

        <div className="flex flex-col justify-center items-center space-y-6 sm:space-y-8">
          <div className="border-2 border-gray-800 text-center p-4 sm:p-6 rounded-xl bg-white shadow-md">
            <h3 className="font-semibold text-lg sm:text-xl">
              Decking Made Simple
            </h3>
            <h4 className="text-sm sm:text-base text-gray-600 mt-1">
              #1 Removable Decking in Singapore
            </h4>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-start space-y-2 text-center group"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
                  <Image
                    src={feature.iconURL}
                    alt={feature.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-200"
                    priority
                  />
                </div>
                {feature.name.includes("EZRAIL") ? (
                  <div className="w-full">
                    <div className="w-3/4 mx-auto">
                      <Image
                        src={ezrailCompatibleURL}
                        alt={feature.name}
                        width={80}
                        height={80}
                        priority
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    <span className="text-xs sm:text-sm mt-1 block">
                      Compatible
                    </span>
                  </div>
                ) : (
                  <span className="text-xs sm:text-sm leading-tight">
                    {feature.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-calvarycomposite py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[300px,1fr] lg:grid-cols-[350px,1fr] gap-6 md:gap-8 items-center text-center">
            {/* Icon Section */}
            <div className="flex justify-center items-center md:justify-start mx-auto">
              <div className="w-auto h-48 md:w-72 md:h-72 lg:w-80 lg:h-80">
                <Image
                  src={ezrailBlueIconURL}
                  alt="EZ-rail® Removable Decking Clip System"
                  width={350}
                  height={350}
                  priority
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-white">
                <p>{`
                  EZ-rail® removable decking clip system is compatible with 
                  Calvary Composite, Accoya Decking, and Reconstituted Composite decking.
                `}</p>
                <p className="font-medium">Click to check them out:</p>
              </div>

              {/* Links Section */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 justify-center">
                <Link
                  href={"/accoya"}
                  className="group bg-white rounded-full px-4 py-2 shadow-md hover:shadow-xl hover:scale-105 hover:bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-calvarycomposite"
                >
                  <span className="text-calvarycomposite uppercase font-semibold text-xs sm:text-sm whitespace-nowrap">
                    Accoya Decking
                  </span>
                </Link>
                <Link
                  href={"/onewood"}
                  className="group bg-white rounded-full px-4 py-2 shadow-md hover:shadow-xl hover:scale-105 hover:bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-calvarycomposite"
                >
                  <span className="text-calvarycomposite uppercase font-semibold text-xs sm:text-sm whitespace-nowrap">
                    OneWood
                  </span>
                </Link>
                {country === "Singapore" && (
                  <Link
                    href={"/dasso-ctech"}
                    className="group bg-white rounded-full px-4 py-2 shadow-md hover:shadow-xl hover:scale-105 hover:bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-calvarycomposite"
                  >
                    <span className="text-calvarycomposite uppercase font-semibold text-xs sm:text-sm whitespace-nowrap">
                      dasso Bamboo
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 sm:py-12 space-y-8 sm:space-y-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg">
            <Image
              src={ezrailCompositeDissectionURL}
              alt="EZ-rail® Removable Decking Clip System"
              width={1920}
              height={1080}
              priority
              className="w-full h-auto object-cover"
            />
          </div>
          <h3 className="font-semibold text-lg sm:text-xl md:text-2xl uppercase">
            <span className="border-b-2 border-calvarycomposite pb-2 inline-block">
              {`Ensured Flushed design for the smallest* drop`}
            </span>
          </h3>

          <div className="space-y-3 text-sm sm:text-base text-gray-700">
            <p>{`Minimum drop of 40MM* to construct:`}</p>
            <p>We have a wide range of aluminium runners.</p>
            <div className="pl-6 space-y-1">
              <p>{`- 40 MM Drop`}</p>
              <p>{`- 50 - 60 MM Drop`}</p>
              <p>{`- 80 MM Drop`}</p>
            </div>

            <p>{`
            For drops more than 100 mm, we will adjust accordingly 
            (double bracing method aluminium and pedestals if needed)
          `}</p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {profiles.map((profile, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="w-full aspect-square mb-3">
                  <Image
                    src={profile.iconURL}
                    alt={profile.name}
                    width={300}
                    height={300}
                    priority
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-center text-sm sm:text-base font-medium text-gray-800">
                  {profile.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EZRail;
