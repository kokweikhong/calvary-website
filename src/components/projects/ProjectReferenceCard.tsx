"use client";

import { Project } from "@/interfaces/project";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import myImageLoader from "@/lib/imageLoader";

async function getAllFilesFromFolder(folder: string) {
  // parse the folder string to url friendly string
  const folderEncode = encodeURIComponent(folder);

  const response = await fetch(`/api/projects/folder/${folderEncode}`);
  const data = await response.json();
  return data;
}

const ProjectReferenceCard = ({ project }: { project: Project }) => {
  const thumbnail = project.images?.[0];
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border-2 border-gray-200 bg-white shadow-md hover:shadow-2xl transition-all duration-300 h-full">
      {/* Image Container */}
      <div className="relative aspect-square sm:aspect-square bg-gray-100 overflow-hidden">
        {thumbnail && (
          <Image
            loader={myImageLoader}
            src={thumbnail.replaceAll(" ", "%20")}
            alt={project.name}
            width={400}
            height={450}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3C/svg%3E`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
          />
        )}
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col space-y-3 sm:space-y-4 p-4 sm:p-5">
        {/* Project Name */}
        <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors line-clamp-2 min-h-12">
          <Link href={`/projects/${project.url}`}>
            <span aria-hidden="true" className="absolute inset-0" />
            {project.name}
          </Link>
        </h3>

        {/* Location */}
        <div className="flex items-start gap-2">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-gray-500 mt-0.5"
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
          <p className="text-xs sm:text-sm text-gray-600 line-clamp-1">
            {`${project.country} - ${project.location}`}
          </p>
        </div>

        {/* Year and Sectors */}
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 shrink-0 text-gray-500"
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
          <p className="text-xs sm:text-sm text-gray-600 italic line-clamp-1">
            {`${project.year} - ${project.sectors.join(", ")}`}
          </p>
        </div>

        {/* Applications Tags */}
        {project.applications && project.applications.length > 0 && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 border-t border-gray-200">
            {project.applications.slice(0, 3).map((application, index) => (
              <span
                key={index}
                className="text-xs sm:text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-md px-2 py-1 transition-colors line-clamp-1"
              >
                {application}
              </span>
            ))}
            {project.applications.length > 3 && (
              <span className="text-xs sm:text-sm font-medium text-gray-600 bg-gray-50 border border-gray-300 rounded-md px-2 py-1">
                +{project.applications.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* View Project Link */}
        <div className="pt-2 mt-auto">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            <span>View Details</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectReferenceCard;
