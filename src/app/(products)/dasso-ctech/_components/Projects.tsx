"use client";

import { Project } from "@/interfaces/project";
import { useQuery } from "@tanstack/react-query";
import myImageLoader from "@/lib/imageLoader";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

async function getProjects(): Promise<Project[]> {
  const response = await fetch(`/api/projects`);
  const data = (await response.json()) as Project[];
  const filteredData = data.filter((project) =>
    project.products.includes("dassoCTECH"),
  );

  return filteredData;
}

const Projects = () => {
  const [numberToLoad, setNumberToLoad] = useState(6);

  const { data: projects } = useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  return (
    <div className="bg-gray-200 py-8">
      <div className="container-cp my-4">
        <h2 className="text-2xl font-medium text-center uppercase">
          <span className="pt-4 border-t-2 border-t-black">
            View More Projects
          </span>
        </h2>
      </div>
      <div className="container-cp space-y-4 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-4">
        {projects?.slice(0, numberToLoad).map((project, index) => (
          <div key={`project-${index}`}>
            <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
              <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                {project.images && project.images.at(1) && (
                  <Image
                    loader={myImageLoader}
                    src={project.images.at(1)?.replaceAll(" ", "%20") ?? ""}
                    alt={project.name}
                    width={300}
                    height={300}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3C/svg%3E`}
                    sizes="(max-width: 300px) 100vw, 300px"
                    className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                  />
                )}
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  <Link href={`/projects/${project.url}`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {project.name}
                  </Link>
                </h3>
                <p className="text-sm text-gray-500">
                  {`${project.country} - ${project.location}`}
                </p>
                <p className="text-sm italic text-gray-500">
                  {`${project.year} - ${project.sectors.join(", ")}`}
                </p>
                <div className="flex flex-1 flex-wrap gap-2 justify-start">
                  {project.applications?.map((application, index) => (
                    <p
                      key={index}
                      className="text-base font-medium text-gray-900 border border-gray-300 rounded-md p-1"
                    >
                      {application}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="container-cp py-8 text-center">
        <button
          disabled={!projects?.length ? true : numberToLoad >= projects?.length}
          className={cn(
            "text-white uppercase font-medium rounded-md py-2 px-4",
            !projects?.length ? "bg-gray-300" : "bg-dasso",
            numberToLoad >= projects?.length! ? "bg-gray-300" : "bg-dasso",
          )}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Projects;
