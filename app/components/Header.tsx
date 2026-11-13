import { useState } from "react";
import { asset } from "../data";
import { Link } from "../router";

const links = [["/", "Home"], ["/news", "News"], ["/committee", "Committee"], ["/vhcg", "VHCG"], ["/toolkit", "Player Toolkit"]] as const;

export function Header({ route }: { route: string }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="site-header">
    <Link className="wordmark" to="/" onNavigate={close}>
      <img className="wordmark-mark" src={asset("vh-emblem-light.png")} alt="" />
      <span>VALOUR HOUSE<br /><b>E-SPORTS</b></span>
    </Link>
    <button className={open ? "menu-button is-open" : "menu-button"} onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-nav" aria-label={open ? "Close menu" : "Open menu"}><span /><span /><span /></button>
    <nav id="main-nav" className={open ? "main-nav is-open" : "main-nav"}>
      {links.map(([to, label]) => <Link className={route === to ? "active" : ""} aria-current={route === to ? "page" : undefined} to={to} onNavigate={close} key={to}>{label}</Link>)}
      <Link className="join-nav" to="/join" onNavigate={close}>Join Us →</Link>
    </nav>
  </header>;
}
