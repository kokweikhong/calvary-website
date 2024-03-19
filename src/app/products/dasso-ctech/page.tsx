import Hero from "@/components/dasso/Hero";
import Introduction from "@/components/dasso/Introduction";
import Features from "@/components/dasso/Features";
import AboutApplications from "@/components/dasso/AboutApplications";


export default function Page() {
  return (
    <main className="pt-[80px] space-y-8">
      <Hero />
      <Introduction />
      <Features />
      <AboutApplications />
    </main>
  );
}
