"use client";

import { Project } from "@/interfaces/project";
import ProjectReferenceCard from "./ProjectReferenceCard";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

type ServiceProjectsProps = {
  service: string;
};

async function getProjectsByService(service: string) {
  const res = await fetch(`/api/projects/`);
  const data: Project[] = await res.json();
  console.log(data);
  const filteredData = data.filter((project) =>
    project.services?.includes(service)
  );
  console.log(filteredData);
  return filteredData;
}

const ServiceProjects = ({ service }: ServiceProjectsProps) => {
  const [numberToShow, setNumberToShow] = useState(7);

  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects", service],
    queryFn: () => getProjectsByService(service),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!projects) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div>
        <div className="w-full py-8 flex justify-center items-center">
          <h2 className="uppercase text-2xl font-medium py-2 border-y border-y-black">
            Projects
          </h2>
        </div>

        <p>
          Discover our interior completed projects, spanning residential and
          architectural spaces, featuring renowned brands like Dyson, Shiseido,
          and Artyzen.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-1 mt-8 md:grid-cols-3">
        {projects && projects.length > 0 ? (
          projects?.slice(0, numberToShow).map((project, index) => {
            return (
              <div
                key={`${project.name}-${index}`}
                className={cn(
                  "h-[350px]",
                  index === 0
                    ? "col-span-full md:h-[400px] lg:h-[500px]"
                    : "col-span-1"
                )}
              >
                <ProjectReferenceCard project={project as any} />
              </div>
            );
          })
        ) : (
          <div className="text-center italic">No projects found</div>
        )}
      </div>
      <div className="flex justify-center items-center mt-8">
        <button
          onClick={() => setNumberToShow((prev) => prev + 6)}
          className="bg-black text-white px-4 py-2"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default ServiceProjects;
