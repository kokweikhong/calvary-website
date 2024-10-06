import { Champaca } from "@/constants/champaca";
import Image from "next/image";

export default function About() {
  return (
    <div id="champaca-about" className="w-full">
      <div className="bg-[#DCC9A3] w-full py-4">
        <h2 className="font-montserrat text-center uppercase">
          Why Choose Champaca?
        </h2>
      </div>
      <div className="container-cp">
        <Image
          src={Champaca.about.introductionLandscapeImg}
          alt="Champaca Introduction"
          width={1920}
          height={1080}
          priority
          className="w-full h-[300px] object-cover"
        />
      </div>
      <div className="container-cp mt-4 flex flex-col space-y-4">
        <h3 className="text-[#A16448] font-medium text-center">
          Compound Solid Wood - with Teak Core
        </h3>
        <p>
          Compound Solid Flooring is a 3-layer cross-laminated solid teak
          structure. The concept was designed to provide better performance{" "}
          <span className="font-semibold">
            against termite, humidity and craftsmanship
          </span>{" "}
          while also retain the{" "}
          <span className="font-semibold">charm of real solid wood.</span> This
          product construction also allow us to use every part of a tree so we
          do not throw anything away.
        </p>
        <div className="flex flex-col justify-center items-center gap-y-4">
          <div className="flex flex-col justify-center items-center text-xs font-medium space-y-1">
            <a
              href="#champaca-catalogue"
              className="bg-[#397E00] text-white px-4 py-2 uppercase font-medium rounded-xl"
            >
              Champaca Catalogue
            </a>
            <span className="text-[#397E00] uppercase">
              Collections, patterns and more
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {Champaca.about.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex w-full md:w-auto justify-start gap-x-4 p-2"
              >
                <Image
                  src={benefit.img}
                  alt={benefit.title}
                  width={32}
                  height={32}
                  priority
                  className="w-8 h-8 object-cover"
                />
                <p className="text-left">{benefit.title}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center w-full gap-2">
            {Champaca.about.accrediationImgs.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt="Accrediation"
                width={32}
                height={32}
                priority
                className="w-auto h-8 object-cover"
              />
            ))}
          </div>

          <div className="flex flex-col md:flex-row md:gap-x-2">
            {Champaca.about.comparisons.map((comparison, index) => (
              <div
                key={index}
                className="md:w-1/2 flex flex-col gap-y-4 border border-[#A16448]"
              >
                <h3 className="text-[#A16448] font-medium text-center uppercase text-xl mt-4">
                  {comparison.title}
                </h3>
                <div className="flex justify-center items-center p-4">
                  <Image
                    src={comparison.mainImg}
                    alt="Main Image"
                    width={400}
                    height={400}
                    priority
                    className="w-auto h-64 object-cover"
                  />
                </div>
                <div className="flex gap-x-2 bg-[#FFFCF0] p-4 flex-1">
                  <div className="flex flex-col items-start justify-start gap-y-4 p-2">
                    <div className="flex flex-col items-start justify-start">
                      <h4 className="text-[#A16448] font-medium">
                        {comparison.description.title}
                      </h4>
                      <div>
                        <Image
                          src={comparison.secondImg}
                          alt="Second Image"
                          width={400}
                          height={400}
                          priority
                          className="w-auto h-40 object-cover"
                        />
                      </div>
                    </div>
                    {comparison.description.contents.map((content, index) => (
                      <div key={index} className="flex flex-col gap-y-2">
                        <h5 className="text-[#A16448] font-medium">
                          {`${index + 1}. ${content.title}`}
                        </h5>
                        <p className="pl-4">{content.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
