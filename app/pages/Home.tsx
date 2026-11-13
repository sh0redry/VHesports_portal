import { useState } from "react";
import { asset, games } from "../data";
import { news } from "../news";
import { Link } from "../router";

const highlights = [
  ["pc game2.jpg", "Across every platform", "A community for players who enjoy gaming together."],
  ["mobile gamee7.jpg", "New friends, new games", "Meet people who share your game and your energy."],
  ["pc game4.jpg", "Play. Learn. Compete.", "Casual sessions, team play and community competition."],
];

const portalLinks = [["Latest News", "/news"], ["Leadership Committee", "/committee"], ["Valour House Cluster Games", "/vhcg"], ["Join Us", "/join"]];

function GameGrid({ title, items, alt = false }: { title: string; items: string[][]; alt?: boolean }) {
  return <section className={alt ? "game-section alt" : "game-section"}>
    <div className="section-heading">
      <div><p className="section-kicker">GAME DIVISION</p><h2>{title}</h2></div>
      <p>Find people to play with, learn from and compete alongside.</p>
    </div>
    <div className="game-grid">
      {items.map(([name, image]) => <article className="game-card" key={name}><img src={asset(image)} alt={name} loading="lazy" decoding="async" /><span>{name}</span></article>)}
    </div>
  </section>;
}

export function Home() {
  const [slide, setSlide] = useState(0);
  const [image, title, copy] = highlights[slide];
  const count = highlights.length;
  return <main>
    <section className="hero">
      <div className="hero-glow" />
      <div className="hero-copy">
        <div className="hero-logo-plaque"><img className="hero-brand-logo" src={asset("VH ES Logo.png")} alt="Valour House E-Sports logo" /></div>
        <p className="eyebrow">VALOUR HOUSE / NUS</p>
        <h1>Play<br /><em>Together.</em></h1>
        <p className="hero-text">A welcoming esports community for every game, platform and skill level.</p>
        <Link className="button primary" to="/join">Join Our Community -&gt;</Link>
      </div>
    </section>

    <section className="intro">
      <div><p className="section-kicker">ONE COMMUNITY, DIFFERENT GAMES</p><h2>Find your people.<br />Play your game.</h2></div>
      <p>VH E-Sports brings together players across Valour House. Whether you play competitively, casually, or want to try something new, there is a place for you here.</p>
    </section>

    <section className="highlights">
      <div className="section-top">
        <div><p className="section-kicker">COMMUNITY HIGHLIGHTS</p><h2>Made to play<br />together.</h2></div>
        <div className="slider-controls">
          <button onClick={() => setSlide((slide + count - 1) % count)} aria-label="Previous highlight">&lt;-</button>
          <button onClick={() => setSlide((slide + 1) % count)} aria-label="Next highlight">-&gt;</button>
        </div>
      </div>
      <article className="highlight-frame">
        <img className="highlight-image" src={asset(image)} alt="VH E-Sports activity" loading="lazy" decoding="async" />
        <div className="highlight-copy"><span className="highlight-label">0{slide + 1} / 0{count}</span><h3>{title}</h3><p>{copy}</p></div>
      </article>
    </section>

    <GameGrid title="Mobile Games" items={games.mobile} />
    <GameGrid title="PC Games" items={games.pc} alt />
    <GameGrid title="Console Games" items={games.console} />

    <section className="mission">
      <div className="mission-inner">
        <div>
          <p className="section-kicker">OUR MISSION</p>
          <h2>Different games.<br /><span>One house.</span></h2>
          <p>We are building a diverse and friendly gaming community where platforms, backgrounds, skill levels and gaming cultures meet.</p>
        </div>
        <ul className="mission-list"><li>Play together</li><li>Compete together</li><li>Belong together</li></ul>
      </div>
    </section>

    <section className="news-preview">
      <div className="section-top">
        <div><p className="section-kicker">WHAT IS HAPPENING</p><h2>Latest news</h2></div>
        <Link className="button ghost" to="/news">View all -&gt;</Link>
      </div>
      <div className="news-grid">
        {news.map(item => <Link className="news-card" to={`/news/${item.slug}`} key={item.slug}>
          <span className="news-meta">{item.tag} / {item.date}</span>
          <h3>{item.title}</h3>
          <p>{item.excerpt}</p>
          <b className="news-arrow">-&gt;</b>
        </Link>)}
      </div>
    </section>

    <section className="portal">
      <div className="portal-grid">
        {portalLinks.map(([label, to], index) => <Link className="portal-card" to={to} key={label}><span className="portal-number">0{index + 1}</span><strong>{label}</strong></Link>)}
      </div>
    </section>

    <section className="join-cta">
      <div><p className="eyebrow">YOUR NEXT GAME STARTS HERE</p><h2>Find your team.<br />Join the community.</h2></div>
      <Link className="button primary" to="/join">Join VH E-Sports -&gt;</Link>
    </section>
  </main>;
}
