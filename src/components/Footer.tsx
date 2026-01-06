import Image from "next/image";
import Link from "next/link";
import horiLogo from "../../public/white_horzontional_logo.png";
import facebook from "../../public/images/footer/facebook.svg";
import gmap from "../../public/images/footer/gmap.svg";
import linkedin from "../../public/images/footer/linkedin.svg";
import phone from "../../public/images/footer/phone.svg";
import whatsapp from "../../public/images/footer/whatsapp.svg";
import youtube from "../../public/images/footer/youtube.svg";
import instagram from "../../public/images/footer/instagram.svg";
import { whatsappNumber } from "@/constants/misc";
import email from "../../public/images/footer/email.svg";
import phoneNumber from "../../public/images/footer/phone_number.svg";
import EnquiryForm from "./EnquiryForm";
import {
  footerCompanyDescription,
  footerCopyrightContent,
} from "@/constants/misc";
import { Toaster } from "sonner";

type Contact = {
  href: string;
  image: any;
  alt: string;
};

const contacts: Contact[] = [
  {
    href: "tel:+65 6684 4012",
    image: phone,
    alt: "phone",
  },
  {
    href: `https://wa.me/${whatsappNumber}`,
    image: whatsapp,
    alt: "whatsapp",
  },
  {
    href: "https://www.linkedin.com/company/calvary-carpentry",
    image: linkedin,
    alt: "linkedin",
  },
  {
    href: "https://maps.app.goo.gl/s7JTUK1tMrvm4nAW6",
    image: gmap,
    alt: "gmap",
  },
  {
    href: "https://www.youtube.com/@calvarycarpentry",
    image: youtube,
    alt: "youtube",
  },
  {
    href: "https://www.facebook.com/calvarycarpentry/",
    image: facebook,
    alt: "facebook",
  },
  {
    href: "https://www.instagram.com/calvarycarpentry/",
    image: instagram,
    alt: "instagram",
  },
];

const Footer = () => {
  return (
    <footer className="relative bg-linear-to-b from-gray-900 via-[#1F2126] to-black">
      <Toaster />

      {/* Decorative Top Border */}
      <div className="h-1 bg-linear-to-r from-green-500 via-blue-500 to-green-500"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Top Section - Logo & Description */}
          <div className="mb-12 lg:mb-16 text-center lg:text-left">
            <div className="inline-block mb-6 transform hover:scale-105 transition-transform duration-300">
              <div className="relative h-12 sm:h-14 w-48 sm:w-56">
                <Image
                  src={horiLogo}
                  alt="Calvary Carpentry"
                  fill
                  sizes="250px"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto lg:mx-0 text-sm sm:text-base">
              {footerCompanyDescription}
            </p>
          </div>

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 mb-12">
            {/* Contact Us Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider relative inline-block">
                  Contact Us
                  <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-linear-to-r from-green-500 to-blue-600"></div>
                </h3>
              </div>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {contacts.map((contact) => (
                  <a
                    key={contact.alt}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="absolute -inset-1 bg-linear-to-br from-green-500 to-blue-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1">
                      <div className="relative w-6 h-6 sm:w-7 sm:h-7">
                        <Image
                          src={contact.image}
                          alt={contact.alt}
                          fill
                          className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                        />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Enquiry Form Section */}
            <div id="contact-us-footer" className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider relative inline-block">
                  Enquiry Form
                  <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-linear-to-r from-green-500 to-blue-600"></div>
                </h3>
              </div>
              <EnquiryForm />
            </div>
          </div>

          {/* Location Section */}
          <div className="border-t border-gray-700 pt-10 mb-10">
            <div className="mb-8 text-center">
              <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider relative inline-block">
                Our Locations
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-linear-to-r from-green-500 to-blue-600"></div>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Malaysia Location */}
              <div className="bg-gray-800/50 rounded-xl p-6 sm:p-8 border border-gray-700 hover:border-green-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-green-500/10">
                <h4 className="text-lg font-bold text-white uppercase mb-4 flex items-center gap-2">
                  <span className="inline-block w-1.5 h-6 bg-linear-to-brom-green-500 to-blue-600 rounded-full"></span>
                  Malaysia
                </h4>
                <div className="space-y-3 text-gray-300 text-sm sm:text-base">
                  <p>Level 2</p>
                  <p>8, Jalan TS 6/9, Taman Perindustrian Subang,</p>
                  <p>47510 Subang Jaya, Selangor, Malaysia</p>

                  <div className="pt-4 space-y-3">
                    <a
                      href="mailto:msia@calvarycarpentry.com"
                      className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors duration-300 group"
                    >
                      <div className="relative w-5 h-5 shrink-0">
                        <Image
                          src={email}
                          alt="Email"
                          fill
                          className="w-full h-full object-contain group-hover:brightness-125 transition-all duration-300"
                        />
                      </div>
                      <span>msia@calvarycarpentry.com</span>
                    </a>
                    <a
                      href="tel:+60133001091"
                      className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors duration-300 group"
                    >
                      <div className="relative w-5 h-5 shrink-0">
                        <Image
                          src={phoneNumber}
                          alt="Phone"
                          fill
                          className="w-full h-full object-contain group-hover:brightness-125 transition-all duration-300"
                        />
                      </div>
                      <span>+60 13-300 1091</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Singapore Location */}
              <div className="bg-gray-800/50 rounded-xl p-6 sm:p-8 border border-gray-700 hover:border-blue-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/10">
                <h4 className="text-lg font-bold text-white uppercase mb-4 flex items-center gap-2">
                  <span className="inline-block w-1.5 h-6 bg-linear-to-b from-blue-500 to-green-600 rounded-full"></span>
                  Singapore
                </h4>
                <div className="space-y-3 text-gray-300 text-sm sm:text-base">
                  <p>66 Kampung Bugis, Level 7</p>
                  <p>Singapore 338987</p>

                  <div className="pt-4 space-y-3">
                    <a
                      href="mailto:sales@calvarycarpentry.com"
                      className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
                    >
                      <div className="relative w-5 h-5 shrink-0">
                        <Image
                          src={email}
                          alt="Email"
                          fill
                          className="w-full h-full object-contain group-hover:brightness-125 transition-all duration-300"
                        />
                      </div>
                      <span>sales@calvarycarpentry.com</span>
                    </a>
                    <a
                      href="tel:+6587767837"
                      className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
                    >
                      <div className="relative w-5 h-5 shrink-0">
                        <Image
                          src={phoneNumber}
                          alt="Phone"
                          fill
                          className="w-full h-full object-contain group-hover:brightness-125 transition-all duration-300"
                        />
                      </div>
                      <span>+65 8776 7837</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Support Links Section */}
          <div className="border-t border-gray-700 pt-10 mb-10">
            <div className="mb-6 text-center">
              <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider relative inline-block">
                Quick Links
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-linear-to-r from-green-500 to-blue-600"></div>
              </h3>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm sm:text-base inline-flex items-center gap-2 group"
                >
                  <span className="inline-block w-1 h-1 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/services/maintenance"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm sm:text-base inline-flex items-center gap-2 group"
                >
                  <span className="inline-block w-1 h-1 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Maintenance
                </Link>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm sm:text-base inline-flex items-center gap-2 group"
                >
                  <span className="inline-block w-1 h-1 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Blog
                </a>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm sm:text-base inline-flex items-center gap-2 group"
                >
                  <span className="inline-block w-1 h-1 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-gray-400 text-xs sm:text-sm">
              {footerCopyrightContent}
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-green-500 to-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-tl from-blue-500 to-green-600 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;
