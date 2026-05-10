import posterImage from "@assets/Nike_template_1778456338289.png";

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
