import { dassoApplications } from "@/constants/dasso-about-applications";
import Image from "next/image";



const AboutApplications = () => {
  return (
    <div>
      {dassoApplications.map((app) => (
        <div key={app.name}>
          <div className="w-full bg-dasso text-white text-center py-4">
            <h2 className="uppercase text-3xl font-medium">{`About ${app.name}`}</h2>
          </div>

          <div className="container-cp">
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
              <div>
                <div className="flex gap-x-2 h-24 w-auto items-center">
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
                  <h3 className="text-2xl">{app.name}</h3>
                </div>
                <p>{app.description}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-evenly">
            {app.patterns.map((pattern) => (
              <div key={pattern.name} className="text-center flex flex-col items-center">
                <Image
                  src={pattern.image}
                  alt={pattern.name}
                  width={100}
                  height={100}
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='800'%20height='600'%3E%3Crect%20width='800'%20height='600'%20fill='%23bcbcbc'%3E%3C/rect%3E%3C/svg%3E`}
                  sizes="(max-width: 800px) 100vw, 800px"
                />
                <h3>{pattern.name}</h3>
              </div>
            ))}
          </div>

          <div>
            <h3>{`${app.name} Project Reference`}</h3>
            <div className="flex">
              {app.projects.map((project) => (
                <div key={project.name} className="w-full">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={200}
                    height={200}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='200'%20height='200'%3E%3Crect%20width='200'%20height='200'%20fill='%23bcbcbc'%3E%3C/rect%3E%3C/svg%3E`}
                    sizes="(max-width: 200px) 100vw, 200px"
                    className="w-auto h-full object-cover"
                  />
                  <h3>{project.name}</h3>
                </div>
              ))}
            </div>
          </div>

          <p>This is a simple application to demonstrate the use of React Router.</p>
        </div>
      ))}
    </div>
  );
}

export default AboutApplications;
