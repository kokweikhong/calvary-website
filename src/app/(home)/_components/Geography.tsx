"use client";

import Image from "next/image";
import msiaIcon from "@/../public/images/home/Malaysia_icon.svg";
import sporeIcon from "@/../public/images/home/Singapore_icon.svg";
import map from "@/../public/images/home/map.png";

type Location = {
  title: string;
  description: string;
  icon: any;
};

const locations: Location[] = [
  {
    title: "KL Office",
    description:
      "Colony Vipod KLCC, 6, Jalan Kia Peng, Kuala Lumpur, 50450 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",
    icon: msiaIcon,
  },
  {
    title: "Calvary Carpentry Sdn Bhd",
    description:
      "Level 2, 8, Jalan TS 6/9, Taman Perindustrian Subang, 47510 Subang Jaya, Selangor, Malaysia",
    icon: msiaIcon,
  },
  {
    title: "Warehouse",
    description:
      "Level 1, 54 Senoko Rd, East Industrial Estate, Singapore 758118",
    icon: sporeIcon,
  },
  {
    title: "Showroom",
    description: "66 Kampung Bugis, Level 7, Singapore 338987",
    icon: sporeIcon,
  },
];

const Geography = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-linear-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Our Locations
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-green-500 to-blue-600 mx-auto mb-4"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 font-semibold">
            Find us now in Malaysia and Singapore!
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start max-w-7xl mx-auto">
          {/* Map Section */}
          <div
            className="relative order-2 lg:order-1"
            style={{ animation: "fadeInLeft 0.8s ease-out both" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white group bg-gray-50">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-linear-to-br from-green-500 via-blue-500 to-green-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10 pointer-events-none"></div>

              {/* Map Image */}
              <div className="relative w-full">
                <Image
                  src={map}
                  alt="Map showing our locations in Malaysia and Singapore"
                  className="w-full h-auto object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-green-500 opacity-70"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-blue-500 opacity-70"></div>
            </div>
          </div>

          {/* Locations List */}
          <div
            className="order-1 lg:order-2"
            style={{ animation: "fadeInRight 0.8s ease-out both" }}
          >
            <div className="space-y-6">
              {locations.map((location, index) => (
                <article
                  key={`location-${index}`}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 p-5 sm:p-6 border border-gray-100 hover:border-green-500/30 hover:-translate-y-1"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${
                      0.2 + index * 0.1
                    }s both`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon Container */}
                    <div className="shrink-0">
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-500 border border-gray-200 group-hover:border-green-500/30">
                        <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                          <Image
                            src={location.icon}
                            alt={location.title}
                            fill
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Title with Accent Line */}
                      <div className="relative mb-3">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                          {location.title}
                        </h3>
                        <div className="h-0.5 w-0 bg-linear-to-r from-green-500 to-blue-600 group-hover:w-full transition-all duration-500 mt-1"></div>
                      </div>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                        {location.description}
                      </p>

                      {/* Location Pin Icon */}
                      <div className="flex items-center gap-2 mt-3 text-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-xs font-semibold">
                          View on map
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div className="h-1 bg-linear-to-r from-green-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left mt-4 rounded-full"></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Geography;
