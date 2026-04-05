import { useEffect, useRef } from "react";

const timeline = [
  {
    date: "2025 — Present", badge: "Full-Time", badgeClass: "b-work",
    company: "Accelya Solutions Ind. Ltd.", role: "Software Engineer 2",
    body: "Designed and implemented scalable backend architecture for an airline auditing SaaS platform using DAO/DTO patterns, ensuring clean separation of concerns and maintainable code. Built robust REST APIs with Node.js and optimized data access layers with MS SQL and MongoDB, improving system performance, data consistency, and extensibility across 100+ airline integrations.",
    dotColor: "var(--c1)",
  },
  {
    date: "2023 — 2025", badge: "Full-Time", badgeClass: "b-work",
    company: "Accelya Solutions Ind. Ltd.", role: "Software Engineer 1",
    body: "Led end-to-end development and data operations for an airline auditing SaaS platform, managing data integrity for 100+ airlines. Built scalable MERN applications, optimized MS SQL workflows, and delivered real-time auditing solutions that reduced booking abuse by 50% and improved system performance by 25%.",
    dotColor: "var(--c1)",
  },
  {
    date: "2022 — 2022", badge: "Internship", badgeClass: "b-work",
    company: "Acmegrade", role: "Full Stack Web Developer Intern",
    body: "Developed and configured a fully-functional e-commerce website using HTML, CSS, Bootstrap, PHP, and JavaScript. Utilized PHP and SQL to manage and manipulate data efficiently and Integrated JavaScript to enhance user interaction and interface with site",
    dotColor: "var(--c1)",
  },
  {
    date: "2019 — 2023", badge: "Education", badgeClass: "b-edu",
    company: "Pillai College of Engineering", role: "B.Tech — Computer Engineering",
    body: "Graduated with 8.8 CGPA & a strong academic standing. Coursework included Data Structures, Algorithms, DBMS, Operating Systems, Web Technologies, and Computer Networks. Active participant in coding clubs and hackathons.",
    dotColor: "var(--c2)", dateColor: "var(--c2)",
  },
  {
    date: "2017 — 2019", badge: "Education", badgeClass: "b-edu",
    company: "PACE Junior Science College", role: "HSC — Science (PCM + Computer Science)",
    body: "Completed HSC with distinction. Wrote first programs in C and explored DART and discovered a passion for problem-solving through software — the spark that led to a career in engineering.",
    dotColor: "var(--c2)", dateColor: "var(--c2)",
  },
];

export default function Experience() {
  const itemsRef = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add("vis"), i * 80);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    itemsRef.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience">
      <div className="s-label">My journey</div>
      <h2 className="s-title">Experience &amp; <span className="g">Education</span></h2>
      <div className="tl">
        {timeline.map((item, i) => (
          <div className="tl-i" key={i} ref={(el) => (itemsRef.current[i] = el)}>
            <div className="tl-dot" style={{ borderColor: item.dotColor }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: item.dotColor }} />
            </div>
            <div className="tl-meta">
              <span className="tl-date" style={item.dateColor ? { color: item.dateColor } : {}}>{item.date}</span>
              <span className={`badge ${item.badgeClass}`}>{item.badge}</span>
            </div>
            <div className="tl-co">{item.company}</div>
            <div className="tl-role">{item.role}</div>
            <div className="tl-body">{item.body}</div>
          </div>
        ))}
      </div>
    </section>
  );
}