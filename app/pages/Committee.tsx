import { asset, committee } from "../data";

export function Committee() {
  return <main className="page">
    <div className="page-hero">
      <p className="eyebrow">THE PEOPLE BEHIND VH</p>
      <h1>Leadership<br /><em>Committee.</em></h1>
      <p className="lede">Meet the team coordinating sessions, tournaments, partnerships and our gaming divisions.</p>
    </div>
    <div className="committee-grid">
      {committee.map((person, index) => <article className={index < 2 ? "member-card featured" : "member-card"} key={person.name}>
        <img src={asset(person.photo)} alt={person.name} />
        <div className="member-info">
          <p>{person.roles.join(" / ")}</p>
          <h2>{person.name}{person.preferred ? ` (${person.preferred})` : ""}</h2>
          <small>Telegram: {person.telegram}</small>
        </div>
      </article>)}
    </div>
  </main>;
}
