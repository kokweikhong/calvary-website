import { Metadata } from "next";
import About from "./_components/About";
import Features from "./_components/Features";
import Hero from "./_components/Hero";
import Products from "./_components/Products";
import TechnicalData from "./_components/TechnicalData";

const ASSETS_URL = process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL;
const COUNTRY_URL = process.env.NEXT_PUBLIC_COUNTRY_URL;

export const metadata: Metadata = {
  metadataBase: new URL(`${COUNTRY_URL}`),
  title: "Premium Sustainable Timber & Decking Solutions | Calvary Carpentry",
  description:
    "Explore sustainable timber solutions for interior and outdoor projects. Discover award-winning materials like Accoya®, and Silverwood®. Connect with skilled artisans for bespoke timber floors and more.",
  openGraph: {
    title: "Premium Sustainable Timber & Decking Solutions | Calvary Carpentry",
    description:
      "Explore sustainable timber solutions for interior and outdoor projects. Discover award-winning materials like Accoya®, and Silverwood®. Connect with skilled artisans for bespoke timber floors and more.",
    images: [
      {
        url: `${ASSETS_URL}/websites/og-images/moso.jpg`,
        width: 1200,
        height: 630,
        alt: "Calvary Carpentry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `${ASSETS_URL}/websites/og-images/moso.jpg`,
        width: 1200,
        height: 630,
        alt: "Calvary Carpentry",
      },
    ],
  },
};

export default function Page() {
  return (
    <div>
      <Hero />
      <About />
      <Features />
      <Products />
      <TechnicalData />
    </div>
  );
}
