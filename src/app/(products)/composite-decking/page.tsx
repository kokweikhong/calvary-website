import Hero from "./_components/Hero"
import EZRail from "./_components/EZrail"
import ColourSwatch from "./_components/ColourSwatch"
import KeyFeatures from "./_components/KeyFeatures"
import Downloads from "./_components/Downloads"
import ViewProjects from "./_components/ViewProjects"

export default function Page() {
  return (
    <div className="[&>div]:mt-4 scroll-smooth">
      <Hero />
      <EZRail />
      <ColourSwatch />
      <KeyFeatures />
      <Downloads />
      <ViewProjects />
    </div>
  )
}
