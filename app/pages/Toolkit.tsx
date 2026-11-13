import { ToolIcon } from "../components/ToolIcon";
import { toolkitCategories } from "../data";

const jumpTo = (id: string) => document.getElementById(`toolkit-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });

export function Toolkit() {
  return <main className="page toolkit">
    <div className="page-hero">
      <p className="eyebrow">PLAYER TOOLKIT</p>
      <h1>Tools for<br /><em>better play.</em></h1>
      <p className="lede">A curated set of online tools for planning, training and tuning your gaming setup.</p>
      <div className="toolkit-jump" aria-label="Jump to a category">
        {toolkitCategories.map(category => <button key={category.id} onClick={() => jumpTo(category.id)}>
          <ToolIcon name={category.tools[0].icon} />
          {category.title}
          <small>{category.tools.length}</small>
        </button>)}
      </div>
    </div>
    <div className="toolkit-categories">
      {toolkitCategories.map(category => <section className="toolkit-category" id={`toolkit-${category.id}`} key={category.id}>
        <div className="toolkit-category-heading"><p className="section-kicker">PLAYER TOOLKIT</p><h2>{category.title}</h2><p>{category.description}</p></div>
        <div className="tool-grid">
          {category.tools.map(tool => <a className="tool-card" href={tool.url} target="_blank" rel="noopener noreferrer" key={tool.name}>
            <span className="tool-icon-wrap"><ToolIcon name={tool.icon} /></span>
            <h3>{tool.name}</h3>
            <p>{tool.description}</p>
            <span className="tool-open">Open Tool →</span>
          </a>)}
        </div>
      </section>)}
    </div>
  </main>;
}
