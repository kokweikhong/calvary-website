import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";

export type Post = {
  title: string;
  subTitle: string;
  slug: string;
  date: string;
  description: string;
  minToRead: number;
  coverImage: string;
  body: string;
};

export async function getPosts() {
  const posts = await fs.readdir("./src/data/posts/");

  return Promise.all(
    posts
      .filter((file) => path.extname(file) === ".mdx")
      .map(async (file) => {
        const filePath = `./src/data/posts/${file}`;
        const fileContent = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(fileContent);

        return { ...data, body: content } as Post;
      }),
  );
}

export async function getPost(slug: string) {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
}
