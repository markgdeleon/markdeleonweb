import { useState } from "react";
import Modal from "./Modal";

const tiles = [
  {
    id: "hp",
    client: "HP",
    label: "Brand Campaign",
    index: "01",
    bg: "#e4e8ec",
    videoUrl: "https://www.youtube.com/embed/x8_-Wg6ue9E",
  },
  {
    id: "national-university",
    client: "NATIONAL UNIVERSITY",
    label: "Enrollment Campaign",
    index: "02",
    bg: "#eceae6",
    videoUrl: "https://www.youtube.com/embed/Lme_yYmUZu0",
  },
  {
    id: "illumina",
    client: "ILLUMINA",
    label: "Documentary Content",
    index: "03",
    bg: "#e6ece8",
    videoUrl: "https://www.youtube.com/embed/pJYNI3lifGA",
  },
  {
    id: "sdge",
    client: "SDG&E",
    label: "Brand Storytelling",
    index: "04",
    bg: "#ece6e4",
    videoUrl: "https://www.youtube.com/embed/70iXMmhsAJ8",
  },
];

export default function App() {
  const [active, setActive] = useState<(typeof tiles)[0] | null>(null);

  return (
    <div className="page">
      <header className="header">
        <span className="wordmark">MARK DE LEON</span>
        <nav className="nav">
          <a href="#work">SELECTED WORK</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      <section className="hero">
        <p className="hero-descriptor">
          Creative Producer&nbsp;&nbsp;·&nbsp;&nbsp;Storytelling&nbsp;&nbsp;·&nbsp;&nbsp;Content Production
        </p>
      </section>

      <div className="grid" id="work">
        {tiles.map((tile) => (
          <button
            key={tile.id}
            className="tile"
            style={{ background: tile.bg }}
            onClick={() => setActive(tile)}
            aria-label={`View ${tile.client} work`}
          >
            <span className="tile-index">{tile.index}</span>
            <div className="tile-footer">
              <span className="tile-client">{tile.client}</span>
              <span className="tile-label">{tile.label}</span>
            </div>
          </button>
        ))}
      </div>

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
