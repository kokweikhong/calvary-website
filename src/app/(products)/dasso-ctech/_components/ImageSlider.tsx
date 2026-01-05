"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

type ImageSliderProps = {
  data: {
    name?: string;
    image: string;
  }[];
  className?: string;
};

const ImageSlider = (props: ImageSliderProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slidesPerView = 3;
  const totalSlides = props.data.length;
  const maxIndex = Math.max(0, totalSlides - slidesPerView);

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.scrollWidth / totalSlides;
      scrollRef.current.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
    scrollToIndex(newIndex);
  };

  // Autoplay
  useEffect(() => {
    if (isPaused || totalSlides <= slidesPerView) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused, maxIndex, slidesPerView, totalSlides]);

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex gap-12 pb-10">
          {props.data.map((item, index) => (
            <div
              key={index}
              className="shrink-0 text-center"
              style={{
                width: `calc((100% - ${
                  (slidesPerView - 1) * 3
                }rem) / ${slidesPerView})`,
              }}
            >
              <div
                className={cn(
                  "w-full flex flex-col justify-start mb-3",
                  props.className
                )}
              >
                <Image
                  src={item.image}
                  alt={item.name || "Image"}
                  width={300}
                  height={300}
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3C/svg%3E`}
                  sizes="(max-width: 300px) 100vw, 300px"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              {item.name && (
                <span className="text-sm text-center block">{item.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      {totalSlides > slidesPerView && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 z-10 focus:outline-none focus:ring-2 focus:ring-gray-400 cursor-pointer"
            aria-label="Previous slide"
          >
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 z-10 focus:outline-none focus:ring-2 focus:ring-gray-400 cursor-pointer"
            aria-label="Next slide"
          >
            <svg
              className="w-5 h-5 text-gray-700"
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
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-200",
                  currentIndex === index
                    ? "bg-gray-700 w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageSlider;
