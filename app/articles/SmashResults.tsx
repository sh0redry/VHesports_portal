import { asset } from "../data";
import { blocksOf, type NewsPost } from "../news";
import { ArticleShell } from "./ArticleShell";

export function SmashResults({ item }: { item: NewsPost }) {
  // Block 0 is the summary, blocks 1-4 are the four placements, the rest is the closing text.
  const paragraphs = blocksOf(item);
  return <ArticleShell item={item} className="page article smash-results-article">
    <div className="smash-results-intro">
      <div>
        <p className="section-kicker">TOURNAMENT RESULTS</p>
        <ul className="smash-placements" aria-label="Tournament placements">{paragraphs.slice(1, 5).map(placement => <li key={placement}>{placement}</li>)}</ul>
        {paragraphs.slice(5).map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <figure>
        <img src={asset("smash-tournament-champion.jpg")} alt="Smash Bros tournament champion Max celebrating" width="960" height="1280" />
        <figcaption>👑 Champion: Max</figcaption>
      </figure>
    </div>
    <figure className="smash-group-photo">
      <img src={asset("smash-tournament-group.jpg")} alt="VH E-Sports Smash Bros tournament group photo" width="1600" height="1200" loading="lazy" />
      <figcaption>Thanks to everyone who came down to play and watch!</figcaption>
    </figure>
  </ArticleShell>;
}
