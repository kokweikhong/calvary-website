"use client";

import { Project } from "@/interfaces/project";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getWebsiteAssetsURLEnv } from "@/lib/env";

const ASSET_URL = getWebsiteAssetsURLEnv();

const ProjectReferenceCard = ({
  project,
  onImageLoad,
}: {
  project: Project;
  onImageLoad?: () => void;
}) => {
  const thumbnail = project.images?.at(1);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
    onImageLoad?.();
  };

  return (
    <div className="w-full h-full relative">
      <Link href={`/projects/${project.url}`} className="absolute inset-0 z-10">
        <div className="relative h-full w-full">
          {/* Loading placeholder */}
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-calvarycomposite"></div>
            </div>
          )}

          {thumbnail && (
            <Image
              // src={`${doSpaceEndpoint}/${thumbnail}`}
              // src={thumbnail.replaceAll(" ", "%20")}
              src={ASSET_URL + "/" + thumbnail.replaceAll(" ", "%20")}
              alt={project.name}
              placeholder="blur"
              blurDataURL={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcWA8AAccBIgbXS5wAAAAASUVORK5CYII="
              }
              // priority
              width={300}
              height={300}
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
              className="w-full h-full object-cover"
              onLoad={handleImageLoad}
            />
          )}
          <div className="bg-black/50 absolute inset-0 flex items-center justify-center"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-start justify-between text-white p-8 w-full">
          <div>
            <h3 className="capitalize font-semibold text-xl">{project.name}</h3>
            <h4 className="uppercase text-sm font-light">{`${project.year} - ${
              project.sectors ?? "N/A"
            }`}</h4>
          </div>

          <div className="flex flex-col items-start justify-between gap-4 w-full">
            <div>
              <h4 className="capitalize font-medium text-md">{`${project.country} - ${project.location}`}</h4>
            </div>
            <div className="grid grid-cols-[3fr_1fr] items-end text-sm w-full">
              <div className="flex gap-2 mt-2 flex-wrap">
                {project.products.map((product) => {
                  return (
                    <p
                      key={product}
                      className="capitalize text-sm rounded-md px-2 py-1 border border-white"
                    >
                      {product}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectReferenceCard;
