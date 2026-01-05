import Image from "next/image";
import Link from "next/link";

const ASSETS_URL = process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL;
const keyFeaturesBannerURL = `${ASSETS_URL}/websites/composite-decking/key-feature-banner.jpg`;

const features: { name: string; imgURL: string }[] = [
  {
    name: "Replaceable decking system",
    imgURL: `${ASSETS_URL}/websites/composite-decking/feature-icons/replaceable.svg`,
  },
  {
    name: "Low Thermal Conductivity",
    imgURL: `${ASSETS_URL}/websites/composite-decking/feature-icons/low-thermal-conductivity.svg`,
  },
  {
    name: "Easy to Maintain",
    imgURL: `${ASSETS_URL}/websites/composite-decking/feature-icons/easy-to-maintain.svg`,
  },
  {
    name: "EZ RAIL Compatible",
    imgURL: `${ASSETS_URL}/websites/composite-decking/feature-icons/compatible.svg`,
  },
  {
    name: "Hidden Joist",
    imgURL: `${ASSETS_URL}/websites/composite-decking/feature-icons/hidden-joist.svg`,
  },
  {
    name: "10 Years Warrantry",
    imgURL: `${ASSETS_URL}/websites/composite-decking/feature-icons/10_years_limited_warranty.svg`,
  },
];

const springLoadedClipsURL = `${ASSETS_URL}/websites/composite-decking/5-spring-loaded-clips.jpg`;

const compositeLay1URL = `${ASSETS_URL}/websites/composite-decking/calvary-composite-lay-1.jpg`;
const compositeLay2URL = `${ASSETS_URL}/websites/composite-decking/calvary-composite-lay-2.jpg`;
const ezrailClipAnimationURL = `${ASSETS_URL}/websites/composite-decking/ezrail-clip-animation.gif`;

const KeyFeatures = () => {
  return (
    <div className="py-8 sm:py-12">
      <div className="bg-calvarycomposite py-6">
        <h2 className="text-center text-white text-xl sm:text-2xl font-medium uppercase font-montserrat">
          Key Features
        </h2>
      </div>

      <div className="flex flex-col gap-3 justify-center items-center mt-6 sm:mt-8">
        <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden">
          <Image
            src={keyFeaturesBannerURL}
            alt="Calvary Composite Decking"
            width={1920}
            height={600}
            priority
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-xs sm:text-sm text-gray-600 italic">
          Access Panel At Waterbay Condominium
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 space-y-6 sm:space-y-8">
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{`
          Designed with lasting beauty, incredible durability, 
          and easy maintenance, there's no compromising with 
          high-performance composite decking. 
        `}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 flex items-center justify-center">
                <Image
                  src={feature.imgURL}
                  alt={feature.name}
                  width={56}
                  height={56}
                  priority
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-sm sm:text-base text-gray-800">
                {feature.name}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 justify-center items-center pt-4">
          <Link
            href={"/contact-us"}
            className="uppercase tracking-wider px-6 py-3 bg-calvarycomposite text-white rounded-lg font-medium hover:bg-calvarycomposite/90 hover:shadow-lg transition-all duration-300 ease-in-out text-sm sm:text-base"
          >
            Book Your Consultation
          </Link>
          <span className="text-xs sm:text-sm uppercase text-calvarycomposite font-medium">
            Colour Customisation Available
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 space-y-6">
        <div className="max-w-2xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <Image
            src={springLoadedClipsURL}
            alt="EZ-rail® Removable Decking Clip System"
            width={800}
            height={600}
            priority
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="max-w-3xl mx-auto space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
          <p>{`
          Ez-rail® clip system is spring loaded. It allows limited movement 
          for expansion and contraction. 
        `}</p>
          <p>{`
          Whenever planks starts to expand and 
          contract, it will not push against each other that results in warping.
        `}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-8 max-w-4xl mx-auto">
          <div className="col-span-2 md:col-span-1 md:row-span-2 rounded-xl overflow-hidden shadow-md">
            <Image
              src={compositeLay1URL}
              alt="Calvary Composite Decking"
              width={600}
              height={800}
              priority
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <Image
              src={compositeLay2URL}
              alt="Calvary Composite Decking"
              width={600}
              height={400}
              priority
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <Image
              src={ezrailClipAnimationURL}
              alt="Calvary Composite Decking"
              width={600}
              height={400}
              priority
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
