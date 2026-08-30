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
};

export const committee = [
  { name: "Song Xinhang", roles: ["Leader", "Vice Leader - Mobile Games"], photo: "Song xinhang photo.jpg", telegram: "@Song_Xinhang" },
  { name: "Zhao Dingjia", preferred: "Justin", roles: ["Vice Leader", "Leader - PC Games"], photo: "Zhao Dingjia photo.jpg", telegram: "@Justin_Zha0" },
  { name: "Xiao Yadan", roles: ["Leader - Mobile Games"], photo: "Xiao Yadan photo.jpg", telegram: "@Angelina_XYD" },
  { name: "Kyler Zhao", roles: ["Vice Leader - PC Games"], photo: "Kyler Zhao photo.jpg", telegram: "@KylerZhao" },
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

export const icg = {
  clusters: ["Cluster 1", "Cluster 2", "Cluster 3", "Cluster 4", "Cluster 5"],
  scoring: [
    ["1st place", "10"], ["2nd place", "7"], ["3rd place", "5"], ["4th place", "3"], ["5th place", "1"],
  ],
  schedule: [
    ["8 Oct 2026", "17:15-17:30", "MLBB registration, device and network check"],
    ["8 Oct 2026", "17:30-20:15", "MLBB round-robin Rounds 1-5 (10 matches; two matches may run concurrently)"],
    ["8 Oct 2026", "20:15-20:30", "MLBB results confirmation / tie-break arrangement if required"],
    ["9 Oct 2026", "13:45-14:00", "VALORANT Day 1 check-in and technical setup"],
    ["9 Oct 2026", "14:00-18:00", "VALORANT Day 1 - Matches 1-4"],
    ["10 Oct 2026", "18:45-19:00", "VALORANT Day 2 check-in and technical setup"],
    ["10 Oct 2026", "19:00-22:00", "VALORANT Day 2 - Matches 5-7"],
    ["11 Oct 2026", "18:45-19:00", "VALORANT Day 3 check-in and technical setup"],
    ["11 Oct 2026", "19:00-22:00", "VALORANT Day 3 - Matches 8-10 and final results confirmation"],
  ],
  format: [
    "5 clusters; one E-Sports team from each cluster",
    "MLBB lineup: 5 players per cluster",
    "VALORANT lineup: 5 players per cluster",
    "Registration target: 10 player slots per cluster across both games",
    "Each game uses a single round-robin format",
    "Match format: Best-of-One (BO1)",
  ],
  keyRules: [
    "Each team consists of 5 players and 1 substitute for both MLBB and VALORANT.",
    "Players must be current Valour House residents and may represent only their own cluster.",
    "Teams must report at least 15 minutes before their scheduled match.",
    "Referees record results and capture the final scoreboard after each match.",
    "No cheating, abusive conduct, harassment, stream-sniping, spectator assistance or deliberate technical manipulation.",
  ],
  registrationUrl: "https://docs.google.com/document/d/1JMy1igltcDzHmAyg8IHKIzWazfVfNVT6/edit?usp=sharing&ouid=116278065709923037344&rtpof=true&sd=true",
};
