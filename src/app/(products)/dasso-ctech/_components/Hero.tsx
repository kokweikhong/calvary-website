import Image from "next/image";

const ASSETS_URL = process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL;
const logo = `${ASSETS_URL}/websites/products/dasso/icon-dasso.svg`;
const heroBackgroundImage = `${ASSETS_URL}/websites/products/dasso/hero-background.jpg`;

const Hero = () => {
  return (
    <section>
      <div className="h-screen relative">
        <div className="h-full w-full">
          <Image
            src={heroBackgroundImage}
            alt="Dasso CTECH Bamboo"
            width={1920}
            height={1080}
            sizes="(max-width: 1920px) 100vw, 1920px"
            priority
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container-cp w-full flex flex-col gap-y-6 sm:gap-y-8 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4">
          <div className="flex items-center justify-center gap-x-3 sm:gap-x-4">
            <Image
              src={logo}
              alt="Dasso Logo"
              width={56}
              height={56}
              priority
              className="w-12 h-12 sm:w-14 sm:h-14"
            />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium">
              dasso CTECH
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-xl text-center font-light max-w-3xl mx-auto leading-relaxed">
            {`Sustainable Class 0 fire-rated bamboo: Dasso CTECH: highly durable and resistant to weather, mould, soft rot, and insects.`}
          </p>
          <div className="flex flex-col gap-y-2 sm:gap-y-3 justify-center items-center">
            <a
              className="text-white border-2 border-white px-6 py-2.5 rounded-lg group hover:bg-white hover:text-dasso hover:shadow-xl transition-all duration-300 ease-in-out font-medium text-sm sm:text-base"
              href="#dasso-introduction"
            >
              <span className="group-hover:hidden group-hover:opacity-0">
                Explore Dasso
              </span>
              <span className="hidden opacity-0 group-hover:block group-hover:opacity-100">
                With Calvary
              </span>
            </a>
            <span className="text-xs sm:text-sm">
              Bamboo Decking, Cladding, Soffit
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
