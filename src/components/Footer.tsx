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
    <footer className="bg-[#1F2126] py-[70px] sm:px-6 lg:px-8">
      <Toaster />
      <div className="text-white my-6 lg:grid lg:grid-cols-3 lg:gap-4 mx-auto max-w-7xl sm:px-6 lg:px-8 container">
        <div className="space-y-[30px] lg:col-span-full">
          <div className="h-[40px] w-[120px] relative">
            <Image
              src={horiLogo}
              alt="calvary carpentry sdn bhd"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full h-full object-cover"
            />
          </div>
          <p>{footerCompanyDescription}</p>
        </div>

        <div className="mt-[30px] lg:col-span-1">
          <div className="text-center py-4 border-b border-b-white">
            <h3 className="font-medium text-lg uppercase">Contact Us</h3>
          </div>
          <div className="flex flex-wrap gap-4 mt-[10px] justify-evenly">
            {contacts.map((contact) => (
              <a
                key={contact.alt}
                href={contact.href}
                className="inline-block mr-4"
              >
                <div className="h-[48px] w-[48px] relative">
                  <Image
                    src={contact.image}
                    alt={contact.alt}
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div id="contact-us-footer" className="mt-[30px] lg:col-span-2">
          <div className="text-center py-4 border-b border-b-white">
            <h3 className="font-medium text-lg uppercase">Enquiry Form</h3>
          </div>
          <EnquiryForm />
        </div>

        <div className="mt-[30px] lg:col-span-full lg:grid lg:grid-cols-2">
          <div className="text-center py-4 border-b border-b-white lg:col-span-full">
            <h3 className="font-medium text-lg uppercase">Location</h3>
          </div>
          <div className="space-y-4 mt-4">
            <h4 className="uppercase">Malaysia</h4>
            <p>Level 2</p>
            <p>8, Jalan TS 6/9, Taman Perindustrian Subang,</p>
            <p>47510 Subang Jaya, Selangor, Malaysia</p>
            <div>
              <div className="flex gap-2 items-center">
                <div className="h-[20px] w-[20px] relative">
                  <Image
                    src={email}
                    alt="email"
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
                <p>msia@calvarycarpentry.com</p>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <div className="h-[20px] w-[20px] relative">
                  <Image
                    src={phoneNumber}
                    alt="phone number"
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
                <p>+60 13-300 1091</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 mt-8 lg:mt-4">
            <h4 className="uppercase">Singapore</h4>
            <p>66 Kampung Bugis, level 7, Singapore 338987</p>
            <div>
              <div className="flex gap-2 items-center">
                <div className="h-[20px] w-[20px] relative">
                  <Image
                    src={email}
                    alt="email"
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
                <p>sales@calvarycarpentry.com</p>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <div className="h-[20px] w-[20px] relative">
                  <Image
                    src={phoneNumber}
                    alt="phone number"
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
                <p>+65 8776 7837</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[30px] lg:col-span-full">
          <div className="text-center py-4 border-b border-b-white">
            <h3 className="font-medium text-lg uppercase">Support</h3>
          </div>
          <div className="mt-4">
            <ul className="grid grid-cols-2">
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/services/maintenance">Maintenance</Link>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full text-center text-sm mt-8 lg:col-span-full">
          <p>{footerCopyrightContent}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
