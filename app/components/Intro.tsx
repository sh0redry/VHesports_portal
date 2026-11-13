import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { asset } from "../data";

/**
 * The opening sequence on the homepage:
 *   1. "logo"  the emblem appears large in the middle of a dark screen
 *   2. "name"  the name "VALOUR HOUSE E-SPORTS" opens out beside it
 *   3. "fly"   the two shrink and travel to the top-left corner, landing exactly on the
 *              header's logo, while the dark screen fades and the homepage plays its own entrance
 *
 * It plays once per browser session, only when the site is opened on the homepage,
 * and not at all when the system "reduce motion" setting is on. A click or key press skips it.
 * To watch it again, open the homepage with ?intro at the end of the address.
 */

/** Timings in milliseconds. */
const nameAt = 950;      // when the name starts to appear
const flyAt = 2300;      // when the logo starts travelling to the header
const flyDuration = 1000; // keep in sync with .intro-lockup's transition in globals.css

const seenKey = "vh-intro-seen";

function shouldPlay() {
  // Adding ?intro to the address replays it, which is handy when adjusting the timings.
  if (new URLSearchParams(window.location.search).has("intro")) return true;
  try {
    if (window.sessionStorage.getItem(seenKey)) return false;
  } catch { /* storage unavailable: just play */ }
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

type Phase = "logo" | "name" | "fly" | "done";

export function Intro() {
  const [phase, setPhase] = useState<Phase>(() => shouldPlay() ? "logo" : "done");
  const [vars, setVars] = useState<CSSProperties>();
  const timers = useRef<number[]>([]);
  const played = useRef(phase !== "done");
  const overlay = useRef<HTMLDivElement>(null);

  /** Works out the sizes, and where the logo must land. `landingOnly` keeps the sizes already chosen. */
  const measure = (landingOnly: boolean) => {
    const target = document.querySelector<HTMLElement>(".site-header .wordmark");
    if (!target) return;
    const box = target.getBoundingClientRect();
    // Measure the overlay itself, so the landing spot is exact whatever the scrollbar or zoom is doing.
    const frame = overlay.current?.getBoundingClientRect();
    const width = frame?.width ?? window.innerWidth, height = frame?.height ?? window.innerHeight;
    const landing = {
      "--intro-dx": `${box.left + box.width / 2 - width / 2}px`,
      "--intro-dy": `${box.top + box.height / 2 - height / 2}px`,
    };
    if (landingOnly) { setVars(current => ({ ...current, ...landing } as CSSProperties)); return; }
    // How much larger than the header logo the centred logo-and-name is.
    const scale = Math.max(1, Math.min(0.86 * width / box.width, 0.34 * height / box.height, 7));
    // Extra enlargement of the emblem while it is alone on screen.
    const emblem = Math.max(1, Math.min(0.5 * height, 0.6 * width) / (box.height * scale));
    setVars({ "--intro-scale": scale, "--intro-emblem": emblem, ...landing } as CSSProperties);
  };

  /** Sends the logo to the header. The landing spot is measured again first: the web font has usually finished loading by now, which changes the name's width slightly. */
  const fly = () => {
    measure(true);
    setPhase(current => current === "done" ? current : "fly");
  };

  // Before the first paint: hold the page's own animations and size the logo.
  useLayoutEffect(() => {
    if (!played.current) return;
    document.documentElement.classList.add("intro-playing");
    try { window.sessionStorage.setItem(seenKey, "1"); } catch { /* ignore */ }
    measure(false);
    timers.current = [
      window.setTimeout(() => setPhase(current => current === "logo" ? "name" : current), nameAt),
      window.setTimeout(fly, flyAt),
    ];
    return () => timers.current.forEach(timer => window.clearTimeout(timer));
  }, []);

  // Keep the page in step with the sequence.
  useEffect(() => {
    if (!played.current) return;
    const root = document.documentElement;
    if (phase === "fly") {
      root.classList.replace("intro-playing", "intro-flying");
      const timer = window.setTimeout(() => setPhase("done"), flyDuration + 60);
      return () => window.clearTimeout(timer);
    }
    if (phase === "done") {
      root.classList.remove("intro-playing", "intro-flying");
      root.classList.add("intro-done");
    }
  }, [phase]);

  // Any key skips ahead to the landing.
  useEffect(() => {
    if (phase !== "logo" && phase !== "name") return;
    window.addEventListener("keydown", fly);
    return () => window.removeEventListener("keydown", fly);
  }, [phase]);
  if (phase === "done") return null;

  return <div ref={overlay} className={`intro is-${phase}`} style={vars} onClick={fly} aria-hidden="true">
    <div className="intro-bg" />
    <div className="intro-lockup wordmark">
      <img className="wordmark-mark intro-emblem" src={asset("vh-emblem-light.png")} alt="" />
      <span className="intro-text"><span>VALOUR HOUSE<br /><b>E-SPORTS</b></span></span>
    </div>
  </div>;
}
