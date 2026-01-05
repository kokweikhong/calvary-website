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
    <div
      id="about-us"
      className="container-cp flex flex-col items-center justify-center space-y-8 sm:space-y-12 py-8 sm:py-12"
    >
      <div className="text-center border-y-2 border-black py-3 sm:py-4 px-4">
        <h2 className="uppercase text-xl sm:text-2xl md:text-3xl font-montserrat tracking-wider font-semibold">
          About Us
        </h2>
      </div>

      <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-700 leading-relaxed max-w-3xl">
        <p>{`
          Avant-Garde woodworkers and visionaries forged from humble beginnings, Calvary is the timber expert for the next generation of property owners.
        `}</p>
        <p>{`
          Elevate spaces with premium timber flooring, exquisite ceilings, and innovative stairs. Beauty and function in every step.
        `}</p>
      </div>

      <div className="text-[#805C00] w-full space-y-3 sm:space-y-4 max-w-2xl">
        <div className="flex space-x-3 sm:space-x-4 items-start">
          <ArrowRightWithTail className="text-[#805C00] shrink-0 mt-1" />
          <h3 className="text-base sm:text-lg font-medium">
            Flooring, decking, cladding, soffit.
          </h3>
        </div>
        <div className="flex space-x-3 sm:space-x-4 items-start">
          <ArrowRightWithTail className="text-[#805C00] shrink-0 mt-1" />
          <h3 className="text-base sm:text-lg font-medium">
            Stairs, rails, trellis, screens.
          </h3>
        </div>
        <div className="flex space-x-3 sm:space-x-4 items-start">
          <ArrowRightWithTail className="text-[#805C00] shrink-0 mt-1" />
          <h3 className="text-base sm:text-lg font-medium">
            Residential, commercial, government.
          </h3>
        </div>
      </div>

      <div className="w-full flex flex-col space-y-6 sm:space-y-8 items-start justify-center">
        <div className="text-center border-y-2 border-black py-3 sm:py-4 mx-auto px-4">
          <h2 className="uppercase text-xl sm:text-2xl md:text-3xl font-montserrat tracking-wider font-semibold">
            Timeline
          </h2>
        </div>
        <Timeline />
      </div>

      {/* images */}
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:grid-cols-[2fr_1fr] md:grid-rows-2 md:max-h-200">
          <div className="relative h-62.5 sm:h-75 md:h-full md:col-span-1 md:row-span-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Image
              src={feature1ImgUrl}
              alt="Second Nature House"
              width={800}
              height={600}
              priority
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative h-62.5 sm:h-75 md:h-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Image
              src={feature2ImgUrl}
              alt="Woodland"
              width={800}
              height={600}
              priority
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative h-62.5 sm:h-75 md:h-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Image
              src={feature3ImgUrl}
              alt="Vizionaire"
              width={800}
              height={600}
              priority
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* certificate */}
      <div className="flex flex-wrap gap-4 sm:gap-6 items-center justify-center pt-4">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className="relative h-10 sm:h-12 md:h-14 w-auto grayscale hover:grayscale-0 transition-all duration-300"
          >
            <Image
              src={`${ASSETS_URL}/websites/about-us/certifications/${cert}`}
              alt="Certification"
              width={56}
              height={56}
              priority
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
