import portraitImage from "@assets/Screenshot_2026-05-10_at_4.30.08_PM_1778456761454.png";

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

      <main className="main">
        <div className="text-col">
          <h1 className="name">
            <span>MARK</span>
            <span>DE LEON</span>
          </h1>
          <div className="rule" />
          <p className="role">CREATIVE PRODUCER</p>
          <p className="clients">PADRES&nbsp;&nbsp;·&nbsp;&nbsp;MTV&nbsp;&nbsp;·&nbsp;&nbsp;HP&nbsp;&nbsp;·&nbsp;&nbsp;META</p>
        </div>

        <div className="image-col">
          <img src={portraitImage} alt="Mark De Leon" />
          <div className="image-label">
            <span>CONTENT SYSTEMS</span>
            <span className="label-sep">/</span>
            <span>CAMPAIGN DIRECTION</span>
          </div>
        </div>
      </main>
    </div>
  );
}
