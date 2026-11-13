import { mlbbMatchRecords, mlbbTieBreakerNote, mlbbTieBreakerRecords, valorantMatchRecords } from "../data";
import { Link } from "../router";

export function MatchRecords() {
  return <main className="page match-records">
    <Link className="button ghost" to="/vhcg">&lt;- Back to VHCG</Link>
    <div className="page-hero">
      <p className="eyebrow">VHCG E-SPORTS</p>
      <h1>Match<br /><em>Records.</em></h1>
      <p className="lede">Official match results for Valour House Cluster Games AY 2026/27.</p>
    </div>

    <section className="match-records-section">
      <div className="icg-section-title">
        <div><p className="section-kicker">11 OCT 2026 / COMPLETED</p><h2>MLBB Match Records</h2></div>
        <p>All 10 round-robin matches across five rounds.</p>
      </div>
      <div className="rule-table-wrap">
        <table className="rule-table match-records-table">
          <caption className="sr-only">MLBB scores and winning teams, 11 October 2026</caption>
          <thead><tr>{["Round", "Venue", "Team 1", "Score 1", "Score 2", "Team 2", "Winning Team"].map(label => <th scope="col" key={label}>{label}</th>)}</tr></thead>
          <tbody>
            {mlbbMatchRecords.map(match => <tr key={`${match.round}-${match.venue}`}><td>{match.round}</td><td>{match.venue}</td><td>{match.team1}</td><td>{match.score1}</td><td>{match.score2}</td><td>{match.team2}</td><td>{match.winner}</td></tr>)}
          </tbody>
        </table>
      </div>
    </section>

    <section className="match-records-section">
      <div className="icg-section-title">
        <div><p className="section-kicker">25 OCT 2026 / COMPLETED</p><h2>MLBB Tie-Breakers</h2></div>
        <p>Three matches to resolve the overall ranking of Clusters 1, 2 and 4.</p>
      </div>
      <div className="rule-table-wrap">
        <table className="rule-table match-records-table">
          <caption className="sr-only">MLBB tie-breaker results, 25 October 2026</caption>
          <thead><tr>{["Match", "Date", "Team 1", "Score 1", "Score 2", "Team 2", "Winning Team"].map(label => <th scope="col" key={label}>{label}</th>)}</tr></thead>
          <tbody>
            {mlbbTieBreakerRecords.map(match => <tr key={match.match}><td>{match.match}</td><td>{match.date}</td><td>{match.team1}</td><td>{match.score1}</td><td>{match.score2}</td><td>{match.team2}</td><td>{match.winner}</td></tr>)}
          </tbody>
        </table>
      </div>
      <p className="standings-note">{mlbbTieBreakerNote}</p>
    </section>

    <section className="match-records-section">
      <div className="icg-section-title">
        <div><p className="section-kicker">17-18 OCT 2026 / COMPLETED</p><h2>VALORANT Match Records</h2></div>
        <p>Official results: 10 matches across two days and five clusters.</p>
      </div>
      <div className="rule-table-wrap">
        <table className="rule-table valorant-results-table">
          <caption className="sr-only">VALORANT official match results, 17-18 October 2026</caption>
          <thead><tr>{["Match", "Day", "Date", "Scheduled Time", "Cluster A", "Score A", "Score B", "Cluster B", "Winner", "Win Margin"].map(label => <th scope="col" key={label}>{label}</th>)}</tr></thead>
          <tbody>
            {valorantMatchRecords.map(match => <tr key={match.match}>
              <td>{match.match}</td>
              <td>{match.day}</td>
              <td>{match.date}</td>
              <td>{match.time}</td>
              <td>{match.team1}</td>
              <td className="result-score">{match.score1}</td>
              <td className="result-score">{match.score2}</td>
              <td>{match.team2}</td>
              <td className="result-winner">{match.winner}</td>
              <td>{match.winMargin}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
      <p className="standings-note">Scores and match winners reflect the confirmed game screenshots. Win Margin is the winning score minus the losing score.</p>
    </section>
  </main>;
}
