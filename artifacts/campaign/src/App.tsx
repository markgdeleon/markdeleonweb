import { useState } from "react";
import Work from "./Work";
import About from "./About";
import Contact from "./Contact";

export type Page = "work" | "about" | "contact";

export default function App() {
  const [page, setPage] = useState<Page>("work");

  const nav = (p: Page) => setPage(p);

  return (
    <div className="shell">
      <header className="header">
        <button className="wordmark" onClick={() => nav("work")}>
          MARK DE LEON
        </button>
        <nav className="nav">
          <button
            className={page === "work" ? "active" : ""}
            onClick={() => nav("work")}
          >
            SELECTED WORK
          </button>
          <button
            className={page === "about" ? "active" : ""}
            onClick={() => nav("about")}
          >
            ABOUT
          </button>
          <button
            className={page === "contact" ? "active" : ""}
            onClick={() => nav("contact")}
          >
            CONTACT
          </button>
        </nav>
      </header>

      <main className="content" key={page}>
        {page === "work"    && <Work />}
        {page === "about"   && <About />}
        {page === "contact" && <Contact />}
      </main>
    </div>
  );
}
