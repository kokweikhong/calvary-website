import Image from "next/image";

const BlogImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="blog-image">
      <Image
        src={src}
        alt={alt}
        width={800}
        height={400}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default BlogImage;
