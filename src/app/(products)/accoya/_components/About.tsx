import Image from "next/image";
import specification from "@/../../public/accoya/Accoya Specification.jpg";
import acetylated from "@/../../public/accoya/AcetylationProcessDiagram.jpg";

const About = () => {
  return (
    <section id="#acetylated-timber" className="container-cp mt-12">
      <h2 className="text-xl font-semibold text-center mb-12">
        What is acetylated timber?
      </h2>
      <div className="mt-4 flex flex-col gap-y-2 justify-center">
        <Image src={acetylated} alt="Acetylation Process Diagram" priority />
        <span className="text-center text-sm">
          The process behind Acetylation.
        </span>
      </div>
      <p className="mt-4">
        By altering the modular structure of wood to resist water absorption, we
        ensure water and warping resistance. Our wood comes with a 50-year
        durability warranty, and boasts accreditations and certifications such
        as Cradle to Cradle, SGBC, LEED, termite-resistance, and Class 3 fire
        rating certifications
      </p>
      <div className="mt-4">
        <Image
          src={specification}
          alt="Accoya Specification"
          priority
          className="w-full"
        />
      </div>
    </section>
  );
};

export default About;
