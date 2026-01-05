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
    <div className="relative h-full w-full flex items-center justify-center py-24 md:py-32">
      <div className="absolute h-full w-full -z-10">
        <Image
          src={distributorBg}
          alt="distributor"
          className="w-full h-full object-cover"
        />
        {/* overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      </div>
      {/* Content container */}
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 lg:p-16">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight mb-3 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Exclusive Distributor of Premium Timber Brands
          </h3>
          <div className="flex items-center justify-center gap-2 mb-6">
            {COUNTRY === "Singapore" ? (
              <span className="inline-block px-4 py-1 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm font-semibold rounded-full shadow-md">
                Singapore
              </span>
            ) : (
              <span className="inline-block px-4 py-1 bg-gradient-to-r from-red-600 to-red-800 text-white text-sm font-semibold rounded-full shadow-md">
                Malaysia
              </span>
            )}
          </div>

          <div className="space-y-3 text-center mb-10">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Calvary Carpentry is the exclusive distributor of premium timber
              brands.
            </p>
            <p className="text-base md:text-lg font-bold text-gray-900">
              {`Accoya, Champaca, ${
                COUNTRY === "Malaysia" ? "Moso" : "Dasso"
              } Bamboo, Kandinsky and Calvary Composite`}
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {distributorLogos.map((logo, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <Image
                  src={`/images/home/distributor_logos/${logo}`}
                  alt={logo}
                  width={100}
                  height={100}
                  className="h-12 w-auto"
                />
              </div>
            ))}
            {COUNTRY === "Malaysia" && (
              <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
                <Image
                  src={`/images/home/distributor_logos/moso.svg`}
                  alt="moso"
                  width={100}
                  height={100}
                  className="h-12 w-auto"
                />
              </div>
            )}
            {COUNTRY === "Singapore" && (
              <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
                <Image
                  src={`/images/home/distributor_logos/dasso.svg`}
                  alt="dasso"
                  width={100}
                  height={100}
                  className="h-12 w-auto"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distributor;
