import DefinitionsKeyTerms from "@/components/policy/DefinitionsKeyTerms";
import InformationPolicy from "@/components/policy/InformationPolicy";

export default function Page() {
  return (
    <main>
      <section className="bg-[#F5F5F5] h-screen max-h-screen relative">
        <div className="flex flex-col gap-y-[30px] h-full items-center justify-center">
          <h1 className="text-4xl">Privacy Policy</h1>
          <p className="text-xl">Updated December 22, 2022</p>
          <div className="flex flex-col gap-y-2 text-center">
            <a href="#content" className="border border-black px-4 py-2">
              Scroll Down
            </a>
            <span className="text-[11px]">Site Privacy Policy</span>
          </div>
        </div>
      </section>

      <section id="content" className="container-cp space-y-6">
        <div className="text-center space-y-4">
          <h2 className="text-xl">Privacy Policy</h2>
          <p>Updated At July 13th, 2023</p>
        </div>
        <div className="space-y-4">
          <p>
            Calvary Carpentry (“we,” “our,” or “us”) is committed to protecting
            your privacy. This Privacy Policy explains how your personal
            information is collected, used, and disclosed by Calvary Carpentry.
          </p>
          <p>
            This Privacy Policy applies to our website, and its associated
            subdomains (collectively, our “Service”) alongside our application,
            Calvary Carpentry. By accessing or using our Service, you signify
            that you have read, understood, and agree to our collection,
            storage, use, and disclosure of your personal information as
            described in this Privacy Policy and our Terms of Service.
          </p>
        </div>
      </section>

      <section className="mt-4 bg-[#F0F0F0] py-8">
        <DefinitionsKeyTerms />
      </section>
      <section>
        <InformationPolicy />
      </section>
    </main>
  );
}
