import { asset } from "../data";
import type { NewsPost } from "../news";

/** A post's cover photo, or a purple placeholder tile when the post has none. */
export function NewsCover({ item }: { item: NewsPost }) {
  return item.cover
    ? <img className="news-cover" src={asset(item.cover)} alt="" loading="lazy" decoding="async" />
    : <span className="news-cover news-cover-empty" aria-hidden="true"><img src={asset("vh-emblem-light.png")} alt="" loading="lazy" decoding="async" /></span>;
}
