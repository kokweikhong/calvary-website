// "use client";

import hero from "@/../public/accoya/ACCOYA HEADER.jpg";
import accoyaLogo from "@/../public/accoya/Accoya Logo.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="h-screen relative">
        <div className="h-full w-full">
          <Image
            src={hero}
            alt="Accoya Header"
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

            // onClick={() => {
            //   document.getElementById("#acetylated-timber")?.scrollIntoView();
            // }}
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
