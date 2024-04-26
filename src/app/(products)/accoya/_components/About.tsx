import Image from "next/image";

const ASSETS_URL = process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL;

const acetylated = `${ASSETS_URL}/websites/accoya/AcetylationProcessDiagram.jpg`;
const specification = `${ASSETS_URL}/websites/accoya/Accoya%20Specification.jpg`;

const About = () => {
  return (
    <section id="#acetylated-timber" className="container-cp mt-12">
      <h2 className="text-xl font-semibold text-center mb-12">
        What is acetylated timber?
      </h2>
      <div className="mt-4 flex flex-col gap-y-2 justify-center">
        <Image
          src={acetylated}
          alt="Acetylation Process Diagram"
          width={1920}
          height={1080}
          priority
          className="w-full h-full object-cover"
        />
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
          width={1920}
          height={1080}
          priority
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default About;
