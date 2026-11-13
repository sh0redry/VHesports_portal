import { telegramUrl } from "../data";
import { Link } from "../router";

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-top">
      <div><strong>VH E-SPORTS</strong><p>Play Together. Compete Together. Belong Together.</p></div>
      <div className="footer-links">
        <Link to="/news">News</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/committee">Committee</Link>
        <Link to="/vhcg">VHCG</Link>
        <Link to="/toolkit">Player Toolkit</Link>
        <Link to="/join">Join Us</Link>
        <a href={telegramUrl} target="_blank" rel="noreferrer">Telegram →</a>
      </div>
    </div>
    <div className="footer-bottom">
      <span>Copyright {new Date().getFullYear()} Valour House E-Sports, National University of Singapore</span>
      <span className="developer-credit">Developed by Zhao, Dingcheng (<a href="https://sh0redry.github.io/" target="_blank" rel="noopener noreferrer">@sh0redry</a>) and Zhao, Dingjia (<a href="https://t.me/Justin_Zha0" target="_blank" rel="noopener noreferrer">@Justin_Zha0</a>)</span>
    </div>
  </footer>;
}
