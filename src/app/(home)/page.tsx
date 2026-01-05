import ClientsSlider from "@/components/ClientsSlider";
import Accdrediations from "./_components/Accdrediations";
import Distributor from "./_components/Distributor";
import Features from "./_components/Features";
import Geography from "./_components/Geography";
import Hero from "./_components/Hero";
import Products from "./_components/Products";
import Services from "./_components/Services";
import Testimonials from "./_components/Testimonials";
import OurTeam from "@/components/OurTeam";
import { Metadata } from "next";

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
        url: `${ASSETS_URL}/websites/og-images/home.jpg`,
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
        url: `${ASSETS_URL}/websites/og-images/home.jpg`,
        width: 1200,
        height: 630,
        alt: "Calvary Carpentry",
      },
    ],
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ClientsSlider backgroundColor="black" iconColor="white" />
      <Features />
      <Distributor />
      <Services />
      <Products />
      <Accdrediations />
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <OurTeam />
      </div>
      <Testimonials />
      <div className="pb-8">
        <Geography />
      </div>
    </main>
  );
}
