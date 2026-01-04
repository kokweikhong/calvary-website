"use client";

import Link from "next/link";
import Image from "next/image";
import calvaryLogo from "@/../public/black_horizontal_logo.svg";
import { XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { navLinks } from "@/constants/nav-links";
import { CountrySwitch } from "./CountrySwitch";
import { getCountryEnv } from "@/lib/env";

type MobileMenuProps = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
};

const MobileMenu = (props: MobileMenuProps) => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const country = getCountryEnv();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (props.mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [props.mobileMenuOpen]);

  const handleClose = () => {
    props.setMobileMenuOpen(false);
    setOpenSection(null);
  };

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  if (!props.mobileMenuOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Slide-in Panel */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto ${
          props.mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <Link href="/" onClick={handleClose} className="-m-1.5 p-1.5">
              <span className="sr-only">Calvary Carpentry</span>
              <Image
                src={calvaryLogo}
                alt="Calvary Carpentry Sdn Bhd"
                width={200}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={handleClose}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <nav className="space-y-2">
              {/* Products Accordion */}
              <div className="border-b border-gray-200 pb-2">
                <button
                  type="button"
                  onClick={() => toggleSection("products")}
                  className="flex w-full items-center justify-between py-3 text-base font-semibold text-gray-900 hover:text-[#805C00] transition-colors"
                >
                  <span>Products</span>
                  <ChevronDownIcon
                    className={`h-5 w-5 transition-transform duration-200 ${
                      openSection === "products" ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {/* Products Submenu */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openSection === "products"
                      ? "max-h-250 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-4 space-y-6 py-4">
                    {/* Interior Section */}
                    <div>
                      <Link
                        href={navLinks.interior}
                        onClick={handleClose}
                        className="block text-sm font-bold text-gray-900 mb-3 hover:text-[#805C00] transition-colors"
                      >
                        Interior
                      </Link>
                      <ul className="space-y-3 ml-3">
                        <li>
                          <Link
                            href={navLinks.champaca}
                            onClick={handleClose}
                            className="block text-sm hover:bg-gray-50 p-2 rounded-md transition-colors"
                          >
                            <div className="font-medium text-[#805C00]">
                              Interior Flooring
                            </div>
                            <div className="text-xs text-gray-600">
                              Champaca Wood
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={navLinks.kandinsky}
                            onClick={handleClose}
                            className="block text-sm hover:bg-gray-50 p-2 rounded-md transition-colors"
                          >
                            <div className="font-medium text-[#805C00]">
                              Engineered Flooring
                            </div>
                            <div className="text-xs text-gray-600">
                              KANDINSKY®
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={navLinks.woodAndTimber}
                            onClick={handleClose}
                            className="block text-sm hover:bg-gray-50 p-2 rounded-md transition-colors"
                          >
                            <div className="font-medium text-[#805C00]">
                              Solid Timber Flooring
                            </div>
                            <div className="text-xs text-gray-600">
                              Wood and Timber
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Exterior Section */}
                    <div>
                      <Link
                        href={navLinks.exterior}
                        onClick={handleClose}
                        className="block text-sm font-bold text-gray-900 mb-3 hover:text-[#805C00] transition-colors"
                      >
                        Exterior
                      </Link>
                      <ul className="space-y-3 ml-3">
                        <li>
                          <Link
                            href={navLinks.calvaryComposite}
                            onClick={handleClose}
                            className="block text-sm hover:bg-gray-50 p-2 rounded-md transition-colors"
                          >
                            <div className="font-medium text-[#805C00]">
                              Decking and Outdoor
                            </div>
                            <div className="text-xs text-gray-600">
                              Calvary Composite | Ez-Rail®
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={navLinks.accoya}
                            onClick={handleClose}
                            className="block text-sm hover:bg-gray-50 p-2 rounded-md transition-colors"
                          >
                            <div className="font-medium text-[#805C00]">
                              Acetylated Timber
                            </div>
                            <div className="text-xs text-gray-600">Accoya®</div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={navLinks.woodAndTimber}
                            onClick={handleClose}
                            className="block text-sm hover:bg-gray-50 p-2 rounded-md transition-colors"
                          >
                            <div className="font-medium text-[#805C00]">
                              Solid Wood
                            </div>
                            <div className="text-xs text-gray-600">
                              Wood and Timber
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={navLinks.onewood}
                            onClick={handleClose}
                            className="block text-sm hover:bg-gray-50 p-2 rounded-md transition-colors"
                          >
                            <div className="font-medium text-[#805C00]">
                              Reconstituted Timber
                            </div>
                            <div className="text-xs text-gray-600">OneWood</div>
                          </Link>
                        </li>

                        {country === "Singapore" && (
                          <li>
                            <Link
                              href={navLinks.dasso}
                              onClick={handleClose}
                              className="block text-sm hover:bg-gray-50 p-2 rounded-md transition-colors"
                            >
                              <div className="font-medium text-[#805C00]">
                                Reconstituted Bamboo
                              </div>
                              <div className="text-xs text-gray-600">
                                dassoCTECH®
                              </div>
                            </Link>
                          </li>
                        )}
                        {country === "Malaysia" && (
                          <li>
                            <Link
                              href={navLinks.moso}
                              onClick={handleClose}
                              className="block text-sm hover:bg-gray-50 p-2 rounded-md transition-colors"
                            >
                              <div className="font-medium text-[#805C00]">
                                Reconstituted Bamboo
                              </div>
                              <div className="text-xs text-gray-600">MOSO®</div>
                            </Link>
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Maintenance Section */}
                    <div>
                      <Link
                        href={navLinks.maintenance}
                        onClick={handleClose}
                        className="block text-sm font-bold text-gray-900 mb-3 hover:text-[#805C00] transition-colors"
                      >
                        Maintenance
                      </Link>
                      <ul className="space-y-3 ml-3">
                        <li>
                          <Link
                            href={navLinks.osmo}
                            onClick={handleClose}
                            className="block text-sm hover:bg-gray-50 p-2 rounded-md transition-colors"
                          >
                            <div className="font-medium text-[#805C00]">
                              Coating
                            </div>
                            <div className="text-xs text-gray-600">OSMO®</div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={navLinks.silverwood}
                            onClick={handleClose}
                            className="block text-sm hover:bg-gray-50 p-2 rounded-md transition-colors"
                          >
                            <div className="font-medium text-[#805C00]">
                              Revitalisation Coating
                            </div>
                            <div className="text-xs text-gray-600">
                              Silverwood
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={navLinks.sandAndVanish}
                            onClick={handleClose}
                            className="block text-sm hover:bg-gray-50 p-2 rounded-md transition-colors"
                          >
                            <div className="font-medium text-gray-900">
                              Sand & Vanish | Restoration
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Menu Items */}
              <Link
                href={navLinks.aboutUs}
                onClick={handleClose}
                className="block py-3 text-base font-semibold text-gray-900 hover:text-[#805C00] transition-colors border-b border-gray-200"
              >
                About Us
              </Link>

              <Link
                href={navLinks.blog}
                onClick={handleClose}
                className="block py-3 text-base font-semibold text-gray-900 hover:text-[#805C00] transition-colors border-b border-gray-200"
              >
                Blog
              </Link>

              <Link
                href={navLinks.projects}
                onClick={handleClose}
                className="block py-3 text-base font-semibold text-gray-900 hover:text-[#805C00] transition-colors border-b border-gray-200"
              >
                Project References
              </Link>

              <Link
                href={navLinks.contactUs}
                onClick={handleClose}
                className="block py-3 text-base font-semibold text-gray-900 hover:text-[#805C00] transition-colors border-b border-gray-200"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Footer with Country Switch */}
          <div className="border-t border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                Switch Country
              </span>
              <CountrySwitch />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
