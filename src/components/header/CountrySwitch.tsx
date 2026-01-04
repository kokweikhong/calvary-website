import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getCountryEnv } from "@/lib/env";

import myLogo from "@/../public/svgs/malaysia-round-icon.svg";
import sgLogo from "@/../public/svgs/singapore-round-icon.svg";

export const CountrySwitch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const country = getCountryEnv();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center p-1 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 cursor-pointer"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Switch country"
      >
        <Image
          src={country === "Malaysia" ? myLogo : sgLogo}
          alt={
            country === "Malaysia"
              ? "Calvary Carpentry Sdn Bhd"
              : "Calvary Carpentry Pte Ltd"
          }
          width={24}
          height={24}
        />
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg ring-1 ring-gray-900/5 z-50 animate-in fade-in-0 zoom-in-95 duration-200">
          <a
            href={
              country === "Malaysia"
                ? "https://calvarycarpentry.com"
                : "https://calvarycarpentry.com.my"
            }
            className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src={country === "Malaysia" ? sgLogo : myLogo}
              alt={
                country === "Malaysia"
                  ? "Calvary Carpentry Pte Ltd"
                  : "Calvary Carpentry Sdn Bhd"
              }
              width={24}
              height={24}
            />
            {/* width based on country */}
            <span className="whitespace-nowrap w-24 text-center">
              {country === "Malaysia" ? "Singapore" : "Malaysia"}
            </span>
          </a>
        </div>
      )}
    </div>
  );
};
