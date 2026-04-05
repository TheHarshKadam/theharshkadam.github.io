const projects = [
  {
    icon: "🛒", title: "E-Commerce Platform", badge: "Live", badgeClass: "pb-live",
    desc: "Full-stack shopping platform with real-time inventory, secure payment via Razorpay/Stripe, admin dashboard, and PWA. Deployed on AWS with Docker.",
    stack: ["React","Node.js","MongoDB","AWS","Docker"],
    github: "#", live: "#",
  },
  {
    icon: "📊", title: "Enterprise Dashboard", badge: "Live", badgeClass: "pb-live",
    desc: "Real-time analytics dashboard backed by MS SQL Server. Features complex KPI visualizations, scheduled reports, role-based access, and a CI/CD pipeline via GitLab.",
    stack: ["Next.js","Node.js","MS SQL","GitLab CI","Docker"],
    github: "#", live: "#",
  },
  {
    icon: "🤖", title: "Python Data Pipeline", badge: null,
    desc: "Automated ETL pipeline in Python that ingests, transforms, and loads data from multiple sources into MongoDB and MS SQL. Containerized with Docker, orchestrated via Kubernetes.",
    stack: ["Python","MongoDB","MS SQL","Docker","K8s"],
    github: "#", live: null,
  },
  {
    icon: "💬", title: "Real-Time Chat App", badge: "Live", badgeClass: "pb-live",
    desc: "Full-featured messaging application with WebSocket-based real-time updates, user auth with JWT, file sharing, and read receipts. Tested end-to-end with Postman.",
    stack: ["React","Socket.io","Node.js","MongoDB","JWT"],
    github: "#", live: "#",
  },
  {
    icon: "🔐", title: "Auth Microservice", badge: "OSS", badgeClass: "pb-oss",
    desc: "Production-ready auth microservice with OAuth2, JWT, MFA, and RBAC. Deployed as a Docker container on AWS ECS with GitLab CI pipeline for automated builds and deployment.",
    stack: ["Node.js","Express","MongoDB","Docker","AWS ECS"],
    github: "#", live: null,
  },
  {
    icon: "☁️", title: "Cloud Infrastructure Automation", badge: null,
    desc: "AWS infrastructure-as-code using CloudFormation. Automates VPC, EC2, RDS, S3, and auto-scaling. Managed entirely through GitLab CI/CD pipelines with Docker and Kubernetes.",
    stack: ["AWS","CloudFormation","GitLab CI","Docker","K8s"],
    github: "#", live: null,
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="s-label">What I've built</div>
      <h2 className="s-title">Featured <span className="g">Projects</span></h2>
      <div className="pj-grid">
        {projects.map((p) => (
          <div className="glass-c pj-card" key={p.title}>
            {p.badge && <span className={`pj-badge ${p.badgeClass}`}>{p.badge}</span>}
            <div className="pj-top">
              <span className="pj-ic">{p.icon}</span>
              <div className="pj-ls">
                <a className="pj-l" href={p.github} title="GitHub">⌘</a>
                {p.live && <a className="pj-l" href={p.live} title="Live">↗</a>}
              </div>
            </div>
            <div className="pj-t">{p.title}</div>
            <div className="pj-d">{p.desc}</div>
            <div className="pj-stack">
              {p.stack.map((t) => <span className="pj-tech" key={t}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}