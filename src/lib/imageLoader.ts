import { ImageLoaderProps } from "next/image";

const imageURL =
  // process.env.NEXT_PUBLIC_IMAGE_URL ||
  "https://calvarycarpentry-cloud-storage.sgp1.digitaloceanspaces.com";

export default function myImageLoader({
  src,
  width,
  quality,
}: ImageLoaderProps) {
  return `${imageURL}/${src}?w=${width}&q=${quality || 75}`;
}

export function projectImageLoader({ src, width, quality }: ImageLoaderProps) {
  return `${imageURL}/projects/${src}?w=${width}&q=${quality || 75}`;
}
