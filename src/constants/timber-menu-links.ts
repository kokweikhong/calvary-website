const country = process.env.NEXT_PUBLIC_COUNTRY || "Singapore";

type TimberMenuLink = {
  name: string;
  children: {
    title: string;
    subTitle: string;
    href: string;
  }[];
};

export const timberMenuLinks: TimberMenuLink[] = [
  {
    name: "Interior",
    children: [
      {
        title: "Engineered Flooring",
        subTitle: "KANDINSKY® | KANDINSKY Lite TimberWise®",
        href: "#",
      },
      {
        title: "Solid Timber Flooring",
        subTitle: "Wood and Timber",
        href: "#",
      },
    ],
  },
  {
    name: "Exterior",
    children: [
      {
        title: "Decking and Outdoor",
        subTitle: "Calvary Composite | Ez-Rail® ",
        href: "#",
      },
      {
        title: "Decking, Screen, Cladding, Soffit",
        subTitle: "Wood and Timber | Accoya®",
        href: "/accoya",
      },
      {
        title: "Decking, Screen, Cladding, Soffit",
        subTitle:
          country === "Singapore"
            ? "dassoCTECH® | Reconstituted Bamboo"
            : "MOSO® | Reconstituted Bamboo",
        href:
          country === "Singapore" ? "/dasso-ctech" : "/moso",
      },
    ],
  },
];
