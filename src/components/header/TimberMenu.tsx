import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type TimberLink = {
  name: string;
  children: {
    title: string;
    subTitle: string;
    href: string;
  }[];
};

const timberLinks: TimberLink[] = [
  {
    name: "Interior",
    children: [
      {
        title: "Engineered Flooring",
        subTitle: "KANDINSKY® | KANDINSKY Lite TimberWise®",
        href: "#",
      },
      {
        title: "Solid Timber Flooring",
        subTitle: "Wood and Timber",
        href: "#",
      },
    ],
  },
  {
    name: "Exterior",
    children: [
      {
        title: "Decking and Outdoor",
        subTitle: "Calvary Composite | Ez-Rail® ",
        href: "#",
      },
      {
        title: "Decking, Screen, Cladding, Soffit",
        subTitle: "Wood and Timber | Accoya®",
        href: "/products/accoya",
      },
      {
        title: "Decking, Screen, Cladding, Soffit",
        subTitle: "MOSO® | Reconstituted Bamboo",
        href: "#",
      },
    ],
  },
];

const TimberMenu = () => {
  return (
    <div>
      <h3 className="hidden lg:block font-semibold text-lg mb-6">Timber</h3>
      {timberLinks.map((link) => (
        <Disclosure as="div" key={link.name} className="-mx-3">
          {({ open }) => (
            <>
              <Disclosure.Button className="text-[#805C00] uppercase border-b border-b-[#805C00] flex w-full items-center justify-between py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
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
                {link.children.map((item, index) => (
                  <Disclosure.Button
                    key={`link-children-${index}`}
                    as="a"
                    href={item.href}
                    className="flex flex-col rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    <span className="text-[#805C00]">{item.title}</span>
                    <span>{item.subTitle}</span>
                  </Disclosure.Button>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
};
export default TimberMenu;
