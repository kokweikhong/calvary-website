import Image from "next/image";
import Link from "next/link";

const ASSETS_URL = process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL;

const interiorImg = `${ASSETS_URL}/websites/wood-and-timber/interior.svg`;
const exteriorImg = `${ASSETS_URL}/websites/wood-and-timber/exterior.svg`;
const ezrialLogoImg = `${ASSETS_URL}/websites/wood-and-timber/ezrail-logo.svg`;
const timberImg = `${ASSETS_URL}/websites/wood-and-timber/timber.svg`;

const Introduction = () => {
  return (
    <div id="introduction">
      <div className="container-cp sm:grid sm:grid-cols-2 sm:space-x-16 sm:justify-between">
        <div className="text-center py-4">
          <div className="flex justify-center items-center">
            <Image
              src={interiorImg}
              alt="Interior image"
              width={80}
              height={80}
              priority
              className="object-cover"
            />
          </div>

          <h2 className="uppercase font-bold">Interior</h2>
          <p className="text-[#805C00]">{`Structural Builds, Flooring, Wall, Ceiling, Stairs`}</p>
        </div>

        <div className="text-center py-4">
          <div className="flex justify-center items-center">
            <Image
              src={exteriorImg}
              alt="Exterior image"
              width={80}
              height={80}
              priority
              className="object-cover"
            />
          </div>

          <h2 className="uppercase font-bold mt-2">Exterior</h2>
          <p className="text-[#805C00]">{`Decking, Soffit, Cladding, Trellis, Rails, Planter box.`}</p>
        </div>
      </div>

      <div className="bg-[#577ABA] text-white py-4">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] items-center justify-center gap-4 container-cp py-8">
          <div className="w-48 h-48 mx-auto">
            <Image
              src={ezrialLogoImg}
              alt="Ezrial logo"
              width={200}
              height={200}
              priority
              className="object-cover w-full h-full"
            />
          </div>

          <div className="text-center space-y-4 md:text-left md:h-full md:flex md:flex-wrap md:items-center md:justify-between">
            <p>{`
              EZ-rail® removable decking clip system is compatible with Accoya Decking and Reconstituted Composite decking.
            `}</p>

            <p>{`
              Click to check them out:
            `}</p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center items-center md:col-span-full md:mt-4">
            <Link
              href="/accoya"
              className="text-[#577ABA] bg-white rounded-full px-4 py-2 border border-[#577ABA] hover:bg-[#577ABA] hover:text-white transition-colors duration-300"
            >
              Accoya Decking
            </Link>

            <Link
              href="#"
              className="text-[#577ABA] bg-white rounded-full px-4 py-2 border border-[#577ABA] hover:bg-[#577ABA] hover:text-white transition-colors duration-300"
            >
              Reconstituted Composite Decking
            </Link>
          </div>
        </div>
      </div>

      <div className="container-cp space-y-4 py-4 md:grid md:grid-cols-[1fr_2fr]">
        <div className="w-32 h-32 mx-auto">
          <Image
            src={timberImg}
            alt="Timber image"
            width={120}
            height={120}
            priority
            className="object-cover w-full h-full"
          />
        </div>
        <div className="space-y-4 md:flex md:flex-wrap md:justify-between">
          <p>{`
            Timber is a popular choice for outdoor spaces like patios, balconies, and deckings.
          `}</p>

          <p className="space-y-1 flex flex-col">
            <span>Solid wood:</span>
            <span>- Balau, Teak, Chengal, and more.</span>
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center items-center md:col-span-full">
          <Link
            href={`/accoya`}
            className="block text-sm tracking-wider bg-black text-white rounded-full px-4 py-2 text-center uppercase"
          >
            Accoya decking
          </Link>
          <Link
            href={`#`}
            className="block text-sm tracking-wider bg-black text-white rounded-full px-4 py-2 text-center uppercase"
          >
            Reconstituted Composite timber
          </Link>
          <Link
            href={`#novawood`}
            className="block text-sm tracking-wider bg-black text-white rounded-full px-4 py-2 text-center uppercase"
          >
            Nova thermowood
          </Link>
          <Link
            href={`/dasso-ctech`}
            className="block text-sm tracking-wider bg-black text-white rounded-full px-4 py-2 text-center uppercase"
          >
            dassoCTECH
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
