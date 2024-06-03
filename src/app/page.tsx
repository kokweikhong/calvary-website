import ClientsSlider from "@/components/ClientsSlider";
import Accdrediations from "@/components/home/Accdrediations";
import Features from "@/components/home/Features";
import Geography from "@/components/home/Geography";
import Hero from "@/components/home/Hero";
import Products from "@/components/home/Products";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import OurTeam from "@/components/OurTeam";
import { Metadata } from "next";

const ASSETS_URL = process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL;

export const metadata: Metadata = {
  title: "Premium Sustainable Timber & Decking Solutions | Calvary Carpentry",
  description:
    "Explore sustainable timber solutions for interior and outdoor projects. Discover award-winning materials like Accoya®, and Silverwood®. Connect with skilled artisans for bespoke timber floors and more.",
  openGraph: {
    title: "Premium Sustainable Timber & Decking Solutions | Calvary Carpentry",
    description:
      "Explore sustainable timber solutions for interior and outdoor projects. Discover award-winning materials like Accoya®, and Silverwood®. Connect with skilled artisans for bespoke timber floors and more.",
    images: [
      {
        url: `${ASSETS_URL}/projects/the-tembusu/the%20tembusu_1.jpg`,
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
        url: `${ASSETS_URL}/projects/the-tembusu/the%20tembusu_1.jpg`,
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
