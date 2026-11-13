import type { ReactNode } from "react";

/**
 * Line icons for the Player Toolkit, drawn on a 24x24 grid.
 * To add one: add a name here, then use that name as a tool's `icon` in app/data.ts.
 */
const icons: Record<string, ReactNode> = {
  // Strategy board / map
  map: <><path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2z" /><path d="M9 4v14M15 6v14" /></>,
  // Crosshair
  crosshair: <><circle cx="12" cy="12" r="6.5" /><path d="M12 2v5M12 17v5M2 12h5M17 12h5" /><circle cx="12" cy="12" r=".6" fill="currentColor" /></>,
  // Location pin (lineups)
  pin: <><path d="M12 21.5s7-6.3 7-11.3a7 7 0 1 0-14 0c0 5 7 11.3 7 11.3z" /><circle cx="12" cy="10" r="2.6" /></>,
  // Bar chart (statistics, rankings)
  chart: <><path d="M3 20.5h18" /><path d="M6.5 20.5v-7M12 20.5v-14M17.5 20.5v-10" /></>,
  // Open book (guides, encyclopedia)
  book: <><path d="M12 6.5C10.3 5 7.8 4.5 3.5 4.5v13.5c4.3 0 6.8.5 8.5 2 1.7-1.5 4.2-2 8.5-2V4.5c-4.3 0-6.8.5-8.5 2z" /><path d="M12 6.5V20" /></>,
  // Globe (official website)
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3c2.6 2.5 3.9 5.500 3.9 9s-1.3 6.500-3.9 9c-2.6-2.500-3.900-5.500-3.900-9S9.400 5.500 12 3z" /></>,
  // Trophy (esports, leaderboards)
  trophy: <><path d="M8 4h8v5.500a4 4 0 0 1-8 0V4z" /><path d="M8 5.500H4.500V7a3 3 0 0 0 3.500 3M16 5.500h3.500V7a3 3 0 0 1-3.500 3" /><path d="M12 13.500V17M8.500 20.500h7M10 17h4l.800 3.500h-5.600L10 17z" /></>,
  // Target (aim training)
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.200" fill="currentColor" /></>,
  // Lightning bolt (reaction time)
  bolt: <path d="M13.500 2.500 4.500 13.500h6.500l-1 8 9-11.500h-6.500l1-7.500z" />,
  // Speed gauge (connection)
  gauge: <><path d="M4 17a8.500 8.500 0 1 1 16 0" /><path d="M12 15.500l4.500-5.500" /><circle cx="12" cy="15.500" r="1.300" fill="currentColor" /></>,
  // Mouse
  mouse: <><rect x="6.500" y="2.500" width="11" height="19" rx="5.500" /><path d="M12 6.500v4" /></>,
  // Keyboard
  keyboard: <><rect x="2.500" y="6" width="19" height="12" rx="2" /><path d="M6.500 10h.01M10.200 10h.01M13.800 10h.01M17.500 10h.01M7.500 14h9" /></>,
  // Monitor
  monitor: <><rect x="2.500" y="4" width="19" height="12.500" rx="2" /><path d="M8.500 20.500h7M12 16.500v4" /></>,
  // Microphone
  mic: <><rect x="9" y="2.500" width="6" height="11.500" rx="3" /><path d="M5.500 11.500a6.500 6.500 0 0 0 13 0M12 18v3.500M8.500 21.500h7" /></>,
};

export function ToolIcon({ name }: { name: string }) {
  return <svg className="tool-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.700" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {icons[name] ?? icons.globe}
  </svg>;
}
