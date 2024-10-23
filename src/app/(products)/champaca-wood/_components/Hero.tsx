import Image from "next/image";
import { Champaca } from "@/constants/champaca";

export default function Hero() {
  return (
    <section>
      <div className="h-screen relative">
        <div className="h-full w-full relative">
          <Image
            src={Champaca.heroImg}
            alt="Champaca Wood"
            width={1920}
            height={1080}
            priority
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="container-cp w-full flex flex-col gap-y-8 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center justify-center gap-x-4">
            <Image
              src={Champaca.logoWhite}
              alt="Champaca Logo"
              width={400}
              height={65}
              priority
              className="h-16 w-auto"
            />
          </div>
          <p className="max-w-3xl mx-auto text-xl text-center font-light">
            {`Champaca Compound Timber Flooring – Sustainable, Insect-Resistant, and Dimensionally Stable Hardwood for Interiors`}
          </p>
          <div className="flex flex-col gap-y-2 justify-center items-center">
            <a
              href="#champaca-about"
              className="text-white border border-white px-4 py-2 group hover:border-black/70 hover:bg-black/70 transition-all duration-300 ease-in-out"
            >
              Explore Champaca
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
