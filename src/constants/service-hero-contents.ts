import { Exterior, Interior, Maintenance } from "@/components/svg/services";

const country = process.env.NEXT_PUBLIC_COUNTRY || "Singapore";

type ServiceHeroContent = {
  title: string;
  description: string;
  image: string;
  icon: any;
  buttonText: string;
  buttonSubText: string;
};

type ServiceHeroProps = {
  interior: ServiceHeroContent;
  exterior: ServiceHeroContent;
  maintenance: ServiceHeroContent;
};

export const serviceHeroContent: ServiceHeroProps = {
  interior: {
    title: "Interior",
    description:
      "Explore our range of premium engineered flooring and timber, ideal for exceptional interior design and structure.",
    image: "websites/services/interior-hero.jpg",
    icon: typeof Interior,
    buttonText: "Explore Interior",
    buttonSubText: "Engineered Wood | Solid Wood",
  },
  exterior: {
    title: "Exterior",
    description: `Explore our industry-grade sustainable materials: Accoya® and ${
      country === "Singapore" ? "dassoCTECH®" : "Bamboo"
    }, perfect for diverse architectural needs.`,
    image: "websites/services/exterior-hero.jpg",
    icon: typeof Exterior,
    buttonText: "Explore Exterior",
    buttonSubText: `Accoya® | ${
      country === "Singapore" ? "dassoCTECH®" : "MOSO®"
    } | Timber`,
  },
  maintenance: {
    title: "Maintenance",
    description:
      "Revitalise your timber: Discover treatments, restoration, and dedicated wood experts for lasting transformations.",
    image: "websites/services/maintenance-hero.jpg",
    icon: typeof Maintenance,
    buttonText: "Explore Maintenance",
    buttonSubText: "OSMO® | Silverwood ",
  },
};
