"use client";

import { FC } from "react";

type ServiceProductSliderProps = {
  products: string[];
  backgroundColor?: string;
  textColor?: string;
};

const ServiceProductSlider: FC<ServiceProductSliderProps> = ({
  products,
  backgroundColor = "black",
  textColor = "white",
}) => {
  // Duplicate products array multiple times for seamless loop
  const duplicatedProducts = Array.from({ length: 3 }, () => products).flat();

  return (
    <div style={{ backgroundColor }} className="overflow-hidden py-4">
      <div className="relative flex">
        {/* First set of products */}
        <div className="flex animate-scroll-left gap-12 whitespace-nowrap">
          {duplicatedProducts.map((product, index) => (
            <span
              key={`product-1-${index}`}
              style={{ color: textColor }}
              className="text-lg font-medium"
            >
              {product}
            </span>
          ))}
        </div>

        {/* Second set for seamless loop */}
        <div className="flex animate-scroll-left gap-12 whitespace-nowrap">
          {duplicatedProducts.map((product, index) => (
            <span
              key={`product-2-${index}`}
              style={{ color: textColor }}
              className="text-lg font-medium"
            >
              {product}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
        }

        /* Pause animation on hover */
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ServiceProductSlider;
