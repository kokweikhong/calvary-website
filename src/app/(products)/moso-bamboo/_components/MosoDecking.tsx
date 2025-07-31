import Image from "next/image";
import { getMosoImageUrl } from "../_lib/utils";

const deckingHeroImage = getMosoImageUrl("salty-hotel.png");
const mosoXtreme = getMosoImageUrl("xtreme.jpg");
const mosoNdurance = getMosoImageUrl("ndurance.jpg");

const xtremeStandardGroove = getMosoImageUrl("xtreme-standard-groove.jpg");
const xtremeVgrooveBrushed = getMosoImageUrl("xtreme-vgroove-brushed.jpg");
const xtremeNonSlip = getMosoImageUrl("xtreme-2-non-slip.jpg");

const xtremeProfiles = [
  {
    title: "Reversible board (Standard Groove / Flat)",
    image: xtremeStandardGroove,
  },
  {
    title: "Reversible board (V-Grooved/BRUSHED)",
    image: xtremeVgrooveBrushed,
  },
  { title: "2 Non-slip lines", image: xtremeNonSlip },
];

const nduranceEndMatchedDecking = getMosoImageUrl(
  "ndurance-end-matched-decking.jpg"
);
const nduranceRebatedProfile = getMosoImageUrl("ndurance-rebated-profile.jpg");
const nduranceStandardGroove = getMosoImageUrl("ndurance-standard-groove.jpg");

const MosoDecking = () => {
  return (
    <div id="moso-decking">
      <div>
        <div className="bg-black text-white py-4 flex justify-around items-center">
          <h2 className="text-2xl text-center font-medium tracking-wider">
            Decking
          </h2>
          <h2 className="text-2xl text-center font-medium tracking-wider">
            Available in X-treme® and N-Durance®
          </h2>
        </div>
        <div className="relative w-full h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={deckingHeroImage}
              alt="Moso Bamboo Decking"
              width={1920}
              height={1080}
              priority
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute inset-0 flex justify-center items-center flex-col">
            <h3 className="text-4xl bg-white uppercase text-center py-2 px-4">
              Decking
            </h3>
            <p className="text-sm text-white">{`N-durance® | X-treme®`}</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-8 md:grid md:grid-cols-2 gap-4">
        <div className="flex flex-col items-center space-y-4 py-8">
          <h3 className="text-2xl text-center font-bold uppercase py-2">
            MOSO N-durance® decking
          </h3>
          <div className="w-1/2">
            <Image
              src={mosoNdurance}
              alt="Moso Ndurance"
              width={1920}
              height={1080}
              priority
              className="w-full h-full object-cover"
            />
          </div>

          <a
            href="https://assets.calvarycarpentry.com/websites/moso/downloads/MOSO%20decking%20n%20durance-data%20sheet.jpg"
            target="_blank"
            rel="noreferrer"
            className="bg-[#805C00] text-white py-2 px-4 rounded-lg flex space-x-2 items-center"
          >
            <span>Technical Data</span>
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect
                x="0.5"
                width="17"
                height="17"
                fill="url(#pattern0_3800_8653)"
              />
              <defs>
                <pattern
                  id="pattern0_3800_8653"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use xlinkHref="#image0_3800_8653" transform="scale(0.01)" />
                </pattern>
                <image
                  id="image0_3800_8653"
                  width="100"
                  height="100"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>
          </a>

          <p className="text-center">
            Crafted from a steam-pressure treatment involving unique bamboo
            material crushing and compression techniques.
          </p>

          <div className="flex flex-col items-center space-y-2">
            <div className="grid grid-cols-[2fr_1fr] gap-2 w-1/2 border-2 border-black">
              <div className="">
                <Image
                  src={nduranceStandardGroove}
                  alt="Moso Xtreme"
                  width={1920}
                  height={1080}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <div className="h-2/5 w-auto">
                  <Image
                    src={nduranceRebatedProfile}
                    alt="Moso Xtreme"
                    width={150}
                    height={150}
                    priority
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="h-2/5 w-auto">
                  <Image
                    src={nduranceEndMatchedDecking}
                    alt="Moso Xtreme"
                    width={150}
                    height={150}
                    priority
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
            <p className="text-sm font-semibold">
              Reversible board (Standard Groove / Flat)
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-4 py-8">
          <h3 className="text-2xl text-center font-bold uppercase py-2">
            MOSO X-treme® Decking
          </h3>
          <div className="w-1/2">
            <Image
              src={mosoXtreme}
              alt="Moso Xtreme"
              width={1920}
              height={1080}
              priority
              className="w-full h-full object-cover"
            />
          </div>
          <a
            href="https://assets.calvarycarpentry.com/websites/moso/downloads/MOSO%20decking%20xtreme-data%20sheet.jpg"
            target="_blank"
            rel="noreferrer"
            className="bg-[#805C00] text-white py-2 px-4 rounded-lg flex space-x-2 items-center"
          >
            <span>Technical Data</span>
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect
                x="0.5"
                width="17"
                height="17"
                fill="url(#pattern0_3800_8653)"
              />
              <defs>
                <pattern
                  id="pattern0_3800_8653"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use xlinkHref="#image0_3800_8653" transform="scale(0.01)" />
                </pattern>
                <image
                  id="image0_3800_8653"
                  width="100"
                  height="100"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>
          </a>

          <p className="text-center">
            Crafted from compressed bamboo strips using a distinctive heat
            treatment/compression process.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            {xtremeProfiles.map((profile, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 w-2/5"
              >
                <div className="border-2 border-black">
                  <Image
                    src={profile.image}
                    alt="Moso Xtreme"
                    width={500}
                    height={500}
                    priority
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm font-semibold text-center">
                  {profile.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MosoDecking;
