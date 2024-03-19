import { dassoApplications } from "@/constants/dasso-about-applications";
import ImageSlider from "./ImageSlider";
import Image from "next/image";
import { cn } from "@/lib/utils";


const AboutApplications = () => {
  return (
    <div className="space-y-12">
      {dassoApplications.map((app) => (
        <div key={app.name}>
          <div className="w-full bg-dasso text-white text-center py-4 mb-4">
            <h2 className="uppercase text-3xl font-medium">{`About ${app.name}`}</h2>
          </div>

          <div className="container-cp space-y-4">
            <div className="flex gap-x-8">
              <div className="w-full h-auto">
                <Image
                  src={app.applicationImage}
                  alt={`About ${app.name}`}
                  width={600}
                  height={400}
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='800'%20height='600'%3E%3Crect%20width='800'%20height='600'%20fill='%23bcbcbc'%3E%3C/rect%3E%3C/svg%3E`}
                  sizes="(max-width: 800px) 100vw, 800px"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-2/3">
                <div className="flex flex-wrap gap-2 items-center justify-start mb-4">
                  <div className="h-24 w-auto">
                    <Image
                      src={app.icon}
                      alt={`About ${app.name}`}
                      width={200}
                      height={200}
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='200'%20height='200'%3E%3Crect%20width='200'%20height='200'%20fill='%23bcbcbc'%3E%3C/rect%3E%3C/svg%3E`}
                      sizes="(max-width: 200px) 100vw, 200px"
                      className="w-auto h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl">{app.name}</h3>
                </div>
                <p>{app.description}</p>
              </div>
            </div>

            <div className="flex justify-evenly">
              <ImageSlider data={app.patterns} className="h-20" />
            </div>
          </div>

          <hr className="w-full" />


          <div className="mt-4 space-y-4 w-full">
            <h3 className="text-center font-medium text-lg">{`${app.name} Project Reference`}</h3>
            <div className="flex items-stretch justify-center w-full">
              {app.projects.map((project) => (
                <div key={project.name} className="w-full py-2 flex flex-col items-center justify-start">
                  <div className="w-full h-3/4">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={200}
                      height={200}
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='200'%20height='200'%3E%3Crect%20width='200'%20height='200'%20fill='%23bcbcbc'%3E%3C/rect%3E%3C/svg%3E`}
                      sizes="(max-width: 200px) 100vw, 200px"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-center text-sm">{project.name}</h3>
                </div>
              ))}
            </div>
          </div>

          <hr className="w-full h-1 my-4" />

          <div className="container-cp">
            <table className="w-full">
              <thead>
                <tr className="align-top">
                  <th className="uppercase bg-black text-white py-2 w-3/5">Description</th>
                  <th className="uppercase bg-black text-white py-2">Size</th>
                </tr>
              </thead>
              <tbody className="before:content-['.'] before:leading-3 before:text-white before:block">
                {app.specs.map((spec, index) => (
                  <tr key={index}>
                    <td className="relative py-2 pr-[5%] align-top">
                      <span className={cn(
                        "before:absolute before:h-[1px] before:bg-black before:top-0 before:left-0 before:w-[95%]",
                        "after:absolute after:h-[1px] after:bg-black after:bottom-0 after:left-0 after:w-[95%]")}>
                        {spec.description}
                      </span>
                    </td>
                    <td className="relative py-2 align-top">
                      <span className={cn(
                        "before:absolute before:h-[1px] before:bg-black before:top-0 before:left-0 before:w-full",
                        "after:absolute after:h-[1px] after:bg-black after:bottom-0 after:left-0 after:w-full")}>
                        {spec.size}
                      </span>
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
}

export default AboutApplications;
