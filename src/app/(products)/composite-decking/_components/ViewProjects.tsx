"use client";

import { Project } from "@/interfaces/project";
import Image from "next/image";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

async function getProjects(): Promise<Project[]> {
  const response = await fetch(`http://localhost:3000/api/projects`);
  const data = await response.json() as Project[];
  const filteredData = data.filter((project) => project.products.includes("Calvary Composite"));

  return filteredData;
}

const ASSETS_URL = process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL;

const ViewProjects = () => {
  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects", "calvary-composite"],
    queryFn: () => getProjects(),
  });

  const [numberOfProjects, setNumberOfProjects] = useState(3);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!projects) {
    return <p>No projects found</p>;
  }


  return (
    <div className="container mx-auto sm:px-6 lg:px-8">
      <hr className="border-[2px] border-black mt-8 mb-4" />

      <h3 className="font-medium text-xl">View more Projects</h3>

      <div className="space-y-4 flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {projects.slice(0, numberOfProjects).map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md p-4 space-y-2 flex flex-col items-start justify-around">
              {project.images && project.images.length > 0 && (
                <div className="h-full w-full">
                  <Image
                    src={`${ASSETS_URL}/${project.images[0]}`}
                    alt={project.name}
                    width={300}
                    height={200}
                    className="rounded-lg w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="space-y-2">
                <h4 className="font-medium text-lg">{project.name}</h4>
                <p className="text-sm text-gray-500">
                  <span>{project.country}</span> - <span>{project.location}</span>
                </p>
                <p className="text-sm text-gray-500">
                  <span>{project.year}</span> - <span>{project.sectors.join(", ")}</span>
                </p>
                <div className="flex gap-1 flex-wrap">
                  {project.products.map((product) => (
                    <span key={product} className="border border-gray-300 rounded-full px-2 py-1 text-xs mr-2">
                      {product}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {projects.length === 0 && <p>No projects found</p>}
        </div>

        {projects.length > numberOfProjects && (
          <button
            onClick={() => setNumberOfProjects(numberOfProjects + 3)}
            className="bg-calvaryComposite text-white px-4 py-2 rounded-md hover:bg-calvaryComposite/90"
          >
            Load more
          </button>
        )}
      </div>


    </div>
  );
}

export default ViewProjects;
