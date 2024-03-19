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
  // benefits: {
  //   name: string;
  //   description: string;
  //   image: string;
  // }[];
  specs: {
    description: string;
    size: string;
  }[];
};

export const dassoApplications: DassoApplication[] = [
  {
    name: "Decking",
    icon: "https://calvarycarpentry-cloud-storage.sgp1.digitaloceanspaces.com/websites/products/dasso/decking/icon-decking.svg",
    description: "DassoCTECH Decking is a popular choice for exterior decking applications worldwide. It only requires two decking profiles, and all our deck planks also include our exclusive tongue & grooved end matched system to attach the planks seamlessly.",
    applicationImage: "https://calvarycarpentry-cloud-storage.sgp1.digitaloceanspaces.com/websites/products/dasso/decking/bg-decking.jpg",
    patterns: [
      {
        name: "Smooth + Big Waved",
        image: "https://calvarycarpentry-cloud-storage.sgp1.digitaloceanspaces.com/websites/products/dasso/decking/Smooth%20+%20Big%20Waved.jpg",
      },
      {
        name: "Smooth + V-grooved",
        image: "https://calvarycarpentry-cloud-storage.sgp1.digitaloceanspaces.com/websites/products/dasso/decking/Smooth%20+%20V-grooved.jpg",
      },
      {
        name: "",
        image: "https://calvarycarpentry-cloud-storage.sgp1.digitaloceanspaces.com/websites/products/dasso/decking/dassoCTECH%20Decking1.jpeg",
      },
      {
        name: "",
        image: "https://calvarycarpentry-cloud-storage.sgp1.digitaloceanspaces.com/websites/products/dasso/decking/dassoCTECH%20Decking3.jpeg",
      },
      {
        name: "",
        image: "https://calvarycarpentry-cloud-storage.sgp1.digitaloceanspaces.com/websites/products/dasso/decking/dassoCTECH%20Decking.jpeg",
      },
      {
        name: "",
        image: "https://calvarycarpentry-cloud-storage.sgp1.digitaloceanspaces.com/websites/products/dasso/decking/dassoCTECH%20Decking2.jpeg",
      },
    ],
    projects: [
      {
        name: "Star Terrace @ Star Vista",
        image: "https://calvarycarpentry-cloud-storage.sgp1.digitaloceanspaces.com/websites/products/dasso/decking/the%20star%20terrace.jpg",
      },
      {
        name: "Hyperlane Chengdu",
        image: "https://calvarycarpentry-cloud-storage.sgp1.digitaloceanspaces.com/websites/products/dasso/decking/Hyperlane%20Chengdu.jpeg",
      },
      {
        name: "International BizPark",
        image: "https://calvarycarpentry-cloud-storage.sgp1.digitaloceanspaces.com/websites/products/dasso/decking/Link%20International%20Business%20Park.png",
      },
      {
        name: "BCA Academy",
        image: "https://calvarycarpentry-cloud-storage.sgp1.digitaloceanspaces.com/websites/products/dasso/decking/BCA%20Academy.jpg",
      },
    ],
    specs: [
      {
        description: "DassoCTECH outdoor oiled Soffit, T&G end match， T-12",
        size: "L1829 x W100 x T12"
      },
    ],
  },
]
