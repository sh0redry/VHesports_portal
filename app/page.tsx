import { useEffect, useState } from "react";
import { asset, committee, games, telegramUrl } from "./data";
import { news } from "./news";

type Page = "/" | "/news" | "/committee" | "/icg" | "/join" | `/news/${string}`;
const mainRoutes = ["/", "/news", "/committee", "/icg", "/join"];

function useRoute() {
  const current = (): Page => {
    const queryRoute = new URLSearchParams(window.location.search).get("route");
    const path = queryRoute || window.location.pathname;
    return (mainRoutes.includes(path) || path.startsWith("/news/")) ? path as Page : "/";
  };
  const [route, setRoute] = useState<Page>(current);
  useEffect(() => {
    const queryRoute = new URLSearchParams(window.location.search).get("route");
    if (queryRoute && (mainRoutes.includes(queryRoute) || queryRoute.startsWith("/news/"))) window.history.replaceState({}, "", queryRoute);
    const onPopState = () => setRoute(current());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);
  const go = (to: Page) => { window.history.pushState({}, "", to); setRoute(to); window.scrollTo({ top: 0, behavior: "smooth" }); };
  return { route, go };
}

function Header({ route, go }: { route: Page; go: (to: Page) => void }) {
  const [open, setOpen] = useState(false);
  const links = [["/", "Home"], ["/news", "News"], ["/committee", "Committee"], ["/icg", "ICG"]] as const;
  const navigate = (to: Page) => (event: React.MouseEvent<HTMLAnchorElement>) => { event.preventDefault(); go(to); setOpen(false); };
  return <header className="site-header">
    <a className="wordmark" href="/" onClick={navigate("/")}><img className="wordmark-mark" src={asset("VH ES Logo.png")} alt="Valour House E-Sports" /><span>VALOUR HOUSE<br /><b>E-SPORTS</b></span></a>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open ? "x" : "="}</button>
    <nav className={open ? "main-nav is-open" : "main-nav"}>{links.map(([to, label]) => <a className={route === to ? "active" : ""} href={to} onClick={navigate(to)} key={to}>{label}</a>)}<a className="join-nav" href="/join" onClick={navigate("/join")}>Join Us -&gt;</a></nav>
  </header>;
}

function Footer({ go }: { go: (to: Page) => void }) {
  const nav = (to: Page) => (event: React.MouseEvent<HTMLAnchorElement>) => { event.preventDefault(); go(to); };
  return <footer className="site-footer"><div className="footer-top"><div><strong>VH E-SPORTS</strong><p>Play Together. Compete Together. Belong Together.</p></div><div className="footer-links"><a href="/news" onClick={nav("/news")}>News</a><a href="/committee" onClick={nav("/committee")}>Committee</a><a href="/icg" onClick={nav("/icg")}>ICG</a><a href="/join" onClick={nav("/join")}>Join Us</a><a href={telegramUrl} target="_blank" rel="noreferrer">Telegram -&gt;</a></div></div><div className="footer-bottom">Copyright {new Date().getFullYear()} Valour House E-Sports, National University of Singapore</div></footer>;
}

function GameGrid({ title, items, alt = false }: { title: string; items: string[][]; alt?: boolean }) {
  return <section className={alt ? "game-section alt" : "game-section"}><div className="section-heading"><div><p className="section-kicker">GAME DIVISION</p><h2>{title}</h2></div><p>Find people to play with, learn from and compete alongside.</p></div><div className="game-grid">{items.map(([name, image]) => <article className="game-card" key={name}><img src={asset(image)} alt={name} /><span>{name}</span></article>)}</div></section>;
}

function JoinCTA({ go }: { go: (to: Page) => void }) { return <section className="join-cta"><div><p className="eyebrow">YOUR NEXT GAME STARTS HERE</p><h2>Find your team.<br />Join the community.</h2></div><button className="button primary" onClick={() => go("/join")}>Join VH E-Sports -&gt;</button></section>; }

function Home({ go }: { go: (to: Page) => void }) {
  const highlights = [["pc game2.png", "Across every platform", "A community for players who enjoy gaming together."], ["mobile gamee7.jpg", "New friends, new games", "Meet people who share your game and your energy."], ["pc game4.png", "Play. Learn. Compete.", "Casual sessions, team play and community competition."]];
  const [slide, setSlide] = useState(0); const [image, title, copy] = highlights[slide];
  return <>
    <section className="hero"><div className="hero-glow" /><div className="hero-copy"><img className="hero-brand-logo" src={asset("VH ES Logo.png")} alt="Valour House E-Sports logo" /><p className="eyebrow">VALOUR HOUSE / NUS</p><h1>Play<br /><em>Together.</em></h1><p className="hero-text">A welcoming esports community for every game, platform and skill level.</p><button className="button primary" onClick={() => go("/join")}>Join Our Community -&gt;</button></div></section>
    <section className="intro"><div><p className="section-kicker">ONE COMMUNITY, DIFFERENT GAMES</p><h2>Find your people.<br />Play your game.</h2></div><p>VH E-Sports brings together players across Valour House. Whether you play competitively, casually, or want to try something new, there is a place for you here.</p></section>
    <section className="highlights"><div className="section-top"><div><p className="section-kicker">COMMUNITY HIGHLIGHTS</p><h2>Made to play<br />together.</h2></div><div className="slider-controls"><button onClick={() => setSlide((slide + 2) % 3)} aria-label="Previous highlight">&lt;-</button><button onClick={() => setSlide((slide + 1) % 3)} aria-label="Next highlight">-&gt;</button></div></div><article className="highlight-frame"><img className="highlight-image" src={asset(image)} alt="VH E-Sports activity" /><div className="highlight-copy"><span className="highlight-label">0{slide + 1} / 03</span><h3>{title}</h3><p>{copy}</p></div></article></section>
    <GameGrid title="Mobile Games" items={games.mobile} />
    <GameGrid title="PC Games" items={games.pc} alt />
    <section className="mission"><div className="mission-inner"><div><p className="section-kicker">OUR MISSION</p><h2>Different games.<br /><span>One house.</span></h2><p>We are building a diverse and friendly gaming community where platforms, backgrounds, skill levels and gaming cultures meet.</p></div><ul className="mission-list"><li>Play together</li><li>Compete together</li><li>Belong together</li></ul></div></section>
    <section className="news-preview"><div className="section-top"><div><p className="section-kicker">WHAT IS HAPPENING</p><h2>Latest news</h2></div><button className="button ghost" onClick={() => go("/news")}>View all -&gt;</button></div><div className="news-grid">{news.map(item => <button className="news-card" onClick={() => go(`/news/${item.slug}`)} key={item.slug}><span className="news-meta">{item.tag} / {item.date}</span><h3>{item.title}</h3><p>{item.excerpt}</p><b className="news-arrow">-&gt;</b></button>)}</div></section>
    <section className="portal"><div className="portal-grid">{[["Latest News", "/news"], ["Leadership Committee", "/committee"], ["Inter-Cluster Games", "/icg"], ["Join Us", "/join"]].map(([title, to], index) => <button className="portal-card" key={title} onClick={() => go(to as Page)}><span className="portal-number">0{index + 1}</span><strong>{title}</strong></button>)}</div></section>
    <JoinCTA go={go} />
  </>;
}

function News({ go }: { go: (to: Page) => void }) { return <main className="page"><div className="page-hero"><p className="eyebrow">VH E-SPORTS / UPDATES</p><h1>Latest news.</h1><p className="lede">Announcements, events and stories from the VH E-Sports community.</p></div><div className="news-list">{news.map(item => <button className="news-row" key={item.slug} onClick={() => go(`/news/${item.slug}`)}><span>{item.tag}<br />{item.date}</span><div><h2>{item.title}</h2><p>{item.excerpt}</p></div><b>-&gt;</b></button>)}</div></main>; }
function Article({ slug, go }: { slug: string; go: (to: Page) => void }) { const item = news.find(entry => entry.slug === slug) || news[0]; return <main className="page article"><button className="button ghost" onClick={() => go("/news")}> &lt;- All news</button><div className="page-hero"><p className="eyebrow">{item.tag} / {item.date}</p><h1>{item.title}</h1><p className="lede">{item.excerpt}</p></div><div className="article-body"><p>This article is part of the VH E-Sports news hub. More confirmed information will be shared here as community activities are announced.</p><h2>Stay connected</h2><p>Join our Telegram community to receive the latest updates, meet other players, and take part in future sessions and events.</p><a className="button primary" href={telegramUrl} target="_blank" rel="noreferrer">Open Telegram -&gt;</a></div></main>; }
function Committee() { return <main className="page"><div className="page-hero"><p className="eyebrow">THE PEOPLE BEHIND VH</p><h1>Leadership<br /><em>Committee.</em></h1><p className="lede">Meet the team coordinating sessions, tournaments, partnerships and our gaming divisions.</p></div><div className="committee-grid">{committee.map((person, index) => <article className={index < 2 ? "member-card featured" : "member-card"} key={person.name}><img src={asset(person.photo)} alt={person.name} /><div className="member-info"><p>{person.roles.join(" / ")}</p><h2>{person.name}{person.preferred ? ` (${person.preferred})` : ""}</h2><small>Telegram: {person.telegram}</small></div></article>)}</div></main>; }
function ICG() { return <main className="page icg"><div className="page-hero"><p className="eyebrow">INTER-CLUSTER GAMES</p><h1>ICG<br /><em>E-Sports.</em></h1><p className="lede">Official schedules, rules, fixtures and competition progress will be published here when available.</p></div><div className="icg-notice"><p className="section-kicker">2026</p><h2>Competition updates are coming soon.</h2><p>Follow this page for confirmed games, team registration, rules and match information. We will not publish unconfirmed schedules.</p></div></main>; }
function Join() { return <main className="page"><div className="page-hero"><p className="eyebrow">WELCOME TO VH E-SPORTS</p><h1>Join us.</h1><p className="lede">Whether you are here to compete, improve, try a new game, or simply find people to play with, you are welcome in VH E-Sports.</p></div><div className="join-page"><div className="join-panel"><h2>Join our Telegram community.</h2><p>Receive session announcements, event updates and tournament information, then connect with players across Valour House.</p><a className="button primary" href={telegramUrl} target="_blank" rel="noreferrer">Open Telegram -&gt;</a><div className="expect-grid"><div><b>MULTIPLE GAMES</b><span>PC and mobile communities.</span></div><div><b>SESSIONS</b><span>Casual and organised play.</span></div><div><b>EVERYONE</b><span>Every skill level belongs.</span></div></div></div><div className="qr-panel"><img src={asset("tg group chat qr code.jpg")} alt="QR code for VH E-Sports Telegram group" /><p>Scan the code to join the community.</p></div></div><section className="faq"><h2>Questions, answered.</h2><details><summary>Do I need to be good at games?</summary><p>No. VH E-Sports welcomes every skill level.</p></details><details><summary>Do I need to play every game?</summary><p>No. Join whichever games and sessions interest you.</p></details></section></main>; }

export default function App() { const { route, go } = useRoute(); const content = route.startsWith("/news/") ? <Article slug={route.slice(6)} go={go} /> : route === "/news" ? <News go={go} /> : route === "/committee" ? <Committee /> : route === "/icg" ? <ICG /> : route === "/join" ? <Join /> : <Home go={go} />; return <div className="site-shell"><Header route={route} go={go} />{content}<Footer go={go} /></div>; }
