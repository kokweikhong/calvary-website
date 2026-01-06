"use client";

import Image from "next/image";
import Link from "next/link";
import { services } from "@/constants/services";

const Services = () => {
  return (
    <section id="home-services" className="relative py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-green-500 to-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Premium solutions for all your timber and material needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="group block h-full"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
              }}
            >
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out h-full flex flex-col overflow-hidden border border-gray-100 group-hover:border-green-500/30 group-hover:-translate-y-2">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-linear-to-br from-green-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Content Container */}
                <div className="relative z-10 p-8 sm:p-10 flex flex-col items-center text-center grow">
                  {/* Icon Container with Animation */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-linear-to-br from-green-400 to-blue-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-full bg-linear-to-br from-gray-50 to-gray-100 shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-500">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 relative group-hover:scale-110 transition-transform duration-500">
                        <Image
                          src={service.icon}
                          alt={service.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold tracking-wide text-gray-900 mb-4 group-hover:text-green-700 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-8 grow text-sm sm:text-base">
                    {service.description}
                  </p>

                  {/* CTA Button */}
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 group-hover:text-green-600 transition-colors duration-300">
                    <span className="tracking-wider">READ MORE</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="h-1 bg-linear-to-r from-green-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CSS Animation */}
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
      `}</style>
    </section>
  );
};

export default Services;
