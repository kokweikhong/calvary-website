import Image from "next/image";

const ASSETS_URL = process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL;

const heroImage = `${ASSETS_URL}/websites/wood-and-timber/wood-and-timber-thumbnail.jpg`;

const slidingWords = [
  "Novawood",
  "Teak",
  "Balau",
  "Chengal",
  "Thermal Wood",
  "Solid Wood",
  "Novawood",
  "Teak",
  "Balau",
  "Chengal",
  "Thermal Wood",
  "Solid Wood",
  "Novawood",
  "Teak",
  "Balau",
  "Chengal",
  "Thermal Wood",
  "Solid Wood",
];

const Hero = () => {
  return (
    <>
      <div className="h-screen relative">
        <div className="relative inset-0 w-full h-full">
          <Image
            src={heroImage}
            alt="Hero image"
            width={1920}
            height={1080}
            priority
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 md:p-8 lg:p-16 space-y-4">
          <h1 className="text-white text-4xl font-bold text-center">
            {`Wood & Timber`}
          </h1>

          <div className="max-w-md">
            <p className="text-center text-lg">
              {`High-Performance Timbers and Woodwork. Wall and ceilings finishes, structural constructions, stairs and more.`}
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-2 items-center justify-center">
            <a
              href="#introduction"
              className="bg-transparent px-4 py-2 border border-white uppercase hover:bg-white hover:text-black transition-colors duration-300"
            >
              {`View Products`}
            </a>
            <span>{`Thermal wood | Teak | balau | Chengal`}</span>
          </div>
        </div>
      </div>
      <div className="w-full inline-flex flex-nowrap overflow-hidden bg-black !mt-0 py-4">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll">
          {slidingWords.map((word, index) => (
            <li key={index} className="text-white text-nowrap">
              {word}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Hero;
