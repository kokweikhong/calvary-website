import About from "@/app/(products)/accoya/_components/About";
import ColourSwatches from "@/app/(products)/accoya/_components/ColourSwatches";
import Features from "@/app/(products)/accoya/_components/Features";
import Features2 from "@/app/(products)/accoya/_components/Features2";
import Hero from "@/app/(products)/accoya/_components/Hero";
import TechnicalData from "@/app/(products)/accoya/_components/TechnicalData";

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
