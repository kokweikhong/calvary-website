import Image from "next/image";
import { ReactNode } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import myLogo from "@/../public/svgs/malaysia-round-icon.svg";
import sgLogo from "@/../public/svgs/singapore-round-icon.svg";

const COUNTRY = process.env.NEXT_PUBLIC_COUNTRY || "Singapore";

export const LinkItem = ({ children }: { children: ReactNode }) => {
  return (
    <li className="hover:bg-gray-100 hover:font-bold transition-all duration-300 ease-in-out p-2 rounded-md">
      {children}
    </li>
  );
};

export const CountrySwitch = () => {
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
