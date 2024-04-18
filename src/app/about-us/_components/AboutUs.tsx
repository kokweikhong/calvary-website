import { cn } from "@/lib/utils";
import Image from "next/image";
import Timeline from "./Timeline";

const ASSETS_URL = process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL;
const feature1ImgUrl = `${ASSETS_URL}/websites/about-us/second-nature-house-feature.jpeg`;
const feature2ImgUrl = `${ASSETS_URL}/websites/about-us/woodland-feature.jpg`;
const feature3ImgUrl = `${ASSETS_URL}/websites/about-us/vizionaire-feature.jpeg`;

const certifications = [
  "sgma.svg",
  "tuv.svg",
  "sgs.svg",
  "bca.svg",
  "sqasc.svg",
  "stats.svg",
  "leed.svg",
  "sgbc.svg",
  "nwfa.svg",
  "top-business.svg",
];

const ArrowRightWithTail = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-6 text-black", className && className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  );
};

const AboutUs = () => {
  return (
    <div className="container-cp flex flex-col items-center justify-center space-y-8">
      <div className="text-center border-y border-black py-2">
        <h2 className="uppercase text-2xl font-montserrat tracking-wider">
          About Us
        </h2>
      </div>

      <div className="space-y-4">
        <p>{`
          Avant-Garde woodworkers and visionaries forged from humble beginnings, Calvary is the timber expert for the next generation of property owners.
        `}</p>
        <p>{`
          Elevate spaces with premium timber flooring, exquisite ceilings, and innovative stairs. Beauty and function in every step.
        `}</p>
      </div>

      <div className="text-[#805C00] w-full space-y-2">
        <div className="flex space-x-2 items-center justify-start">
          <ArrowRightWithTail className="text-[#805C00]" />
          <h3 className="text-lg">Flooring, decking, cladding, soffit.</h3>
        </div>
        <div className="flex space-x-2 items-center justify-start">
          <ArrowRightWithTail className="text-[#805C00]" />
          <h3 className="text-lg">Stairs, rails, trellis, screens.</h3>
        </div>
        <div className="flex space-x-2 items-center justify-start">
          <ArrowRightWithTail className="text-[#805C00]" />
          <h3 className="text-lg">Residential, commercial, government.</h3>
        </div>
      </div>

      <div className="w-full flex flex-col space-y-8 items-start justify-center">
        <div className="text-center border-y border-black py-2 mx-auto">
          <h2 className="uppercase text-2xl font-montserrat tracking-wider">
            Timeline
          </h2>
        </div>
        <Timeline />
      </div>

      {/* images */}
      <div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-[2fr_1fr] md:grid-rows-2 md:max-h-[800px]">
          <div className="relative h-[300px] col-span-full sm:h-[400px] md:h-full md:col-span-1 md:row-span-full">
            <Image
              src={feature1ImgUrl}
              alt="Second Nature House"
              width={400}
              height={300}
              priority
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-[300px] md:h-full">
            <Image
              src={feature2ImgUrl}
              alt="Woodland"
              width={400}
              height={300}
              priority
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-[300px] md:h-full">
            <Image
              src={feature3ImgUrl}
              alt="Vizionaire"
              width={400}
              height={300}
              priority
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* certificate */}
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {certifications.map((cert, idx) => (
          <div key={idx} className="relative h-12 w-auto">
            <Image
              src={`${ASSETS_URL}/websites/about-us/certifications/${cert}`}
              alt="Certification"
              width={48}
              height={48}
              priority
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
