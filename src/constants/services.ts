import exteriorSvg from "@/../public/images/home/exterior.svg";
import interiorSvg from "@/../public/images/home/interior.svg";
import maintenanceSvg from "@/../public/images/home/maintenance.svg";

const country = process.env.NEXT_PUBLIC_COUNTRY || "Singapore";

type Service = {
  title: string;
  description: string;
  icon: any;
  href: string;
};

export const services: Service[] = [
  {
    title: "INTERIOR",
    description:
      "Discover the Perfect Interior Piece: Explore a Range of Timbers, Colors, and Patterns at Kandinsky®.",
    icon: interiorSvg,
    href: "/services/interior",
  },
  {
    title: "EXTERIOR",
    description: `Elevate Your Outdoor Projects with Premium Sustainable Materials: Accoya® and ${
      country === "Singapore" ? "dassoCTECH®" : "Bamboo"
    }, Trusted Choices of Architects and Landscapers.`,
    icon: exteriorSvg,
    href: "/services/exterior",
  },
  {
    title: "MAINTENANCE",
    description:
      "Revitalize Your Timber: From Treatments to Restoration. Connect with Our Specialists for Lasting Transformation. Discover Silverwood®",
    icon: maintenanceSvg,
    href: "/services/maintenance",
  },
];
