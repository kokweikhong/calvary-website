function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type ContactUsLink = {
  title: string;
  href: string;
};

const contactUsLinks: ContactUsLink[] = [
  {
    title: "Locations",
    href: "#",
  },
  {
    title: "Contact Form",
    href: "#",
  },
];

const ContactUsMenu = () => {
  return (
    <div>
      <h3 className="hidden lg:block font-semibold text-lg mb-6">Contact Us</h3>
      {contactUsLinks.map((link, index) => (
        <a
          key={`contact-us-link-${index}`}
          href={link.href}
          className="text-[#805C00] uppercase border-b border-b-[#805C00] flex w-full items-center justify-between py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50"
        >
          {link.title}
        </a>
      ))}
    </div>
  );
};
export default ContactUsMenu;
