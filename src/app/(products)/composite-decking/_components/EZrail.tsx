import Image from "next/image";

const ASSETS_URL = process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL;
const ezrailBannerURL = `${ASSETS_URL}/websites/composite-decking/ezrail-banner.png`;

const features: { name: string; iconURL: string; }[] = [
  // { name: "", iconURL: `${ASSETS_URL}/websites/composite-decking/feature-icons/easy-to-maintain.svg` },
  { name: "Hidden Joist", iconURL: `${ASSETS_URL}/websites/composite-decking/feature-icons/hidden-joist.svg` },
  { name: "Low Thermal Conductivity", iconURL: `${ASSETS_URL}/websites/composite-decking/feature-icons/low-thermal-conductivity.svg` },
  { name: "R11 Anti-Slip", iconURL: `${ASSETS_URL}/websites/composite-decking/feature-icons/r11-anti-slip.svg` },
  { name: "Fire rated (Class 2)", iconURL: `${ASSETS_URL}/websites/composite-decking/feature-icons/fire-rated-class-2.svg` },
  { name: "SGS Certified", iconURL: `${ASSETS_URL}/websites/composite-decking/feature-icons/sgs-certified.svg` },
  { name: "Replaceable", iconURL: `${ASSETS_URL}/websites/composite-decking/feature-icons/replaceable.svg` },
  { name: "EZRAIL Compatible", iconURL: `${ASSETS_URL}/websites/composite-decking/feature-icons/compatible.svg` },
  { name: "Easy Removal", iconURL: `${ASSETS_URL}/websites/composite-decking/feature-icons/removal.svg` },
  { name: "10 Years Limited Warrantry", iconURL: `${ASSETS_URL}/websites/composite-decking/feature-icons/10-years-limited-warranty.svg` },
  { name: "STATS", iconURL: `${ASSETS_URL}/websites/composite-decking/feature-icons/stats.svg` },
  { name: "SGBC Certified (3 ticks)", iconURL: `${ASSETS_URL}/websites/composite-decking/feature-icons/sgbc-certified-3-ticks.svg` },
]

const ezrailCompatibleURL = `${ASSETS_URL}/websites/composite-decking/feature-icons/ezrail-compatible.svg`;

const ezrailBlueIconURL = `${ASSETS_URL}/websites/composite-decking/ezrail-blue-icon.svg`;

const ezrailCompositeDissectionURL = `${ASSETS_URL}/websites/composite-decking/ezrail-calvary-composite-dissection.jpg`;

const profiles: { name: string; iconURL: string; }[] = [
  { name: `2 x 0.5"`, iconURL: `${ASSETS_URL}/websites/composite-decking/profiles/40.png` },
  { name: `2 x 1"`, iconURL: `${ASSETS_URL}/websites/composite-decking/profiles/50-60.png` },
  { name: `2 x 2"`, iconURL: `${ASSETS_URL}/websites/composite-decking/profiles/80.png` },
]

const EZRail = () => {
  return (
    <div className="space-y-4 mt-4">

      <div className="container mx-auto sm:px-6 lg:px-8 space-y-4">
        <h2 className="text-lg font-medium text-center">#1 Removable Decking in Singapore</h2>

        <div className="flex flex-col items-center justify-center space-y-2">
          <div>
            <Image
              src={ezrailBannerURL}
              alt="EZ-rail® Removable Decking Clip System"
              width={1920}
              height={1080}
              priority
              className="w-full h-full object-cover"
            />
          </div>
          <span className="capitalize text-sm">patented technology by calvary Carpentry</span>
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

        <div className="flex flex-col justify-center items-center space-y-4">
          <div className="border border-black text-center p-2">
            <h3 className="font-medium text-lg">Decking Made Simple</h3>
            <h4>#1 Removable Decking in Singapore</h4>
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-start">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center justify-center space-y-2 w-1/5 text-center">
                <div>
                  <Image
                    src={feature.iconURL}
                    alt={feature.name}
                    width={50}
                    height={50}
                    priority
                  />
                </div>
                {feature.name.includes("EZRAIL") ? (
                  <div>
                    <Image
                      src={ezrailCompatibleURL}
                      alt={feature.name}
                      width={50}
                      height={50}
                      priority
                      className="w-full h-full object-cover"
                    />
                    <span className="text-sm justify-self-start">Compatible</span>
                  </div>
                ) : (
                  <span className="text-sm justify-self-start">{feature.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-calvaryComposite py-8">
        <div className="space-y-4 text-white grid grid-cols-[1fr_2fr] md:grid-rows-2 container mx-auto sm:px-6 lg:px-8">

          <div className="md:row-span-full">
            <Image
              src={ezrailBlueIconURL}
              alt="EZ-rail® Removable Decking Clip System"
              width={500}
              height={500}
              priority
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-around space-y-8">
            <p>{`
                EZ-rail® removable decking clip system is compatible with 
                Calvary Composite, Accoya Decking, and Reconstituted Composite decking.
              `}</p>

            <p>Click to check them out:</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 col-span-full md:col-span-1">
            <h4 className="bg-white rounded-full p-2">
              <span className="text-calvaryComposite uppercase font-medium text-base">Accoya Decking</span>
            </h4>
            <h4 className="bg-white rounded-full p-2">
              <span className="text-calvaryComposite uppercase font-medium text-base">Calvary Composite Decking</span>
            </h4>
            <h4 className="bg-white rounded-full p-2">
              <span className="text-calvaryComposite uppercase font-medium text-base">Reconstituted Composite decking</span>
            </h4>
          </div>
        </div>

      </div>

      <div className="space-y-4">
        <div className="space-y-4 container mx-auto sm:px-6 lg:px-8">
          <div>
            <Image
              src={ezrailCompositeDissectionURL}
              alt="EZ-rail® Removable Decking Clip System"
              width={1920}
              height={1080}
              priority
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-medium text-xl uppercase">
            <span
              className="border-b-2 border-black pb-2"
            >
              {`Ensured Flushed design for the smallest* drop`}
            </span>
          </h3>

          <p>{`Minimum drop of 40MM* to construct:`}</p>
          <p>We have a wide range of aluminium runners.</p>
          <p className="pl-4">{`- 40 MM Drop`}</p>
          <p className="pl-4">{`- 50 - 60 MM Drop`}</p>
          <p className="pl-4">{`- 80 MM Drop`}</p>

          <p>{`
            For drops more than 100 mm, we will adjust accordingly 
            (double bracing method aluminium and pedestals if needed)
          `}</p>

        </div>

        <div className="grid grid-cols-3 gap-2">
          {profiles.map((profile, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <div>
                <Image
                  src={profile.iconURL}
                  alt={profile.name}
                  width={500}
                  height={500}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
              <span>{profile.name}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default EZRail;
