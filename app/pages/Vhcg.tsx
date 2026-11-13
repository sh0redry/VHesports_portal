import { telegramUrl, valorantTopPlayers, vhcg, vhcgStandings, vhcgStandingsNote } from "../data";
import { Link } from "../router";

function ValorantTopPlayers() {
  const columns = ["Rank", "Cluster", "Name", "Game ID", "Matches", "Kills", "Deaths", "Assists", "K/D Ratio", "Net Kills", "First Bloods", "Recognition"];
  return <section className="top-players-section" aria-labelledby="top-players-title">
    <div className="icg-section-title">
      <div><p className="section-kicker">17-18 OCTOBER 2026 / INDIVIDUAL PERFORMANCE</p><h2 id="top-players-title">VALORANT Top 5 Players</h2></div>
      <p>Across all recorded matches.</p>
    </div>
    <div className="rule-table-wrap">
      <table className="rule-table top-players-table">
        <caption className="sr-only">VHCG 2026/27 VALORANT Top 5 Player Leaderboard</caption>
        <thead><tr>{columns.map(label => <th scope="col" key={label}>{label}</th>)}</tr></thead>
        <tbody>
          {valorantTopPlayers.map(player => <tr key={player.rank} className={player.rank === 1 ? "mvp-row" : undefined}>
            <td>{player.rank}</td>
            <td>{player.cluster}</td>
            <td>{player.name}</td>
            <td>{player.gameId}</td>
            <td>{player.matches}</td>
            <td>{player.kills}</td>
            <td>{player.deaths}</td>
            <td>{player.assists}</td>
            <td>{player.kdRatio}</td>
            <td>+{player.netKills}</td>
            <td>{player.firstBloods}</td>
            <td className="player-recognition">{player.recognition}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
    <p className="standings-note">K/D Ratio = Kills ÷ Deaths. Net Kills = Kills − Deaths.</p>
    <p className="standings-note">Selection order reflects overall performance assessment, not a formal tournament scoring formula.</p>
  </section>;
}

export function Vhcg() {
  return <main className="page icg">
    <div className="page-hero">
      <p className="eyebrow">VALOUR HOUSE CLUSTER GAMES AY 2026/27</p>
      <h1>VHCG<br /><em>E-Sports.</em></h1>
      <p className="lede">Mobile Legends: Bang Bang and VALORANT. The AY 2026/27 competition has concluded. Congratulations to {vhcgStandings[0].cluster}, our overall champions! See the final standings, match records and top players below.</p>
    </div>

    <section className="standings-section">
      <div className="icg-section-title">
        <div><p className="section-kicker">FINAL OVERALL RANKING</p><h2>VHCG Standings</h2></div>
        <p>Overall score = MLBB points + VALORANT points</p>
      </div>
      <div className="standings-table-wrap">
        <table className="standings-table">
          <thead><tr><th>Rank</th><th>Cluster</th><th>MLBB</th><th>VALORANT</th><th>Total</th></tr></thead>
          <tbody>
            {vhcgStandings.map(entry => <tr key={entry.cluster}><td>{entry.rank}</td><td>{entry.cluster}</td><td>{entry.mlbbPoints}</td><td>{entry.valorantPoints}</td><td>{entry.totalPoints}</td></tr>)}
          </tbody>
        </table>
      </div>
      <p className="standings-note">{vhcgStandingsNote}</p>
      <div className="scoring-strip">{vhcg.scoring.map(([place, points]) => <div key={place}><strong>{place}</strong><span>{points} points</span></div>)}</div>
      <Link className="button ghost" to="/vhcg/match-records">View Match Records →</Link>
    </section>

    <ValorantTopPlayers />

    <section className="icg-schedule">
      <div className="icg-section-title">
        <div><p className="section-kicker">COMPETITION ARCHIVE</p><h2>Schedule & Format</h2></div>
        <p>How the AY 2026/27 VHCG E-Sports competition was run.</p>
      </div>
      <div className="schedule-table-wrap">
        <table className="schedule-table">
          <thead><tr><th>Date</th><th>Time</th><th>Programme</th></tr></thead>
          <tbody>{vhcg.schedule.map(([date, time, programme]) => <tr key={`${date}-${time}-${programme}`}><td>{date}</td><td>{time}</td><td>{programme}</td></tr>)}</tbody>
        </table>
      </div>
      <div className="format-grid">
        <article><h3>Competition Format</h3><ul>{vhcg.format.map(item => <li key={item}>{item}</li>)}</ul></article>
        <article>
          <h3>Venues</h3>
          <p><b>MLBB</b><br />Valour House Level 2 Seminar Room</p>
          <p><b>VALORANT</b><br />NUS E-Sports Room at Yusof Ishak House (YIH)</p>
        </article>
        <article className="key-rules"><h3>Key Tournament Rules</h3><ul>{vhcg.keyRules.map(rule => <li key={rule}>{rule}</li>)}</ul></article>
      </div>
    </section>

    <section className="icg-rules">
      <p className="section-kicker">OFFICIAL RULES</p>
      <h2>Detailed Rulebooks</h2>
      <p className="lede">The game-specific rulebooks used for the AY 2026/27 competition.</p>
      <div className="rule-actions">
        <Link className="button primary" to="/vhcg/mlbb-rules">MLBB Detailed Rules →</Link>
        <Link className="button ghost" to="/vhcg/valorant-rules">VALORANT Detailed Rules →</Link>
      </div>
    </section>

    <section className="registration-cta">
      <div>
        <p className="section-kicker">COMPETITION COMPLETE</p>
        <h2>Thank you for playing.</h2>
        <p>Thank you to every player, captain and referee who took part. Join our Telegram community to hear about the next competition.</p>
      </div>
      <a className="button primary" href={telegramUrl} target="_blank" rel="noopener noreferrer">Join Telegram →</a>
    </section>
  </main>;
}
