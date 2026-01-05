import Hero from "./_components/Hero";
import EZRail from "./_components/EZrail";
import ColourSwatch from "./_components/ColourSwatch";
import KeyFeatures from "./_components/KeyFeatures";
import Downloads from "./_components/Downloads";
import ViewProjects from "./_components/ViewProjects";
import { Metadata } from "next";
import { getWebsiteAssetsURLEnv } from "@/lib/env";

const ASSETS_URL = getWebsiteAssetsURLEnv;

export const metadata: Metadata = {
  openGraph: {
    title:
      "Crafting Excellence in Timber: Discover Calvary Carpentry's Expert Woodworkers in Singapore",
    description:
      "Calvary Carpentry Pte Ltd is a timber specialist that deals with the supply and installation of wood fixtures. We offer our clients the highest standards of design, materials, and craftsmanship.",
    images: [
      {
        url: ASSETS_URL + "/websites/composite-decking/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Calvary Carpentry Pte Ltd",
      },
    ],
  },
};

export default function Page() {
  return (
    <div className="scroll-smooth">
      <Hero />
      <div className="space-y-12 sm:space-y-16 md:space-y-20">
        <EZRail />
        <ColourSwatch />
        <KeyFeatures />
        <Downloads />
        <ViewProjects />
      </div>
    </div>
  );
}
