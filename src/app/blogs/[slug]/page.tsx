import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { MDXRemote } from "next-mdx-remote/rsc";


export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'src/posts');
  const filenames = fs.readdirSync(postsDirectory);
  const paths = filenames.map((filename) => {
    return {
      params: {
        slug: filename.replace(/\.mdx$/, ''),
      },
    };
  });
  return paths;
}

function getPostBySlug(slug: string) {
  const markdownFile = fs.readFileSync(
    path.join(process.cwd(), 'src/posts', `${slug}.mdx`),
    'utf-8'
  );

  const { data, content } = matter(markdownFile);
  return {
    data,
    content,
  };

}

export default function Page({ params }: { params: { slug: string } }) {
  const { data, content } = getPostBySlug(params.slug);
  return (
    <div>
      <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert mx-auto">
        <h1>{data.title}</h1>
        <MDXRemote source={content}></MDXRemote>
      </article>
    </div>
  );
}
