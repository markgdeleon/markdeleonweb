import { useState } from "react";
import Modal from "./Modal";
import About from "./About";
import Contact from "./Contact";

const tiles = [
  {
    id: "hp",
    client: "HP",
    label: "Brand Campaign",
    thumbnail: "https://img.youtube.com/vi/x8_-Wg6ue9E/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/x8_-Wg6ue9E?autoplay=1",
  },
  {
    id: "national-university",
    client: "NATIONAL UNIVERSITY",
    label: "Enrollment Campaign",
    thumbnail: "https://img.youtube.com/vi/Lme_yYmUZu0/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/Lme_yYmUZu0?autoplay=1",
  },
  {
    id: "illumina",
    client: "ILLUMINA",
    label: "Documentary Content",
    thumbnail: "https://img.youtube.com/vi/pJYNI3lifGA/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/pJYNI3lifGA?autoplay=1",
  },
  {
    id: "sdge",
    client: "SDG&E",
    label: "Brand Storytelling",
    thumbnail: "https://img.youtube.com/vi/70iXMmhsAJ8/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/70iXMmhsAJ8?autoplay=1",
  },
];

export default function App() {
  const [active, setActive] = useState<(typeof tiles)[0] | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="page">
      <header className="header">
        <button className="wordmark" onClick={() => scrollTo("home")}>
          MARK DE LEON
        </button>
        <nav className="nav">
          <button onClick={() => scrollTo("work")}>SELECTED WORK</button>
          <button onClick={() => scrollTo("about")}>ABOUT</button>
          <button onClick={() => scrollTo("contact")}>CONTACT</button>
        </nav>
      </header>

      <section className="hero" id="home">
        <p className="hero-descriptor">
          Creative Producer&nbsp;&nbsp;·&nbsp;&nbsp;Storytelling&nbsp;&nbsp;·&nbsp;&nbsp;Content Production
        </p>
      </section>

      <section className="work-section" id="work">
        <div className="grid">
          {tiles.map((tile) => (
            <button
              key={tile.id}
              className="tile"
              onClick={() => setActive(tile)}
              aria-label={`View ${tile.client} work`}
            >
              <img src={tile.thumbnail} alt={tile.client} className="tile-image" />
              <div className="tile-overlay">
                <span className="tile-label">{tile.label}</span>
                <span className="tile-client">{tile.client}</span>
              </div>
              <div className="tile-play">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          ))}
        </div>
        <footer className="site-footer">
          <span>© 2026 Mark De Leon. All rights reserved.</span>
        </footer>
      </section>

      <About />
      <Contact />

      {active && (
        <Modal
          client={active.client}
          videoUrl={active.videoUrl}
          onClose={() => setActive(null)}
        />
      )}
    </div>
  );
}
