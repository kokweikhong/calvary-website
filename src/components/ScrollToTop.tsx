"use client";

import { useState, useEffect } from "react";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        group relative w-14 h-14 rounded-full
        bg-white border-2 border-gray-300
        flex items-center justify-center
        shadow-lg hover:shadow-2xl
        hover:border-gray-900 hover:scale-110
        active:scale-95
        transition-all duration-300 ease-out
        cursor-pointer
        ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }
      `}
      aria-label="Scroll to top"
    >
      <div className="absolute inset-0 rounded-full bg-linear-to-br from-gray-50 to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <ChevronDoubleUpIcon className="w-6 h-6 text-gray-700 group-hover:text-gray-900 transition-colors duration-300" />
    </button>
  );
};

export default ScrollToTop;
