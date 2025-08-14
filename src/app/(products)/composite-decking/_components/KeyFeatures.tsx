import Image from "next/image";
import Link from "next/link";

const ASSETS_URL = process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL;
const keyFeaturesBannerURL = `${ASSETS_URL}/websites/composite-decking/key-feature-banner.jpg`;

const features: { name: string; imgURL: string; }[] = [
  { name: "Replaceable decking system", imgURL: `${ASSETS_URL}/websites/composite-decking/feature-icons/replaceable.svg` },
  { name: "Low Thermal Conductivity", imgURL: `${ASSETS_URL}/websites/composite-decking/feature-icons/low-thermal-conductivity.svg` },
  { name: "Easy to Maintain", imgURL: `${ASSETS_URL}/websites/composite-decking/feature-icons/easy-to-maintain.svg` },
  { name: "EZ RAIL Compatible", imgURL: `${ASSETS_URL}/websites/composite-decking/feature-icons/compatible.svg` },
  { name: "Hidden Joist", imgURL: `${ASSETS_URL}/websites/composite-decking/feature-icons/hidden-joist.svg` },
  { name: "10 Years Warrantry", imgURL: `${ASSETS_URL}/websites/composite-decking/feature-icons/10_years_limited_warranty.svg` },
]

const springLoadedClipsURL = `${ASSETS_URL}/websites/composite-decking/5-spring-loaded-clips.jpg`;

const compositeLay1URL = `${ASSETS_URL}/websites/composite-decking/calvary-composite-lay-1.jpg`;
const compositeLay2URL = `${ASSETS_URL}/websites/composite-decking/calvary-composite-lay-2.jpg`;
const ezrailClipAnimationURL = `${ASSETS_URL}/websites/composite-decking/ezrail-clip-animation.gif`;


const KeyFeatures = () => {
  return (
    <div>
      <div className="bg-calvaryComposite py-4">
        <h2 className="text-center text-white text-2xl font-medium uppercase font-montserrat">Key Features</h2>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center md:w-full md:h-80">
        <Image
          src={keyFeaturesBannerURL}
          alt="Calvary Composite Decking"
          width={500}
          height={500}
          priority
          className="w-full h-full object-cover"
        />
        <p className="text-sm">Access Panel At Waterbay Condominium</p>
      </div>

      <div className="container mx-auto sm:px-6 lg:px-8 mt-8 space-y-4">
        <p>{`
          Designed with lasting beauty, incredible durability, 
          and easy maintenance, there’s no compromising with 
          high-performance composite decking. 
        `}</p>

        <div className="flex flex-col gap-2 justify-center items-start md:grid md:grid-cols-2">
          {features.map((feature, index) => (
            <div key={index} className="flex space-x-4 items-center justify-center md:justify-start">
              <div>
                <Image
                  src={feature.imgURL}
                  alt={feature.name}
                  width={500}
                  height={500}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm">{feature.name}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-1 justify-center items-center">
          <Link
            href={"/contact-us"}
            className="uppercase tracking-wider px-4 py-2 bg-calvaryComposite text-white rounded-lg font-medium hover:bg-calvaryComposite/95 transition duration-300 ease-in-out">
            Book Your Consultation
          </Link>
          <span className="text-sm uppercase text-calvaryComposite font-medium">colour Customisation available</span>
        </div>

      </div>

      <div className="container mx-auto sm:px-6 lg:px-8 mt-8">
        <div className="md:w-1/2 md:h-auto md:mx-auto">
          <Image
            src={springLoadedClipsURL}
            alt="EZ-rail® Removable Decking Clip System"
            width={500}
            height={500}
            priority
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-4">
          <p>{`
          Ez-rail® clip system is spring loaded. It allows limited movement 
          for expansion and contraction. 
        `}</p>
          <p>{`
          Whenever planks starts to expand and 
          contract, it will not push against each other that results in warping.
        `}</p>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-4 md:grid-rows-2 md:max-h-[500px]">
          <div className="col-span-full md:col-span-1 md:row-span-full">
            <Image
              src={compositeLay1URL}
              alt="Calvary Composite Decking"
              width={500}
              height={300}
              priority
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <Image
              src={compositeLay2URL}
              alt="Calvary Composite Decking"
              width={500}
              height={500}
              priority
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <Image
              src={ezrailClipAnimationURL}
              alt="Calvary Composite Decking"
              width={500}
              height={500}
              priority
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

    </div>
  );
}

export default KeyFeatures;
