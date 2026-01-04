"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { navLinks } from "@/constants/nav-links";
import { CountrySwitch } from "./CountrySwitch";
import { getCountry } from "@/lib/env";

const DesktopMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const country = getCountry();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
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

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="hidden lg:flex lg:gap-x-12" ref={menuRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700 focus:outline-none transition-colors"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <span>Products</span>
          <ChevronDownIcon
            className={`h-5 w-5 flex-none text-gray-400 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>

        {/* About Us */}
        <Link
          href={navLinks.aboutUs}
          className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700 focus:outline-none transition-colors"
        >
          About Us
        </Link>

        {/* Blog */}
        <Link
          href={navLinks.blog}
          className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700 focus:outline-none transition-colors"
        >
          Blog
        </Link>

        {/* Project References */}
        <Link
          href={navLinks.projects}
          className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700 focus:outline-none transition-colors"
        >
          Project References
        </Link>

        {/* Dropdown Panel */}
        <div
          className={`absolute inset-x-0 top-0 -z-10 bg-gradient-to-b from-white to-gray-50 pt-14 shadow-2xl ring-1 ring-gray-900/10 transition-all duration-300 ${
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-1 pointer-events-none"
          }`}
        >
          <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
            <div className="grid grid-cols-3 gap-8 divide-x divide-gray-200">
              {/* Interior Column */}
              <div className="pr-8">
                <Link
                  href={navLinks.interior}
                  onClick={handleClose}
                  className="group mb-8 block"
                >
                  <h3 className="text-xl font-bold text-gray-900 border-b-2 border-transparent group-hover:border-[#805C00] pb-2 transition-all duration-200 inline-block">
                    Interior
                  </h3>
                </Link>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href={navLinks.champaca}
                      onClick={handleClose}
                      className="group block p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-200"
                    >
                      <h4 className="font-semibold text-sm text-[#805C00] group-hover:text-[#6b4d00] mb-1 transition-colors">
                        Interior Flooring
                      </h4>
                      <span className="text-xs text-gray-600 group-hover:text-gray-900">
                        Champaca Wood
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={navLinks.kandinsky}
                      onClick={handleClose}
                      className="group block p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-200"
                    >
                      <h4 className="font-semibold text-sm text-[#805C00] group-hover:text-[#6b4d00] mb-1 transition-colors">
                        Engineered Flooring
                      </h4>
                      <span className="text-xs text-gray-600 group-hover:text-gray-900">
                        KANDINSKY®
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={navLinks.woodAndTimber}
                      onClick={handleClose}
                      className="group block p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-200"
                    >
                      <h4 className="font-semibold text-sm text-[#805C00] group-hover:text-[#6b4d00] mb-1 transition-colors">
                        Solid Timber Flooring
                      </h4>
                      <span className="text-xs text-gray-600 group-hover:text-gray-900">
                        Wood and Timber
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Exterior Column */}
              <div className="px-8">
                <Link
                  href={navLinks.exterior}
                  onClick={handleClose}
                  className="group mb-8 block"
                >
                  <h3 className="text-xl font-bold text-gray-900 border-b-2 border-transparent group-hover:border-[#805C00] pb-2 transition-all duration-200 inline-block">
                    Exterior
                  </h3>
                </Link>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href={navLinks.calvaryComposite}
                      onClick={handleClose}
                      className="group block p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-200"
                    >
                      <h4 className="font-semibold text-sm text-[#805C00] group-hover:text-[#6b4d00] mb-1 transition-colors">
                        Decking and Outdoor
                      </h4>
                      <span className="text-xs text-gray-600 group-hover:text-gray-900">
                        Calvary Composite | Ez-Rail®
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={navLinks.accoya}
                      onClick={handleClose}
                      className="group block p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-200"
                    >
                      <h4 className="font-semibold text-sm text-[#805C00] group-hover:text-[#6b4d00] mb-1 transition-colors">
                        Acetylated Timber
                      </h4>
                      <span className="text-xs text-gray-600 group-hover:text-gray-900">
                        Accoya®
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={navLinks.woodAndTimber}
                      onClick={handleClose}
                      className="group block p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-200"
                    >
                      <h4 className="font-semibold text-sm text-[#805C00] group-hover:text-[#6b4d00] mb-1 transition-colors">
                        Solid Wood
                      </h4>
                      <span className="text-xs text-gray-600 group-hover:text-gray-900">
                        Wood and Timber
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={navLinks.onewood}
                      onClick={handleClose}
                      className="group block p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-200"
                    >
                      <h4 className="font-semibold text-sm text-[#805C00] group-hover:text-[#6b4d00] mb-1 transition-colors">
                        Reconstituted Timber
                      </h4>
                      <span className="text-xs text-gray-600 group-hover:text-gray-900">
                        OneWood
                      </span>
                    </Link>
                  </li>

                  {country === "Singapore" && (
                    <li>
                      <Link
                        href={navLinks.dasso}
                        onClick={handleClose}
                        className="group block p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-200"
                      >
                        <h4 className="font-semibold text-sm text-[#805C00] group-hover:text-[#6b4d00] mb-1 transition-colors">
                          Reconstituted Bamboo
                        </h4>
                        <span className="text-xs text-gray-600 group-hover:text-gray-900">
                          dassoCTECH®
                        </span>
                      </Link>
                    </li>
                  )}
                  {country === "Malaysia" && (
                    <li>
                      <Link
                        href={navLinks.moso}
                        onClick={handleClose}
                        className="group block p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-200"
                      >
                        <h4 className="font-semibold text-sm text-[#805C00] group-hover:text-[#6b4d00] mb-1 transition-colors">
                          Reconstituted Bamboo
                        </h4>
                        <span className="text-xs text-gray-600 group-hover:text-gray-900">
                          MOSO®
                        </span>
                      </Link>
                    </li>
                  )}
                </ul>
              </div>

              {/* Maintenance Column */}
              <div className="pl-8">
                <Link
                  href={navLinks.maintenance}
                  onClick={handleClose}
                  className="group mb-8 block"
                >
                  <h3 className="text-xl font-bold text-gray-900 border-b-2 border-transparent group-hover:border-[#805C00] pb-2 transition-all duration-200 inline-block">
                    Maintenance
                  </h3>
                </Link>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href={navLinks.osmo}
                      onClick={handleClose}
                      className="group block p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-200"
                    >
                      <h4 className="font-semibold text-sm text-[#805C00] group-hover:text-[#6b4d00] mb-1 transition-colors">
                        Coating
                      </h4>
                      <span className="text-xs text-gray-600 group-hover:text-gray-900">
                        OSMO®
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={navLinks.silverwood}
                      onClick={handleClose}
                      className="group block p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-200"
                    >
                      <h4 className="font-semibold text-sm text-[#805C00] group-hover:text-[#6b4d00] mb-1 transition-colors">
                        Revitalisation Coating
                      </h4>
                      <span className="text-xs text-gray-600 group-hover:text-gray-900">
                        Silverwood
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={navLinks.sandAndVanish}
                      onClick={handleClose}
                      className="group block p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-200"
                    >
                      <h4 className="font-semibold text-sm text-gray-900 group-hover:text-[#6b4d00] mb-1 transition-colors">
                        Sand & Vanish | Restoration
                      </h4>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center">
        <Link
          href={"/contact-us"}
          className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-800 focus:outline-none bg-gray-100 rounded-lg px-4 py-2"
        >
          Contact Us
        </Link>

        <div className="p-2 flex items-center ml-2">
          <CountrySwitch />
        </div>
      </div>
    </>
  );
};

export default DesktopMenu;
