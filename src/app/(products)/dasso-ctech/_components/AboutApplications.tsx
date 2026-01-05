import { dassoApplications } from "@/constants/dasso-about-applications";
import ImageSlider from "./ImageSlider";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Benefits from "./Benefits";

const AboutApplications = () => {
  return (
    <div className="space-y-16 sm:space-y-20 py-8">
      {dassoApplications.map((app) => (
        <div key={app.name} className="space-y-6 sm:space-y-8">
          <div className="w-full bg-gradient-to-r from-dasso to-dasso/90 text-white text-center py-6 sm:py-8 shadow-lg">
            <h2 className="uppercase text-xl sm:text-2xl md:text-3xl font-bold px-4 tracking-wide">{`About ${app.name}`}</h2>
          </div>

          <div className="container-cp space-y-8 sm:space-y-10">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
              <div className="w-full lg:w-3/5">
                <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border-4 border-white">
                  <Image
                    src={app.applicationImage}
                    alt={`About ${app.name}`}
                    width={600}
                    height={400}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='800'%20height='600'%3E%3Crect%20width='800'%20height='600'%20fill='%23bcbcbc'%3E%3C/rect%3E%3C/svg%3E`}
                    sizes="(max-width: 800px) 100vw, 800px"
                    className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="w-full lg:w-2/5 space-y-5 bg-gray-50 rounded-xl p-6 sm:p-8 shadow-md">
                <div className="flex flex-wrap gap-4 items-center pb-4 border-b-2 border-dasso/20">
                  <div className="h-20 sm:h-24 md:h-28 w-auto bg-white rounded-lg p-2 shadow-sm">
                    <Image
                      src={app.icon}
                      alt={`About ${app.name}`}
                      width={200}
                      height={200}
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='200'%20height='200'%3E%3Crect%20width='200'%20height='200'%20fill='%23bcbcbc'%3E%3C/rect%3E%3C/svg%3E`}
                      sizes="(max-width: 200px) 100vw, 200px"
                      className="w-auto h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-dasso">
                    {app.name}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {app.description}
                </p>
              </div>
            </div>

            <div className="w-full bg-gradient-to-b from-gray-50 to-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <ImageSlider data={app.patterns} className="h-16 sm:h-20" />
            </div>
          </div>

          <hr className="border-t-2 border-gray-200" />

          <div className="space-y-6">
            <h3 className="text-center font-semibold text-lg sm:text-xl md:text-2xl">{`${app.name} Project Reference`}</h3>
            <div className="container-cp flex flex-wrap gap-6 sm:gap-8 justify-center">
              {app.projects.map((project) => (
                <div
                  key={project.name}
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="w-full aspect-square rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300 h-32 sm:h-40 md:h-48">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={200}
                      height={200}
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='200'%20height='200'%3E%3Crect%20width='200'%20height='200'%20fill='%23bcbcbc'%3E%3C/rect%3E%3C/svg%3E`}
                      sizes="(max-width: 200px) 100vw, 200px"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-center text-xs sm:text-sm font-medium text-gray-700">
                    {project.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-t-2 border-gray-200" />

          <div className="w-full space-y-6">
            <h3 className="text-center font-semibold text-lg sm:text-xl md:text-2xl">
              Benefits
            </h3>
            <Benefits data={app.benefits} />
          </div>

          <div className="container-cp overflow-x-auto">
            <table className="w-full min-w-[500px] border-collapse shadow-md rounded-lg overflow-hidden">
              <thead>
                <tr>
                  <th className="uppercase bg-dasso text-white py-3 sm:py-4 px-4 text-left text-sm sm:text-base font-semibold w-3/5">
                    Description
                  </th>
                  <th className="uppercase bg-dasso text-white py-3 sm:py-4 px-4 text-left text-sm sm:text-base font-semibold">
                    Size
                  </th>
                </tr>
              </thead>
              <tbody>
                {app.specs.map((spec, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-3 sm:py-4 px-4 text-sm sm:text-base text-gray-700">
                      {spec.description}
                    </td>
                    <td className="py-3 sm:py-4 px-4 text-sm sm:text-base text-gray-700">
                      {spec.size}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutApplications;
