"use client";

import accdrediation1 from "@/../public/images/home/accdrediations/BCA.svg";
import accdrediation2 from "@/../public/images/home/accdrediations/Bizsafe.svg";
import accdrediation3 from "@/../public/images/home/accdrediations/LEED.svg";
import accdrediation4 from "@/../public/images/home/accdrediations/NWFA.svg";
import accdrediation5 from "@/../public/images/home/accdrediations/SGBC.svg";
import accdrediation6 from "@/../public/images/home/accdrediations/SGMA.svg";
import accdrediation7 from "@/../public/images/home/accdrediations/SQASC.svg";
import accdrediation8 from "@/../public/images/home/accdrediations/TOP BUSINESS.svg";
import Image from "next/image";

const accdrediations = [
  accdrediation1,
  accdrediation2,
  accdrediation3,
  accdrediation4,
  accdrediation5,
  accdrediation6,
  accdrediation7,
  accdrediation8,
];

const Accdrediations = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Accreditations Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {accdrediations.map((accdrediation, index) => (
            <div
              key={`accdrediation-${index}`}
              className="group"
              style={{
                animation: `fadeInScale 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="relative aspect-square bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 p-4 sm:p-6 flex items-center justify-center border border-gray-100 hover:border-green-500/30 overflow-hidden group-hover:-translate-y-2">
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-linear-to-br from-green-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Image Container */}
                <div className="relative w-full h-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                  <div className="relative w-full h-full max-w-25 max-h-25">
                    <Image
                      src={accdrediation}
                      alt={`Accreditation ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 12.5vw"
                      className="w-full h-full object-contain filter grayscale-0 group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-10 sm:mt-12">
          <p className="text-sm text-gray-500">
            Committed to maintaining the highest standards in quality and
            sustainability
          </p>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Accdrediations;
