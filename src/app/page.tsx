import ClientsSlider from "@/components/ClientsSlider";
import Accdrediations from "@/components/home/Accdrediations";
import Features from "@/components/home/Features";
import Geography from "@/components/home/Geography";
import Hero from "@/components/home/Hero";
import Products from "@/components/home/Products";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import OurTeam from "@/components/OurTeam";

export default function Home() {
  return (
    <main>
      <Hero />
      <ClientsSlider backgroundColor="black" iconColor="white" />
      <Features />
      <Services />
      <Products />
      <Accdrediations />
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <OurTeam />
      </div>
      <Testimonials />
      <Geography />
    </main>
  );
}
