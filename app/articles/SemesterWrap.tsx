import { asset } from "../data";
import { blocksOf, type NewsPost } from "../news";
import { ArticleShell } from "./ArticleShell";

export function SemesterWrap({ item }: { item: NewsPost }) {
  return <ArticleShell item={item} className="page article semester-wrap-article">
    <figure className="semester-wrap-photo">
      <img src={asset("bella-semester-wrap-up.jpg")} alt="Fried chicken and snacks shared at the VH E-Sports end-of-semester gathering" width="1600" height="1200" />
      <figcaption>A little chicken. A lot of community. 🍗</figcaption>
    </figure>
    <section className="semester-wrap-message">
      <p className="section-kicker">SEMESTER FINALE / 6 NOVEMBER 2026</p>
      <h2>Thank you, Bella. 💛</h2>
      {blocksOf(item).slice(1).map(paragraph => <p key={paragraph}>{paragraph}</p>)}
    </section>
  </ArticleShell>;
}
