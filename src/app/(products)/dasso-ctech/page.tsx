import { Metadata } from "next";
import { redirect } from "next/navigation";
import AboutApplications from "./_components/AboutApplications";
import Features from "./_components/Features";
import Hero from "./_components/Hero";
import Introduction from "./_components/Introduction";
import Projects from "./_components/Projects";
import TechnicalData from "./_components/TechnicalData";

export const metadata: Metadata = {
  title: "Sustainable Bamboo Decking and Cladding | Dasso CTECH",
  description:
    "Discover eco-friendly Dasso CTECH bamboo decking and cladding. Weather-resistant with a wood-like appearance, our products are designed for durability and style. Benefit from a 25-year warranty and our innovative FasTrak installation system.",
};

const country = process.env.NEXT_PUBLIC_COUNTRY;

export default function Page() {
  if (country !== "Singapore") {
    redirect("/404");
  }
  return (
    <main className="space-y-8">
      <Hero />
      <Introduction />
      <Features />
      <TechnicalData />
      <AboutApplications />
      <Projects />
    </main>
  );
}
