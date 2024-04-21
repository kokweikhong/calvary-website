import Image from "next/image";

const ASSETS_URL = process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL;
const heroImageURL = `${ASSETS_URL}/websites/about-us/hero.jpg`;

// This is a list of words that will slide across the screen
// need multiply 10 times to make the animation smooth

const slidingWords = [
  "Engineered Flooring",
  "Outdoor Decking",
  "Bamboo",
  "Timber Decking",
  "Timber Flooring",
  "Cladding",
  "Soffit",
  "Timber Screen",

  "Engineered Flooring",
  "Outdoor Decking",
  "Bamboo",
  "Timber Decking",
  "Timber Flooring",
  "Cladding",
  "Soffit",
  "Timber Screen",

  "Engineered Flooring",
  "Outdoor Decking",
  "Bamboo",
  "Timber Decking",
  "Timber Flooring",
  "Cladding",
  "Soffit",
  "Timber Screen",
];

const Hero = () => {
  return (
    <>
      <div className="h-screen bg-black/50 relative">
        <div className="absolute inset-0">
          <Image
            src={heroImageURL}
            alt="Hero image"
            width={1920}
            height={1080}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
            priority
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="font-bold text-4xl">About Us</h1>
          <div>
            <p>
              {`Crafting Excellence in Timber: Discover Calvary Carpentry's Expert Woodworkers`}
            </p>
          </div>

          <div className="flex flex-col space-y-1 items-center justify-center">
            <a
              href="#about-us"
              className="bg-transparent border-2 border-white text-white py-2 px-4 hover:bg-white hover:text-black transition-all duration-300"
            >
              Explore Timber
            </a>
            <span>{`We’ve Got Wood for you`}</span>
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
