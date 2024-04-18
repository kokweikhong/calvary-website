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
      <div className="flex flex-col items-center justify-center space-y-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-4xl tracking-wider font-bold">Contact Us</h1>
        <h2 className="text-2xl font-montserrat">
          We are always here for you.
        </h2>

        <div className="flex flex-col items-center justify-center space-y-1">
          <a
            href="#contact-form"
            className="border border-white bg-transparent text-white hover:bg-white hover:text-black px-4 py-2 transition duration-300 ease-in-out"
          >
            Contact Form
          </a>
          <p>{`We've Got Wood For You`}</p>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Hero;
