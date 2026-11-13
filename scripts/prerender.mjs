// Runs after "vite build". The site is a single-page app, so without this step
// GitHub Pages only has one real file (index.html) and answers every other
// address with "404" before redirecting. This script writes a copy of the page
// for every address (dist/news/index.html, dist/vhcg/index.html, ...) with that
// page's own title and description, so links open directly, search engines can
// index each page, and shared links show the right preview. It also writes
// sitemap.xml and robots.txt.
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const meta = JSON.parse(readFileSync(join(root, "app", "siteMeta.json"), "utf8"));
const template = readFileSync(join(dist, "index.html"), "utf8");

const escapeHtml = text => text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const plainText = markdown => markdown
  .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
  .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
  .replace(/\*\*([^*]+)\*\*/g, "$1")
  .replace(/\*([^*]+)\*/g, "$1")
  .replace(/^#+\s*/gm, "");

const pages = Object.entries(meta.pages).map(([path, page]) => ({ path, title: page.title, description: page.description }));

// News posts: same slug and summary rules as app/news.ts.
const newsDir = join(root, "src", "content", "news");
for (const file of readdirSync(newsDir).filter(name => name.endsWith(".md"))) {
  const source = readFileSync(join(newsDir, file), "utf8").replace(/\r\n/g, "\n");
  const match = source.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  const frontMatter = match ? match[1] : "";
  const body = (match ? match[2] : source).trim();
  const field = name => frontMatter.match(new RegExp(`^${name}:\\s*(.+)$`, "m"))?.[1].trim() || "";
  pages.push({
    path: `/news/${file.replace(/^\d{4}-\d{2}-/, "").replace(/\.md$/, "")}`,
    title: field("title"),
    description: field("excerpt") || plainText(body.split(/\n{2,}/)[0] || ""),
  });
}

function setMeta(html, attribute, name, value) {
  const pattern = new RegExp(`(<meta ${attribute}="${name}" content=")[^"]*(")`);
  if (!pattern.test(html)) throw new Error(`index.html is missing <meta ${attribute}="${name}">`);
  return html.replace(pattern, (_, start, end) => start + escapeHtml(value) + end);
}

for (const page of pages) {
  const title = `${page.title} | ${meta.siteName}`;
  let html = template.replace(/<title>[^<]*<\/title>/, () => `<title>${escapeHtml(title)}</title>`);
  html = setMeta(html, "name", "description", page.description);
  html = setMeta(html, "property", "og:title", title);
  html = setMeta(html, "property", "og:description", page.description);
  html = setMeta(html, "property", "og:url", meta.siteUrl + page.path);
  const target = join(dist, ...page.path.split("/").filter(Boolean), "index.html");
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, html);
}

const urls = ["/", ...pages.map(page => page.path)];
writeFileSync(join(dist, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(path => `  <url><loc>${escapeHtml(meta.siteUrl + encodeURI(path))}</loc></url>`).join("\n")}\n</urlset>\n`);
writeFileSync(join(dist, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${meta.siteUrl}/sitemap.xml\n`);

console.log(`Prerendered ${pages.length} pages, sitemap.xml and robots.txt.`);
