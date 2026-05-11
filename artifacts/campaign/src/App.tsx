const tiles = [
  {
    client: "SAN DIEGO PADRES",
    headline: "SOCIAL\nCONTENT\nSYSTEM",
    desc: "Carousels · Reels · Branded Graphics",
    bg: "#ede8e3",
    accent: "#c8102e",
  },
  {
    client: "MTV",
    headline: "CAMPAIGN\nDIRECTION",
    desc: "Social-First Video · Brand Assets",
    bg: "#f0ede8",
    accent: "#111111",
  },
  {
    client: "HP",
    headline: "BRAND\nCAMPAIGN",
    desc: "Content Systems · Platform Delivery",
    bg: "#eaeef2",
    accent: "#0069b4",
  },
  {
    client: "META",
    headline: "VETERAN\nCAMPAIGNS",
    desc: "Social Video · National Reach",
    bg: "#eceef5",
    accent: "#1877f2",
  },
];

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <span className="wordmark">MARK DE LEON</span>
        <nav className="nav">
          <a href="#work">WORK</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      <section className="hero">
        <p className="hero-eyebrow">CREATIVE PRODUCER · LOS ANGELES</p>
        <h1 className="hero-title">
          <span>CAMPAIGN</span>
          <span className="hero-title-indent">DIRECTION</span>
        </h1>
      </section>

      <div className="grid">
        {tiles.map((tile) => (
          <div
            key={tile.client}
            className="tile"
            style={{ background: tile.bg }}
          >
            <span className="tile-client" style={{ color: tile.accent }}>
              {tile.client}
            </span>
            <div className="tile-body">
              <h2 className="tile-headline" style={{ whiteSpace: "pre-line" }}>
                {tile.headline}
              </h2>
              <p className="tile-desc">{tile.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
