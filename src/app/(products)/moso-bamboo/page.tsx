import About from "./_components/About";
import Features from "./_components/Features";
import Hero from "./_components/Hero";
import Products from "./_components/Products";
import TechnicalData from "./_components/TechnicalData";

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
