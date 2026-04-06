import { useEffect, useRef } from "react";
import {
  FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaGitAlt, FaHtml5, FaCss3Alt
} from "react-icons/fa";

import {
  SiJavascript, SiMongodb, SiExpress, SiKubernetes, SiTailwindcss,
  SiRedux, SiPostman, SiJira, SiGithub, SiGitlab
} from "react-icons/si";

const skillIcons = {
  "React.js": <FaReact color="#61DBFB" />,
  "Next.js": "▲",
  "JavaScript (ES6+)": <SiJavascript color="#F7DF1E" />,
  "Tailwind CSS": <SiTailwindcss color="#38BDF8" />,
  "HTML5": <FaHtml5 color="#E34F26" />,
  "CSS3": <FaCss3Alt color="#1572B6" />,
  "Redux": <SiRedux color="#764ABC" />,
  "Responsive Design": "📱",

  "Node.js": <FaNodeJs color="#3C873A" />,
  "Express.js": <SiExpress color="#ffffff" />, // white works in dark mode
  "Python": <FaPython color="#3776AB" />,
  "REST APIs": "🔗",
  "Microservices": "🧩",
  "JWT Auth": "🔐",

  "MongoDB": <SiMongodb color="#47A248" />,
  "MS SQL Server": "🗃️",
  "Mongoose": "🍃",

  "AWS": <FaAws color="#FF9900" />,
  "Docker": <FaDocker color="#2496ED" />,
  "Kubernetes": <SiKubernetes color="#326CE5" />,
  "GitLab CI/CD": <SiGitlab color="#FC6D26" />,
  "Linux": "🐧",

  "GitLab": <SiGitlab color="#FC6D26" />,
  "GIT": <FaGitAlt color="#F05032" />,
  "Github": <SiGithub color="#ffffff" />, // white in dark mode
  "JIRA": <SiJira color="#0052CC" />,
  "Postman": <SiPostman color="#FF6C37" />,
  "VS Code": "💻",
  "Agile / Scrum": "⚡",
};

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

const facts = [
  { label: "Primary Language", value: "JavaScript / Python", icon: "🧠", highlight: true },
  { label: "Preferred DB", value: "MS SQL + MongoDB", icon: "🗄️" },
  { label: "Cloud Platform", value: "AWS", icon: "☁️" },
  { label: "Container Tech", value: "Docker + Kubernetes", icon: "📦" },
  { label: "Architecture", value: "Multi Tenant - Monolithic", icon: "🏗️" },
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
            { icon: "⚛️", label: "Frontend", tags: ["React.js", "Next.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3", "Redux", "Responsive Design"] },
            { icon: "⚙️", label: "Backend", tags: ["Node.js", "Express.js", "Python", "REST APIs", "Microservices", "JWT Auth", "Monolithic Architecture"] },
            { icon: "🗄️", label: "Databases", tags: ["MS SQL Server", "MongoDB", "Mongoose", "SQL", "Database Schema"] },
            { icon: "☁️", label: "Cloud & DevOps", tags: ["AWS", "Docker", "Kubernetes", "GitLab CI/CD", "Linux"] },
            { icon: "🛠️", label: "Tools & Workflow", tags: ["GitLab", "GIT", "Github", "JIRA", "Postman", "VS Code", "Agile / Scrum"] },
          ].map(({ icon, label, tags }) => (
            <div className="glass-c sk-cat" key={label}>
              <div className="sk-cat-h">{icon}&nbsp; {label}</div>
              <div className="sk-tags">
                {tags.map((t) => <span className="sk-tag" key={t}>
                  <span className="sk-icon">{skillIcons[t] || "✨"}</span>
                  {t}
                </span>)}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

          <div className="glass-c" style={{ padding: "1.4rem" }}>
            <div style={{ fontWeight: 700, fontSize: "0.88rem", marginBottom: "1rem" }}>⚡ Quick Facts</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {facts.map((item, i, arr) => (
                <div
                  key={item.label}
                  className="fact-row"
                  style={{
                    borderBottom: i < arr.length - 1 ? "1px solid var(--gb)" : "none"
                  }}
                >
                  <div className="fact-left">
                    <span className="fact-icon">{item.icon}</span>
                    <span className="fact-label">{item.label}</span>
                  </div>

                  <div className={`fact-value ${item.highlight ? "highlight" : ""}`}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}