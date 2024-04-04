import Hero from "./_components/Hero";
import Introduction from "./_components/Introduction";
import Features from "./_components/Features";
import AboutApplications from "./_components/AboutApplications";
import TechnicalData from "./_components/TechnicalData";
import Projects from "./_components/Projects";
import { redirect } from "next/navigation";

const country = process.env.NEXT_PUBLIC_COUNTRY;

export default function Page() {
  if (country !== "Singapore") {
    redirect("/404");
  }
  return (
    <main className="pt-[80px] space-y-8">
      <Hero />
      <Introduction />
      <Features />
      <TechnicalData />
      <AboutApplications />
      <Projects />
    </main>
  );
}
