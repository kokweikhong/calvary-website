"use client";

import { Project } from "@/interfaces/project";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getCountryEnv } from "@/lib/env";

const ASSETS_URL = process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL;

const ViewProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [numberOfProjects, setNumberOfProjects] = useState(3);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const params = new URLSearchParams();
        const country = getCountryEnv();
        const countryParam = country === "my" ? "Malaysia" : "Singapore";
        params.append("country", countryParam);

        const productsParam = "Calvary Composite";
        params.append("products", productsParam);

        const response = await fetch(`/api/projects/?${params.toString()}`);

        const result = await response.json();

        console.log("Fetched Projects:", result);

        setProjects(result.data || []);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <p className="text-center text-gray-600">Loading projects...</p>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <p className="text-center text-gray-600">No projects found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <hr className="border-t-2 border-gray-300 mb-8 sm:mb-12" />

      <h3 className="font-semibold text-xl sm:text-2xl mb-6 sm:mb-8">
        View More Projects
      </h3>

      <div className="space-y-6 flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
          {projects.slice(0, numberOfProjects).map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col"
            >
              {project.images && project.images.length > 0 && (
                <div className="w-full aspect-4/3 overflow-hidden">
                  <Image
                    src={`${ASSETS_URL}/${project.images[0]}`}
                    alt={project.name}
                    width={400}
                    height={300}
                    priority
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-4 sm:p-5 space-y-3 flex-1 flex flex-col">
                <h4 className="font-semibold text-base sm:text-lg line-clamp-2">
                  {project.name}
                </h4>
                <div className="space-y-2 text-xs sm:text-sm text-gray-600">
                  <p className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>
                      {project.country} - {project.location}
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>
                      {project.year} • {project.sectors.join(", ")}
                    </span>
                  </p>
                </div>
                <div className="flex gap-2 flex-wrap mt-auto pt-3">
                  {project.products.map((product) => (
                    <span
                      key={product}
                      className="inline-block bg-calvarycomposite/10 text-calvarycomposite border border-calvarycomposite/20 rounded-full px-3 py-1 text-xs font-medium"
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {projects.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">No projects found</p>
            </div>
          )}
        </div>

        {projects.length > numberOfProjects && (
          <button
            onClick={() => setNumberOfProjects(numberOfProjects + 3)}
            className="bg-calvarycomposite text-white px-6 py-3 rounded-lg hover:bg-calvarycomposite/90 hover:shadow-lg transition-all duration-300 font-medium text-sm sm:text-base"
          >
            Load More Projects
          </button>
        )}
      </div>
    </div>
  );
};

export default ViewProjects;
