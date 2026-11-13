export const telegramUrl = "https://t.me/+YUCFw4DIoPc3NTM1";
export const asset = (name: string) => `/images/source/${encodeURIComponent(name)}`;

export const games = {
  mobile: [
    ["Mobile Legends", "Mobile LOL.jpg"],
    ["Honor of Kings", "mobile honor of king.jpg"],
  ],
  pc: [
    ["VALORANT", "Valorant.jpg"],
    ["Counter-Strike 2", "CS2.jpg"],
  ],
  console: [
    ["Super Smash Bros. Ultimate", "Super smash bro.jpg"],
    ["EA SPORTS FC 26", "FIFA26.jpg"],
    ["NBA 2K", "2K.jpg"],
    ["Overcooked! 2", "Overcooked2.jpg"],
  ],
};

export const committee = [
  { name: "Song Xinhang", roles: ["Leader", "Vice Leader - Mobile Games"], photo: "Song xinhang photo.jpg", telegram: "@Song_Xinhang" },
  { name: "Zhao Dingjia", preferred: "Justin", roles: ["Vice Leader", "Leader - PC Games"], photo: "Zhao Dingjia photo.jpg", telegram: "@Justin_Zha0" },
  { name: "Xiao Yadan", roles: ["Leader - Mobile Games"], photo: "Xiao Yadan photo.jpg", telegram: "@Angelina_XYD" },
  { name: "Gary Yang", roles: ["Logistics"], photo: "Gary Yang photo.jpg", telegram: "@Gy_yang" },
];

// Each tool has an `icon`: one of the names drawn in app/components/ToolIcon.tsx.
export const toolkitCategories = [
  {
    id: "valorant",
    title: "VALORANT TOOLS",
    description: "Plan, practice and refine your VALORANT setup.",
    tools: [
      { name: "Valoplant", icon: "map", description: "VALORANT tactical board and team strategy planner.", url: "https://valoplant.gg/" },
      { name: "Valorant Crosshair Generator", icon: "crosshair", description: "Create and copy a crosshair configuration.", url: "https://prosettings.net/tools/valorant-crosshair-generator/" },
      { name: "Valorant Lineup Database", icon: "pin", description: "Find agent lineups for maps and situations.", url: "https://lineupsvalorant.com/" },
    ],
  },
  {
    id: "mobile",
    title: "MOBILE GAME TOOLS",
    description: "Official hero data and guides for Mobile Legends and Honor of Kings.",
    tools: [
      { name: "MLBB Hero Rankings", icon: "chart", description: "Official win, pick and ban rates for every Mobile Legends hero, with counter picks.", url: "https://www.mobilelegends.com/rank" },
      { name: "MLBB Hero Guide", icon: "book", description: "Official Mobile Legends hero list with skills, roles and recommended builds.", url: "https://www.mobilelegends.com/hero" },
      { name: "Honor of Kings", icon: "globe", description: "Official Honor of Kings site: news, heroes and game updates.", url: "https://www.honorofkings.com/" },
      { name: "HOK Camp", icon: "trophy", description: "Official Honor of Kings community hub: hero encyclopedia, leaderboards and esports.", url: "https://camp.honorofkings.com/" },
    ],
  },
  {
    id: "aim",
    title: "AIM & PERFORMANCE",
    description: "Train core mechanics and benchmark your reaction time.",
    tools: [
      { name: "MSLAB", icon: "target", description: "FPS sensitivity testing and aim training tools.", url: "https://mslab.gg/" },
      { name: "Human Benchmark", icon: "bolt", description: "Reaction time and cognitive performance tests.", url: "https://humanbenchmark.com/" },
    ],
  },
  {
    id: "hardware",
    title: "HARDWARE & CONNECTION",
    description: "Check the equipment and connection behind your game.",
    tools: [
      { name: "Cloudflare Speed Test", icon: "gauge", description: "Measure internet speed, latency and connection quality. Works on phones too.", url: "https://speed.cloudflare.com/" },
      { name: "Mouse Tester", icon: "mouse", description: "Test mouse click responsiveness and performance.", url: "https://mousetester.io/" },
      { name: "Keyboard Test", icon: "keyboard", description: "Check keyboard keys and input response.", url: "https://keyboardtest.io/" },
      { name: "TestUFO", icon: "monitor", description: "Display refresh rate and motion-blur test.", url: "https://www.testufo.com/" },
      { name: "Mic Test", icon: "mic", description: "Quickly test microphone input in your browser.", url: "https://mictest.co/" },
    ],
  },
];

export const carnivalLeaderboard = {
  aim: [
    { rank: 1, name: "Dong chenxiao", cluster: 3, score: 8100 },
    { rank: 2, name: "wayne", cluster: 1, score: 7524 },
    { rank: 3, name: "ZHAO RENXUAN", cluster: 2, score: 7244 },
    { rank: 4, name: "teh yu jian", cluster: 2, score: 7232 },
    { rank: 5, name: "Zhao Dingjia", cluster: 4, score: 6939 },
    { rank: 6, name: "Tang Lihao", cluster: 2, score: 6883 },
    { rank: 7, name: "LI CHENGHAO", cluster: 4, score: 6698 },
    { rank: 8, name: "Wang Zhiyuan", cluster: 1, score: 6437 },
    { rank: 9, name: "Eason", cluster: 1, score: 6276 },
    { rank: 10, name: "Ni Huacheng", cluster: 3, score: 6275 },
  ],
  reaction: [
    { rank: 1, name: "mihikaa", cluster: 1, score: 125 },
    { rank: 2, name: "Lu Jia hao", cluster: 4, score: 131 },
    { rank: 3, name: "ZHAO RENXUAN", cluster: 2, score: 137 },
    { rank: 4, name: "Tianle Xu", cluster: 3, score: 139 },
    { rank: 5, name: "Eason", cluster: 1, score: 145 },
    { rank: 6, name: "Wang Zhiyuan", cluster: 1, score: 146 },
    { rank: 7, name: "wayne", cluster: 1, score: 147 },
    { rank: 8, name: "ratish", cluster: 1, score: 150 },
    { rank: 8, name: "Zou Xiaoyu", cluster: 4, score: 150 },
    { rank: 10, name: "Ni Huacheng", cluster: 3, score: 151 },
    { rank: 10, name: "jinjia", cluster: 2, score: 151 },
    { rank: 12, name: "LI CHENGHAO", cluster: 4, score: 153 },
    { rank: 13, name: "ben", cluster: 1, score: 154 },
    { rank: 13, name: "christian", cluster: 2, score: 154 },
    { rank: 15, name: "suhaan", cluster: 4, score: 155 },
    { rank: 16, name: "Zhao Dingjia", cluster: 4, score: 156 },
    { rank: 17, name: "Dong chenxiao", cluster: 3, score: 157 },
    { rank: 18, name: "SHI HAORAN", cluster: 4, score: 159 },
    { rank: 19, name: "Abby", cluster: 3, score: 160 },
    { rank: 20, name: "tracy", cluster: 1, score: 161 },
  ],
};

export const valorantTopPlayers = [
  { rank: 1, cluster: "C5", name: "Alexander", gameId: "aadoooo", matches: 4, kills: 88, deaths: 50, assists: 34, kdRatio: "1.76", netKills: 38, firstBloods: 13, recognition: "Tournament MVP" },
  { rank: 2, cluster: "C2", name: "Guan Cen", gameId: "needhealing", matches: 4, kills: 67, deaths: 34, assists: 29, kdRatio: "1.97", netKills: 33, firstBloods: 5, recognition: "Top 5 Player" },
  { rank: 3, cluster: "C5", name: "Karmandeep", gameId: "jeff2121jeff", matches: 4, kills: 74, deaths: 47, assists: 27, kdRatio: "1.57", netKills: 27, firstBloods: 14, recognition: "Top 5 Player" },
  { rank: 4, cluster: "C5", name: "Yan Mo", gameId: "Mo20Tohsaka", matches: 4, kills: 78, deaths: 49, assists: 20, kdRatio: "1.59", netKills: 29, firstBloods: 8, recognition: "Top 5 Player" },
  { rank: 5, cluster: "C2", name: "Wayne", gameId: "woshida", matches: 3, kills: 57, deaths: 36, assists: 15, kdRatio: "1.58", netKills: 21, firstBloods: 16, recognition: "Top 5 Player" },
];

export const mlbbMatchRecords = [
  { round: 1, venue: "sr1", team1: "Cluster 2", score1: 11, score2: 28, team2: "Cluster 5", winner: "Cluster 5" },
  { round: 1, venue: "sr2", team1: "Cluster 3", score1: 13, score2: 3, team2: "Cluster 4", winner: "Cluster 3" },
  { round: 2, venue: "sr1", team1: "Cluster 1", score1: 22, score2: 24, team2: "Cluster 5", winner: "Cluster 5" },
  { round: 2, venue: "sr2", team1: "Cluster 2", score1: 5, score2: 26, team2: "Cluster 3", winner: "Cluster 3" },
  { round: 3, venue: "sr1", team1: "Cluster 1", score1: 3, score2: 17, team2: "Cluster 4", winner: "Cluster 4" },
  { round: 3, venue: "sr2", team1: "Cluster 3", score1: 21, score2: 1, team2: "Cluster 5", winner: "Cluster 3" },
  { round: 4, venue: "sr1", team1: "Cluster 1", score1: 5, score2: 23, team2: "Cluster 3", winner: "Cluster 3" },
  { round: 4, venue: "sr2", team1: "Cluster 2", score1: 5, score2: 22, team2: "Cluster 4", winner: "Cluster 4" },
  { round: 5, venue: "sr1", team1: "Cluster 1", score1: 20, score2: 7, team2: "Cluster 2", winner: "Cluster 1" },
  { round: 5, venue: "sr2", team1: "Cluster 4", score1: 23, score2: 9, team2: "Cluster 5", winner: "Cluster 4" },
];

export const valorantMatchRecords = [
  { match: 1, day: "Day 1", date: "17 Oct 2026 (Saturday)", time: "12:00-13:00", team1: "Cluster 1", score1: 3, score2: 13, team2: "Cluster 2" },
  { match: 2, day: "Day 1", date: "17 Oct 2026 (Saturday)", time: "13:00-14:00", team1: "Cluster 3", score1: 13, score2: 9, team2: "Cluster 4" },
  { match: 3, day: "Day 1", date: "17 Oct 2026 (Saturday)", time: "14:00-15:00", team1: "Cluster 1", score1: 6, score2: 13, team2: "Cluster 5" },
  { match: 4, day: "Day 1", date: "17 Oct 2026 (Saturday)", time: "15:00-16:00", team1: "Cluster 2", score1: 13, score2: 6, team2: "Cluster 3" },
  { match: 5, day: "Day 1", date: "17 Oct 2026 (Saturday)", time: "16:00-17:00", team1: "Cluster 4", score1: 8, score2: 13, team2: "Cluster 5" },
  { match: 6, day: "Day 2", date: "18 Oct 2026 (Sunday)", time: "12:00-13:00", team1: "Cluster 1", score1: 13, score2: 7, team2: "Cluster 3" },
  { match: 7, day: "Day 2", date: "18 Oct 2026 (Sunday)", time: "13:00-14:00", team1: "Cluster 2", score1: 13, score2: 3, team2: "Cluster 4" },
  { match: 8, day: "Day 2", date: "18 Oct 2026 (Sunday)", time: "14:00-15:00", team1: "Cluster 1", score1: 13, score2: 8, team2: "Cluster 4" },
  { match: 9, day: "Day 2", date: "18 Oct 2026 (Sunday)", time: "15:00-16:00", team1: "Cluster 2", score1: 5, score2: 13, team2: "Cluster 5" },
  { match: 10, day: "Day 2", date: "18 Oct 2026 (Sunday)", time: "16:00-17:00", team1: "Cluster 3", score1: 6, score2: 13, team2: "Cluster 5" },
].map(match => ({ ...match, winner: match.score1 > match.score2 ? match.team1 : match.team2, winMargin: Math.abs(match.score1 - match.score2) }));

export const mlbbTieBreakerRecords = [
  { match: 1, date: "25 Oct 2026 (Sunday)", team1: "Cluster 1", score1: 28, score2: 10, team2: "Cluster 2", winner: "Cluster 1" },
  { match: 2, date: "25 Oct 2026 (Sunday)", team1: "Cluster 2", score1: 8, score2: 12, team2: "Cluster 4", winner: "Cluster 4" },
  { match: 3, date: "25 Oct 2026 (Sunday)", team1: "Cluster 4", score1: 3, score2: 18, team2: "Cluster 1", winner: "Cluster 1" },
];

export const clusters = ["Cluster 1", "Cluster 2", "Cluster 3", "Cluster 4", "Cluster 5"];

/** Points awarded for finishing 1st, 2nd, 3rd, 4th and 5th in each game. */
const placementPoints = [10, 7, 5, 3, 1];

const winsIn = (records: { winner: string }[], cluster: string) => records.filter(match => match.winner === cluster).length;

/**
 * Placement points per cluster for one game, worked out from the match records above:
 * the cluster with the most round-robin wins places first.
 * (If two clusters ever finish a game with the same number of wins, the rulebook's
 * tie-break rules decide the order and it has to be set here by hand.)
 */
function gamePoints(records: { winner: string }[]) {
  const ranked = [...clusters].sort((a, b) => winsIn(records, b) - winsIn(records, a));
  return Object.fromEntries(ranked.map((cluster, index) => [cluster, placementPoints[index]]));
}
const mlbbPoints = gamePoints(mlbbMatchRecords);
const valorantPoints = gamePoints(valorantMatchRecords);

/**
 * Overall standings: total points first, then wins in the MLBB tie-breakers.
 * Tie-breakers resolve overall rank without changing either game's placement points.
 */
export const vhcgStandings = clusters
  .map(cluster => ({
    cluster,
    mlbbPoints: mlbbPoints[cluster],
    valorantPoints: valorantPoints[cluster],
    totalPoints: mlbbPoints[cluster] + valorantPoints[cluster],
    tieBreakWins: winsIn(mlbbTieBreakerRecords, cluster),
  }))
  .sort((a, b) => b.totalPoints - a.totalPoints || b.tieBreakWins - a.tieBreakWins)
  .map((entry, index) => ({ ...entry, rank: index + 1 }));

// These two notes describe the results in words. Update them whenever the records above change.
export const vhcgStandingsNote = "Final overall standings confirmed after the MLBB tie-breakers on 25 October 2026. Cluster 1, Cluster 4 and Cluster 2 finished 3rd, 4th and 5th respectively, each with 8 points. Tie-breakers resolved their ranks without changing placement points.";
export const mlbbTieBreakerNote = "Tie-breaker results: Cluster 1 won 2 matches, Cluster 4 won 1, and Cluster 2 won 0. Final overall places: 3rd — Cluster 1; 4th — Cluster 4; 5th — Cluster 2. Each retains 8 overall points.";

export const valorantSchedule = [
  ["17 Oct 2026 (Saturday)", "11:45-12:00", "VALORANT Day 1 check-in and technical setup"],
  ["17 Oct 2026 (Saturday)", "12:00-13:00", "Match 1 - Cluster 1 vs Cluster 2"],
  ["17 Oct 2026 (Saturday)", "13:00-14:00", "Match 2 - Cluster 3 vs Cluster 4"],
  ["17 Oct 2026 (Saturday)", "14:00-15:00", "Match 3 - Cluster 1 vs Cluster 5"],
  ["17 Oct 2026 (Saturday)", "15:00-16:00", "Match 4 - Cluster 2 vs Cluster 3"],
  ["17 Oct 2026 (Saturday)", "16:00-17:00", "Match 5 - Cluster 4 vs Cluster 5"],
  ["18 Oct 2026 (Sunday)", "11:45-12:00", "VALORANT Day 2 check-in and technical setup"],
  ["18 Oct 2026 (Sunday)", "12:00-13:00", "Match 6 - Cluster 1 vs Cluster 3"],
  ["18 Oct 2026 (Sunday)", "13:00-14:00", "Match 7 - Cluster 2 vs Cluster 4"],
  ["18 Oct 2026 (Sunday)", "14:00-15:00", "Match 8 - Cluster 1 vs Cluster 4"],
  ["18 Oct 2026 (Sunday)", "15:00-16:00", "Match 9 - Cluster 2 vs Cluster 5"],
  ["18 Oct 2026 (Sunday)", "16:00-17:00", "Match 10 - Cluster 3 vs Cluster 5"],
  ["18 Oct 2026 (Sunday)", "17:00-18:00", "Final results confirmation / tie-break arrangement if required"],
];

export const vhcg = {
  clusters,
  scoring: ["1st place", "2nd place", "3rd place", "4th place", "5th place"].map((place, index) => [place, String(placementPoints[index])]),
  schedule: [
    ["11 Oct 2026 (Sunday)", "17:15-17:30", "MLBB registration, device and network check"],
    ["11 Oct 2026 (Sunday)", "17:30-20:15", "MLBB Round-Robin Rounds 1-5 (10 matches; two matches may run concurrently)"],
    ["11 Oct 2026 (Sunday)", "20:15-20:30", "MLBB results confirmation / tie-break arrangement if required"],
    ...valorantSchedule,
  ],
  format: [
    "5 clusters; one E-Sports team from each cluster",
    "MLBB lineup: 5 players per cluster",
    "VALORANT lineup: 5 players per cluster",
    "Teams may register up to 10 players across both games",
    "Each game uses a single round-robin format",
    "Match format: Best-of-One (BO1)",
  ],
  keyRules: [
    "Each cluster registers one E-Sports team with a minimum of 8 and a maximum of 12 members.",
    "Up to 10 players may be registered, allowing separate five-player lineups for VALORANT and MLBB.",
    "A maximum of 2 players may participate in both VALORANT and MLBB, so every team needs at least 8 distinct players.",
    "Up to 2 extra members may be registered as substitutes, bringing the maximum team size to 12 members.",
    "Players must be current Valour House residents and may represent only their own cluster.",
    "Teams must report at least 15 minutes before their scheduled match.",
    "Referees record results and capture the final scoreboard after each match.",
    "No cheating, abusive conduct, harassment, stream-sniping, spectator assistance or deliberate technical manipulation.",
  ],
  registrationUrl: "https://docs.google.com/document/d/1JMy1igltcDzHmAyg8IHKIzWazfVfNVT6/edit?usp=sharing&ouid=116278065709923037344&rtpof=true&sd=true",
};
