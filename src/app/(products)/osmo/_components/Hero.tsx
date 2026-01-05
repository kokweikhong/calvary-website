import Image from "next/image";

const ASSETS_URL = process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL;
const heroImageURL = `${ASSETS_URL}/websites/osmo/hero.jpg`;
const osmoLogoURL = `${ASSETS_URL}/websites/osmo/osmo-logo-white.svg`;

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={heroImageURL}
          alt="Hero image"
          width={1920}
          height={1080}
          priority
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      </div>
      <div className="space-y-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <div className="flex space-x-2 items-center justify-center">
          <div>
            <Image
              src={osmoLogoURL}
              alt="Osmo logo"
              width={200}
              height={50}
              priority
              className="mx-auto w-full h-full"
            />
          </div>
          <h1 className="tracking-wider text-4xl font-bold self-end">Osmo</h1>
        </div>

        <div>
          <p className="text-lg">{`
          Good for Wood: OSMO Paint Timber Finish Surfaces. Unlock incredible Colour Precision with Our Colour Experts
        `}</p>
        </div>

        <div className="space-y-1 flex flex-col items-center justify-center">
          <a
            href="#explore-osmo"
            className="px-6 py-3 bg-transparent font-medium border border-white hover:bg-white hover:text-black transition duration-300"
          >
            Explore OSMO
          </a>
          <p className="mt-4 text-sm">
            Jewel Changi Airport, SMU, Banyan Mandai
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
