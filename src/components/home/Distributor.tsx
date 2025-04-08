import Image from "next/image";
import distributorBg from "@/../public/images/home/distributor_background.jpg";

const distributorLogos = [
  "accoya.svg",
  "champaca.svg",
  // "dasso.svg",
  "kandinsky.svg",
  "calvary-composite.svg",
  "ezrail.svg",
  "osmo.svg",
];

const COUNTRY = process.env.NEXT_PUBLIC_COUNTRY;

const Distributor = () => {
  return (
    <div className="relative h-full w-full flex items-center justify-center py-32">
      <div className="absolute h-full w-full -z-10">
        <Image
          src={distributorBg}
          alt="distributor"
          className="w-full h-full"
        />
        {/* overlay black color */}
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>
      {/* overlay white color to write some text */}
      <div className="inset-0 flex flex-col justify-center items-center">
        <div className="bg-white/70 p-16 text-center">
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-medium text-center">
            Exclusive Distributor of Premium Timber Brands
          </h3>
          <p className="mt-1">Singapore Malaysia</p>
          <h3 className="mt-4">
            Calvary Carpentry is the exclusive distributor of premium timber
            brands.
          </h3>
          <h3 className="mt-1 font-bold">
            {`Accoya, Champaca, ${
              COUNTRY === "Malaysia" ? "Moso" : "Dasso"
            } Bamboo, Kandinsky and Calvary Composite`}
          </h3>
          <div className="flex flex-wrap justify-center items-center mt-8">
            {distributorLogos.map((logo, index) => (
              <Image
                key={index}
                src={`/images/home/distributor_logos/${logo}`}
                alt={logo}
                width={100}
                height={100}
                className="m-2 h-12 w-auto"
              />
            ))}
            {COUNTRY === "Malaysia" && (
              <Image
                src={`/images/home/distributor_logos/moso.svg`}
                alt="moso"
                width={100}
                height={100}
                className="m-2 h-12 w-auto"
              />
            )}
            {COUNTRY === "Singapore" && (
              <Image
                src={`/images/home/distributor_logos/dasso.svg`}
                alt="dasso"
                width={100}
                height={100}
                className="m-2 h-12 w-auto"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distributor;
