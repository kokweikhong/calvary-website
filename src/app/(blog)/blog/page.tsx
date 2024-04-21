import { getPosts } from "@/lib/posts";

export default async function Page() {
  const posts = await getPosts();
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {posts
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((post) => (
          <article
            key={post.slug}
            className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-100 ease-in-out"
          >
            <a href={`/blog/${post.slug}`}>
              <p className="text-sm text-gray-500">{post.date}</p>
              <h1 className="text-xl font-semibold text-gray-800 hover:text-blue-600 duration-100">
                {post.title}
              </h1>
              <p className="text-gray-600">{post.description}</p>
            </a>
          </article>
        ))}
    </div>
  );
}
