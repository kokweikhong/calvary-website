import About from "@/components/accoya/About";
import ColourSwatches from "@/components/accoya/ColourSwatches";
import Features from "@/components/accoya/Features";
import Features2 from "@/components/accoya/Features2";
import Hero from "@/components/accoya/Hero";
import TechnicalData from "@/components/accoya/TechnicalData";

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
