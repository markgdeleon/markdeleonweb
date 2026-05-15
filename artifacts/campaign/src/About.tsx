import portrait from "@assets/Screenshot_2026-05-15_at_12.20.50_AM_1778830527236.png";

const resumeUrl = `${import.meta.env.BASE_URL}MarkDeLeon_CreativeProducer.pdf`;

export default function About() {
  return (
    <div className="about-page">
      <div className="about-image-col">
        <img
          className="about-portrait"
          src={portrait}
          alt="Mark De Leon — on set, directing"
        />
      </div>

      <div className="about-text-col">
        <p className="eyebrow">ABOUT</p>
        <h1 className="about-name">MARK<br />DE LEON</h1>
        <div className="rule" />
        <p className="about-bio">
          Mark De Leon is a creative producer, filmmaker, and U.S. Navy veteran
          with more than 10 years of experience producing branded, documentary,
          and story-driven content. His work spans entertainment, nonprofit,
          education, technology, and commercial industries, with experience
          creating content for organizations including Meta, ACLU, HP, MTV,
          National University, and others.
        </p>
        <p className="about-bio">
          His background combines production leadership, visual storytelling,
          interview-driven filmmaking, corporate communications, and social-first
          content production. He is especially drawn to human-centered stories,
          innovation, operational environments, and projects that make complex
          ideas feel clear, emotional, and accessible.
        </p>
        <a
          className="btn-outline"
          href={resumeUrl}
          download="MarkDeLeon_CreativeProducer.pdf"
          target="_blank"
          rel="noreferrer"
        >
          DOWNLOAD RESUME
        </a>
      </div>
    </div>
  );
}
