import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import AboutUsMenu from "./AboutUsMenu";
import ContactUsMenu from "./ContactUsMenu";
import MaintenanceMenu from "./MaintenanceMenu";
import TimberMenu from "./TimberMenu";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const mobileLinks = [
  {
    name: "Timber",
    children: <TimberMenu />,
  },
  {
    name: "Maintenance",
    children: <MaintenanceMenu />,
  },
  {
    name: "About Us",
    children: <AboutUsMenu />,
  },
  {
    name: "Contact Us",
    children: <ContactUsMenu />,
  },
];

const MobileMenu = () => {
  return (
    <div className="mt-6 flow-root">
      <div className="-my-6 divide-y divide-gray-500/10">
        <div className="space-y-2 py-6">
          {mobileLinks.map((link) => (
            <Disclosure as="div" key={link.name} className="-mx-3">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                    {link.name}
                    <ChevronDownIcon
                      className={classNames(
                        open ? "rotate-180" : "",
                        "h-5 w-5 flex-none"
                      )}
                      aria-hidden="true"
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-2 space-y-2">
                    <div className="pl-4">{link.children}</div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
          <a
            href="#"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
          >
            Blog
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
