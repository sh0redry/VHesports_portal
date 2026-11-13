import { toolkitCategories } from "../data";

export function Toolkit() {
  return <main className="page toolkit">
    <div className="page-hero">
      <p className="eyebrow">PLAYER TOOLKIT</p>
      <h1>Tools for<br /><em>better play.</em></h1>
      <p className="lede">A curated set of online tools for planning, training and tuning your gaming setup.</p>
    </div>
    <div className="toolkit-categories">
      {toolkitCategories.map(category => <section className="toolkit-category" key={category.title}>
        <div className="toolkit-category-heading"><p className="section-kicker">PLAYER TOOLKIT</p><h2>{category.title}</h2><p>{category.description}</p></div>
        <div className="tool-grid">
          {category.tools.map(tool => <article className="tool-card" key={tool.name}>
            <h3>{tool.name}</h3>
            <p>{tool.description}</p>
            <a href={tool.url} target="_blank" rel="noopener noreferrer">Open Tool →</a>
          </article>)}
        </div>
      </section>)}
    </div>
  </main>;
}
