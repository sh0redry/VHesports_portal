import { asset, telegramUrl } from "../data";

export function Join() {
  return <main className="page">
    <div className="page-hero">
      <p className="eyebrow">WELCOME TO VH E-SPORTS</p>
      <h1>Join us.</h1>
      <p className="lede">Whether you are here to compete, improve, try a new game, or simply find people to play with, you are welcome in VH E-Sports.</p>
    </div>
    <div className="join-page">
      <div className="join-panel">
        <h2>Join our Telegram community.</h2>
        <p>Receive session announcements, event updates and tournament information, then connect with players across Valour House.</p>
        <a className="button primary" href={telegramUrl} target="_blank" rel="noreferrer">Open Telegram →</a>
        <div className="expect-grid">
          <div><b>MULTIPLE GAMES</b><span>Mobile, PC and console.</span></div>
          <div><b>SESSIONS</b><span>Casual and organised play.</span></div>
          <div><b>EVERYONE</b><span>Every skill level belongs.</span></div>
        </div>
      </div>
      <div className="qr-panel">
        <img src={asset("tg group chat qr code.jpg")} alt="QR code for VH E-Sports Telegram group" />
        <p>Scan the code to join the community.</p>
      </div>
    </div>
    <section className="faq">
      <h2>Questions, answered.</h2>
      <details><summary>Do I need to be good at games?</summary><p>No. VH E-Sports welcomes every skill level.</p></details>
      <details><summary>Do I need to play every game?</summary><p>No. Join whichever games and sessions interest you.</p></details>
      <details><summary>Who can join?</summary><p>VH E-Sports is run for Valour House residents, and friends from across NUS are welcome at our casual sessions. Competitions such as the Valour House Cluster Games are for Valour House residents only.</p></details>
      <details><summary>Does it cost anything?</summary><p>No. Joining VH E-Sports and taking part in our activities is completely free.</p></details>
      <details><summary>How do I find out about sessions and events?</summary><p>Everything is announced in our Telegram group, and results and write-ups are published in the News section of this website.</p></details>
    </section>
  </main>;
}
