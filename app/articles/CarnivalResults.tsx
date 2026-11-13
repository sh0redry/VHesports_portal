import { carnivalLeaderboard } from "../data";
import type { NewsPost } from "../news";
import { ArticleShell } from "./ArticleShell";

type Row = { rank: number; name: string; cluster: number; score: number };

function ResultsBoard({ title, description, rows, scoreLabel, format }: { title: string; description: string; rows: Row[]; scoreLabel: string; format: (value: number) => string }) {
  return <section className="results-board">
    <div className="results-board-heading"><p className="section-kicker">CARNIVAL RESULTS</p><h2>{title}</h2><p>{description}</p></div>
    <div className="results-table-wrap">
      <table className="results-table">
        <thead><tr><th>Rank</th><th>Player</th><th>Cluster</th><th>{scoreLabel}</th></tr></thead>
        <tbody>
          {rows.map((player, index) => <tr key={`${player.name}-${index}`}>
            <td className={player.rank <= 3 ? `rank rank-${player.rank}` : "rank"}>#{player.rank}</td>
            <td>{player.name}</td>
            <td>Cluster {player.cluster}</td>
            <td>{format(player.score)}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  </section>;
}

export function CarnivalResults({ item }: { item: NewsPost }) {
  return <ArticleShell item={item} className="page article carnival-article carnival-results">
    <p>The Carnival challenges are complete and the first results are in. Thank you to everyone who visited the VH E-Sports booth, tested their skills and made the leaderboards competitive.</p>
    <p>The tables below show the <b>top 10 MSLAB Aim Challenge scores</b> and the <b>top 20 fastest Reaction Time results</b>. For Reaction Time, a lower time is better.</p>
    <ResultsBoard title="🎯 MSLAB Aim Challenge" description="Top 10 highest scores." rows={carnivalLeaderboard.aim} scoreLabel="Score" format={value => value.toLocaleString()} />
    <ResultsBoard title="⚡ Reaction Time Challenge" description="Top 20 fastest times. Tied results share the same rank." rows={carnivalLeaderboard.reaction} scoreLabel="Time" format={value => `${value} ms`} />
    <section className="carnival-finale">
      <p className="section-kicker">THANK YOU FOR PLAYING</p>
      <h2>See you at the next challenge.</h2>
      <p>Keep practising with the tools in our Player Toolkit, and follow VH E-Sports for future sessions, events and leaderboards.</p>
    </section>
  </ArticleShell>;
}
