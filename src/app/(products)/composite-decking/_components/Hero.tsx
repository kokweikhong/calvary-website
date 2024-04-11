import Image from "next/image";

const ASSETS_URL = process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL;
const heroImageURL = `${ASSETS_URL}/websites/composite-decking/hero.jpg`;
const logoWhiteURL = `${ASSETS_URL}/websites/composite-decking/logo-white.svg`;

const Hero = () => {
  return (
    <div className="h-screen bg-black/50 relative">
      <div className="w-full h-full aboslute top-0 left-0 z-0">
        <Image
          src={heroImageURL}
          alt="Calvary Composite Decking"
          width={500}
          height={500}
          priority
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50">
        </div>
      </div>

      <div className="text-white h-full flex flex-col items-center justify-center space-y-8 max-w-xl mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-center items-center space-x-4">
          <div>
            <Image
              src={logoWhiteURL}
              alt="Calvary Composite Decking"
              width={70}
              height={70}
              priority
            />
          </div>
          <h2 className="font-semibold text-3xl flex flex-col">
            <span>Calvary</span>
            <span>Composite</span>
          </h2>
        </div>

        <h1 className="font-montserrat text-center">
          {`Designed with lasting beauty, incredible durability and easy maintenance decking.`}
        </h1>

        <div className="flex flex-col gap-1 text-center items-center justify-center">
          <a href="#explore"
            className="font-medium border border-white px-4 py-2 bg-transparent hover:bg-white hover:text-black transition duration-300 ease-in-out"
          >
            Explore Composite
          </a>
          <span className="text-sm">Waterbay, National Gallery</span>
        </div>
      </div>

    </div>
  )
}

export default Hero;
