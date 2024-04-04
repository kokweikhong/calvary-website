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
    <div>
      <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
        <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
          {thumbnail && (
            <Image
              loader={myImageLoader}
              src={thumbnail.replaceAll(" ", "%20")}
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
  );
};

export default ProjectReferenceCard;
