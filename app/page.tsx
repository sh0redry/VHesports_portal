const highlights = [
  { number: "07", label: "ACTIVE ROSTERS" },
  { number: "26", label: "MEMBERS & CREATORS" },
  { number: "04", label: "GAMES WE PLAY" },
];

const matches = [
  { game: "VALORANT", match: "VH NOVA  vs  KITE FIVE", time: "SAT · 19:30", status: "UP NEXT" },
  { game: "LEAGUE OF LEGENDS", match: "VH ORBIT  vs  AURORA", time: "SUN · 15:00", status: "SCRIM" },
  { game: "EA FC", match: "VH STRIKE  vs  CAMPUS XI", time: "WED · 20:00", status: "OPEN" },
];

const pathways = [
  ["COMPETE", "Join a roster, find practice partners and play with intention."],
  ["CREATE", "Cast, edit, photograph and shape the stories around every match."],
  ["CONNECT", "Meet people who speak the same game — online and on campus."],
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="VH Esports home"><span>VH</span><i>ESPORTS</i></a>
          <div className="nav-links"><a href="#about">ABOUT</a><a href="#matches">MATCHES</a><a href="#join">JOIN US</a></div>
          <a className="nav-cta" href="#join">ENTER THE HOUSE <b>↗</b></a>
        </nav>
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow"><span /> EST. 2026 · PLAY WITH PURPOSE</p>
          <h1>YOUR GAME.<br /><em>OUR HOUSE.</em></h1>
          <div className="hero-bottom"><p>VH Esports is a home base for campus competitors, creators and everyone who believes the next great play is better together.</p><a className="primary-button" href="#join">FIND YOUR SQUAD <span>→</span></a></div>
        </div>
        <div className="hero-tag">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section className="intro" id="about">
        <p className="section-label">01 / THE COMMUNITY</p>
        <div className="intro-copy"><h2>MORE THAN A<br /><span>TEAM JERSEY.</span></h2><p>We make room for the ranked grinders, the tactical minds, the late-night casters and the friends who never miss a watch party. VH is where campus esports gets serious — without taking itself too seriously.</p></div>
        <div className="stats">{highlights.map((highlight) => <div className="stat" key={highlight.label}><strong>{highlight.number}</strong><span>{highlight.label}</span></div>)}</div>
      </section>

      <section className="matches" id="matches">
        <div className="section-heading"><p className="section-label">02 / ON THE CALENDAR</p><h2>THE NEXT<br />PLAY.</h2><a href="#join">VIEW ALL EVENTS <span>↗</span></a></div>
        <div className="match-list">{matches.map((item, index) => <article className="match-card" key={item.match}><div className="match-index">0{index + 1}</div><div><p>{item.game}</p><h3>{item.match}</h3></div><div className="match-time"><span>{item.status}</span><strong>{item.time}</strong></div><button aria-label={`Open ${item.match}`}>↗</button></article>)}</div>
      </section>

      <section className="pathways" id="join">
        <div className="pathways-art" aria-hidden="true"><span>V</span><i>H</i></div>
        <div className="pathways-copy"><p className="section-label">03 / YOUR PLACE IN PLAY</p><h2>COME AS YOU<br /><em>ARE.</em></h2>
          <div className="pathway-list">{pathways.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
          <a className="primary-button light" href="mailto:hello@vhesports.com">SAY HELLO <span>→</span></a>
        </div>
      </section>
      <footer><a className="brand" href="#home"><span>VH</span><i>ESPORTS</i></a><p>BUILT FOR THE NEXT ROUND.</p><p>© 2026 VH ESPORTS · <a href="mailto:hello@vhesports.com">HELLO@VHESPORTS.COM</a></p></footer>
    </main>
  );
}
