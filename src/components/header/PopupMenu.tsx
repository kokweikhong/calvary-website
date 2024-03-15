import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import AboutUsMenu from "./AboutUsMenu";
import ContactUsMenu from "./ContactUsMenu";
import MaintenanceMenu from "./MaintenanceMenu";
import TimberMenu from "./TimberMenu";

const PopupMenu = () => {
  return (
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
        <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-10 px-6 py-10 lg:px-8 xl:gap-x-8">
          <TimberMenu />
          <MaintenanceMenu />
          <AboutUsMenu />
          <ContactUsMenu />
          {/*           {products.map((item) => (
            <div
              key={item.name}
              className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <item.icon
                  className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                  aria-hidden="true"
                />
              </div>
              <a
                href={item.href}
                className="mt-6 block font-semibold text-gray-900"
              >
                {item.name}
                <span className="absolute inset-0" />
              </a>
              <p className="mt-1 text-gray-600">{item.description}</p>
            </div>
          ))}
  */}{" "}
        </div>
      </Popover.Panel>
    </Transition>
  );
};

export default PopupMenu;
