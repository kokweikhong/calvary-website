"use client";

import myImageLoader from "@/lib/imageLoader";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Product } from "@/interfaces/product";

type ProductCardProps = {
  data: Product;
};

const ProductCard: FC<ProductCardProps> = ({ data }) => {
  return (
    <Link href={data.href} className="block h-full group">
      <article className="relative h-full flex flex-col bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-3">
        {/* Image Container with Overlay */}
        <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-gray-100">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

          {/* Zoom Effect on Image */}
          <div className="w-full h-full transform group-hover:scale-110 transition-transform duration-700 ease-out">
            <Image
              loader={myImageLoader}
              src={data.thumbnail}
              alt={data.title}
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
              fill
              placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOcMnNKPQAFzAJCeSI5iwAAAABJRU5ErkJggg=="
              className="w-full h-full object-cover"
            />
          </div>

          {/* Accent Corner */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-500/20 to-blue-500/20 transform translate-x-8 -translate-y-8 rotate-45 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
        </div>

        {/* Content Card with Elevated Design */}
        <div className="relative flex-1 bg-white -mt-8 mx-4 sm:mx-6 rounded-t-2xl shadow-xl z-20 p-6 sm:p-8 group-hover:-mt-12 transition-all duration-500 ease-out border border-gray-100 group-hover:border-green-500/30">
          {/* Top Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-t-2xl"></div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-gray-900 mb-6 group-hover:text-green-700 transition-colors duration-300">
            {data.title}
          </h3>

          {/* Logo Container with Background */}
          <div className="relative inline-flex items-center justify-start h-8 sm:h-10 mb-4 px-3 py-2 bg-gray-50 rounded-lg group-hover:bg-green-50 transition-colors duration-300">
            <div className="relative h-full w-auto">
              <Image
                loader={myImageLoader}
                src={data.logo}
                alt={data.title}
                width={120}
                height={40}
                style={{ width: "auto", height: "100%" }}
                className="object-contain"
              />
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed tracking-wide line-clamp-3 group-hover:text-gray-800 transition-colors duration-300">
            {data.description}
          </p>

          {/* Read More Indicator */}
          <div className="flex items-center gap-2 mt-6 text-sm font-semibold text-gray-700 group-hover:text-green-600 transition-colors duration-300">
            <span className="tracking-wider">VIEW DETAILS</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
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

        {/* Bottom Shine Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </article>
    </Link>
  );
};

export default ProductCard;
