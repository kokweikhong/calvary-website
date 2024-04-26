import Image from "next/image";

const ASSETS_URL = process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL;

const hero = `${ASSETS_URL}/websites/accoya/ACCOYA%20HEADER.jpg`;
const accoyaLogo = `${ASSETS_URL}/websites/accoya/Accoya%20Logo.svg`;

const Hero = () => {
  return (
    <section>
      <div className="h-screen relative">
        <div className="h-full w-full">
          <Image
            src={hero}
            alt="Accoya Header"
            width={1920}
            height={1080}
            priority
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-cp w-full flex flex-col gap-y-8 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center justify-center gap-x-4">
            <Image
              src={accoyaLogo}
              alt="Accoya Logo"
              width={56}
              height={56}
              priority
              className="w-14 h-14"
            />
            <h2 className="text-4xl">Accoya</h2>
          </div>
          <p className="max-w-3xl mx-auto text-xl text-center font-light">
            {` Accoya® is acetylated pine timber. Durable, non-toxic, insect barrier and dimensionally stable with 25 year warranty.`}
          </p>
          <div className="flex flex-col gap-y-2 justify-center items-center">
            <a
              href="#accoya-features"
              className="text-white border border-white px-4 py-2 group hover:border-black/70 hover:bg-black/70 transition-all duration-300 ease-in-out"
            >
              <span className="group-hover:hidden group-hover:opacity-0">
                Explore Accoya
              </span>
              <span className="hidden opacity-0 group-hover:block group-hover:opacity-100">
                With Calvary
              </span>
            </a>
            <span className="text-xs">Banyan Mandai, SMU, Jypsy</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
