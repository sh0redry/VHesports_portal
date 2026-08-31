export type Rulebook = {
  title: string;
  snapshot: [string, string][];
  fixtures: { headers: string[]; rows: string[][] };
  sections: { title: string; items: string[] }[];
};

export const rulebooks: Record<"MLBB" | "VALORANT", Rulebook> = {
  MLBB: {
    title: "Mobile Legends: Bang Bang (MLBB)",
    snapshot: [
      ["Date", "11 Oct 2026"], ["Time", "17:15-20:30"], ["Preferred venue", "Valour House Level 2 Seminar Room"],
      ["Game mode", "Standard 5v5 Draft and Pick Mode"], ["Match format", "Best-of-One (BO1)"], ["Format", "Single round robin"],
      ["Points", "Win = 1 point; loss = 0 points"], ["Player devices", "Players use their own mobile devices and valid MLBB accounts"], ["Match areas", "Two matches may run concurrently"],
    ],
    fixtures: {
      headers: ["Round", "Match Area A", "Match Area B", "Bye"],
      rows: [["1", "Cluster 2 vs 5", "Cluster 3 vs 4", "Cluster 1"], ["2", "Cluster 1 vs 5", "Cluster 2 vs 3", "Cluster 4"], ["3", "Cluster 1 vs 4", "Cluster 3 vs 5", "Cluster 2"], ["4", "Cluster 1 vs 3", "Cluster 2 vs 4", "Cluster 5"], ["5", "Cluster 1 vs 2", "Cluster 4 vs 5", "Cluster 3"]],
    },
    sections: [
      { title: "Team and Eligibility Rules", items: ["Each cluster fields one MLBB team", "Team composition: 5 + 1 substitute", "A player may also join the VALORANT roster only if there are insufficient players to form separate rosters", "Every five-player lineup may have at most 3 players of the same nationality", "The lineup must not consist entirely of players of the same gender", "Players must be current Valour House residents and may represent only their own cluster"] },
      { title: "Match Rules and Tie-Breaks", items: ["Teams must report at least 15 minutes before the scheduled match", "A team unable to field 5 eligible players within 10 minutes after the scheduled start may receive a match loss", "The match becomes official once the Draft Pick phase begins", "Two-team tie: the head-to-head winner ranks higher", "Three or more teams tied: compare total kills in matches among the tied teams; if still tied, a tie-break match will be played", "If the reserved slot cannot accommodate all required tie-breaks, the organiser may schedule the remaining tie-break on the earliest practical date", "Immediately after each match, the referee records the winner and captures the final scoreboard", "Players must remain in the assigned match area and follow referee instructions", "Coaching and outside communication are not allowed after the draft begins"] },
      { title: "Technical and Conduct Rules", items: ["Prohibited: emulators, scripts, plug-ins, macros, and unauthorised third-party tools", "For any connection or device issue, notify the referee immediately", "A restart may be granted for a verified organiser, server, or venue-network issue that materially affects fair play", "Intentional disconnection or exploitation of a technical issue may result in a match loss or disqualification", "Fair play is required: no abusive language, harassment, spectator assistance, or unsportsmanlike conduct"] },
    ],
  },
  VALORANT: {
    title: "VALORANT",
    snapshot: [
      ["Competition days", "16-18 Oct 2026"], ["Preferred venue", "NUS E-Sports Room at Yusof Ishak House (YIH)"], ["Game mode", "Standard 5v5 Competitive Mode"], ["Match format", "Best-of-One (BO1)"],
      ["Format", "Single round robin"], ["Points", "Win = 1 point; loss = 0 points"], ["Match distribution", "10 matches across three consecutive competition days (3 + 3 + 4)"], ["Equipment provided", "Desktop PC and monitor with VALORANT installed, keyboard, mouse, and headset"], ["Player peripherals", "Players are strongly encouraged to bring and use their own compatible peripherals"],
    ],
    fixtures: {
      headers: ["Day", "Match", "Fixture"],
      rows: [["Day 1", "Match 1", "Cluster 1 vs Cluster 2"], ["Day 1", "Match 2", "Cluster 3 vs Cluster 4"], ["Day 1", "Match 3", "Cluster 4 vs Cluster 5"], ["Day 2", "Match 4", "Cluster 1 vs Cluster 4"], ["Day 2", "Match 5", "Cluster 1 vs Cluster 3"], ["Day 2", "Match 6", "Cluster 2 vs Cluster 5"], ["Day 3", "Match 7", "Cluster 2 vs Cluster 4"], ["Day 3", "Match 8", "Cluster 2 vs Cluster 3"], ["Day 3", "Match 9", "Cluster 3 vs Cluster 5"], ["Day 3", "Match 10", "Cluster 1 vs Cluster 5"]],
    },
    sections: [
      { title: "Sub-Schedule", items: ["16 Oct 2026: 17:45-18:00 Check-in; 18:00-21:00 Matches 1-3", "17 Oct 2026: 13:45-14:00 Check-in; 14:00-17:00 Matches 4-6", "18 Oct 2026: 13:45-14:00 Check-in; 14:00-18:00 Matches 7-10 and final results confirmation"] },
      { title: "Team, Skirmish, and Map Selection Rules", items: ["Each cluster fields one VALORANT team", "Team composition: 5 + 1 substitute", "A player may also join the MLBB roster only if there are insufficient players to form separate rosters.", "Every five-player lineup may have at most 3 players of the same nationality", "The lineup must not consist entirely of players of the same gender", "Players must be current Valour House residents and may represent only their own cluster", "Before every official match, each team nominates 1 player for a 1v1 skirmish", "Skirmish format: first to 5 eliminations, no abilities, no draw, no weapon restriction", "The skirmish winner chooses the map", "The opposing team then chooses whether to start on Attack or Defence", "No additional map pick/ban phase", "The tournament map pool normally follows the current official VALORANT Competitive map pool unless otherwise announced"] },
      { title: "Tie-Breaks, Punctuality, and Match Rules", items: ["Two-team tie: the head-to-head winner ranks higher", "Three or more teams tied: rank by head-to-head record among tied teams, then round differential among tied teams, then overall round differential, then total rounds won; if still tied, a tie-break match will be played where possible, otherwise a supervised random draw may be used", "Teams must report at least 15 minutes before the scheduled match", "A team unable to field 5 eligible players within 10 minutes after the scheduled start may receive a match loss", "A forfeit because a team cannot field an eligible lineup will normally be recorded as a 13-0 victory for the opposing team for ranking and round-differential purposes", "The match becomes official once the first competitive round begins, unless the referee orders a restart", "Immediately after each match, the referee records the winner and captures the final scoreboard"] },
      { title: "Technical and Conduct Rules", items: ["Prohibited: cheats or unauthorised third-party software; scripts or macros that provide a competitive advantage; deliberate exploitation of bugs; unauthorised spectator assistance; external coaching during active gameplay; stream sniping; deliberate technical manipulation", "For any connection or device issue, notify the referee immediately", "A restart may be granted for a verified organiser, server, or venue-network issue that materially affects fair play", "Intentional disconnection or exploitation of a technical issue may result in a match loss or disqualification", "All participants must maintain respectful behaviour: no harassment, abuse, or unprofessional conduct"] },
    ],
  },
};
