"use client";

import { useQuery } from "@tanstack/react-query";
import ProjectReferenceCard from "@/components/projects/ProjectReferenceCard";
import { use, useEffect, useState } from "react";
import { Project } from "@/interfaces/project";
import { cn } from "@/lib/utils";

async function getProjects() {
  const res = await fetch("/api/projects");
  const data: Project[] = await res.json();
  return data;
}

// debounce function for search
function debounce(func: any, timeout = 300) {
  let timer: any;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}

// input will be the function to be debounced
const debouncedSearch = debounce((input: string) => {
  console.log(input);
});

type FilterItem = {
  products: string[];
  sectors: string[];
  applications: string[];
  years: string[];
  projectName: string;
};

export default function Page() {
  const [filterItem, setFilterItem] = useState<FilterItem>({
    products: [],
    sectors: [],
    applications: [],
    years: [],
    projectName: "",
  });
  const [projectsToShow, setProjectsToShow] = useState<Project[]>([]);
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

  const distinctApplications = projects.data
    ?.reduce((acc: string[], project: Project) => {
      project?.applications?.forEach((application) => {
        if (!acc.includes(application) && application !== "") {
          // Corrected the condition here
          acc.push(application);
        }
      });
      return acc;
    }, [] as string[])
    .filter((app) => !app.includes(" "));

  // distinctYears array from projects.data
  // remove blank year and sort in descending order
  // remove duplicates
  const distinctYears = projects.data
    ?.map((project) => project.year)
    // .filter((year) => year !== "")
    .sort((a, b) => b - a)
    .filter((year, index, self) => self.indexOf(year) === index);

  // handle filterItem change
  const handle = (e: any) => {
    const { name, value, checked } = e.target;
    if (name === "product") {
      if (checked) {
        setFilterItem((prev) => ({
          ...prev,
          products: [...prev.products, value],
        }));
      } else {
        setFilterItem((prev) => ({
          ...prev,
          products: prev.products.filter((product) => product !== value),
        }));
      }
    } else if (name === "sector") {
      if (checked) {
        setFilterItem((prev) => ({
          ...prev,
          sectors: [...prev.sectors, value],
        }));
      } else {
        setFilterItem((prev) => ({
          ...prev,
          sectors: prev.sectors.filter((sector) => sector !== value),
        }));
      }
    } else if (name === "application") {
      if (checked) {
        setFilterItem((prev) => ({
          ...prev,
          applications: [...prev.applications, value],
        }));
      } else {
        setFilterItem((prev) => ({
          ...prev,
          applications: prev.applications.filter(
            (application) => application !== value
          ),
        }));
      }
    } else if (name === "year") {
      if (checked) {
        setFilterItem((prev) => ({
          ...prev,
          years: [...prev.years, value],
        }));
      } else {
        setFilterItem((prev) => ({
          ...prev,
          years: prev.years.filter((year) => year !== value),
        }));
      }
    } else if (name === "projectName") {
      setFilterItem((prev) => ({
        ...prev,
        projectName: value,
      }));
    }
  };

  // filter projects based on filterItem
  function filterProjects() {
    return projects.data?.filter((project: Project) => {
      const { products, sectors, applications, years, projectName } =
        filterItem;

      const hasProduct = products.length
        ? products.some((product) => project.products.includes(product))
        : true;

      const hasSector = sectors.length
        ? sectors.some((sector) => project.sectors.includes(sector))
        : true;

      const hasApplication = applications.length
        ? applications.some((application) =>
            project.applications?.includes(application)
          )
        : true;

      const hasYear = years.length
        ? years.includes(project.year.toString())
        : true;

      const hasProjectName = projectName
        ? project.name.toLowerCase().includes(projectName.toLowerCase())
        : true;

      return (
        hasProduct && hasSector && hasApplication && hasYear && hasProjectName
      );
    });
  }

  useEffect(() => {
    const filteredProjects = filterProjects();
    // sort filteredProjects by year
    filteredProjects?.sort((a, b) => b.year - a.year);
    setProjectsToShow(filteredProjects || []);
  }, [filterItem, projects.data]);

  // useEffect to call debouncedSearch
  useEffect(() => {
    debouncedSearch(filterItem.projectName);
  }, [filterItem.projectName]);

  if (projects.isLoading) {
    return <div>Loading...</div>;
  }

  if (projects.isError) {
    return <div>Error: {projects.error.message}</div>;
  }

  return (
    <div className="py-8">
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
        <input
          type="text"
          placeholder="Search by project name"
          className="block w-full px-4 py-2 mt-8 border border-black"
          onChange={handle}
          name="projectName"
        />
      </div>

      <div className="container mx-auto sm:px-6 lg:px-8 mt-8">
        <h3 className="font-medium uppercase mb-4">Filter</h3>
        <div className="space-y-2 lg:grid lg:grid-cols-4 lg:gap-x-2 lg:space-y-0">
          <div className="p-4 border border-black">
            <h4 className="font-medium uppercase mb-2">Sector of services</h4>
            <ul className="space-y-1">
              <li className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={"Residential"}
                  onChange={handle}
                />
                <span>Residential</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" value={"Commercial"} onChange={handle} />
                <span>Commercial</span>
              </li>
              <li className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={"Governmental"}
                  onChange={handle}
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
                    <label
                      className="flex items-center gap-2"
                      htmlFor={product}
                    >
                      <input
                        id={product}
                        type="checkbox"
                        name="product"
                        value={product}
                        onChange={handle}
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
                        onChange={handle}
                      />
                      <span>{app}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="p-4 border border-black">
            <h4 className="font-medium uppercase mb-2">Years</h4>
            <ul className="space-y-1">
              {distinctYears?.map((year: number) => {
                return (
                  <li key={year}>
                    <label
                      className="flex items-center gap-2"
                      htmlFor={year.toString()}
                    >
                      <input
                        id={year.toString()}
                        type="checkbox"
                        name="year"
                        value={year.toString()}
                        onChange={handle}
                      />
                      <span>{year}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Project Reference Card */}
        <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsToShow
            ?.slice(0, numberToShow)
            .map((project: Project, index) => {
              return <ProjectReferenceCard key={index} project={project} />;
            })}
        </div>
        <div className="flex justify-center items-center mt-8">
          <button
            onClick={() => setNumberToShow((prev) => prev + 6)}
            className={cn(
              "text-white px-4 py-2",
              numberToShow >= projectsToShow.length ? "bg-gray-400" : "bg-black"
            )}
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}
