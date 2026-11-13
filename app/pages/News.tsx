import { customArticles } from "../articles";
import { ArticleShell } from "../articles/ArticleShell";
import { NewsCover } from "../components/NewsCover";
import { Title } from "../components/Title";
import { telegramUrl } from "../data";
import { Markdown } from "../markdown";
import { blocksOf, news } from "../news";
import { Link } from "../router";
import { NotFound } from "./NotFound";

export function News() {
  return <main className="page">
    <div className="page-hero">
      <p className="eyebrow">VH E-SPORTS / UPDATES</p>
      <h1>Latest news.</h1>
      <p className="lede">Announcements, events and stories from the VH E-Sports community.</p>
    </div>
    <div className="news-list">
      {news.map(item => <Link className="news-row" to={`/news/${item.slug}`} key={item.slug}>
        <NewsCover item={item} />
        <div className="news-row-text">
          <span className="news-meta">{item.tag} / {item.date}</span>
          <h2><Title text={item.title} /></h2>
          <p>{item.excerpt}</p>
        </div>
        <b>→</b>
      </Link>)}
    </div>
  </main>;
}

/**
 * One news article. Most posts are plain Markdown and use the standard layout below.
 * A post that needs a special layout registers a component in app/articles/index.ts.
 */
export function Article({ slug }: { slug: string }) {
  const item = news.find(entry => entry.slug === slug);
  if (!item) return <NotFound />;

  const Custom = customArticles[item.slug];
  if (Custom) return <Custom item={item} />;

  // The first paragraph is already shown under the title, so the body starts after it.
  return <ArticleShell item={item} className="page article">
    <Markdown blocks={blocksOf(item).slice(1)} />
    <h2>Stay connected</h2>
    <p>Join our Telegram community to receive the latest updates, meet other players, and take part in future sessions and events.</p>
    <a className="button primary" href={telegramUrl} target="_blank" rel="noreferrer">Open Telegram →</a>
  </ArticleShell>;
}
