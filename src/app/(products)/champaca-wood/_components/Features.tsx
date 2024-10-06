import { Champaca } from "@/constants/champaca";
import Image from "next/image";

export default function Features() {
  return (
    <div>
      <div className="bg-[#A06548] p-4">
        <h2 className="uppercase text-xl text-white font-montserrat text-center">
          Champaca WOOD KEY FEATURES
        </h2>
      </div>

      <div className="container-cp flex flex-col space-y-4 md:grid md:grid-cols-2 md:space-y-0 md:space-x-2">
        {Champaca.features.map((feature, index) => (
          <div
            key={index}
            className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:space-x-2 p-4"
          >
            <div>
              <Image
                src={feature.img}
                alt={feature.title}
                width={400}
                height={400}
                priority
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <div className="flex space-x-2 uppercase">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={32}
                  height={32}
                  priority
                  className="w-8 h-8 object-cover"
                />
                <p>{feature.title}</p>
              </div>
              <ul className="space-y-2">
                {feature.contents.map((content, index) => (
                  <li
                    key={index}
                    className="text-[#A16448] list-inside list-disc"
                  >
                    {content}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
