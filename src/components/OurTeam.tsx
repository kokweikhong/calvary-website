"use client";

import Image from "next/image";
import youtube from "@/../public/images/home/youtube.svg";
import myImageLoader from "@/lib/imageLoader";

type Team = {
  name: string;
  position: string;
  image: any;
  youtube?: string;
};

const teams: Team[] = [
  {
    name: "Kevin Hill",
    position: "MET Consultant",
    image: "websites/teams/teams-kelvin.jpg",
    youtube: "https://youtu.be/51ieZHoR_g8?si=wvjqKQlh7VSZo4Y0",
  },
  {
    name: "Raziq",
    position: "Operations Manager",
    image: "websites/teams/teams-raziq.jpg",
    youtube: "https://www.youtube.com/watch?v=lQiJsOi7etQ&t=106s",
  },
  {
    name: "Uncle Ho",
    position: "Profiler and Moulder",
    image: "websites/teams/teams-uncleho.jpg",
    youtube: "https://www.youtube.com/watch?v=5n321uCH400",
  },
];

const OurTeam = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      {/* Section Header */}
      <div className="relative mb-12">
        <div className="py-6 border-y-2 border-gray-200 w-full text-center relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-green-50/30 to-transparent"></div>

          <h2 className="relative text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wider text-gray-900">
            Our Timber Specialists
          </h2>

          {/* Decorative Line */}
          <div className="w-24 h-1 bg-linear-to-r from-green-500 to-blue-600 mx-auto mt-4"></div>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-3xl mx-auto px-4 mb-12 sm:mb-16">
        <p className="text-center text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
          Meet our skilled artisans dedicated to crafting exquisite timber
          floors, infusing every space with enduring elegance and natural charm.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {teams.map((team, index) => (
          <article
            key={team.name}
            className="group relative"
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
            }}
          >
            <div className="flex items-center gap-4 sm:gap-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-4 sm:p-6 overflow-hidden border border-gray-100 hover:border-green-500/30">
              {/* Profile Image Container */}
              <div className="relative shrink-0">
                {/* Gradient Ring */}
                <div className="absolute -inset-1 bg-linear-to-br from-green-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                {/* Image Wrapper */}
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden shadow-xl transform group-hover:scale-105 group-hover:-rotate-2 transition-all duration-500">
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                  <Image
                    loader={myImageLoader}
                    src={team.image}
                    alt={team.name}
                    fill
                    sizes="(max-width: 768px) 128px, 160px"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content Container */}
              <div className="flex-1 min-w-0 relative">
                {/* Accent Line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-green-500 to-blue-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top rounded-full"></div>

                <div className="pl-4">
                  {/* Name */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 tracking-wide group-hover:text-green-700 transition-colors duration-300">
                    {team.name}
                  </h3>

                  {/* Position */}
                  <p className="text-sm sm:text-base uppercase tracking-wider text-gray-600 mb-4 font-medium group-hover:text-gray-800 transition-colors duration-300">
                    {team.position}
                  </p>

                  {/* YouTube Link */}
                  {team.youtube && (
                    <a
                      href={team.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-red-50 rounded-lg transition-all duration-300 group/btn border border-gray-200 hover:border-red-300"
                    >
                      <div className="relative w-6 h-6 shrink-0 transform group-hover/btn:scale-110 transition-transform duration-300">
                        <Image
                          src={youtube}
                          alt="YouTube"
                          fill
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-700 group-hover/btn:text-red-600 transition-colors duration-300">
                        Watch Video
                      </span>
                      <svg
                        className="w-4 h-4 text-gray-600 group-hover/btn:text-red-600 transform group-hover/btn:translate-x-1 transition-all duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
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

export default OurTeam;
