import Hero from "./_components/Hero";
import ContactForm from "./_components/ContactForm";
import FindUs from "./_components/FindUs";

export default function Page() {
  return (
    <div className="space-y-8">
      <Hero />
      <ContactForm />
      <FindUs />
    </div>
  );
}
