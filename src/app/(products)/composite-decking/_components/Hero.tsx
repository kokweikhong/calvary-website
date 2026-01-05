import Image from "next/image";

const ASSETS_URL = process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL;
const heroImageURL = `${ASSETS_URL}/websites/composite-decking/hero.jpg`;
const logoWhiteURL = `${ASSETS_URL}/websites/composite-decking/logo-white.svg`;

const Hero = () => {
  return (
    <div className="h-screen bg-black/50 relative">
      <div className="w-full h-full absolute top-0 left-0 z-0">
        <Image
          src={heroImageURL}
          alt="Calvary Composite Decking"
          width={1920}
          height={1080}
          priority
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      </div>

      <div className="text-white h-full flex flex-col items-center justify-center space-y-6 sm:space-y-8 max-w-xl mx-auto px-4 sm:px-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="flex justify-center items-center space-x-3 sm:space-x-4">
          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
            <Image
              src={logoWhiteURL}
              alt="Calvary Composite Decking"
              width={80}
              height={80}
              priority
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl flex flex-col">
            <span>Calvary</span>
            <span>Composite</span>
          </h2>
        </div>

        <h1 className="font-montserrat text-center text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
          {`Designed with lasting beauty, incredible durability and easy maintenance decking.`}
        </h1>

        <div className="flex flex-col gap-2 text-center items-center justify-center">
          <a
            href="#explore"
            className="font-medium border-2 border-white px-6 py-3 bg-transparent hover:bg-white hover:text-black transition-all duration-300 ease-in-out rounded-lg text-sm sm:text-base"
          >
            Explore Composite
          </a>
          <span className="text-xs sm:text-sm text-gray-200">
            Waterbay, National Gallery, One Fullerton
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
