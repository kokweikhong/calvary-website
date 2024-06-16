import Image from "next/image";
import { getMosoImageUrl } from "../_lib/utils";

const heroImage = getMosoImageUrl("hero.jpeg");
const logoWithText = getMosoImageUrl("moso-logo-with-text.svg");

const Hero = () => {
  console.log(heroImage);
  return (
    <div className="h-screen">
      <div className="relative w-full h-full">
        <Image
          src={heroImage}
          alt="Moso Bamboo"
          width={1920}
          height={1080}
          priority
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center space-y-4 justify-center w-full px-5">
        <div className="w-full h-auto max-w-xs">
          <Image
            src={logoWithText}
            alt="Moso Bamboo"
            width={500}
            height={500}
            priority
          />
        </div>
        <h1 className="text-white text-2xl text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          {`MOSO® is reconstituted bamboo with Class B fire retardancy, sustainable, and Class 1 durability with 25-year warranty. `}
        </h1>

        <div className="flex flex-col justify-center mt-5">
          <a
            href={"#about-moso"}
            className="text-white text-center border border-white px-5 py-2 hover:bg-white hover:text-black"
          >
            Explore Bamboo
          </a>
          <p className="text-white text-center text-sm">
            Cladding | Soffit | Flooring | Decking
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
