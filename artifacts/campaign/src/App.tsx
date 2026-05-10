import posterImage from "@assets/Screenshot_2026-05-10_at_4.30.08_PM_1778456761454.png";

export default function App() {
  return (
    <div className="page">
      <img src={posterImage} alt="Mark De Leon" className="bg-image" />

      <div className="overlay">
        <div className="top-left">
          <span>MARK</span>
          <span>DE LEON</span>
        </div>

        <div className="top-right">
          <span>SOCIAL MEDIA</span>
          <span>GRAPHIC DESIGN</span>
        </div>

        <div className="mid-strip">
          <span className="mid-label">A SELECTION OF</span>
          <span className="mid-item">MARK DE LEON</span>
          <span className="sep">/</span>
          <span className="mid-item">CAMPAIGN<br />DIRECTION</span>
          <span className="sep">/</span>
          <span className="mid-item">CONTENT<br />SYSTEMS</span>
          <span className="sep">/</span>
          <span className="mid-item">BRAND<br />ASSETS</span>
        </div>

        <div className="bottom-left">
          <span>05</span>
          <span>THE</span>
          <span>WORK</span>
        </div>

        <div className="bottom-right">
          <a href="mailto:your@email.com" data-testid="link-email">CONTACT</a>
        </div>
      </div>
    </div>
  );
}
