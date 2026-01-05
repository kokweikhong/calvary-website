import Hero from "./_components/Hero";
import ContactForm from "./_components/ContactForm";
import Certifications from "./_components/Certifications";
import FindUs from "./_components/FindUs";

export default function Page() {
  return (
    <div className="space-y-0">
      <Hero />
      <ContactForm />
      <Certifications />
      <FindUs />
    </div>
  );
}
