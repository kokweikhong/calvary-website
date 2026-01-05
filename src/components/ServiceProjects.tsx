"use client";

import { Project } from "@/interfaces/project";
import ProjectReferenceCard from "./ProjectReferenceCard";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { getProjects } from "@/lib/project";
import LoadingState from "./LoadingState";

type ServiceProjectsProps = {
  service: string;
};

const ServiceProjects = ({ service }: ServiceProjectsProps) => {
  const [numberToShow, setNumberToShow] = useState(7);
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    async function fetchProjects() {
      const data = await getProjects(
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        [service],
        numberToShow,
        0
      );
      setProjects(data);
      setIsLoading(false);
    }
    fetchProjects();
  }, [service, numberToShow]);

  if (isLoading) {
    return <LoadingState />;
  }

  if (!projects) {
    return (
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 text-center mt-16">
        No projects found for this service.
      </div>
    );
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
        {projects &&
          projects.length > 0 &&
          projects?.slice(0, numberToShow).map((project, index) => {
            return (
              <div
                key={`${project.name}-${index}`}
                className={cn(
                  "h-87.5",
                  index === 0 ? "col-span-full md:h-100 lg:h-125" : "col-span-1"
                )}
              >
                <ProjectReferenceCard project={project as any} />
              </div>
            );
          })}
      </div>
      <div className="flex justify-center items-center mt-8">
        <button
          onClick={() => setNumberToShow((prev) => prev + 6)}
          className="rounded-md bg-calvarycomposite px-4 py-2 text-white hover:bg-calvarycomposite/80 transition cursor-pointer"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default ServiceProjects;
