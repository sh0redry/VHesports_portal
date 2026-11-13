import { useEffect, useState } from "react";
import { NewsCover } from "../components/NewsCover";
import { asset, games } from "../data";
import { news } from "../news";
import { Link } from "../router";

const highlights = [
  ["pc game2.jpg", "Across every platform", "A community for players who enjoy gaming together."],
  ["mobile gamee7.jpg", "New friends, new games", "Meet people who share your game and your energy."],
  ["pc game4.jpg", "Play. Learn. Compete.", "Casual sessions, team play and community competition."],
];

/** How long each highlight stays on screen before the next one, in milliseconds. */
const highlightInterval = 6000;

const allGames = [
  ...games.mobile.map(([name, image]) => ({ name, image, platform: "Mobile" })),
  ...games.pc.map(([name, image]) => ({ name, image, platform: "PC" })),
  ...games.console.map(([name, image]) => ({ name, image, platform: "Console" })),
];

function Highlights() {
  const [slide, setSlide] = useState(0);
  const count = highlights.length;
  const [image, title, copy] = highlights[slide];

  // Advance automatically; the timer restarts whenever the slide changes (including by hand).
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => setSlide((slide + 1) % count), highlightInterval);
    return () => window.clearTimeout(timer);
  }, [slide, count]);

  return <section className="highlights">
    <div className="section-top">
      <div><p className="section-kicker">COMMUNITY HIGHLIGHTS</p><h2>Made to play<br />together.</h2></div>
      <div className="slider-controls">
        <button onClick={() => setSlide((slide + count - 1) % count)} aria-label="Previous highlight">←</button>
        <button onClick={() => setSlide((slide + 1) % count)} aria-label="Next highlight">→</button>
      </div>
    </div>
    <article className="highlight-frame">
      <img className="highlight-image" src={asset(image)} alt="VH E-Sports activity" loading="lazy" decoding="async" key={image} />
      <div className="highlight-copy"><span className="highlight-label">0{slide + 1} / 0{count}</span><h3>{title}</h3><p>{copy}</p></div>
    </article>
  </section>;
}

export function Home() {
  return <main>
    <section className="hero">
      <div className="hero-glow" />
      <div className="hero-glow hero-glow-purple" />
      <div className="hero-copy">
        <img className="hero-emblem" src={asset("vh-emblem-light.png")} alt="Valour House E-Sports emblem" width="443" height="480" />
        <p className="eyebrow">VALOUR HOUSE / NUS</p>
        <h1>Play<br /><em>Together.</em></h1>
        <p className="hero-text">A welcoming esports community for every game, platform and skill level.</p>
        <Link className="button primary" to="/join">Join Our Community →</Link>
      </div>
    </section>

    <section className="mission">
      <div className="mission-inner">
        <div>
          <p className="section-kicker">ONE COMMUNITY, DIFFERENT GAMES</p>
          <h2>Different games.<br /><span>One house.</span></h2>
          <p>VH E-Sports brings together players across Valour House. Whether you play competitively, casually, or want to try something new, there is a place for you here.</p>
        </div>
        <ul className="mission-list"><li>Play together</li><li>Compete together</li><li>Belong together</li></ul>
      </div>
    </section>

    <section className="news-preview">
      <div className="section-top">
        <div><p className="section-kicker">WHAT IS HAPPENING</p><h2>Latest news</h2></div>
        <Link className="button ghost" to="/news">View all →</Link>
      </div>
      <div className="news-grid">
        {news.slice(0, 3).map(item => <Link className="news-card" to={`/news/${item.slug}`} key={item.slug}>
          <NewsCover item={item} />
          <span className="news-meta">{item.tag} / {item.date}</span>
          <h3>{item.title}</h3>
          <p>{item.excerpt}</p>
          <b className="news-arrow">→</b>
        </Link>)}
      </div>
    </section>

    <Highlights />

    <section className="game-section">
      <div className="section-heading">
        <div><p className="section-kicker">GAME DIVISIONS</p><h2>Games we play</h2></div>
        <p>Mobile, PC and console. Find people to play with, learn from and compete alongside.</p>
      </div>
      <div className="game-grid">
        {allGames.map(game => <article className="game-card" key={game.name}>
          <img src={asset(game.image)} alt={game.name} loading="lazy" decoding="async" />
          <small className="game-platform">{game.platform}</small>
          <span>{game.name}</span>
        </article>)}
      </div>
    </section>

    <section className="join-cta">
      <div><p className="eyebrow">YOUR NEXT GAME STARTS HERE</p><h2>Find your team.<br />Join the community.</h2></div>
      <Link className="button primary" to="/join">Join VH E-Sports →</Link>
    </section>
  </main>;
}
