import Hero from "./_components/Hero";
import Introduction from "./_components/Introduction";
import KeyFeatures from "./_components/KeyFeatures";
import Downloads from "./_components/Downloads";

export default function Page() {
  return (
    <div className="pb-8">
      <Hero />
      <Introduction />
      <KeyFeatures />
      <Downloads />
    </div>
  )
}
