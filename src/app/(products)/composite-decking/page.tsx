import Hero from "./_components/Hero";
import EZRail from "./_components/EZrail";
import ColourSwatch from "./_components/ColourSwatch";
import KeyFeatures from "./_components/KeyFeatures";
import Downloads from "./_components/Downloads";
import ViewProjects from "./_components/ViewProjects";
import { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    title:
      "Crafting Excellence in Timber: Discover Calvary Carpentry's Expert Woodworkers in Singapore",
    description:
      "Calvary Carpentry Pte Ltd is a timber specialist that deals with the supply and installation of wood fixtures. We offer our clients the highest standards of design, materials, and craftsmanship.",
    images: [
      {
        url: "https://calvarycarpentry-cloud-storage.sgp1.cdn.digitaloceanspaces.com/websites/composite-decking/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Calvary Carpentry Pte Ltd",
      },
    ],
  },
};

export default function Page() {
  return (
    <div className="[&>div]:mt-4 scroll-smooth">
      <Hero />
      <EZRail />
      <ColourSwatch />
      <KeyFeatures />
      <Downloads />
      <ViewProjects />
    </div>
  );
}
