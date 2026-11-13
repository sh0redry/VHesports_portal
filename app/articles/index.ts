import type { ComponentType } from "react";
import type { NewsPost } from "../news";
import { CarnivalChallenge } from "./CarnivalChallenge";
import { CarnivalResults } from "./CarnivalResults";
import { SemesterWrap } from "./SemesterWrap";
import { SmashResults } from "./SmashResults";

/**
 * Articles with a hand-built layout, keyed by slug (the file name without the date prefix).
 * Posts not listed here are rendered from their Markdown automatically.
 */
export const customArticles: Record<string, ComponentType<{ item: NewsPost }>> = {
  "thank-you-bella": SemesterWrap,
  "smash-bros-tournament-results": SmashResults,
  "carnival-challenge": CarnivalChallenge,
  "carnival-leaderboard": CarnivalResults,
};
