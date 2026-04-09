import { useEffect, useRef, useState } from "react";
import { FaLinkedin, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Eva Chaves",
    role: "Project & Service Manager",
    company: "Accelya Solutions Ind. Ltd.",
    avatar: "",
    initials: "EC",
    color: "#00ffe0",     
    text: "I have had the opportunity to work closely with Harsh for several years and have always been impressed by his professionalism, technical expertise, and dedication to delivering high-quality software.Harsh brings strong capabilities across both frontend and backend development, along with a solid understanding of clean architecture and performance optimization. His well-rounded technical knowledge allows him to approach challenges thoughtfully and build efficient, scalable solutions.Beyond his technical strengths, Harsh contributes a positive and collaborative attitude to the team. He is reliable, proactive, and always willing to support others to achieve the best possible outcomes. Working with him is both productive and enjoyable, and I’m confident that any team would greatly benefit from having him on board.",
    linkedin: "https://www.linkedin.com/in/harshvardhankadam/details/recommendations/?detailScreenTabIndex=0",
    relationship: "Project Manager",
  },
  {
    name: "Esther Varela",
    role: "Senior Project Manager",
    company: "Accelya Solutions Ind. Ltd.",
    avatar: "",
    initials: "EV",
    color: "#6c63ff",
    text: "I have been working closely with Harsh for a few years. Harsh has consistently demonstrated excellent technical acumen, professionalism, and a genuine passion for building high-quality software. Harsh combines strong frontend and backend expertise with a deep understanding of clean architecture and performance optimization. Harsh always brings a positive and collaborative energy. He is dependable, proactive, and genuinely great to work with, any team would be lucky to have him.",
    linkedin: "https://www.linkedin.com/in/harshvardhankadam/details/recommendations/?detailScreenTabIndex=0",
    relationship: "Project/Implementation Manager",
  },
  {
    name: "Roberto Delgado",
    role: "Product Manager",
    company: "Accelya Solutions Ind. Ltd.",
    avatar: "",
    initials: "RD",
    color: "#ff4d6d",
    text: "I’ve had the privilege of working with Harsh for more than two years, and during this time, he’s consistently impressed me with his technical expertise, problem-solving mindset, and strong sense of ownership. As a Software Engineer, Harsh brings both depth and versatility to every project he touches.What truly sets Harsh apart is his ability to bridge the gap between technical complexity and business needs. Harsh approaches every task with professionalism and enthusiasm.Beyond his technical skills, Harsh is a true team player. He communicates effectively, collaborates seamlessly across functions, and contributes positively to the overall team culture. His proactive attitude and commitment to delivering quality work make him a standout engineer and a pleasure to work with.I highly recommend Harsh to any team looking for a dependable, skilled, and forward-thinking software engineer. He would be a tremendous asset to any organization.",
    linkedin: "https://www.linkedin.com/in/harshvardhankadam/details/recommendations/?detailScreenTabIndex=0",
    relationship: "Product Manager",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const cardRefs = useRef([]);
  const trackRef = useRef();


  useEffect(() => {
    const id = setInterval(() => advance(1), 6000);
    return () => clearInterval(id);
  }, [active]);

  
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add("tst-vis"), i * 120);
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.15 }
    );
    cardRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  function advance(dir) {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive((prev) => (prev + dir + testimonials.length) % testimonials.length);
      setAnimating(false);
    }, 300);
  }

  return (
    <section id="testimonials">
      {/* ── Header ── */}
      <div className="s-label">What people say</div>
      <h2 className="s-title">
        Recommendations <span className="g">&amp; Reviews</span>
      </h2>
      <p className="tst-sub">
        Sourced from LinkedIn recommendations by colleagues and managers I've worked with.
      </p>

      
      <div className="tst-grid">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="glass-c tst-card"
            ref={(el) => (cardRefs.current[i] = el)}
          >
            {/* quote icon */}
            <div className="tst-quote-icon">
              <FaQuoteLeft />
            </div>

            {/* stars */}
            <div className="tst-stars">{"★".repeat(5)}</div>

            {/* text */}
            <p className="tst-text">"{t.text}"</p>

            {/* footer */}
            <div className="tst-footer">
              <div className="tst-avatar-wrap" style={{ "--ring": t.color }}>
                {t.avatar
                  ? <img src={t.avatar} alt={t.name} className="tst-avatar-img" />
                  : (
                    <div className="tst-avatar-init" style={{ background: t.color + "22", color: t.color }}>
                      {t.initials}
                    </div>
                  )
                }
              </div>
              <div className="tst-meta">
                <div className="tst-name">{t.name}</div>
                <div className="tst-role">{t.role} · {t.company}</div>
                <div className="tst-rel">{t.relationship}</div>
              </div>
              <a
                href={t.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="tst-li-btn"
                title="View on LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        ))}
      </div>


      <div className="tst-carousel">
        <div className={`tst-carousel-card glass-c ${animating ? "tst-fade-out" : "tst-fade-in"}`}>
          <div className="tst-quote-icon"><FaQuoteLeft /></div>
          <div className="tst-stars">{"★".repeat(5)}</div>
          <p className="tst-text">"{testimonials[active].text}"</p>
          <div className="tst-footer">
            <div className="tst-avatar-wrap" style={{ "--ring": testimonials[active].color }}>
              {testimonials[active].avatar
                ? <img src={testimonials[active].avatar} alt={testimonials[active].name} className="tst-avatar-img" />
                : (
                  <div className="tst-avatar-init" style={{ background: testimonials[active].color + "22", color: testimonials[active].color }}>
                    {testimonials[active].initials}
                  </div>
                )
              }
            </div>
            <div className="tst-meta">
              <div className="tst-name">{testimonials[active].name}</div>
              <div className="tst-role">{testimonials[active].role} · {testimonials[active].company}</div>
              <div className="tst-rel">{testimonials[active].relationship}</div>
            </div>
            <a
              href={testimonials[active].linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="tst-li-btn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* carousel controls */}
        <div className="tst-controls">
          <button className="tst-arrow" onClick={() => advance(-1)}>‹</button>
          <div className="tst-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`tst-dot ${i === active ? "tst-dot-active" : ""}`}
                onClick={() => { setActive(i); }}
              />
            ))}
          </div>
          <button className="tst-arrow" onClick={() => advance(1)}>›</button>
        </div>
      </div>

      {/* LinkedIn CTA */}
      <div className="tst-cta">
        <a
          href="https://www.linkedin.com/in/harshvardhankadam/"
          target="_blank"
          rel="noopener noreferrer"
          className="tst-cta-link"
        >
          <FaLinkedin style={{ fontSize: "1.1rem" }} />
          View all recommendations on LinkedIn
          <span className="arrow">↗</span>
        </a>
      </div>
    </section>
  );
}