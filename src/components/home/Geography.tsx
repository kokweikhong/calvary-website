import Image from "next/image";

import msiaIcon from "@/../public/images/home/Malaysia_icon.svg";
import sporeIcon from "@/../public/images/home/Singapore_icon.svg";
import map from "@/../public/images/home/map.jpeg";

type Location = {
  title: string;
  description: string;
  icon: any;
};

const locations: Location[] = [
  {
    title: "KLCC Office",
    description:
      "Colony Vipod KLCC, 6, Jalan Kia Peng, Kuala Lumpur, 50450 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",
    icon: msiaIcon,
  },
  {
    title: "Warehouse",
    description:
      "8, Jalan TS 6/9, Taman Perindustrian Subang, 47510 Subang Jaya, Selangor, Malaysia",
    icon: msiaIcon,
  },
  {
    title: "Singapore HQ",
    description: "66 Kampung Bugis, Level 7, Singapore 338987",
    icon: sporeIcon,
  },
  {
    title: "Showroom",
    description: "Marina square #03-207, Singapore 039594",
    icon: sporeIcon,
  },
];

const Geography = () => {
  return (
    <section className="mt-[50px]">
      <div className="container mx-auto sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2">
          <div className="w-full h-auto relative">
            <Image src={map} alt="map" className="w-full h-full" />
          </div>
          <div>
            <h2 className="text-center text-[20px] font-bold mt-[30px] text-headingDark">
              Find us now in Malaysia and Singapore!
            </h2>
            <div>
              {locations.map((location, index) => (
                <div
                  key={`location-${index}`}
                  className="grid grid-cols-[1fr_1fr_2fr] gap-4 mt-[30px]"
                >
                  <div className="h-[38px] w-auto min-w-[70px] flex-1 relative">
                    <Image
                      src={location.icon}
                      alt="location"
                      fill
                      className="w-full h-full"
                    />
                  </div>
                  <h3 className="text-[16px] font-bold">{location.title}</h3>
                  <p className="text-[14px]">{location.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Geography;
