import Image from "next/image";

const ASSETS_URL = process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL;

const heroImage = `${ASSETS_URL}/websites/contact-us/hero.jpg`;

const Hero = () => {
  return (
    <div className="h-screen relative">
      <div className="absolute inset-0 w-full h-full bg-black/50 z-[-1]">
        <Image
          src={heroImage}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 max-w-4xl w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider font-bold text-center">
          Contact Us
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl font-montserrat text-center">
          We are always here for you.
        </h2>

        <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-3">
          <a
            href="#contact-form"
            className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-black px-6 py-2.5 rounded-lg hover:shadow-2xl transition-all duration-300 font-medium text-sm sm:text-base"
          >
            Contact Form
          </a>
          <p className="text-xs sm:text-sm">{`We've Got Wood For You`}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
