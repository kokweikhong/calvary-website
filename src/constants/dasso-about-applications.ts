import { getWebsiteAssetsURLEnv } from "@/lib/env";

const ASSETS_URL = getWebsiteAssetsURLEnv();

export type DassoApplication = {
  name: string;
  icon: string;
  description: string;
  applicationImage: string;
  patterns: {
    name: string;
    image: string;
  }[];
  projects: {
    name: string;
    image: string;
  }[];
  benefits: DassoBenefit[];
  specs: {
    description: string;
    size: string;
  }[];
};

export type DassoBenefit = {
  name: string;
  description: string;
  image: string;
};

const END_MATCHED: DassoBenefit = {
  name: "End Matched",
  description: "Installation on or off joist",
  image: ASSETS_URL + "/websites/products/dasso/benefits/2-Side%20Grooved.svg",
};
const REVERSIBLE_FACES: DassoBenefit = {
  name: "Reversible Faces",
  description: "Customer choice for SMOOTH or REEDED surface",
  image:
    ASSETS_URL + "/websites/products/dasso/benefits/Reversible%20Faces.svg",
};
const TWO_SIDE_GROOVED: DassoBenefit = {
  name: "2-Side Grooved",
  description: "Customer choice for SMOOTH or REEDED surface",
  image: ASSETS_URL + "/websites/products/dasso/benefits/2-Side%20Grooved.svg",
};
const TERMITE_RESISTANCE: DassoBenefit = {
  name: "Termite Resistance",
  description: "Reticulitermes santonensis DC D(durable) [EN117]",
  image:
    ASSETS_URL + "/websites/products/dasso/benefits/Termite%20Resistance.svg",
};
const HARD_DURABLE: DassoBenefit = {
  name: "Hard & Durable",
  description: "Harder than any other hardwood [EN 1534]; Durability: Class 1",
  image:
    ASSETS_URL + "/websites/products/dasso/benefits/Hard%20&%20Durable.svg",
};
const FIRE_RESISTANCE: DassoBenefit = {
  name: "Fire Resistance",
  description: "Class A / Bf1-s1; can be easily applied in public projects",
  image: ASSETS_URL + "/websites/products/dasso/benefits/Fire%20Resistance.svg",
};
const MOULD_RESISTANCE: DassoBenefit = {
  name: "Mould Resistance",
  description: "Class 0 [DIN EN ISO 846:1997-10] [DIN EN 152:2011]",
  image:
    ASSETS_URL + "/websites/products/dasso/benefits/Mould%20Resistance.svg",
};
const STABLE_PRECISE: DassoBenefit = {
  name: "Stable & Precise",
  description: "No head side gap between boards with T&G end match",
  image:
    ASSETS_URL +
    "/websites/products/dasso/benefits/Biological%20durability.svg",
};
const ENVIRONMENT_FRIENDLY: DassoBenefit = {
  name: "Environment Friendly",
  description:
    "Bamboo ready for harvest after 4-6 years [compared to up to 100 years for hardwood species] - no deforestation",
  image:
    ASSETS_URL + "/websites/products/dasso/benefits/Carbon%20footprint.svg",
};
const BEAUTIFUL: DassoBenefit = {
  name: "Beautiful",
  description: "Classy IPE Color and wooden texture",
  image: ASSETS_URL + "/websites/products/dasso/benefits/Beautiful.svg",
};
const MATCH_INSTALLATION_CLADDING: DassoBenefit = {
  name: "Match Installation",
  description: "Available in Sheathing or Batten installation",
  image:
    ASSETS_URL +
    "/websites/products/dasso/benefits/Cladding-%20Match%20Installation.svg",
};
const MATCH_INSTALLATION_SOFFIT: DassoBenefit = {
  name: "Match Installation",
  description: "Available in Sheathing or Batten installation",
  image:
    ASSETS_URL +
    "/websites/products/dasso/benefits/Soffit-%20Match%20Installation.svg",
};

export const dassoDeckingBenefits: DassoBenefit[] = [
  END_MATCHED,
  REVERSIBLE_FACES,
  TWO_SIDE_GROOVED,
  TERMITE_RESISTANCE,
  HARD_DURABLE,
  FIRE_RESISTANCE,
  MOULD_RESISTANCE,
  STABLE_PRECISE,
  ENVIRONMENT_FRIENDLY,
];

export const dassoCladdingBenefits: DassoBenefit[] = [
  END_MATCHED,
  MATCH_INSTALLATION_CLADDING,
  BEAUTIFUL,
  TERMITE_RESISTANCE,
  HARD_DURABLE,
  FIRE_RESISTANCE,
  MOULD_RESISTANCE,
  STABLE_PRECISE,
  ENVIRONMENT_FRIENDLY,
];

export const dassoSoffitBenefits: DassoBenefit[] = [
  END_MATCHED,
  MATCH_INSTALLATION_SOFFIT,
  BEAUTIFUL,
  TERMITE_RESISTANCE,
  HARD_DURABLE,
  FIRE_RESISTANCE,
  MOULD_RESISTANCE,
  STABLE_PRECISE,
  ENVIRONMENT_FRIENDLY,
];

export const dassoApplications: DassoApplication[] = [
  {
    name: "Decking",
    icon: ASSETS_URL + "/websites/products/dasso/decking/icon-decking.svg",
    description:
      "DassoCTECH Decking is a popular choice for exterior decking applications worldwide. It only requires two decking profiles, and all our deck planks also include our exclusive tongue & grooved end matched system to attach the planks seamlessly.",
    applicationImage:
      ASSETS_URL + "/websites/products/dasso/decking/bg-decking.jpg",
    patterns: [
      {
        name: "Smooth + Big Waved",
        image:
          ASSETS_URL +
          "/websites/products/dasso/decking/Smooth%20+%20Big%20Waved.jpg",
      },
      {
        name: "Smooth + V-grooved",
        image:
          ASSETS_URL +
          "/websites/products/dasso/decking/Smooth%20+%20V-grooved.jpg",
      },
      {
        name: "",
        image:
          ASSETS_URL +
          "/websites/products/dasso/decking/dassoCTECH%20Decking1.jpeg",
      },
      {
        name: "",
        image:
          ASSETS_URL +
          "/websites/products/dasso/decking/dassoCTECH%20Decking3.jpeg",
      },
      {
        name: "",
        image:
          ASSETS_URL +
          "/websites/products/dasso/decking/dassoCTECH%20Decking.jpeg",
      },
      {
        name: "",
        image:
          ASSETS_URL +
          "/websites/products/dasso/decking/dassoCTECH%20Decking2.jpeg",
      },
    ],
    benefits: dassoDeckingBenefits,
    projects: [
      {
        name: "Star Terrace @ Star Vista",
        image:
          ASSETS_URL +
          "/websites/products/dasso/decking/the%20star%20terrace.jpg",
      },
      {
        name: "Hyperlane Chengdu",
        image:
          ASSETS_URL +
          "/websites/products/dasso/decking/Hyperlane%20Chengdu.jpeg",
      },
      {
        name: "International BizPark",
        image:
          ASSETS_URL +
          "/websites/products/dasso/decking/Link%20International%20Business%20Park.png",
      },
      {
        name: "BCA Academy",
        image:
          ASSETS_URL + "/websites/products/dasso/decking/BCA%20Academy.jpg",
      },
    ],
    specs: [
      {
        description: "DassoCTECH outdoor oiled Soffit, T&G end match，T-12",
        size: "L1829 x W100 x T12",
      },
      {
        description:
          "dassoCTECH outdoor oiled decking, Smooth & V-grooved, T-20",
        size: "L1850 x W137 x T20",
      },
    ],
  },
  {
    name: "Cladding",
    icon: ASSETS_URL + "/websites/products/dasso/cladding/icon-cladding.svg",
    description:
      "DassoCTECH Fused Bamboo Cladding is the great choice in commercial exterior siding, where it ages naturally like wood.",
    applicationImage:
      ASSETS_URL + "/websites/products/dasso/cladding/bg-cladding.jpg",
    patterns: [
      {
        name: "",
        image:
          ASSETS_URL +
          "/websites/products/dasso/cladding/dassoCTECH%20Cladding1.jpeg",
      },
      {
        name: "",
        image:
          ASSETS_URL +
          "/websites/products/dasso/cladding/dassoCTECH%20Cladding2.jpeg",
      },
      {
        name: "",
        image:
          ASSETS_URL +
          "/websites/products/dasso/cladding/dassoCTECH%20Cladding.jpeg",
      },
      {
        name: "",
        image:
          ASSETS_URL +
          "/websites/products/dasso/cladding/dassoCTECH%20Cladding3.jpeg",
      },
      {
        name: "",
        image:
          ASSETS_URL +
          "/websites/products/dasso/cladding/dassoCTECH%20Cladding4.jpeg",
      },
    ],
    benefits: dassoCladdingBenefits,
    projects: [
      {
        name: "NanXun Urban Exhibition Center",
        image:
          ASSETS_URL +
          "/websites/products/dasso/cladding/NanXun%20Urban%20Planning%20Exhibition%20Center.jpeg",
      },
      {
        name: "Four Season Courtyard Hotel",
        image:
          ASSETS_URL +
          "/websites/products/dasso/cladding/Four%20Season%20Ocean%20Courtyard%20Hotel.jpeg",
      },
      {
        name: "Qingpu Pinghe School",
        image:
          ASSETS_URL +
          "/websites/products/dasso/cladding/Qingpu%20Pinghe%20School.jpeg",
      },
    ],
    specs: [
      {
        description:
          "DassoCTECH Outdoor cladding with groove on length sides, oiled",
        size: "L1860 x 100 x 12",
      },
    ],
  },
  {
    name: "Soffit",
    icon: ASSETS_URL + "/websites/products/dasso/soffit/icon-soffit.svg",
    description:
      "DassoCTECH Soffit, Deck Skirting and Wainscoting are Pre-primed and specifically designed for interior and exterior use with no leaching and zero VOC.",
    applicationImage:
      ASSETS_URL + "/websites/products/dasso/soffit/bg-soffit.jpg",
    patterns: [
      {
        name: "",
        image:
          ASSETS_URL +
          "/websites/products/dasso/soffit/dassoCTECH%20Soffit.jpeg",
      },
      {
        name: "",
        image:
          ASSETS_URL +
          "/websites/products/dasso/soffit/dassoCTECH%20Soffit2.jpeg",
      },
      {
        name: "",
        image:
          ASSETS_URL +
          "/websites/products/dasso/soffit/dassoCTECH%20Soffit3.jpeg",
      },
      {
        name: "",
        image:
          ASSETS_URL +
          "/websites/products/dasso/soffit/dassoCTECH%20Soffit4.jpeg",
      },
    ],
    benefits: dassoSoffitBenefits,
    projects: [
      {
        name: "Surfers View",
        image:
          ASSETS_URL + "/websites/products/dasso/soffit/Surfers%20View.jpeg",
      },
      {
        name: "Nashville Subway Police (LEED Silver)",
        image:
          ASSETS_URL +
          "/websites/products/dasso/soffit/Nashville%20Subway%20Police,%20Davison%20County%20(LEED%20Silver%20).jpeg",
      },
      {
        name: "National University of Singapore",
        image: ASSETS_URL + "/websites/products/dasso/soffit/NUS.jpg",
      },
    ],
    specs: [
      {
        description: "DassoCTECH outdoor oiled Soffit, T&G end match，T-12",
        size: "L1829 x W100 x T12",
      },
    ],
  },
];
