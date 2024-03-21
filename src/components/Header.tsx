"use client";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";
import MobileMenu from "./header/MobileMenu";
import PopupMenu from "./header/PopupMenu";
import { Popover as PO, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import calvaryLogo from "@/../public/black_horzontional_logo.png";
import myLogo from "@/../public/svgs/malaysia-round-icon.svg";
import sgLogo from "@/../public/svgs/singapore-round-icon.svg";

const country = process.env.NEXT_PUBLIC_COUNTRY;

const expandableLinks: string[] = [
  "Timber",
  "Maintenance",
  "About Us",
  "Contact Us",
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="isolate z-20 bg-white fixed left-0 top-0 w-full">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Calvary Carpentry Sdn Bhd</span>
            <Image
              className="h-8 w-auto"
              src={calvaryLogo}
              alt="Calvary Carpentry Sdn Bhd"
              priority
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {expandableLinks.map((link, index) => (
            <Popover key={`link-${index}`}>
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                {link}
              </Popover.Button>
              <PopupMenu />
            </Popover>
          ))}
          <a
            href="#"
            className="hidden lg:flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
          >
            Blog
          </a>
          <PO>
            <PopoverTrigger>
              <Image
                src={country === "Malaysia" ? myLogo : sgLogo}
                alt="Malaysia"
                width={24}
                height={24}
              />
            </PopoverTrigger>
            <PopoverContent className="w-auto h-auto">
              <a
                href={country === "Malaysia" ? "htts://calvarycarpentry.com" : "https://calvarycarpentry.com.my"}
                className="block px-4 py-2 text-sm text-gray-700"
              >

                <Image
                  src={country === "Malaysia" ? sgLogo : myLogo}
                  alt="Malaysia"
                  width={24}
                  height={24}
                />
              </a>
            </PopoverContent>
          </PO>
          <button
            type="button"
            className="hidden lg:flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
          >
          </button>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Calvary Carpentry Sdn Bhd</span>
              <Image
                className="h-8 w-auto"
                src={calvaryLogo}
                alt="Calvary Carpentry Sdn Bhd"
                priority
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <MobileMenu />
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
