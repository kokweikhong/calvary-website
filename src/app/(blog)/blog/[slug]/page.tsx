import { getPost, getPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Post } from "./_components/post";
import { cn } from "@/lib/utils";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const post = await getPost(params.slug);
  if (!post) return notFound();

  return (
    <div className="container mx-auto mt-8 max-w-3xl px-4 py-8">
      <div className="flex flex-col items-center justify-center mb-8 space-y-4">
        <div className="py-8 text-center border-y border-gray-300">
          <h1 className="text-4xl font-bold text-center">{post.title}</h1>
        </div>

        <div>
          <p className="text-gray-600">{post.description}</p>
        </div>
      </div>

      <div
        className={cn(
          "prose lg:prose-xl prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg",
          "mx-auto"
        )}
      >
        <Post>{post.body}</Post>
      </div>
    </div>
  );
}
