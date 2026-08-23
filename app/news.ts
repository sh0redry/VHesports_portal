/// <reference types="vite/client" />

export type NewsPost = {
  slug: string;
  title: string;
  date: string;
  tag: string;
  excerpt: string;
};

const markdownFiles = import.meta.glob("../src/content/news/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

function field(source: string, name: string) {
  return source.match(new RegExp(`^${name}:\\s*(.+)$`, "m"))?.[1].trim() || "";
}

export const news: NewsPost[] = Object.entries(markdownFiles)
  .map(([path, source]) => ({
    slug: path.split("/").pop()!.replace(/^\d{4}-\d{2}-/, "").replace(/\.md$/, ""),
    title: field(source, "title"),
    date: field(source, "date"),
    tag: field(source, "tag"),
    excerpt: source.split("---").slice(2).join("---").trim(),
  }))
  .sort((a, b) => b.slug.localeCompare(a.slug));
