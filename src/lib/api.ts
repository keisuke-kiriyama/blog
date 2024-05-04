"use server";

import { Post } from "@/interfaces/post";
import { promises as fs } from 'fs';
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export async function getPostSlugs() {
  return await fs.readdir(postsDirectory);
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = await fs.readFile(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(slugs.map(async (slug) => await getPostBySlug(slug)));
  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}