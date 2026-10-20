export const telegramUrl = "https://t.me/+YUCFw4DIoPc3NTM1";
export const asset = (name: string) => `/images/source/${encodeURIComponent(name)}`;

export const games = {
  mobile: [
    ["Mobile Legends", "Mobile LOL.png"],
    ["Honor of Kings", "mobile honor of king.png"],
  ],
  pc: [
    ["VALORANT", "Valorant.png"],
    ["Counter-Strike 2", "CS2.png"],
  ],
  console: [
    ["Super Smash Bros. Ultimate", "Super smash bro.png"],
    ["EA SPORTS FC 26", "FIFA26.png"],
    ["NBA 2K", "2K.png"],
    ["Overcooked! 2", "Overcooked2.png"],
  ],
};

export const committee = [
  { name: "Song Xinhang", roles: ["Leader", "Vice Leader - Mobile Games"], photo: "Song xinhang photo.jpg", telegram: "@Song_Xinhang" },
  { name: "Zhao Dingjia", preferred: "Justin", roles: ["Vice Leader", "Leader - PC Games"], photo: "Zhao Dingjia photo.jpg", telegram: "@Justin_Zha0" },
  { name: "Xiao Yadan", roles: ["Leader - Mobile Games"], photo: "Xiao Yadan photo.jpg", telegram: "@Angelina_XYD" },
  { name: "Gary Yang", roles: ["Logistics"], photo: "Gary Yang photo.jpg", telegram: "@Gy_yang" },
];

export const toolkitCategories = [
  {
    title: "VALORANT TOOLS",
    description: "Plan, practice and refine your VALORANT setup.",
    tools: [
      { name: "Valoplant", description: "VALORANT tactical board and team strategy planner.", url: "https://valoplant.gg/" },
      { name: "Valorant Crosshair Generator", description: "Create and copy a crosshair configuration.", url: "https://prosettings.net/tools/valorant-crosshair-generator/" },
      { name: "Valorant Lineup Database", description: "Find agent lineups for maps and situations.", url: "https://lineupsvalorant.com/" },
    ],
  },
  {
    title: "AIM & PERFORMANCE",
    description: "Train core mechanics and benchmark your reaction time.",
    tools: [
      { name: "MSLAB", description: "FPS sensitivity testing and aim training tools.", url: "https://mslab.gg/" },
      { name: "Human Benchmark", description: "Reaction time and cognitive performance tests.", url: "https://humanbenchmark.com/" },
    ],
  },
  {
    title: "HARDWARE & CONNECTION",
    description: "Check the equipment and connection behind your game.",
    tools: [
      { name: "Cloudflare Speed Test", description: "Measure internet speed, latency and connection quality.", url: "https://speed.cloudflare.com/" },
      { name: "Mouse Tester", description: "Test mouse click responsiveness and performance.", url: "https://mousetester.io/" },
      { name: "Keyboard Test", description: "Check keyboard keys and input response.", url: "https://keyboardtest.io/" },
      { name: "TestUFO", description: "Display refresh rate and motion-blur test.", url: "https://www.testufo.com/" },
      { name: "Mic Test", description: "Quickly test microphone input in your browser.", url: "https://mictest.co/" },
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
  { rank: 5, cluster: "C2", name: "Wayen", gameId: "woshida", matches: 3, kills: 57, deaths: 36, assists: 15, kdRatio: "1.58", netKills: 21, firstBloods: 16, recognition: "Top 5 Player" },
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

export const valorantStandings = [
  { rank: 1, cluster: "Cluster 5", points: 10 },
  { rank: 2, cluster: "Cluster 2", points: 7 },
  { rank: 3, cluster: "Cluster 1", points: 5 },
  { rank: 4, cluster: "Cluster 3", points: 3 },
  { rank: 5, cluster: "Cluster 4", points: 1 },
].map(entry => {
  const matches = valorantMatchRecords.filter(match => match.team1 === entry.cluster || match.team2 === entry.cluster);
  const won = matches.filter(match => match.winner === entry.cluster).length;
  const roundsWon = matches.reduce((total, match) => total + (match.team1 === entry.cluster ? match.score1 : match.score2), 0);
  const roundsLost = matches.reduce((total, match) => total + (match.team1 === entry.cluster ? match.score2 : match.score1), 0);
  return { ...entry, played: matches.length, won, lost: matches.length - won, roundsWon, roundsLost, roundDiff: roundsWon - roundsLost };
});

export const vhcgStandings = [
  { cluster: "Cluster 1", mlbbPoints: 3 },
  { cluster: "Cluster 2", mlbbPoints: 1 },
  { cluster: "Cluster 3", mlbbPoints: 10 },
  { cluster: "Cluster 4", mlbbPoints: 7 },
  { cluster: "Cluster 5", mlbbPoints: 5 },
].map(entry => ({ ...entry, valorantPoints: valorantStandings.find(team => team.cluster === entry.cluster)!.points }))
  .map(entry => ({ ...entry, totalPoints: entry.mlbbPoints + entry.valorantPoints }))
  .sort((a, b) => b.totalPoints - a.totalPoints)
  .map((entry, _, teams) => ({ ...entry, rank: 1 + teams.filter(team => team.totalPoints > entry.totalPoints).length }));

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

export const icg = {
  clusters: ["Cluster 1", "Cluster 2", "Cluster 3", "Cluster 4", "Cluster 5"],
  scoring: [
    ["1st place", "10"], ["2nd place", "7"], ["3rd place", "5"], ["4th place", "3"], ["5th place", "1"],
  ],
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
