import Image from "next/image";

const logo =
  "https://calvarycarpentry-cloud-storage.sgp1.cdn.digitaloceanspaces.com/websites/products/dasso/icon-dasso.svg";

const heroBackgroundImage =
  "https://calvarycarpentry-cloud-storage.sgp1.cdn.digitaloceanspaces.com/websites/products/dasso/hero-background.jpg";

const Hero = () => {
  return (
    <section>
      <div className="h-screen relative">
        <div className="h-full w-full">
          <Image
            src={heroBackgroundImage}
            alt="Accoya Header"
            width={1920}
            height={1080}
            sizes="(max-width: 1920px) 100vw, 1920px"
            priority
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container-cp w-full flex flex-col gap-y-8 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center justify-center gap-x-4">
            <Image
              src={logo}
              alt="Accoya Logo"
              width={56}
              height={56}
              priority
              className="w-14 h-14"
            />
            <h2 className="text-4xl">dasso CTECH</h2>
          </div>
          <p className="text-xl text-center font-light max-w-3xl mx-auto">
            {`Sustainable Class 0 fire-rated bamboo : Dasso CTECH: highly durable and resistant to weather, mould, soft rot, and insects.`}
          </p>
          <div className="flex flex-col gap-y-2 justify-center items-center">
            <a
              className="text-white border border-white px-4 py-2 group hover:border-black/70 hover:bg-black/70 transition-all duration-300 ease-in-out"
              href="#dasso-introduction"
            >
              <span className="group-hover:hidden group-hover:opacity-0">
                Explore Dasso
              </span>
              <span className="hidden opacity-0 group-hover:block group-hover:opacity-100">
                With Calvary
              </span>
            </a>
            <span className="text-xs">Bamboo Decking, Cladding, Soffit</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
