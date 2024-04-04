import { ImageLoaderProps } from "next/image";

const imageURL =
  // process.env.NEXT_PUBLIC_IMAGE_URL ||
  "https://calvarycarpentry-cloud-storage.sgp1.cdn.digitaloceanspaces.com";

export default function projectImageLoader({
  src,
  width,
  quality,
}: ImageLoaderProps) {
  return `${imageURL}/${src}?w=${width}&q=${quality || 75}`;
}
