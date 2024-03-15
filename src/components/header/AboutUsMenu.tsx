import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type AboutUsLink = {
  name: string;
  children: {
    title: string;
    href: string;
  }[];
};

const aboutUsLinks: AboutUsLink[] = [
  {
    name: "Who Are We",
    children: [
      {
        title: "Team",
        href: "#",
      },
      {
        title: "Testimonials",
        href: "#",
      },
    ],
  },
  {
    name: "Project Reference",
    children: [
      {
        title: "All Projects",
        href: "/projects",
      },
      {
        title: "Residential",
        href: "#",
      },
      {
        title: "Commercial",
        href: "#",
      },
      {
        title: "Governmental",
        href: "#",
      },
    ],
  },
];

const AboutUsMenu = () => {
  return (
    <div>
      <h3 className="hidden lg:block font-semibold text-lg mb-6">About Us</h3>
      {aboutUsLinks.map((link, index) => (
        <Disclosure as="div" key={`about-us-link-${index}`} className="-mx-3">
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
                    {item.title}
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
export default AboutUsMenu;
