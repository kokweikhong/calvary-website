import Image from "next/image";

const ASSETS_URL = process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL;

// fences.jpg
// trellis.jpg
// decking.jpg
// stairs.jpg
const installationIcons: { name: string; img: string }[] = [
  {
    name: "Fences",
    img: `${ASSETS_URL}/websites/wood-and-timber/timber-installation-icons/fences.jpg`,
  },
  {
    name: "Trellis",
    img: `${ASSETS_URL}/websites/wood-and-timber/timber-installation-icons/trellis.jpg`,
  },
  {
    name: "Decking",
    img: `${ASSETS_URL}/websites/wood-and-timber/timber-installation-icons/decking.jpg`,
  },
  {
    name: "Stairs",
    img: `${ASSETS_URL}/websites/wood-and-timber/timber-installation-icons/stairs.jpg`,
  },
];

const TimberInstallation = () => {
  return (
    <div className="container-cp pt-4 pb-8">
      <div>
        <h2 className="text-2xl font-semibold font-montserrat text-center mt-10">
          Where Are Timber Decking Installed?
        </h2>
        <p className="text-center text-gray-600 font-light font-montserrat text-lg mt-2">
          Explore Our Popular Timber Installations.
        </p>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {installationIcons.map((icon, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-24 h-24 relative">
                  <Image
                    src={icon.img}
                    alt="icon"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <p className="text-center text-gray-600 font-light font-montserrat text-lg mt-2">
                  {icon.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimberInstallation;
