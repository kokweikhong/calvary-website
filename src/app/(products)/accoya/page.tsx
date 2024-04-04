import About from "@/app/(products)/accoya/_components/About";
import ColourSwatches from "@/app/(products)/accoya/_components/ColourSwatches";
import Features from "@/app/(products)/accoya/_components/Features";
import Features2 from "@/app/(products)/accoya/_components/Features2";
import Hero from "@/app/(products)/accoya/_components/Hero";
import TechnicalData from "@/app/(products)/accoya/_components/TechnicalData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accoya® | Premium Sustainable Timber | Calvary Carpentry",
  description:
    "Discover Accoya® wood, the sustainable, durable, and non-toxic timber choice for exterior applications like decking, cladding, and joinery1. With a 25-year warranty, Accoya® is acetylated for superior water and warp resistance, termite-proof, and comes with a range of certifications. Ideal for eco-friendly construction with a touch of natural beauty.",
};

export default function Page() {
  return (
    <main className="pt-[80px]">
      <Hero />
      <About />
      <Features />
      <Features2 />
      <ColourSwatches />
      <TechnicalData />
    </main>
  );
}
