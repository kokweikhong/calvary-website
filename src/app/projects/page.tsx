"use client";

import { useQuery } from "@tanstack/react-query";
import ProjectReferenceCard from "@/components/projects/ProjectReferenceCard";
import { use, useEffect, useState } from "react";
import { Project } from "@/interfaces/project";
import { cn } from "@/lib/utils";
import { getCountryEnv } from "@/lib/env";
// import { getProjects } from "@/lib/project";
// import data from "@/data/projects.json";

async function getProjects(
  limit?: number,
  offset?: number
): Promise<{
  data: Project[];
  length: number;
}> {
  const country = getCountryEnv();
  const countryShort = country === "Malaysia" ? "my" : "sg";
  const res = await fetch(
    "/api/projects?country=" +
      countryShort +
      (limit ? "&limit=" + limit : "") +
      (offset ? "&offset=" + offset : "")
  );
  const data = await res.json();
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
  const [projects, setProjects] = useState<Project[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [filterItem, setFilterItem] = useState<FilterItem>({
    products: [],
    sectors: [],
    applications: [],
    years: [],
    projectName: "",
  });
  const [projectsToShow, setProjectsToShow] = useState<Project[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filtersCollapsed, setFiltersCollapsed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 9;

  // Calculate active filters count
  const activeFiltersCount =
    filterItem.products.length +
    filterItem.sectors.length +
    filterItem.applications.length +
    filterItem.years.length +
    (filterItem.projectName ? 1 : 0);

  // Clear all filters function
  const clearAllFilters = () => {
    setFilterItem({
      products: [],
      sectors: [],
      applications: [],
      years: [],
      projectName: "",
    });
    setCurrentPage(1);
  };

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        // Fetch all projects for filtering (no limit)
        const res = await getProjects();
        setProjects(res.data);
        setTotalCount(res.length);
        setProjectsToShow(res.data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  // Load filters and page from localStorage on mount (client-side only)
  useEffect(() => {
    const savedFilters = localStorage.getItem("projectFilters");
    if (savedFilters) {
      try {
        setFilterItem(JSON.parse(savedFilters));
      } catch (e) {
        console.error("Failed to parse saved filters:", e);
      }
    }

    const savedPage = localStorage.getItem("projectsCurrentPage");
    if (savedPage) {
      try {
        setCurrentPage(parseInt(savedPage, 10));
      } catch (e) {
        console.error("Failed to parse saved page:", e);
      }
    }
  }, []);

  // const projects = useQuery({
  //   queryKey: ["projects"],
  //   queryFn: getProjects,
  // });

  // const projects: Project[] = data as unknown as Project[];

  const services = ["Residential", "Commercial", "Governmental"];

  // create distinctProducts array from projects and sort alphabetically
  const distinctProducts = projects
    ?.reduce((acc: string[], project: Project) => {
      project.products.forEach((product) => {
        if (!acc.includes(product)) {
          acc.push(product);
        }
      });
      return acc;
    }, [] as string[])
    ?.sort((a, b) => a.localeCompare(b));

  // create distinctApplications array from projects and ignore blank applications and sort alphabetically
  const distinctApplications = projects
    ?.reduce((acc: string[], project: Project) => {
      project.applications?.forEach((application) => {
        if (!acc.includes(application) && application !== "") {
          // Corrected the condition here
          acc.push(application);
        }
      });
      return acc;
    }, [] as string[])
    ?.sort((a, b) => a.localeCompare(b));

  // create distinctYears array from projects and ignore blank years and sort descending
  const distinctYears = projects
    ?.reduce((acc: string[], project: Project) => {
      if (project.year && !acc.includes(project.year.toString())) {
        acc.push(project.year.toString());
      }
      return acc;
    }, [] as string[])
    .sort((a, b) => parseInt(b) - parseInt(a));

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

  // Save filters to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("projectFilters", JSON.stringify(filterItem));
    }
  }, [filterItem]);

  // Save current page to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("projectsCurrentPage", currentPage.toString());
    }
  }, [currentPage]);

  // Filter projects based on filterItem
  useEffect(() => {
    let filtered = projects;

    // Filter by sectors
    if (filterItem.sectors.length > 0) {
      filtered = filtered.filter((project) =>
        project.sectors?.some((sector) => filterItem.sectors.includes(sector))
      );
    }

    // Filter by products
    if (filterItem.products.length > 0) {
      filtered = filtered.filter((project) =>
        project.products.some((product) =>
          filterItem.products.includes(product)
        )
      );
    }

    // Filter by applications
    if (filterItem.applications.length > 0) {
      filtered = filtered.filter((project) =>
        project.applications?.some((application) =>
          filterItem.applications.includes(application)
        )
      );
    }

    // Filter by years
    if (filterItem.years.length > 0) {
      filtered = filtered.filter((project) =>
        filterItem.years.includes(project.year?.toString() || "")
      );
    }

    // Filter by project name (search)
    if (filterItem.projectName) {
      filtered = filtered.filter((project) =>
        project.name
          ?.toLowerCase()
          .includes(filterItem.projectName.toLowerCase())
      );
    }

    setProjectsToShow(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [filterItem, projects]);

  // Pagination calculations
  const totalPages = Math.ceil(projectsToShow.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = projectsToShow.slice(startIndex, endIndex);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="py-12 bg-linear-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Project References
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-gray-700 to-gray-800 mx-auto mb-6 rounded-full"></div>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Discover our exterior completed projects, spanning residential and
            architectural spaces, featuring renowned locations like SMU, Mandai,
            SOTA, and Artyzen.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by project name..."
              className="block w-full px-6 py-4 pl-12 text-gray-900 bg-white border-2 border-gray-300 rounded-xl shadow-sm focus:border-black-500 focus:ring-2 focus:ring-black-200 transition-all duration-200 placeholder:text-gray-400"
              onChange={handle}
              name="projectName"
              value={filterItem.projectName}
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Filter Header */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              Filters
            </h3>
            {activeFiltersCount > 0 && (
              <span className="inline-flex items-center justify-center px-2.5 py-0.5 sm:px-3 sm:py-1 text-xs font-bold leading-none text-white bg-linear-to-r from-gray-700 to-gray-900 rounded-full">
                {activeFiltersCount}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 sm:gap-3l">
            {activeFiltersCount > 0 && (
              <button
                onClick={clearAllFilters}
                className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 text-xs sm:text-sm font-medium text-red-600 bg-red-50 border-2 border-red-200 rounded-lg hover:bg-red-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="hidden sm:inline">Clear All</span>
                <span className="sm:hidden">Clear</span>
              </button>
            )}
            <button
              onClick={() => setFiltersCollapsed(!filtersCollapsed)}
              className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
              aria-expanded={!filtersCollapsed}
              aria-label={
                filtersCollapsed ? "Expand filters" : "Collapse filters"
              }
            >
              {filtersCollapsed ? (
                <>
                  <svg
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <span className="hidden sm:inline">Show Filters</span>
                  <span className="sm:hidden">Show</span>
                </>
              ) : (
                <>
                  <svg
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                  <span className="hidden sm:inline">Hide Filters</span>
                  <span className="sm:hidden">Hide</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Filter Panels */}
        {!filtersCollapsed && (
          <div className="mb-6 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <div className="p-4 sm:p-5 bg-white border-2 border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <h4 className="font-semibold text-xs sm:text-sm uppercase mb-3 sm:mb-4 text-gray-700 tracking-wide border-b border-gray-200 pb-2">
                  Sector of Services
                </h4>
                <ul className="flex flex-col gap-3">
                  {services.map((sector: string) => {
                    return (
                      <li key={sector}>
                        <label
                          className="flex items-center gap-3 group cursor-pointer"
                          htmlFor={sector}
                        >
                          <input
                            id={sector}
                            type="checkbox"
                            name="sector"
                            value={sector}
                            onChange={handle}
                            checked={filterItem.sectors.includes(sector)}
                            className="w-4 h-4 text-black-600 border-gray-300 rounded focus:ring-2 focus:ring-black-500 cursor-pointer"
                          />
                          <span className="text-sm text-gray-700 group-hover:text-gray-900">
                            {sector}
                          </span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="p-4 sm:p-5 bg-white border-2 border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <h4 className="font-semibold text-xs sm:text-sm uppercase mb-3 sm:mb-4 text-gray-700 tracking-wide border-b border-gray-200 pb-2">
                  Products
                </h4>

                <ul className="flex flex-col gap-3">
                  {distinctProducts?.map((product: string) => {
                    return (
                      <li key={product}>
                        <label
                          className="flex items-center gap-3 group cursor-pointer"
                          htmlFor={product}
                        >
                          <input
                            id={product}
                            type="checkbox"
                            name="product"
                            value={product}
                            onChange={handle}
                            checked={filterItem.products.includes(product)}
                            className="w-4 h-4 text-black-600 border-gray-300 rounded focus:ring-2 focus:ring-black-500 cursor-pointer"
                          />
                          <span className="text-sm text-gray-700 group-hover:text-gray-900">
                            {product}
                          </span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="p-4 sm:p-5 bg-white border-2 border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <h4 className="font-semibold text-xs sm:text-sm uppercase mb-3 sm:mb-4 text-gray-700 tracking-wide border-b border-gray-200 pb-2">
                  Applications
                </h4>

                <ul className="flex flex-col gap-3">
                  {distinctApplications?.map((app: string) => {
                    return (
                      <li key={app}>
                        <label
                          className="flex items-center gap-3 group cursor-pointer"
                          htmlFor={app}
                        >
                          <input
                            id={app}
                            type="checkbox"
                            name="application"
                            value={app}
                            onChange={handle}
                            checked={filterItem.applications.includes(app)}
                            className="w-4 h-4 text-black-600 border-gray-300 rounded focus:ring-2 focus:ring-black-500 cursor-pointer"
                          />
                          <span className="text-sm text-gray-700 group-hover:text-gray-900">
                            {app}
                          </span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="p-4 sm:p-5 bg-white border-2 border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <h4 className="font-semibold text-xs sm:text-sm uppercase mb-3 sm:mb-4 text-gray-700 tracking-wide border-b border-gray-200 pb-2">
                  Years
                </h4>
                <ul className="flex flex-col gap-3">
                  {distinctYears?.map((year: string) => {
                    return (
                      <li key={year}>
                        <label
                          className="flex items-center gap-3 group cursor-pointer"
                          htmlFor={year.toString()}
                        >
                          <input
                            id={year.toString()}
                            type="checkbox"
                            name="year"
                            value={year.toString()}
                            onChange={handle}
                            checked={filterItem.years.includes(year.toString())}
                            className="w-4 h-4 text-black-600 border-gray-300 rounded focus:ring-2 focus:ring-black-500 cursor-pointer"
                          />
                          <span className="text-sm text-gray-700 group-hover:text-gray-900">
                            {year}
                          </span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Active Filters Tags */}
        {activeFiltersCount > 0 && (
          <div className="mb-6">
            <div className="p-3 sm:p-4 bg-gray-50 rounded-xl border border-gray-200">
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <span className="text-xs sm:text-sm font-semibold text-gray-700">
                  Active Filters:
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {filterItem.projectName && (
                  <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2 py-1 sm:px-3 sm:py-1.5 bg-white border border-purple-300 text-purple-700 text-xs sm:text-sm rounded-lg shadow-sm">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <span>Search: {filterItem.projectName}</span>
                    <button
                      onClick={() =>
                        setFilterItem({ ...filterItem, projectName: "" })
                      }
                      className="hover:text-purple-900 transition-colors"
                      aria-label="Remove search filter"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </span>
                )}
                {filterItem.sectors.map((sector) => (
                  <span
                    key={sector}
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-2 py-1 sm:px-3 sm:py-1.5 bg-white border border-blue-300 text-blue-700 text-xs sm:text-sm rounded-lg shadow-sm"
                  >
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    <span>{sector}</span>
                    <button
                      onClick={() =>
                        setFilterItem({
                          ...filterItem,
                          sectors: filterItem.sectors.filter(
                            (s) => s !== sector
                          ),
                        })
                      }
                      className="hover:text-blue-900 transition-colors"
                      aria-label={`Remove ${sector} filter`}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </span>
                ))}
                {filterItem.products.map((product) => (
                  <span
                    key={product}
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-2 py-1 sm:px-3 sm:py-1.5 bg-white border border-green-300 text-green-700 text-xs sm:text-sm rounded-lg shadow-sm"
                  >
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                    <span>{product}</span>
                    <button
                      onClick={() =>
                        setFilterItem({
                          ...filterItem,
                          products: filterItem.products.filter(
                            (p) => p !== product
                          ),
                        })
                      }
                      className="hover:text-green-900 transition-colors"
                      aria-label={`Remove ${product} filter`}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </span>
                ))}
                {filterItem.applications.map((application) => (
                  <span
                    key={application}
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-2 py-1 sm:px-3 sm:py-1.5 bg-white border border-yellow-300 text-yellow-700 text-xs sm:text-sm rounded-lg shadow-sm"
                  >
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span>{application}</span>
                    <button
                      onClick={() =>
                        setFilterItem({
                          ...filterItem,
                          applications: filterItem.applications.filter(
                            (a) => a !== application
                          ),
                        })
                      }
                      className="hover:text-yellow-900 transition-colors"
                      aria-label={`Remove ${application} filter`}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </span>
                ))}
                {filterItem.years.map((year) => (
                  <span
                    key={year}
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-2 py-1 sm:px-3 sm:py-1.5 bg-white border border-red-300 text-red-700 text-xs sm:text-sm rounded-lg shadow-sm"
                  >
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 shrink-0"
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
                    <span>{year}</span>
                    <button
                      onClick={() =>
                        setFilterItem({
                          ...filterItem,
                          years: filterItem.years.filter((y) => y !== year),
                        })
                      }
                      className="hover:text-red-900 transition-colors"
                      aria-label={`Remove ${year} filter`}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Results Count Display */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 py-4 sm:py-6 border-t-2 border-gray-200">
          <div className="flex items-center gap-2 sm:gap-3">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            <p className="text-base sm:text-lg font-semibold text-gray-900">
              {isLoading ? (
                <span className="text-gray-500">Loading projects...</span>
              ) : projectsToShow.length === 0 ? (
                <span className="text-red-600">No projects found</span>
              ) : projectsToShow.length === 1 ? (
                <span>
                  <span className="text-black-600">
                    {projectsToShow.length}
                  </span>{" "}
                  project found
                </span>
              ) : (
                <span>
                  <span className="text-gray-900 font-bold">
                    {projectsToShow.length}
                  </span>{" "}
                  projects found
                </span>
              )}
            </p>
          </div>
          {projectsToShow.length > 0 && (
            <p className="text-xs sm:text-sm text-gray-500">
              Showing {startIndex + 1}-
              {Math.min(endIndex, projectsToShow.length)} of{" "}
              {projectsToShow.length}
            </p>
          )}
        </div>

        {/* Project Reference Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 w-full">
          {isLoading
            ? // Loading skeleton
              Array.from({ length: 9 }).map((_, index) => (
                <div
                  key={index}
                  className="h-full w-full bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 animate-pulse"
                >
                  <div className="w-full aspect-4/3 sm:aspect-3/4 bg-gray-200"></div>
                  <div className="p-4 sm:p-6 space-y-3">
                    <div className="h-6 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              ))
            : currentProjects.map((project: Project, index) => {
                return <ProjectReferenceCard key={index} project={project} />;
              })}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex flex-col items-center gap-3 sm:gap-4 mt-8 sm:mt-12">
            <div className="flex items-center gap-1 sm:gap-2">
              {/* Previous Button */}
              <button
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="p-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-all duration-200"
                aria-label="Previous page"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Page Numbers */}
              <div className="flex items-center gap-0.5 sm:gap-1">
                {getPageNumbers().map((page, index) => {
                  if (page === "...") {
                    return (
                      <span
                        key={`ellipsis-${index}`}
                        className="px-1 sm:px-3 py-2 text-gray-500 text-xs sm:text-sm"
                      >
                        ...
                      </span>
                    );
                  }
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page as number)}
                      className={`px-2.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-lg cursor-pointer transition-all duration-200 ${
                        currentPage === page
                          ? "bg-linear-to-r from-gray-700 to-gray-900 text-white shadow-lg"
                          : "text-gray-700 bg-white border-2 border-gray-300 hover:bg-gray-50"
                      }`}
                      aria-label={`Page ${page}`}
                      aria-current={currentPage === page ? "page" : undefined}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>

              {/* Next Button */}
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                }
                disabled={currentPage === totalPages}
                className="p-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-all duration-200"
                aria-label="Next page"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Page Info Text */}
            <p className="text-xs sm:text-sm text-gray-500">
              Page {currentPage} of {totalPages}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
