import { getPosts } from "@/lib/posts";
import Hero from "./_components/hero";
import FeatureArticles from "./_components/feature-articles";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const posts = await getPosts();
  return (
    <div>
      <Hero />
      <FeatureArticles />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
          )
          .map((post) => (
            <article
              key={post.slug}
              className="relative p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-100 ease-in-out h-64"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden cursor-pointer z-10 flex flex-col justify-between p-4"
              >
                <div>
                  <h1 className="text-xl font-semibold text-gray-300 hover:text-blue-600 duration-100">
                    {post.title}
                  </h1>
                  <p className="text-sm text-gray-100">{post.date}</p>
                </div>
                <p className="text-gray-200">{post.description}</p>
              </Link>

              {post.coverImage && (
                <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-lg" />
                </div>
              )}
            </article>
          ))}
      </div>
    </div>
  );
}
