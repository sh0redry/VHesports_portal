import { Link } from "../router";
import { rulebooks } from "../vhcgRulebooks";

export function Rulebook({ game }: { game: "MLBB" | "VALORANT" }) {
  const book = rulebooks[game];
  return <main className="page rulebook">
    <Link className="button ghost" to="/vhcg">&lt;- Back to VHCG</Link>
    <div className="page-hero">
      <p className="eyebrow">VHCG E-SPORTS / OFFICIAL RULES</p>
      <h1>{book.title}<br /><em>Rulebook.</em></h1>
      <p className="lede">Detailed schedule, format and rules for Valour House Cluster Games AY 2026/27.</p>
    </div>

    <section className="rulebook-section">
      <p className="section-kicker">01 / EVENT SNAPSHOT</p>
      <div className="snapshot-grid">{book.snapshot.map(([label, value]) => <article key={label}><h2>{label}</h2><p>{value}</p></article>)}</div>
    </section>

    <section className="rulebook-section">
      <p className="section-kicker">02 / {game === "MLBB" ? "ROUND-ROBIN FIXTURES" : "COMPETITION SCHEDULE AND FIXTURES"}</p>
      <div className="rule-table-wrap">
        <table className="rule-table">
          <thead><tr>{book.fixtures.headers.map(header => <th key={header}>{header}</th>)}</tr></thead>
          <tbody>{book.fixtures.rows.map((row, index) => <tr key={`${row.join("-")}-${index}`}>{row.map((cell, cellIndex) => <td key={`${cell}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody>
        </table>
      </div>
    </section>

    <div className="rule-sections">
      {book.sections.map((section, index) => <section className="rulebook-section rule-card" key={section.title}>
        <p className="section-kicker">{String(index + 3).padStart(2, "0")}</p>
        <h2>{section.title}</h2>
        <ul>{section.items.map(item => <li key={item}>{item}</li>)}</ul>
      </section>)}
    </div>
  </main>;
}
