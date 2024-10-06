import About from "./_components/About";
import Catalogue from "./_components/Catalogue";
import Features from "./_components/Features";
import Hero from "./_components/Hero";
import TechnicalData from "./_components/TechnicalData";

export default function Page() {
  return (
    <div>
      <Hero />
      <About />
      <Catalogue />
      <Features />
      <TechnicalData />
    </div>
  );
}
