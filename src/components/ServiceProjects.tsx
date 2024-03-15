"use client";

import { Project } from "@/interfaces/project";
import ProjectReferenceCard from "./ProjectReferenceCard";
import { cn } from "@/lib/utils";
import useSupabaseBrowser from "@/utils/supabase-browser";
import { TypedSupabaseClient } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";
import { axiosLocalHostInstance } from "@/utils/axios";
import { z } from "zod";

type ServiceProjectsProps = {
  service: string;
};

// async function getProjectsByService(
//   client: TypedSupabaseClient,
//   service: string
// ) {
//   return await client
//     .from("calvary_projects")
//     .select("*")
//     .contains("services", [service])
//     .order("year", { ascending: false })
//     .limit(10);
// }

// async function getProjectsByService(service: string): Promise<Project[]> {
//   const res = await fetch(
//     `http://localhost:3000/api/projects/services/${service}`
//   );
//   return res.json();
// }

async function getProjectsByService(service: string) {
  const res = await fetch(`/api/projects/`);
  const data: Project[] = await res.json();
  const filteredData = data.filter((project) =>
    project.services?.includes(service)
  );
  return filteredData;
}

const ServiceProjects = ({ service }: ServiceProjectsProps) => {
  // const { data: projects, status } = await axiosLocalHostInstance.get<
  //   Project[]
  // >(`/api/projects/services/${service}?limit=10`);
  //
  // if (status !== 200) {
  //   return <div>Error loading projects</div>;
  // }

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
          projects?.map((project, index) => {
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
    </div>
  );
};

export default ServiceProjects;
