import Link from "next/link";
import Image from "next/image";
import FeatureWeathering from "./FeatureWeathering";

type Feature = {
  title: string;
  description: string[];
  image: string;
};

const features: Feature[] = [
  {
    title: "Termite Resistance",
    description: [
      "DC D (EN117)",
      "Class 1 (AS 5604)",
    ],
    image: "https://calvarycarpentry-cloud-storage.sgp1.digitaloceanspaces.com/websites/products/dasso/benefits/Termite%20Resistance.svg",
  },
  {
    title: "Biological Durability",
    description: [
      "Class 1 (EN 350:2016)",
    ],
    image: "https://calvarycarpentry-cloud-storage.sgp1.digitaloceanspaces.com/websites/products/dasso/benefits/Biological%20durability.svg",
  },
  {
    title: "Carbon Footprint",
    description: [
      "-2.1 KG CO2 EQ",
    ],
    image: "https://calvarycarpentry-cloud-storage.sgp1.digitaloceanspaces.com/websites/products/dasso/benefits/Carbon%20footprint.svg",
  },
  {
    title: "Fire Resistance",
    description: [
      "B, s1, d0 (EN 13501-1)",
    ],
    image: "https://calvarycarpentry-cloud-storage.sgp1.digitaloceanspaces.com/websites/products/dasso/benefits/Fire%20Resistance.svg",
  },
  {
    title: "Mould Resistance",
    description: [
      "Class 0 (EN ISO 846)",
    ],
    image: "https://calvarycarpentry-cloud-storage.sgp1.digitaloceanspaces.com/websites/products/dasso/benefits/Mould%20Resistance.svg",
  },
  {
    title: "Release of Formaldehyde",
    description: [
      "E1 (0.17mg/L) (GB/T17657-2013)",
    ],
    image: "https://calvarycarpentry-cloud-storage.sgp1.digitaloceanspaces.com/websites/products/dasso/benefits/Release%20of%20formaldehyde.svg",
  },
];

const warrantySvg = "https://calvarycarpentry-cloud-storage.sgp1.digitaloceanspaces.com/websites/products/dasso/warrantry.svg"

type Application = {
  name: string;
  description: string;
  icon: string;
  image: string;
};

const applications: Application[] = [
  {
    name: "Decking",
    description: "Superior choice for all exterior decking applications",
    icon: "https://calvarycarpentry-cloud-storage.sgp1.digitaloceanspaces.com/websites/products/dasso/decking/icon-decking.svg",
    image: "https://calvarycarpentry-cloud-storage.sgp1.digitaloceanspaces.com/websites/products/dasso/decking/bg-decking2.jpg",
  },
  {
    name: "Cladding",
    description: "Best for commercial exterior cladding",
    icon: "https://calvarycarpentry-cloud-storage.sgp1.digitaloceanspaces.com/websites/products/dasso/cladding/icon-cladding.svg",
    image: "https://calvarycarpentry-cloud-storage.sgp1.digitaloceanspaces.com/websites/products/dasso/cladding/bg-cladding2.jpg",
  },
  {
    name: "Soffit",
    description: "Designed for interior and exterior use",
    icon: "https://calvarycarpentry-cloud-storage.sgp1.digitaloceanspaces.com/websites/products/dasso/soffit/icon-soffit.svg",
    image: "https://calvarycarpentry-cloud-storage.sgp1.digitaloceanspaces.com/websites/products/dasso/soffit/bg-soffit2.jpg",
  },
];

const Features = () => {
  return (
    <section>
      <div className="w-full py-4 bg-dasso text-white mb-4">
        <h2 className="uppercase text-center w-full text-2xl font-medium">
          dasso ctech KEY FEATURES
        </h2>
      </div>

      <div className="container-cp space-y-4">
        <p>
          {`Dasso CTECH is a type of decking material that is made from bamboo, which is a highly sustainable and renewable resource. The material is created using a process called compression molding, which makes it highly durable and resistant to weather, mould, soft rot, and insects.`}
        </p>

        <div className="flex flex-col items-center justify-center gap-y-1">
          <Link href={"#"} className="bg-dasso text-white uppercase font-medium rounded-md py-2 px-4">
            Check out dasso ctech
          </Link>
          <span className="text-sm text-dasso uppercase">dasso ctech products</span>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center gap-y-4">
              <div>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={96}
                  height={96}
                  className="w-24 h-24" />
              </div>
              <div className="flex flex-col items-center gap-y-2">
                <h4 className="text-base font-medium">{feature.title}</h4>
                <ul className="flex flex-col gap-y-1 list-disc">
                  {feature.description.map((desc, index) => (
                    <li key={index} className="text-sm text-gray-700 list-inside">{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="bg-dasso text-white py-8 mt-4">
        <div className="container-cp">
          <div className="flex gap-x-4 items-center justify-center mb-4">
            <div>
              <Image
                src={warrantySvg}
                alt={"warranty"}
                width={96}
                height={96}
                className="w-24 h-24" />
            </div>
            <div className="flex flex-col gap-y-2">
              <h3 className="text-2xl font-medium">
                Warranty
              </h3>
              <p>25 years for  Commercial and residential</p>
            </div>
          </div>
          <p>
            {`Our Dasso CTECH decking products come with a 25-year warranty that covers defects in manufacturing, such as cracking, splitting, warping, and rotting.  While we are confident in the superior performance of our decking products, we understand that unexpected issues can arise. We offer this warranty to guarantee our commitment to providing a high-quality product. If you have any questions about our warranty, please don't hesitate to contact us.`}
          </p>
        </div>
      </div>

      <div className="container-cp flex flex-col gap-4 py-4">
        {applications.map((application, index) => (
          <div key={index} className="gap-x-2 grid grid-cols-[1fr_1fr]">
            <div className="h-auto w-full">
              <Image
                src={application.image}
                alt={application.name}
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="flex items-center gap-x-4">
                <div className="w-auto h-16">
                  <Image
                    src={application.icon}
                    alt={application.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-medium">{application.name}</h3>
              </div>
              <ul className="list-disc">
                <li className="list-inside">{application.description}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      <FeatureWeathering />


    </section>
  );
};

export default Features;
