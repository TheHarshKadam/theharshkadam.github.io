export default function Home() {
  const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home">
      <div className="avail-pill">
        <span className="pulse-dot"></span>Open to opportunities
      </div>
      <h1 className="h-name">
        Harshvardhan<br /><span className="g">Kadam</span>
      </h1>
      <p className="h-role">Software Engineer &nbsp;·&nbsp; Backend &nbsp;·&nbsp; Full Stack</p>
      <div className="h-mono">&lt;building scalable systems /&gt;</div>
      <p className="h-desc">
        Software Engineer with 3+ years of experience building scalable, high-performance web
        applications. Passionate about system design, clean architecture, and solving complex
        problems to create impactful, user-focused products.
      </p>
      <div className="h-btns">
        <a
          className="btn-o"
          href="../public/HARSHVARDHAN KADAM CV.pdf"
          download
          style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
        >
          📄 Download Resume
        </a>
        <button className="btn-o" onClick={() => goTo("about")}>About Me</button>
        <button className="btn-p" onClick={() => goTo("projects")}>View Projects →</button>
        
      </div>
      <div className="h-stats">
        <div className="stat"><div className="n">Backend</div><div className="l">Expert</div></div>
        <div className="stat"><div className="n">System Design</div><div className="l">Scalable Architecture</div></div>
        <div className="stat"><div className="n">3+</div><div className="l">Years Experience</div></div>
      </div>
      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}