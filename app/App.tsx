import { Fragment, useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Intro } from "./components/Intro";
import { Header } from "./components/Header";
import { Committee } from "./pages/Committee";
import { Home } from "./pages/Home";
import { Join } from "./pages/Join";
import { MatchRecords } from "./pages/MatchRecords";
import { Article, News } from "./pages/News";
import { NotFound } from "./pages/NotFound";
import { Rulebook } from "./pages/Rulebook";
import { Toolkit } from "./pages/Toolkit";
import { Vhcg } from "./pages/Vhcg";
import { useReveal } from "./reveal";
import { RouterProvider, titleFor, useRoute } from "./router";

/** Which page to show for each address. To add a page, also list it in siteMeta.json. */
function pageFor(route: string) {
  if (route.startsWith("/news/")) return <Article slug={route.slice(6)} />;
  switch (route) {
    case "/": return <Home />;
    case "/news": return <News />;
    case "/committee": return <Committee />;
    case "/vhcg": return <Vhcg />;
    case "/vhcg/match-records": return <MatchRecords />;
    case "/vhcg/mlbb-rules": return <Rulebook game="MLBB" />;
    case "/vhcg/valorant-rules": return <Rulebook game="VALORANT" />;
    case "/toolkit": return <Toolkit />;
    case "/join": return <Join />;
    default: return <NotFound />;
  }
}

export default function App() {
  const { route, go } = useRoute();
  useEffect(() => { document.title = titleFor(route); }, [route]);
  useReveal(route);
  // The opening sequence only belongs to a visit that starts on the homepage.
  const [startedOnHome] = useState(route === "/");
  return <RouterProvider value={go}>
    <div className="site-shell">
      {startedOnHome && <Intro />}
      <Header route={route} />
      {/* The key makes each page mount afresh, so its enter animation plays on every navigation. */}
      <Fragment key={route}>{pageFor(route)}</Fragment>
      <Footer />
    </div>
  </RouterProvider>;
}
