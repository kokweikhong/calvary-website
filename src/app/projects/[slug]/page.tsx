"use client";

import Image from "next/image";
import { axiosLocalHostInstance } from "@/utils/axios";
import { Project } from "@/interfaces/project";
import { useQuery } from "@tanstack/react-query";
import myImageLoader from "@/lib/imageLoader";

async function getProject(slug: string) {
  const res = await fetch(`/api/projects/${slug}`);
  const data: Project = await res.json();
  return data;
}

export default function Page({ params }: { params: { slug: string } }) {
  const { data: project, isLoading } = useQuery({
    queryKey: ["project", params.slug],
    queryFn: () => getProject(params.slug),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!project) {
    return <div>Loading...</div>;
  }
  // const doSpacesEndpoint = process.env.DO_SPACES_ENDPOINT;
  // const { data: project } = await axiosLocalHostInstance.get<Project>(
  //   `/api/projects/${params.slug}`
  // );
  // const imagePathEncoded = encodeURIComponent(project.image_path!);
  // const { data: images } = await axiosLocalHostInstance.get<string[]>(
  //   `/api/projects/folder/${imagePathEncoded}`
  // );

  return (
    <div className="pt-[80px] mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="container mx-auto sm:px-6 lg:px-8 mt-12">
        <h1 className="font-bold text-lg uppercase text-center flex items-center justify-center mb-4">
          <span className="py-2 border-y border-y-black">{project.name}</span>
        </h1>
        <p>{project.description}</p>

        <div className="mt-4">
          <h2 className="uppercase font-semibold pb-2 border-b border-b-black">
            {project.name}
          </h2>
          <ul className="mt-4 space-y-2">
            <li className="grid grid-cols-[2fr_1fr_3fr] space-x-2">
              <span className="text-[#5E9540]">Location</span>
              <span>:</span>
              <span>{project.location}</span>
            </li>
            <li className="grid grid-cols-[2fr_1fr_3fr] space-x-2">
              <span className="text-[#5E9540]">Project tages</span>
              <span>:</span>
              <span>{project.sectors?.join(", ")}</span>
            </li>
            <li className="grid grid-cols-[2fr_1fr_3fr] space-x-2">
              <span className="text-[#5E9540]">Size</span>
              <span>:</span>
              <span>{project.size}</span>
            </li>
            <li className="grid grid-cols-[2fr_1fr_3fr] space-x-2">
              <span className="text-[#5E9540]">Application</span>
              <span>:</span>
              <span>{project.products?.join(", ")}</span>
            </li>
            <li className="grid grid-cols-[2fr_1fr_3fr] space-x-2">
              <span className="text-[#5E9540]">Completion</span>
              <span>:</span>
              <span>{project.completion}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-4 grid md:grid-cols-2 gap-1">
        {project.images?.map((image, index) => {
          // check image with image extension
          if (!image.match(/\.(jpe?g|png|gif|bmp|webp)$/i)) return null;
          return (
            <div key={index} className="w-full h-[350px] relative">
              <div className="relative h-full w-full">
                <Image
                  loader={myImageLoader}
                  src={image}
                  alt={project.name + "-" + index ?? index}
                  width={300}
                  height={300}
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                  priority
                  className="w-full h-full object-cover"
                />
                <div className="bg-black/50 absolute inset-0 flex items-center justify-center"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
