import { getPost, getPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Post } from "./_components/post";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) return notFound();

  return (
    <div>
      <h1>{post.title}</h1>

      <div className="prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg">
        <Post>{post.body}</Post>
      </div>
    </div>
  );
}
