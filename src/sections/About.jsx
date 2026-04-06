export default function About() {
  return (
    <section id="about">
      <div className="s-label">Who am I</div>
      <h2 className="s-title">About <span className="g">Me</span></h2>
      <div className="ab-grid">
        <div className="av-box">
          <div className="av">👨‍💻</div>
          <div className="av-name">Harshvardhan Kadam</div>
          <div className="av-tag">Software Engineer</div>
        </div>
        <div>
          <p className="ab-text">
            Hey!, I'm Harshvardhan Kadam - a Software Engineer and Full Stack Developer working
            with data systems for 100+ airlines. I specialize in building scalable applications
            using NODE JS, EXPRESS JS, MS SQL, REACT JS and solving real-world problems using
            clean, efficient architecture. I enjoy working across the stack — from crafting
            intuitive frontends to designing robust backend systems — always focusing on
            performance, usability, and business impact.
          </p>
          <p className="ab-text" style={{ marginTop: "0.7rem" }}>
            Currently building impactful software at{" "}
            <strong style={{ color: "var(--c1)" }}>Accelya Solutions Ind. Ltd.</strong>. I'm
            driven by clean architecture, developer experience, and shipping software that
            actually matters. When I'm not coding, I'm exploring DevOps tooling, Exploring
            cloud tools or deep-diving into system design.
          </p>
          <div className="ab-grid2">
            <div className="ab-item"><div className="ab-il">Location</div><div className="ab-iv">Mumbai, India 🇮🇳</div></div>
            <div className="ab-item"><div className="ab-il">Role</div><div className="ab-iv">Software Engineer</div></div>
            <div className="ab-item"><div className="ab-il">Focus</div><div className="ab-iv">Backend + FullStack</div></div>
            <div className="ab-item"><div className="ab-il">Status</div><div className="ab-iv" style={{ color: "var(--c1)" }}>Open to Work ✓</div></div>
          </div>
          {/* Centered, larger download button */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: "1.2rem" }}>
            <a
              className="dl-btn"
              href="../public/HARSHVARDHAN KADAM CV.pdf"
              download
              style={{ padding: "0.85rem 2.2rem", fontSize: "0.95rem", borderRadius: "12px" }}
            >
              <span>📄</span> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}