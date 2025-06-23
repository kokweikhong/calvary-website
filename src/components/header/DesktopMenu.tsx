import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Fragment } from "react";
import { CountrySwitch, LinkItem } from "./Menu";
import { navLinks } from "@/constants/nav-links";

const popoverButtonNames = ["Products", "About Us", "Blog", "Projects"];

const COUNTRY = process.env.NEXT_PUBLIC_COUNTRY || "Singapore";

const DesktopMenu = () => {
  return (
    <>
      <Popover.Group className="hidden lg:flex lg:gap-x-12">
        <Popover className="flex items-center justify-center">
          {({ close }) => (
            <>
              <Popover.Button className="flex items-center justify-center gap-x-8 text-sm font-semibold leading-6 text-gray-900 focus:outline-none">
                {popoverButtonNames.map((name, index) => (
                  <Fragment key={index}>
                    <span>{name}</span>
                    <ChevronDownIcon
                      className="h-5 w-5 flex-none text-gray-400"
                      aria-hidden="true"
                    />
                  </Fragment>
                ))}
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 -translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-1"
              >
                <Popover.Panel className="absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5">
                  <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                    <div>
                      <Link
                        href={navLinks.interior}
                        onClick={() => close()}
                        className="flex items-center hover:text-gray-800 hover:bg-gray-200 focus:outline-none"
                      >
                        <h3 className="hidden lg:block font-semibold text-lg mb-6 p-2">
                          Interior
                        </h3>
                      </Link>
                      <div>
                        <ul className="space-y-4 [&_h4]:text-[#805C00]">
                          <LinkItem>
                            <Link
                              href={navLinks.champaca}
                              onClick={() => close()}
                            >
                              <h4 className="font-semibold text-base mb-1">
                                Interior Flooring
                              </h4>
                              <span>{`Champaca Wood`}</span>
                            </Link>
                          </LinkItem>
                          <LinkItem>
                            <Link
                              href={navLinks.kandinsky}
                              onClick={() => close()}
                            >
                              <h4 className="font-semibold text-base mb-1">
                                Engineered Flooring
                              </h4>
                              <span>{`KANDINSKY®`}</span>
                            </Link>
                          </LinkItem>
                          <LinkItem>
                            <Link
                              href={navLinks.woodAndTimber}
                              onClick={() => close()}
                            >
                              <h4 className="font-semibold text-base mb-1">
                                Solid Timber Flooring
                              </h4>
                              <span>Wood and Timber</span>
                            </Link>
                          </LinkItem>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <Link
                        href={navLinks.exterior}
                        onClick={() => close()}
                        className="flex items-center hover:text-gray-800 hover:bg-gray-200 focus:outline-none"
                      >
                        <h3 className="hidden lg:block font-semibold text-lg mb-6 p-2">
                          Exterior
                        </h3>
                      </Link>
                      <div>
                        <ul className="space-y-4 [&_h4]:text-[#805C00]">
                          <LinkItem>
                            <Link
                              href={navLinks.calvaryComposite}
                              onClick={() => close()}
                            >
                              <h4 className="font-semibold text-base mb-1">
                                Decking and Outdoor
                              </h4>
                              <span>{`Calvary Composite | Ez-Rail® `}</span>
                            </Link>
                          </LinkItem>
                          <LinkItem>
                            <Link
                              href={navLinks.accoya}
                              onClick={() => close()}
                            >
                              <h4 className="font-semibold text-base mb-1">
                                {`Acetylated Timber`}
                              </h4>
                              <span>{`Accoya®`}</span>
                            </Link>
                          </LinkItem>
                          <LinkItem>
                            <Link
                              href={navLinks.woodAndTimber}
                              onClick={() => close()}
                            >
                              <h4 className="font-semibold text-base mb-1">
                                {`Solid Wood`}
                              </h4>
                              <span>{`Wood and Timber`}</span>
                            </Link>
                          </LinkItem>
                          <LinkItem>
                            <Link
                              href={navLinks.onewood}
                              onClick={() => close()}
                            >
                              <h4 className="font-semibold text-base mb-1">
                                {`Reconstituted Timber`}
                              </h4>
                              <span>{`OneWood`}</span>
                            </Link>
                          </LinkItem>

                          {COUNTRY === "Singapore" && (
                            <LinkItem>
                              <Link
                                href={navLinks.dasso}
                                onClick={() => close()}
                              >
                                <h4 className="font-semibold text-base mb-1">
                                  {`Reconstituted Bamboo`}
                                </h4>
                                <span>{`dassoCTECH®`}</span>
                              </Link>
                            </LinkItem>
                          )}
                          {COUNTRY === "Malaysia" && (
                            <LinkItem>
                              <Link
                                href={navLinks.moso}
                                onClick={() => close()}
                              >
                                <h4 className="font-semibold text-base mb-1">
                                  {`Reconstituted Bamboo`}
                                </h4>
                                <span>{`MOSO®`}</span>
                              </Link>
                            </LinkItem>
                          )}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <Link
                        href={navLinks.maintenance}
                        onClick={() => close()}
                        className="flex items-center hover:text-gray-800 hover:bg-gray-200 focus:outline-none"
                      >
                        <h3 className="hidden lg:block font-semibold text-lg mb-6 p-2">
                          Maintenance
                        </h3>
                      </Link>
                      <div>
                        <ul className="space-y-4 [&_h4]:text-[#805C00]">
                          <LinkItem>
                            <Link href={navLinks.osmo} onClick={() => close()}>
                              <h4 className="font-semibold text-base mb-1">
                                Coating
                              </h4>
                              <span>{`OSMO®`}</span>
                            </Link>
                          </LinkItem>
                          <LinkItem>
                            <Link href={navLinks.silverwood} onClick={() => close()}>
                              <h4 className="font-semibold text-base mb-1">
                                {`Revitalisation Coating`}
                              </h4>
                              <span>{`Silverwood`}</span>
                            </Link>
                          </LinkItem>
                          <LinkItem>
                            <Link
                              href={navLinks.sandAndVanish}
                              onClick={() => close()}
                            >
                              <h4 className="font-semibold text-base mb-1 !text-black">
                                {`Sand & Vanish | Restoration`}
                              </h4>
                            </Link>
                          </LinkItem>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <ul className="space-y-4">
                        <LinkItem>
                          <Link href={navLinks.aboutUs} onClick={() => close()}>
                            <h4 className="font-semibold text-base mb-1 !text-black">
                              About Us
                            </h4>
                          </Link>
                        </LinkItem>
                        <LinkItem>
                          <Link href={navLinks.blog} onClick={() => close()}>
                            <h4 className="font-semibold text-base mb-1 !text-black">
                              Blog
                            </h4>
                          </Link>
                        </LinkItem>
                        <LinkItem>
                          <Link
                            href={navLinks.projects}
                            onClick={() => close()}
                          >
                            <h4 className="font-semibold text-base mb-1 !text-black">
                              {`Project References`}
                            </h4>
                          </Link>
                        </LinkItem>
                        <LinkItem>
                          <Link
                            href={navLinks.contactUs}
                            onClick={() => close()}
                          >
                            <h4 className="font-semibold text-base mb-1 !text-black">
                              {`Contact Us`}
                            </h4>
                          </Link>
                        </LinkItem>
                        <div className="p-2">
                          <CountrySwitch />
                        </div>
                      </ul>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </Popover.Group>

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
