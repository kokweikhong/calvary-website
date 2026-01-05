import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import FeaturedArticles from "./_components/FeaturedArticles";
import TimberJourney from "./_components/TimberJourney";

export default function Page() {
  return (
    <div className="space-y-0">
      <Hero />
      <AboutUs />
      <FeaturedArticles />
      <TimberJourney />
    </div>
  );
}
