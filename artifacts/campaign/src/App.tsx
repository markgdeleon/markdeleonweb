const tiles = [
  {
    client: "SAN DIEGO PADRES",
    headline: "SOCIAL\nCONTENT\nSYSTEM",
    desc: "Carousels · Reels · Branded Graphics",
    bg: "#0f0505",
    accent: "#c8102e",
    border: "rgba(200,16,46,0.25)",
  },
  {
    client: "MTV",
    headline: "CAMPAIGN\nDIRECTION",
    desc: "Social-First Video · Brand Assets",
    bg: "#0a0a0a",
    accent: "#ffffff",
    border: "rgba(255,255,255,0.12)",
  },
  {
    client: "HP",
    headline: "BRAND\nCAMPAIGN",
    desc: "Content Systems · Platform Delivery",
    bg: "#040810",
    accent: "#0096d6",
    border: "rgba(0,150,214,0.2)",
  },
  {
    client: "META",
    headline: "VETERAN\nCAMPAIGNS",
    desc: "Social Video · National Reach",
    bg: "#040610",
    accent: "#1877f2",
    border: "rgba(24,119,242,0.2)",
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
            style={{
              background: tile.bg,
              borderColor: tile.border,
            }}
          >
            <span
              className="tile-client"
              style={{ color: tile.accent }}
            >
              {tile.client}
            </span>
            <div className="tile-body">
              <h2
                className="tile-headline"
                style={{ whiteSpace: "pre-line" }}
              >
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
