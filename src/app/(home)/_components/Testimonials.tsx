"use client";

import Image from "next/image";
import verticalLogo from "@/../public/black_vertical_logo.png";
import google from "@/../public/images/home/google.png";
import star from "@/../public/images/home/star.svg";
import starGray from "@/../public/images/home/star_gray.svg";

type Review = {
  name: string;
  subcontent: string;
  image: any;
  stars: number;
  content: string;
};

const reviews: Review[] = [
  {
    name: "Joo Kee Choong",
    subcontent: "7 reviews · 4 photos",
    image: google,
    stars: 5,
    content:
      "Excellent service in both sales and operations. When my wife and I first visited the showroom, Vanessa took time (even after office hours, late at night) to show us the various product. She provided us with a lot of information, various use cases, and answered all our questions with very sound product knowledge.",
  },
  {
    name: "Qx Tan",
    subcontent: "10 reviews · 15 photos",
    image: google,
    stars: 5,
    content:
      "Special thanks to Vanessa and the installation team led by Aiden for my balcony decking. The entire process was smooth sailing, with Vanessa personally onsite to oversee the installation and the constant updates provided by her on the progress. I have received many compliments on the end product. Thumbs up for the great service and professionalism! I will not hesitate to recommend anyone hunting for good quality decking to look for Vanessa from Calvary Carpentry!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Customer Reviews
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-green-500 to-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            See what our satisfied customers have to say about us
          </p>
        </div>

        {/* Business Info Card */}
        <div
          className="max-w-2xl mx-auto mb-12 sm:mb-16"
          style={{ animation: "fadeInUp 0.6s ease-out both" }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500">
            {/* Powered by Google */}
            <div className="flex items-center justify-center gap-2 mb-6 pb-6 border-b border-gray-100">
              <span className="text-sm sm:text-base font-medium text-gray-500">
                Verified reviews powered by
              </span>
              <div className="relative h-8 sm:h-10 w-16 sm:w-20">
                <Image
                  src={google}
                  alt="Google"
                  fill
                  className="w-full h-full object-contain"
                  sizes="100px"
                />
              </div>
            </div>

            {/* Business Rating */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
              {/* Logo */}
              <div className="relative">
                <div className="absolute -inset-1 bg-linear-to-br from-green-500 to-blue-600 rounded-full opacity-20 blur-md"></div>
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-xl border-4 border-white bg-white overflow-hidden">
                  <Image
                    src={verticalLogo}
                    alt="Calvary Carpentry Logo"
                    fill
                    className="w-full h-full object-contain p-2"
                    sizes="100px"
                  />
                </div>
              </div>

              {/* Rating Info */}
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Calvary Carpentry
                </h3>

                {/* Stars */}
                <div className="flex items-center justify-center sm:justify-start gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="relative w-5 h-5 sm:w-6 sm:h-6">
                      <Image
                        src={star}
                        alt="Star"
                        fill
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                  {/* <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                    <Image
                      src={starGray}
                      alt="Star"
                      fill
                      className="w-full h-full object-contain"
                    />
                  </div> */}
                  <span className="ml-2 text-xl sm:text-2xl font-bold text-gray-900">
                    4.9
                  </span>
                </div>

                {/* Review Count */}
                <a
                  href="#reviews"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300 group"
                >
                  <span className="underline">198 Google reviews</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto"
          id="reviews"
        >
          {reviews.map((review, index) => (
            <article
              key={`review-${index}`}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 sm:p-8 border border-gray-100 hover:border-green-500/30 flex flex-col hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.6s ease-out ${0.2 + index * 0.15}s both`,
              }}
            >
              {/* Decorative Quote */}
              <div className="absolute top-6 right-6 text-6xl sm:text-7xl text-gray-100 font-serif leading-none select-none">
                "
              </div>

              {/* Reviewer Header */}
              <div className="flex items-start gap-4 mb-6 relative z-10">
                {/* Google Icon */}
                <div className="shrink-0 relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gray-50 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-500 border border-gray-200">
                  <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                    <Image
                      src={review.image}
                      alt="Google"
                      fill
                      className="w-full h-full object-contain"
                      sizes="50px"
                    />
                  </div>
                </div>

                {/* Reviewer Info */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 group-hover:text-green-700 transition-colors duration-300">
                    {review.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 mb-3">
                    {review.subcontent}
                  </p>

                  {/* Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(review.stars)].map((_, i) => (
                      <div
                        key={`filled-${i}`}
                        className="relative w-4 h-4 sm:w-5 sm:h-5"
                      >
                        <Image
                          src={star}
                          alt="Star"
                          fill
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ))}
                    {[...Array(5 - review.stars)].map((_, i) => (
                      <div
                        key={`empty-${i}`}
                        className="relative w-4 h-4 sm:w-5 sm:h-5"
                      >
                        <Image
                          src={starGray}
                          alt="Star"
                          fill
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Content */}
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed flex-1 relative z-10">
                {review.content.length > 280
                  ? `${review.content.substring(0, 280)}...`
                  : review.content}
              </p>

              {/* Bottom Accent */}
              <div className="h-1 bg-linear-to-r from-green-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left mt-6 rounded-full"></div>
            </article>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-10 sm:mt-12">
          <a
            href="https://www.google.com/search?q=calvary+carpentry"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-linear-to-r hover:from-green-500 hover:to-blue-600 text-gray-900 hover:text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-200 hover:border-transparent group"
          >
            <span>View All Reviews</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
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
          </a>
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

export default Testimonials;
