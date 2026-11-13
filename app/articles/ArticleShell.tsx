import type { ReactNode } from "react";
import { Title } from "../components/Title";
import type { NewsPost } from "../news";
import { Link } from "../router";

/** The frame every article shares: back link, tag/date, title, summary, then the body. */
export function ArticleShell({ item, className, children }: { item: NewsPost; className: string; children: ReactNode }) {
  return <main className={className}>
    <Link className="button ghost" to="/news">← All news</Link>
    <div className="page-hero">
      <p className="eyebrow">{item.tag} / {item.date}</p>
      <h1><Title text={item.title} /></h1>
      <p className="lede">{item.excerpt}</p>
    </div>
    <div className="article-body">{children}</div>
  </main>;
}
