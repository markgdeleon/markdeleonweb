export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-inner about-inner">
        <div className="about-image-col">
          <div className="about-image-placeholder">
            <span className="about-image-label">PORTRAIT</span>
          </div>
        </div>

        <div className="about-text-col">
          <p className="section-eyebrow">ABOUT</p>
          <h2 className="about-name">MARK DE LEON</h2>
          <div className="about-divider" />
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
            className="resume-btn"
            href="#"
            onClick={(e) => e.preventDefault()}
            aria-label="Download Resume"
          >
            DOWNLOAD RESUME
          </a>
        </div>
      </div>
    </section>
  );
}
