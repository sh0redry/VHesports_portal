import { Fragment, type ReactNode } from "react";
import { asset } from "./data";
import { Link } from "./router";

/**
 * A small Markdown renderer for news posts. Supported:
 *   paragraphs, # / ## / ### headings, - bullet lists, 1. numbered lists,
 *   **bold**, *italic*, [links](https://...), and images on their own line:
 *   ![description](file-name.jpg "Optional caption")
 * Image file names refer to public/images/source/.
 */

const imageSrc = (src: string) => /^(https?:)?\/\//.test(src) || src.startsWith("/") ? src : asset(src);
const safeHref = (href: string) => /^(https?:\/\/|mailto:|\/(?!\/))/.test(href) ? href : "#";

function inline(text: string): ReactNode[] {
  const pattern = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*/g;
  const nodes: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(pattern)) {
    const start = match.index ?? 0;
    if (start > last) nodes.push(text.slice(last, start));
    const key = start;
    if (match[1] !== undefined) {
      const href = safeHref(match[2]);
      nodes.push(href.startsWith("/")
        ? <Link to={href} key={key}>{match[1]}</Link>
        : <a href={href} target="_blank" rel="noopener noreferrer" key={key}>{match[1]}</a>);
    } else if (match[3] !== undefined) nodes.push(<b key={key}>{match[3]}</b>);
    else nodes.push(<em key={key}>{match[4]}</em>);
    last = start + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

const lines = (text: string) => text.split("\n").map((line, index) => <Fragment key={index}>{index > 0 && <br />}{inline(line)}</Fragment>);

function block(source: string, key: number): ReactNode {
  const text = source.trim();
  if (!text) return null;

  const heading = text.match(/^(#{1,3})\s+(.+)$/);
  if (heading) return heading[1].length === 3 ? <h3 key={key}>{inline(heading[2])}</h3> : <h2 key={key}>{inline(heading[2])}</h2>;

  const image = text.match(/^!\[([^\]]*)\]\(([^)"]+?)(?:\s+"([^"]*)")?\)$/);
  if (image) return <figure className="article-figure" key={key}><img src={imageSrc(image[2].trim())} alt={image[1]} loading="lazy" decoding="async" />{image[3] && <figcaption>{image[3]}</figcaption>}</figure>;

  const rows = text.split("\n");
  if (rows.every(row => /^[-*]\s+/.test(row))) return <ul key={key}>{rows.map((row, index) => <li key={index}>{inline(row.replace(/^[-*]\s+/, ""))}</li>)}</ul>;
  if (rows.every(row => /^\d+\.\s+/.test(row))) return <ol key={key}>{rows.map((row, index) => <li key={index}>{inline(row.replace(/^\d+\.\s+/, ""))}</li>)}</ol>;

  return <p key={key}>{lines(text)}</p>;
}

export function Markdown({ blocks }: { blocks: string[] }) {
  return <div className="markdown">{blocks.map(block)}</div>;
}
