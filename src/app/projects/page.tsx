"use client";

import { useQuery } from "@tanstack/react-query";
import ProjectReferenceCard from "@/components/projects/ProjectReferenceCard";
import { useEffect, useState } from "react";
import { Project } from "@/interfaces/project";
import { cn } from "@/lib/utils";

async function getProjects() {
  const res = await fetch("/api/projects");
  const data: Project[] = await res.json();
  return data;
}

export default function Page() {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<string[]>([]);
  const [filteredSectors, setFilteredSectors] = useState<string[]>([]);
  const [filteredApplications, setFilteredApplications] = useState<string[]>([]);
  const [numberToShow, setNumberToShow] = useState(6);

  const projects = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  // create distinctProducts array from projects.data
  const distinctProducts = projects.data?.reduce(
    (acc: string[], project: Project) => {
      project.products.forEach((product) => {
        if (!acc.includes(product) && product !== "") {
          // Corrected the condition here
          acc.push(product);
        }
      });
      return acc;
    },
    [] as string[]
  );

  const distinctApplications = projects.data?.reduce(
    (acc: string[], project: Project) => {
      project?.applications?.forEach((application) => {
        if (!acc.includes(application) && application !== "") {
          // Corrected the condition here
          acc.push(application);
        }
      });
      return acc;
    },
    [] as string[]
  ).filter(app => !app.includes(" "));

  function handleSectorChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.currentTarget.checked) {
      setFilteredSectors([...filteredSectors, e.currentTarget.value]);
    } else {
      setFilteredSectors(
        filteredSectors.filter((p) => p !== e.currentTarget.value)
      );
    }
  }

  function handleProductChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.currentTarget.checked) {
      setFilteredProducts([...filteredProducts, e.currentTarget.value]);
    } else {
      setFilteredProducts(
        filteredProducts.filter((p) => p !== e.currentTarget.value)
      );
    }
  }

  function handleApplicationChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.currentTarget.checked) {
      setFilteredApplications([...filteredApplications, e.currentTarget.value]);
    } else {
      setFilteredApplications(
        filteredApplications.filter((p) => p !== e.currentTarget.value)
      );
    }
  }

  useEffect(() => {
    const getProjectsByFilters = () => {
      if (filteredProducts.length === 0 && filteredSectors.length === 0 && filteredApplications.length === 0) {
        setFilteredProjects(projects.data || []);
        return;
      }
      const filteredProjects = projects.data?.filter((project) => {
        const hasProducts = filteredProducts.every((product) =>
          project.products.includes(product)
        );
        const hasSectors = filteredSectors.every((sector) =>
          project.sectors.includes(sector)
        );
        const hasApplications = filteredApplications.every((app) =>
          project.applications?.includes(app)
        );

        return hasProducts && hasSectors && hasApplications;
      });
      if (filteredProjects) {
        setFilteredProjects(filteredProjects);
      }
      console.log(filteredProjects);
    };

    getProjectsByFilters();
  }, [filteredProducts, filteredSectors, filteredApplications, projects.data]);

  return (
    <div className="pt-[80px]">
      <div className="container mx-auto sm:px-6 lg:px-8 flex flex-col items-center mt-8">
        <h2 className="uppercase py-1 text-2xl font-medium mb-4 border-y border-y-black">
          Project References
        </h2>
        <p>
          Discover our exterior completed projects, spanning residential and
          architectural spaces, featuring renowned locations like SMU, Mandai,
          SOTA, and Artyzen.
        </p>
      </div>

      <div className="container mx-auto sm:px-6 lg:px-8 mt-8">
        <h3 className="font-medium uppercase mb-4">Filter</h3>
        <div className="space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-2 lg:space-y-0">

          <div className="p-4 border border-black">
            <h4 className="font-medium uppercase mb-2">Sector of services</h4>
            <ul className="space-y-1">
              <li className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={"Residential"}
                  onChange={handleSectorChange}
                />
                <span>Residential</span>
              </li>
              <li className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={"Commercial"}
                  onChange={handleSectorChange}
                />
                <span>Commercial</span>
              </li>
              <li className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={"Governmental"}
                  onChange={handleSectorChange}
                />
                <span>Governmental</span>
              </li>
            </ul>
          </div>

          <div className="p-4 border border-black">
            <h4 className="font-medium uppercase mb-2">Products</h4>

            <ul className="space-y-1">
              {distinctProducts?.map((product: string) => {
                return (
                  <li key={product}>
                    <label className="flex items-center gap-2" htmlFor={product}>
                      <input
                        id={product}
                        type="checkbox"
                        name="product"
                        value={product}
                        onChange={handleProductChange}
                      />
                      <span>{product}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>


          <div className="p-4 border border-black">
            <h4 className="font-medium uppercase mb-2">Applications</h4>

            <ul className="space-y-1">
              {distinctApplications?.map((app: string) => {
                return (
                  <li key={app}>
                    <label className="flex items-center gap-2" htmlFor={app}>
                      <input
                        id={app}
                        type="checkbox"
                        name="application"
                        value={app}
                        onChange={handleApplicationChange}
                      />
                      <span>{app}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Project Reference Card */}
        <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.slice(0, numberToShow).map((project) => {
            return (
              <div key={project.id} className="flex flex-col gap-2">
                <ProjectReferenceCard project={project} />
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center mt-8">
          <button
            onClick={() => setNumberToShow((prev) => prev + 6)}
            className={cn(
              "text-white px-4 py-2",
              numberToShow >= filteredProjects.length ? "bg-gray-400" : "bg-black"
            )}
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}
