import Hero from "./_components/hero";
import Introduction from "./_components/introduction";
import TimberDecking from "./_components/timber-decking";
import Discover from "./_components/discover";
import TimberInstallation from "./_components/timber-installation";

export default function Page() {
  return (
    <div>
      <Hero />
      <Introduction />
      <TimberDecking />
      <Discover />
      <TimberInstallation />
    </div>
  );
}
