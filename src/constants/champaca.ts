import { features } from "process";

const WEBSITE_ASSETS_URL = process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL;
const CHAMPACA_ASSETS_URL = `${WEBSITE_ASSETS_URL}/websites/champaca`;


type ChampacaBenefit = {
  title: string;
  img: string;
};

const champacaBenefitIconURL = `${CHAMPACA_ASSETS_URL}/benefits/icons`;

const champacaBenefits: ChampacaBenefit[] = [
  {
    title: "UV Lacquer Coating",
    img: `${champacaBenefitIconURL}/uv-lacquer-coating.png`,
  },
  {
    title: "Humidity Resistant",
    img: `${champacaBenefitIconURL}/humidity-resistant.png`,
  },
  {
    title: "Formaldehyde Free",
    img: `${champacaBenefitIconURL}/formaldehyde-free.png`,
  },
  {
    title: "Maximising Wood's Full Potential",
    img: `${champacaBenefitIconURL}/maximising-wood-full-potential.png`,
  },
  {
    title: "Termite Resistance",
    img: `${champacaBenefitIconURL}/termite-resistance.png`,
  },
  {
    title: "Quick Installation",
    img: `${champacaBenefitIconURL}/quick-installation.png`,
  },
  {
    title: "Boundless Designs and Craftsmanship",
    img: `${champacaBenefitIconURL}/boundless-designs-and-craftsmanship.png`,
  }
];

const accrediationURL = `${CHAMPACA_ASSETS_URL}/accrediation`;

type ChampacaComparison = {
  title: string;
  mainImg: string;
  secondImg: string;
  description: {
    title: string;
    contents: {
      title: string;
      description: string;
    }[];
  };
};

const champacaComparisons: ChampacaComparison[] = [
  {
    title: "Compound Solid Wood",
    mainImg: `${CHAMPACA_ASSETS_URL}/structure-cross-section-compound-wood.jpg`,
    secondImg: `${CHAMPACA_ASSETS_URL}/structure-desection-compound-timber.png`,
    description: {
      title: "The structure behind compound wood.",
      contents: [
        {
          title: "Lacquer Coating",
          description: "Strong matt lacquer coating which provides protection against wear and tear as well as spillage of liquids. Easy to maintain & clean and contains no harmful solvent."
        },
        {
          title: "Hardwood Wear Layer",
          description: "3mm/4mm Thick high-quality hardwood. If required, this layercan be sanded down at least 1-2 times."
        },
        {
          title: "Strength from the core",
          description: "Our third and fourth layers are constructed from high-quality teak; cross-laminated to provide high stability. The layers are impregnated with eco-friendly anti-termite and anti-molding solutions."
        }
      ]
    }
  },
  {
    title: "Engineered Wood",
    mainImg: `${CHAMPACA_ASSETS_URL}/structure-cross-section-engineering-floor.jpg`,
    secondImg: `${CHAMPACA_ASSETS_URL}/structure-desection-engineering.png`,
    description: {
      title: "The structure behind compound wood.",
      contents: [
        {
          title: "Lacquer Coating",
          description: "Strong matt lacquer coating which provides protection against wear and tear as well as spillage of liquids. Easy to maintain & clean and contains no harmful solvent."
        },
        {
          title: "Hardwood Wear Layer",
          description: "Thin layer of Hardwood glued on plywood."
        },
        {
          title: "Birch Plywood",
          description: "High-quality, multi-layered birch plywood."
        }
      ]
    }
  },
]

type CatalogueItem = {
  title: string;
  img: string;
};

const champacaPatternPlanks: CatalogueItem[] = [
  {
    title: "Random Length",
    img: `${CHAMPACA_ASSETS_URL}/patterns/planks-patterns/svg/random-length.svg`,
  },
  {
    title: "Random Width",
    img: `${CHAMPACA_ASSETS_URL}/patterns/planks-patterns/svg/random-width.svg`,
  },
  {
    title: "Herringbone",
    img: `${CHAMPACA_ASSETS_URL}/patterns/planks-patterns/svg/herringbone.svg`,
  },
  {
    title: "Chevron",
    img: `${CHAMPACA_ASSETS_URL}/patterns/planks-patterns/svg/chervon.svg`,
  },
]

const champacaPatternDesignParquets: CatalogueItem[] = [
  {
    title: "Mansion Weave",
    img: `${CHAMPACA_ASSETS_URL}/patterns/design-parquet/svg/mansion-weave.svg`,
  },
  {
    title: "Hexagon Weave",
    img: `${CHAMPACA_ASSETS_URL}/patterns/design-parquet/svg/hexagon-weave.svg`,
  },
  {
    title: "Hexagon",
    img: `${CHAMPACA_ASSETS_URL}/patterns/design-parquet/svg/hexagon.svg`,
  },
  {
    title: "Freeform Modular",
    img: `${CHAMPACA_ASSETS_URL}/patterns/design-parquet/svg/freeform-modular.svg`,
  },
  {
    title: "Waldorf",
    img: `${CHAMPACA_ASSETS_URL}/patterns/design-parquet/svg/waldorf.svg`,
  },
  {
    title: "Triangle",
    img: `${CHAMPACA_ASSETS_URL}/patterns/design-parquet/svg/triangle.svg`,
  },
  {
    title: "Golden Ratio",
    img: `${CHAMPACA_ASSETS_URL}/patterns/design-parquet/svg/golden-raito.svg`,
  },
  {
    title: "Sakura",
    img: `${CHAMPACA_ASSETS_URL}/patterns/design-parquet/svg/sakura.svg`,
  },

];

const champacaPatternDesignPalaces: CatalogueItem[] = [
  {
    title: "Versailles",
    img: `${CHAMPACA_ASSETS_URL}/patterns/design-palace/svg/versailles.svg`,
  },
  {
    title: "Buckingham",
    img: `${CHAMPACA_ASSETS_URL}/patterns/design-palace/svg/buckingham.svg`,
  },
  {
    title: "Windsor",
    img: `${CHAMPACA_ASSETS_URL}/patterns/design-palace/svg/windsor.svg`,
  },
  {
    title: "Amber",
    img: `${CHAMPACA_ASSETS_URL}/patterns/design-palace/svg/amber.svg`,
  },
]

const champacaCollections: CatalogueItem[] = [
  {
    title: "Versailles",
    img: `${CHAMPACA_ASSETS_URL}/collections/versailles.jpg`,
  },
  {
    title: "Riverstones",
    img: `${CHAMPACA_ASSETS_URL}/collections/riverstones.jpg`,
  },
  {
    title: "End Grains",
    img: `${CHAMPACA_ASSETS_URL}/collections/end-grains.jpg`,
  },
  {
    title: "Terroir",
    img: `${CHAMPACA_ASSETS_URL}/collections/terroir.jpg`,
  },
]

const champacaTextures: CatalogueItem[] = [
  {
    title: "Linen",
    img: `${CHAMPACA_ASSETS_URL}/texture/linen.jpg`,
  },
  {
    title: "Select Planks",
    img: `${CHAMPACA_ASSETS_URL}/texture/select-planks.jpg`,
  },
  {
    title: "Wide Planks",
    img: `${CHAMPACA_ASSETS_URL}/texture/wide-planks.jpg`,
  },
  {
    title: "Freeform",
    img: `${CHAMPACA_ASSETS_URL}/texture/freeform.jpg`,
  },
]

const champacaColourOaks: CatalogueItem[] = [
  {
    title: "Eggshell",
    img: `${CHAMPACA_ASSETS_URL}/colours/oak/eggshell-oak.jpg`,
  },
  {
    title: "Mont Blanc",
    img: `${CHAMPACA_ASSETS_URL}/colours/oak/mont-blanc.jpg`,
  },
  {
    title: "Zafari",
    img: `${CHAMPACA_ASSETS_URL}/colours/oak/zafari.jpg`,
  },
  {
    title: "Rose Brown",
    img: `${CHAMPACA_ASSETS_URL}/colours/oak/rose-brown.jpg`,
  },
  {
    title: "Lunar",
    img: `${CHAMPACA_ASSETS_URL}/colours/oak/lunar.jpg`,
  },
  {
    title: "Arctic",
    img: `${CHAMPACA_ASSETS_URL}/colours/oak/arctic.jpg`,
  },
  {
    title: "Cashmere",
    img: `${CHAMPACA_ASSETS_URL}/colours/oak/cashmere.jpg`,
  },
  {
    title: "Graphite",
    img: `${CHAMPACA_ASSETS_URL}/colours/oak/graphite.jpg`,
  },
]

const champacaColourTeaks: CatalogueItem[] = [
  {
    title: "Natural Teak",
    img: `${CHAMPACA_ASSETS_URL}/colours/teak/natural-teak.jpg`,
  },
  {
    title: "Silver Teak",
    img: `${CHAMPACA_ASSETS_URL}/colours/teak/silver-teak.jpg`,
  },
  {
    title: "Cinnamon Teak",
    img: `${CHAMPACA_ASSETS_URL}/colours/teak/cinnamon-teak.jpg`,
  },
  {
    title: "Brandy",
    img: `${CHAMPACA_ASSETS_URL}/colours/teak/brandy.jpg`,
  },
  // {
  //     title: "Ivory",
  //     img: `${CHAMPACA_ASSETS_URL}/colours/teak/ivory.jpg`,
  // },
]

const champacaColourRareFinds: CatalogueItem[] = [
  {
    title: "Hinoki",
    img: `${CHAMPACA_ASSETS_URL}/colours/rare-finds/hinoki.jpg`,
  },
  {
    title: "Maple",
    img: `${CHAMPACA_ASSETS_URL}/colours/rare-finds/maple.jpg`,
  },
  {
    title: "Ash",
    img: `${CHAMPACA_ASSETS_URL}/colours/rare-finds/ash.jpg`,
  },
  {
    title: "Cherry",
    img: `${CHAMPACA_ASSETS_URL}/colours/rare-finds/cherry.jpg`,
  },
  {
    title: "Mahogany",
    img: `${CHAMPACA_ASSETS_URL}/colours/rare-finds/mahogany-1.jpg`,
  },
  {
    title: "Iron Wood (Pyinkado)",
    img: `${CHAMPACA_ASSETS_URL}/colours/rare-finds/mahogany-2.jpg`,
  },
  {
    title: "Asian Walnut (Rokfa)",
    img: `${CHAMPACA_ASSETS_URL}/colours/rare-finds/asian-walnut-rokfa.jpg`,
  },
  {
    title: "American Walnut",
    img: `${CHAMPACA_ASSETS_URL}/colours/rare-finds/american-walnut.jpg`,
  },
]

const champacaGrades: CatalogueItem[] = [
  {
    title: "Select (AB)",
    img: `${CHAMPACA_ASSETS_URL}/grades/select-ab.jpg`,
  },
  {
    title: "Classic (ABC)",
    img: `${CHAMPACA_ASSETS_URL}/grades/classic-abc.jpg`,
  },
  {
    title: "Rustic (CD)",
    img: `${CHAMPACA_ASSETS_URL}/grades/rustic-cd.jpg`,
  },
]

const champacaDownloads: CatalogueItem[] = [
  {
    title: "Champaca Brochure",
    img: `${CHAMPACA_ASSETS_URL}/downloads/champaca-brochure-2024.pdf`,
  },
  {
    title: "Champaca Catalogue",
    img: `${CHAMPACA_ASSETS_URL}/downloads/champaca-catalogue-calvary.pdf`,
  },
  {
    title: "Care Instructions and Maintenance",
    img: `${CHAMPACA_ASSETS_URL}/downloads/care-instructions-and-maintenance.pdf`,
  },
  {
    title: "Champaca Technical Data Compound Solid Flooring",
    img: `${CHAMPACA_ASSETS_URL}/downloads/champaca-technical-data-compound-solid-flooring.pdf`,
  },
  {
    title: "Champaca Technical Data Engineered Wood Flooring",
    img: `${CHAMPACA_ASSETS_URL}/downloads/champaca-technical-data-engineered-wood-flooring.pdf`,
  },
  // {
  //   title: "Champaca Technical Data",
  //   img: `${CHAMPACA_ASSETS_URL}/downloads/champaca-technical-data.pdf`,
  // },
  {
    title: "Champaca Warranty Brochure",
    img: `${CHAMPACA_ASSETS_URL}/downloads/champaca-warranty-supply-and-Install.pdf`,
  },
]

type ChampacaFeature = {
  title: string
  img: string
  icon: string
  contents: string[]
}


const champacaFeatures: ChampacaFeature[] = [
  {
    title: "Humidity Resistant",
    img: `${CHAMPACA_ASSETS_URL}/benefits/humdity-resistant.jpg`,
    icon: `${champacaBenefitIconURL}/humidity-resistant.png`,
    contents: [
      "Prevents cupping, warping, shrinkage, and molding",
      "Features a Teak wood center core balancer for superior performance against termites and humidity",
      "Allows minimal expansion—only 0.3-0.4mm in response to humidity, unlike solid timber"
    ]
  },
  {
    title: "Boundless Designs and Craftsmanship",
    img: `${CHAMPACA_ASSETS_URL}/benefits/boundless-designs-and-craftsmanship.jpg`,
    icon: `${champacaBenefitIconURL}/boundless-designs-and-craftsmanship.png`,
    contents: [
      "We work closely with our customers from the design stage to bring their dream projects to life.",
      "With incredible flexibility and a wide range of timber patterns and designs, we offer exceptional craftsmanship in timber solutions.",
    ]
  },
  {
    title: "Formaldehyde Free",
    img: `${CHAMPACA_ASSETS_URL}/benefits/formaldehyde-free.jpg`,
    icon: `${champacaBenefitIconURL}/formaldehyde-free.png`,
    contents: [
      "F**** Formaldehyde standards / Low VOC (JIS A 1460 : 2015)",
    ]
  },
  {
    title: "Termite Resistance",
    img: `${CHAMPACA_ASSETS_URL}/benefits/termite-resistance-updated.jpg`,
    icon: `${champacaBenefitIconURL}/termite-resistance.png`,
    contents: [
      "Champaca Compound Solid has been treated with ACQ H3 - Termite Resistance (Alkaline Copper Quaternary).",
    ]
  },
  {
    title: "Sourcing & Milling",
    img: `${CHAMPACA_ASSETS_URL}/benefits/sourcing-and-milling.jpg`,
    icon: `${champacaBenefitIconURL}/fsc.png`,
    contents: [
      "Raw materials sourced from sustainably managed forestry",
      "Mill our lumber with minimal waste possible",
    ]
  },
  {
    title: "Maximising Wood’s Full Potential",
    img: `${CHAMPACA_ASSETS_URL}/benefits/maximising-wood-full-potential.jpg`,
    icon: `${champacaBenefitIconURL}/maximising-wood-full-potential.png`,
    contents: [
      "We utilize every offcut to create our cross-laminated Teak Finger Joint ‘Compound Solid Wood Structure.",
      "Teak, whether in small or large pieces, excels in resisting moisture and termites.",
    ]
  },
]


export const Champaca = {
  logoWhite: `${CHAMPACA_ASSETS_URL}/champaca-logo-white.svg`,
  heroImg: `${CHAMPACA_ASSETS_URL}/champaca-header.jpg`,
  pdfIcon: `${CHAMPACA_ASSETS_URL}/pdf2.svg`,
  about: {
    introductionLandscapeImg: `${CHAMPACA_ASSETS_URL}/introduction-landscape.jpg`,
    benefits: champacaBenefits,
    accrediationImgs: [
      `${accrediationURL}/fsc2.svg`,
      `${accrediationURL}/faculty-of-foresty-2.svg`,
      `${accrediationURL}/faculty-of-foresty.svg`,
      `${accrediationURL}/sgs.svg`,
      `${accrediationURL}/bv.svg`,
    ],
    comparisons: champacaComparisons,
  },
  catalogue: {
    patterns: [
      {
        title: "Planks",
        items: champacaPatternPlanks,
      },
      {
        title: "Design Parquet",
        items: champacaPatternDesignParquets,
      },
      {
        title: "Design Palace",
        items: champacaPatternDesignPalaces,
      },
    ],
    collections: champacaCollections,
    textures: champacaTextures,
    colours: [
      {
        title: "Oak",
        items: champacaColourOaks,
      },
      {
        title: "Teak",
        items: champacaColourTeaks,
      },
      {
        title: "Rare Finds",
        items: champacaColourRareFinds,
      }
    ],
    grades: champacaGrades,
    downloads: champacaDownloads,
  },
  features: champacaFeatures,
};


