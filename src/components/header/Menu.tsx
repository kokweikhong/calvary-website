import Link from "next/link";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Dialog, Disclosure } from "@headlessui/react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import myLogo from "@/../public/svgs/malaysia-round-icon.svg";
import sgLogo from "@/../public/svgs/singapore-round-icon.svg";
import calvaryLogo from "@/../public/black_horzontional_logo.png";

const COUNTRY = process.env.NEXT_PUBLIC_COUNTRY || "Singapore";

const kandinskyLink = "https://k-floors.com";
const woodAndTimberLink = "/wood-and-timber";
const calvaryCompositeLink = "/calvary-composite";
const accoyaLink = "/accoya";
const dassoLink = "/dasso";
const osmoLink = "/osmo";
const sandAndVanishLink = "/sand-and-vanish";
const aboutUsLink = "/about-us";
const blogLink = "/blog";
const projectsLink = "/projects";
const contactUsLink = "/contact-us";

const LinkItem = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <li className="hover:bg-gray-100 hover:font-bold transition-all duration-300 ease-in-out p-2 rounded-md">
      <Link href={href}>{children}</Link>
    </li>
  );
};

const CountrySwitch = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Image
          src={COUNTRY === "Malaysia" ? myLogo : sgLogo}
          alt="Malaysia"
          width={24}
          height={24}
        />
      </PopoverTrigger>
      <PopoverContent className="w-auto h-auto">
        <a
          href={
            COUNTRY === "Malaysia"
              ? "https://calvarycarpentry.com"
              : "https://calvarycarpentry.com.my"
          }
          className="block px-4 py-2 text-sm text-gray-700"
        >
          <Image
            src={COUNTRY === "Malaysia" ? sgLogo : myLogo}
            alt="Malaysia"
            width={24}
            height={24}
          />
        </a>
      </PopoverContent>
    </Popover>
  );
};

const Interior = () => {
  return (
    <ul className="space-y-4 [&_h4]:text-[#805C00]">
      <LinkItem href={kandinskyLink}>
        <h4 className="font-semibold text-base mb-1">Enginnered Flooring</h4>
        <span>{`KANDINSKY® | KANDINSKY Lite`}</span>
      </LinkItem>
      <LinkItem href={woodAndTimberLink}>
        <h4 className="font-semibold text-base mb-1">Solid Timber Flooring</h4>
        <span>Wood and Timber</span>
      </LinkItem>
    </ul>
  );
};

const Exterior = () => {
  return (
    <ul className="space-y-4 [&_h4]:text-[#805C00]">
      <LinkItem href={calvaryCompositeLink}>
        <h4 className="font-semibold text-base mb-1">Decking and Outdoor</h4>
        <span>{`Calvary Composite | Ez-Rail® `}</span>
      </LinkItem>
      <LinkItem href={accoyaLink}>
        <h4 className="font-semibold text-base mb-1">
          {`Decking, Screen, Cladding, Soffit`}
        </h4>
        <span>{`Wood and Timber | Accoya®`}</span>
      </LinkItem>
      {COUNTRY === "Singapore" && (
        <LinkItem href={dassoLink}>
          <h4 className="font-semibold text-base mb-1">
            {`Decking, Screen, Cladding, Soffit`}
          </h4>
          <span>{`dassoCTECH® | Reconstituted Bamboo `}</span>
        </LinkItem>
      )}
    </ul>
  );
};

const Maintenance = () => {
  return (
    <ul className="space-y-4 [&_h4]:text-[#805C00]">
      <LinkItem href={osmoLink}>
        <h4 className="font-semibold text-base mb-1">Coating</h4>
        <span>{`OSMO® | Silverwood`}</span>
      </LinkItem>
      <LinkItem href={sandAndVanishLink}>
        <h4 className="font-semibold text-base mb-1 !text-black">
          {`Sand & Vanish | Restoration`}
        </h4>
      </LinkItem>
    </ul>
  );
};

const OtherLinks = () => {
  return (
    <ul className="flex flex-col items-start justify-center space-y-4 [&_h4]:text-[#805C00]">
      <LinkItem href={aboutUsLink}>
        <h4 className="font-semibold text-base mb-1 !text-black">About Us</h4>
      </LinkItem>
      <LinkItem href={blogLink}>
        <h4 className="font-semibold text-base mb-1 !text-black">Blog</h4>
      </LinkItem>
      <LinkItem href={projectsLink}>
        <h4 className="font-semibold text-base mb-1 !text-black">
          {`Project References`}
        </h4>
      </LinkItem>
      <LinkItem href={contactUsLink}>
        <h4 className="font-semibold text-base mb-1 !text-black">
          {`Contact Us`}
        </h4>
      </LinkItem>
      <div className="p-2">
        <CountrySwitch />
      </div>
    </ul>
  );
};

export const DesktopMenu = () => {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
      <div>
        <h3 className="hidden lg:block font-semibold text-lg mb-6 p-2">
          Interior
        </h3>
        <div>
          <Interior />
        </div>
      </div>

      <div>
        <h3 className="hidden lg:block font-semibold text-lg mb-6 p-2">
          Exterior
        </h3>
        <div>
          <Exterior />{" "}
        </div>
      </div>

      <div>
        <h3 className="hidden lg:block font-semibold text-lg mb-6 p-2">
          Maintenance
        </h3>
        <div>
          <Maintenance />
        </div>
      </div>

      <div>
        <ul className="space-y-4">
          <LinkItem href={aboutUsLink}>
            <h4 className="font-semibold text-base mb-1 !text-black">
              About Us
            </h4>
          </LinkItem>
          <LinkItem href={blogLink}>
            <h4 className="font-semibold text-base mb-1 !text-black">Blog</h4>
          </LinkItem>
          <LinkItem href={projectsLink}>
            <h4 className="font-semibold text-base mb-1 !text-black">
              {`Project References`}
            </h4>
          </LinkItem>
          <LinkItem href={contactUsLink}>
            <h4 className="font-semibold text-base mb-1 !text-black">
              {`Contact Us`}
            </h4>
          </LinkItem>
          <div className="p-2">
            <CountrySwitch />
          </div>
        </ul>
      </div>
    </div>
  );
};

type MobileMenuProps = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
};

export const MobileMenu = (props: MobileMenuProps) => {
  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={props.mobileMenuOpen}
      onClose={props.setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Calvary Carpentry</span>
            <Image
              className="h-8 w-auto"
              src={calvaryLogo}
              alt="Calvary Carpentry Sdn Bhd"
              priority
            />
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => props.setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <Disclosure as="div" className="-mx-3">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                      Interior
                      <ChevronDownIcon
                        className={cn(
                          open ? "rotate-180" : "",
                          "h-5 w-5 flex-none",
                        )}
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 space-y-2">
                      <Interior />
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="-mx-3">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                      Exterior
                      <ChevronDownIcon
                        className={cn(
                          open ? "rotate-180" : "",
                          "h-5 w-5 flex-none",
                        )}
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 space-y-2">
                      <Exterior />{" "}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="-mx-3">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                      Maintenance
                      <ChevronDownIcon
                        className={cn(
                          open ? "rotate-180" : "",
                          "h-5 w-5 flex-none",
                        )}
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 space-y-2">
                      <Exterior />{" "}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <div className="[&_li]:!px-0">
                <OtherLinks />
              </div>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};
