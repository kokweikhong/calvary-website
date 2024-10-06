import { Dialog, Disclosure } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import calvaryLogo from "@/../public/black_horizontal_logo.svg";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { CountrySwitch, LinkItem } from "./Menu";
import { cn } from "@/lib/utils";
import { navLinks } from "@/constants/nav-links";

const COUNTRY = process.env.NEXT_PUBLIC_COUNTRY || "Singapore";

type MobileMenuProps = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
};

const MobileMenu = (props: MobileMenuProps) => {
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
              className="h-12 w-auto"
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
                          "h-5 w-5 flex-none"
                        )}
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 space-y-2">
                      <ul className="space-y-4 [&_h4]:text-[#805C00]">
                        <LinkItem>
                          <Link
                            href={navLinks.interior}
                            onClick={() => props.setMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-base mb-1">
                              Interior
                            </h4>
                          </Link>
                        </LinkItem>
                        <LinkItem>
                          <Link
                            href={navLinks.champaca}
                            onClick={() => close()}
                          >
                            <h4 className="font-semibold text-base mb-1">
                              Compound Wood
                            </h4>
                            <span>{`Champaca Wood`}</span>
                          </Link>
                        </LinkItem>
                        <LinkItem>
                          <Link
                            href={navLinks.kandinsky}
                            onClick={() => props.setMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-base mb-1">
                              Enginnered Flooring
                            </h4>
                            <span>{`KANDINSKY® | KANDINSKY Lite`}</span>
                          </Link>
                        </LinkItem>
                        <LinkItem>
                          <Link
                            href={navLinks.woodAndTimber}
                            onClick={() => props.setMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-base mb-1">
                              Solid Timber Flooring
                            </h4>
                            <span>Wood and Timber</span>
                          </Link>
                        </LinkItem>
                      </ul>
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
                          "h-5 w-5 flex-none"
                        )}
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 space-y-2">
                      <ul className="space-y-4 [&_h4]:text-[#805C00]">
                        <LinkItem>
                          <Link
                            href={navLinks.exterior}
                            onClick={() => props.setMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-base mb-1">
                              Exterior
                            </h4>
                          </Link>
                        </LinkItem>
                        <LinkItem>
                          <Link
                            href={navLinks.calvaryComposite}
                            onClick={() => props.setMobileMenuOpen(false)}
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
                            onClick={() => props.setMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-base mb-1">
                              {`Decking, Screen, Cladding, Soffit`}
                            </h4>
                            <span>{`Wood and Timber | Accoya®`}</span>
                          </Link>
                        </LinkItem>
                        {COUNTRY === "Singapore" && (
                          <LinkItem>
                            <Link
                              href={navLinks.dasso}
                              onClick={() => props.setMobileMenuOpen(false)}
                            >
                              <h4 className="font-semibold text-base mb-1">
                                {`Decking, Screen, Cladding, Soffit`}
                              </h4>
                              <span>{`dassoCTECH® | Reconstituted Bamboo `}</span>
                            </Link>
                          </LinkItem>
                        )}
                        {COUNTRY === "Malaysia" && (
                          <LinkItem>
                            <Link
                              href={navLinks.moso}
                              onClick={() => props.setMobileMenuOpen(false)}
                            >
                              <h4 className="font-semibold text-base mb-1">
                                {`Decking, Screen, Cladding, Soffit`}
                              </h4>
                              <span>{`MOSO® | Reconstituted Bamboo `}</span>
                            </Link>
                          </LinkItem>
                        )}
                      </ul>
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
                          "h-5 w-5 flex-none"
                        )}
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 space-y-2">
                      <ul className="space-y-4 [&_h4]:text-[#805C00]">
                        <LinkItem>
                          <Link
                            href={navLinks.maintenance}
                            onClick={() => props.setMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-base mb-1">
                              Maintenance
                            </h4>
                          </Link>
                        </LinkItem>
                        <LinkItem>
                          <Link
                            href={navLinks.osmo}
                            onClick={() => props.setMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-base mb-1">
                              Coating
                            </h4>
                            <span>{`OSMO® | Silverwood`}</span>
                          </Link>
                        </LinkItem>
                        <LinkItem>
                          <Link
                            href={navLinks.sandAndVanish}
                            onClick={() => props.setMobileMenuOpen(false)}
                          >
                            <h4 className="font-semibold text-base mb-1 !text-black">
                              {`Sand & Vanish | Restoration`}
                            </h4>
                          </Link>
                        </LinkItem>
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <div className="[&_li]:!px-0">
                <ul className="space-y-4">
                  <LinkItem>
                    <Link
                      href={navLinks.aboutUs}
                      onClick={() => props.setMobileMenuOpen(false)}
                    >
                      <h4 className="font-semibold text-base mb-1 !text-black">
                        About Us
                      </h4>
                    </Link>
                  </LinkItem>
                  <LinkItem>
                    <Link
                      href={navLinks.blog}
                      onClick={() => props.setMobileMenuOpen(false)}
                    >
                      <h4 className="font-semibold text-base mb-1 !text-black">
                        Blog
                      </h4>
                    </Link>
                  </LinkItem>
                  <LinkItem>
                    <Link
                      href={navLinks.projects}
                      onClick={() => props.setMobileMenuOpen(false)}
                    >
                      <h4 className="font-semibold text-base mb-1 !text-black">
                        {`Project References`}
                      </h4>
                    </Link>
                  </LinkItem>
                  <LinkItem>
                    <Link
                      href={navLinks.contactUs}
                      onClick={() => props.setMobileMenuOpen(false)}
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
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default MobileMenu;
