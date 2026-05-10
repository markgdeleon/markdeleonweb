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
          <a href="#work" data-testid="link-work">WORK</a>
          <a href="#about" data-testid="link-about">ABOUT</a>
          <a href="#contact" data-testid="link-contact">CONTACT</a>
        </div>
      </div>
    </div>
  );
}
