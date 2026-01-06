"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import feature4 from "@/../public/images/home/feature_Reconstituted Bamboo Timber vs. Hardwood vs.Composite.png";
import feature2 from "@/../public/images/home/feature_The right wood for humidy in singapore .jpeg";
import feature1 from "@/../public/images/home/feature_archidex_2023.jpg";
import feature3 from "@/../public/images/home/feature_archifest_2023.png";

type Feature = {
  title: string;
  description: string;
  period: string;
  image: any;
};

const features: Feature[] = [
  {
    title: "Malaysia Archidex 2023",
    description: "2 min read. Awardee of Booth Display Star Award",
    period: "26 July - 29 July 2023",
    image: feature1,
  },
  {
    title: "The right wood for humidy in Singapore",
    description: "2 min read. Featuring Accoya and Teak.",
    period: "7 October 2023",
    image: feature2,
  },
  {
    title: "Archifest 2023",
    description: "2 min read. Featuring Accoya and Calvary Composite.",
    period: "1 November 2023",
    image: feature3,
  },
  {
    title: "Comprehensive Guide to Reconstituted Bamboo",
    description: "2 min read. Featuring Bamboo, Composite and Teak.",
    period: "7 October 2023",
    image: feature4,
  },
];

const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(2);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Duplicate features for seamless loop
  const duplicatedFeatures = [...features, ...features, ...features];

  // Handle responsive slides per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSlidesPerView(4);
      } else if (window.innerWidth >= 640) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        // Reset to middle set when reaching end of last set
        if (next >= features.length * 2) {
          return features.length;
        }
        return next;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Reset position for seamless loop
  useEffect(() => {
    if (currentIndex === 0) {
      // Jump to middle set without animation
      const timer = setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.style.transition = "none";
          setCurrentIndex(features.length);
          setTimeout(() => {
            if (sliderRef.current) {
              sliderRef.current.style.transition =
                "transform 500ms ease-in-out";
            }
          }, 50);
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  const slideWidth = 100 / slidesPerView;
  const translateX = -(currentIndex * slideWidth);

  return (
    <div className="overflow-hidden relative">
      <div
        ref={sliderRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(${translateX}%)` }}
      >
        {duplicatedFeatures.map((feature, index) => (
          <div
            key={`feature-${index}`}
            className="relative shrink-0"
            style={{ width: `${slideWidth}%` }}
          >
            <div className="h-50 md:h-62.5 w-full relative">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="bg-black/50 text-white p-4 h-full relative">
                <h5 className="text-[16px] font-bold mb-1">{feature.title}</h5>
                <p className="text-[14px]">{feature.period}</p>
                <div className="flex justify-between items-center text-white absolute bottom-0 pb-6 pr-4">
                  <p className="text-[12px] mr-4 opacity-0 md:opacity-100">
                    {feature.description}
                  </p>
                  <span className="w-0 h-0 border-t-20 border-t-transparent border-l-35 border-l-white border-b-20 border-b-transparent"></span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
