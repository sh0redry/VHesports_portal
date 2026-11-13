import { Link } from "../router";

export function NotFound() {
  return <main className="page">
    <div className="page-hero">
      <p className="eyebrow">ERROR 404</p>
      <h1>Page not<br /><em>found.</em></h1>
      <p className="lede">This page does not exist or may have been moved. Head back to the homepage or check the latest news.</p>
    </div>
    <div className="rule-actions">
      <Link className="button primary" to="/">Back to Home -&gt;</Link>
      <Link className="button ghost" to="/news">Latest News -&gt;</Link>
    </div>
  </main>;
}
