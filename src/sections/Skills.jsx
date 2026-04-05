import { useEffect, useRef } from "react";

const skillBars = [
  { name: "React / Next.js", pct: 92 },
  { name: "JavaScript", pct: 90 },
  { name: "Node.js / Express", pct: 88 },
  { name: "MongoDB", pct: 85 },
  { name: "MS SQL", pct: 82 },
  { name: "Python", pct: 78 },
  { name: "AWS / Cloud", pct: 76 },
  { name: "Docker / K8s", pct: 74 },
  { name: "GitLab CI/CD", pct: 80 },
  { name: "HTML / CSS", pct: 93 },
];

export default function Skills() {
  const fillsRef = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const w = e.target.getAttribute("data-w");
          setTimeout(() => { e.target.style.width = w + "%"; }, 200);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });

    fillsRef.current.forEach((f) => f && obs.observe(f));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills">
      <div className="s-label">What I work with</div>
      <h2 className="s-title">Tech <span className="g">Stack</span></h2>
      <div className="sk-layout">
        <div className="sk-cats">
          {[
            { icon: "⚛️", label: "Frontend", tags: ["React.js","Next.js","JavaScript (ES6+)","Tailwind CSS","HTML5","CSS3","Redux","Responsive Design"] },
            { icon: "⚙️", label: "Backend", tags: ["Node.js","Express.js","Python","REST APIs","Microservices","JWT Auth", "Monolithic Architecture"] },
            { icon: "🗄️", label: "Databases", tags: ["MS SQL Server","MongoDB","Mongoose","SQL","Database Schema"] },
            { icon: "☁️", label: "Cloud & DevOps", tags: ["AWS","Docker","Kubernetes","GitLab CI/CD","Linux"] },
            { icon: "🛠️", label: "Tools & Workflow", tags: ["GitLab","GIT","Github","JIRA","Postman","VS Code","Agile / Scrum"] },
          ].map(({ icon, label, tags }) => (
            <div className="glass-c sk-cat" key={label}>
              <div className="sk-cat-h">{icon}&nbsp; {label}</div>
              <div className="sk-tags">
                {tags.map((t) => <span className="sk-tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

          <div className="glass-c" style={{ padding: "1.4rem" }}>
            <div style={{ fontWeight: 700, fontSize: "0.88rem", marginBottom: "1rem" }}>⚡ Quick Facts</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                ["Primary Language", "JavaScript / Python", "var(--c1)"],
                ["Preferred DB", "MS SQL + MONGODB", null],
                ["Cloud Platform", "AWS", null],
                ["Container Tech", "Docker + Kubernetes", null],
                ["Architecture", "Multi Tenant - Monolithic", null],
              ].map(([label, val, color], i, arr) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem", padding: "0.5rem 0", borderBottom: i < arr.length - 1 ? "1px solid var(--gb)" : "none" }}>
                  <span style={{ color: "var(--t3)" }}>{label}</span>
                  <span style={{ fontWeight: 600, color: color || "inherit" }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}