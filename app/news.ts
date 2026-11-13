/// <reference types="vite/client" />

export type NewsPost = {
  slug: string;
  title: string;
  date: string;
  tag: string;
  order: number;
  /** Optional cover photo: a file name in public/images/source/. */
  cover: string;
  /** Short summary shown on cards and under the article title. */
  excerpt: string;
  /** Everything after the front matter, as Markdown. The first paragraph is the excerpt. */
  body: string;
};

const markdownFiles = import.meta.glob("../src/content/news/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

/** Turn simple Markdown into plain text, for excerpts. */
const plainText = (markdown: string) => markdown
  .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
  .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
  .replace(/\*\*([^*]+)\*\*/g, "$1")
  .replace(/\*([^*]+)\*/g, "$1")
  .replace(/^#+\s*/gm, "");

function parse(path: string, rawSource: string): NewsPost {
  // Normalise Windows line endings so paragraphs split the same on every machine.
  const source = rawSource.replace(/\r\n/g, "\n");
  const match = source.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  const frontMatter = match ? match[1] : "";
  const body = (match ? match[2] : source).trim();
  const field = (name: string) => frontMatter.match(new RegExp(`^${name}:\\s*(.+)$`, "m"))?.[1].trim() || "";
  return {
    slug: path.split("/").pop()!.replace(/^\d{4}-\d{2}-/, "").replace(/\.md$/, ""),
    title: field("title"),
    date: field("date"),
    tag: field("tag"),
    order: Number(field("order")) || 0,
    cover: field("cover"),
    excerpt: field("excerpt") || plainText(body.split(/\n{2,}/)[0] || ""),
    body,
  };
}

export const news: NewsPost[] = Object.entries(markdownFiles)
  .map(([path, source]) => parse(path, source))
  .sort((a, b) => b.order - a.order || b.slug.localeCompare(a.slug));

/** The body split into paragraphs/blocks. */
export const blocksOf = (post: NewsPost) => post.body.split(/\n{2,}/);
