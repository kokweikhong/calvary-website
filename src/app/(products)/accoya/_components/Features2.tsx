import Image from "next/image";

const ASSETS_URL = process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL;

type Features2Props = {
  featureName: string;
  featureImage: string;
  applicationImage: string;
  applicationName: string;
  projectImage: string;
  features: string[];
};

const features2: Features2Props[] = [
  {
    featureName: "naturally insulating",
    featureImage: `${ASSETS_URL}/websites/accoya/key-features/Accoya-_Naturally%20insulating%20.svg`,
    applicationImage: `${ASSETS_URL}/websites/accoya/area-of-applications/Cladding%20Application.svg`,
    applicationName: "cladding",
    projectImage: `${ASSETS_URL}/websites/accoya/Naturally%20Insulating.jpg`,
    features: [
      "Offers improved insulation in comparison with commonly used hardwood and softwood species",
      "Ideal for applications where energy conservation is important",
    ],
  },
  {
    featureName: "retained strength & Hardness",
    featureImage: `${ASSETS_URL}/websites/accoya/key-features/Accoya-_Retained%20strength%20and%20hardness.svg`,
    applicationImage: `${ASSETS_URL}/websites/accoya/area-of-applications/Cladding%20Application.svg`,
    applicationName: "cladding",
    projectImage: `${ASSETS_URL}/websites/accoya/Retained%20Strength%20_%20Hardness.jpg`,
    features: [
      "The process does not compromise the wood’s strength",
      "Hardness is increased",
      "High strength to weight ratio makes it suitable for challenging applications",
    ],
  },
  {
    featureName: "Barefoot friendly",
    featureImage: `${ASSETS_URL}/websites/accoya/key-features/Accoya-_Barefoot%20friendly%20.svg`,
    applicationImage: `${ASSETS_URL}/websites/accoya/area-of-applications/Decking%20application.svg`,
    applicationName: "decking",
    projectImage: `${ASSETS_URL}/websites/accoya/Barefoot%20Friendly.jpg`,
    features: [
      "Ideal for all decking situations in extreme temperatures",
      "Low thermal gain",
      "Splinters are much less than other wood species when used for decking",
    ],
  },
  {
    featureName: "Excellent machinability",
    featureImage: `${ASSETS_URL}/websites/accoya/key-features/Accoya-_Excellent%20machinability-27.svg`,
    applicationImage: `${ASSETS_URL}/websites/accoya/area-of-applications/Screen%20Application.svg`,
    applicationName: "screen",
    projectImage: `${ASSETS_URL}/websites/accoya/Excellent%20Machinability.jpg`,
    features: ["Easy to machine and process", "No special tools are required"],
  },
  {
    featureName: "Insect barrier",
    featureImage: `${ASSETS_URL}/websites/accoya/key-features/Accoya-_Insect%20barrier.svg`,
    applicationImage: `${ASSETS_URL}/websites/accoya/area-of-applications/Cladding%20Application.svg`,
    applicationName: "cladding",
    projectImage: `${ASSETS_URL}/websites/accoya/P+A%20Accoya%20ceiling.jpg`,
    features: [
      "Indigestible to a wide range of insects, including termites",
      "Greatly reduced vulnerability",
    ],
  },
  {
    featureName: "sustainable source",
    featureImage: `${ASSETS_URL}/websites/accoya/key-features/Accoya-_From%20sustainable%20sources.svg`,
    applicationImage: `${ASSETS_URL}/websites/accoya/area-of-applications/Decking%20application.svg`,
    applicationName: "decking",
    projectImage: `${ASSETS_URL}/websites/accoya/Sustainable%20Source.jpeg`,
    features: [
      "From FSC® and other regionally certified woods",
      "Naturally renewable",
    ],
  },
];

const Features2 = () => {
  return (
    <div className="sm:container-cp py-6">
      <div className="gap-6 lg:grid lg:grid-cols-2">
        {features2.map((feature, index) => (
          <div
            key={`feature-${index}`}
            className="space-y-4 pb-2 sm:grid sm:grid-cols-2 sm:space-y-0"
          >
            <div className="w-full h-72">
              <Image
                src={feature.projectImage}
                alt={feature.featureName}
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-4 container-cp sm:flex sm:flex-col sm:items-start">
              <div className="flex items-center gap-x-2">
                <div className="w-12 h-12">
                  <Image
                    src={feature.featureImage}
                    alt={feature.featureName}
                    width={50}
                    height={50}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3>{feature.featureName.toUpperCase()}</h3>
              </div>
              <ul className="list-disc list-inside">
                {feature.features.map((feature, index) => (
                  <li key={`feature-${index}`} className="list-inside">
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-y-1 justify-center items-end ml-auto text-right sm:flex-1">
                <div className="w-12 h-12 ml-auto">
                  <Image
                    src={feature.applicationImage}
                    alt={feature.featureName}
                    width={50}
                    height={50}
                    className="object-cover w-full h-full"
                  />
                </div>
                <span className="text-sm">{feature.applicationName}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features2;
