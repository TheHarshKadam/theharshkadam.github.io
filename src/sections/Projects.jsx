import { skillIcons } from "../utils/icons";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    icon: "🌏",
    title: "Mapora - A Globe Guessing Game",
    badge: "Live",
    badgeClass: "pb-live",
    desc: "Built a full-stack geography guessing game using the MERN stack, featuring an interactive 3D globe powered by Three.js with both solo and multiplayer modes, providing real-time distance-based feedback.",
    stack: [
      "React",
      "Three.js",
      "Axios",
      "Node.js",
      "Express.js",
      "Mongo DB",
      "Tailwind CSS",
      "Vercel",
      "Render",
    ],
    github: "https://github.com/TheHarshKadam/Mapora",
    live: "https://maporalive.vercel.app/",
  },
  {
    icon: "🔨",
    title: "Chaos Engineering Tool",
    badge: null,
    desc: "Built Chaos Monkey Lite - A Chaos Engineering tool that injects controlled failures like latency, timeouts, and errors at the middleware level to test backend system resilience, with a React-based dashboard for real-time configuration and monitoring.",
    stack: [
      "Express.js",
      "Node.js",
      "REST APIs",
      "Javascript",
      "React.js",
      "Custom Middleware",
      "Tailwind CSS",
      "Lucide",
    ],
    github: "https://github.com/TheHarshKadam/ChaosMonkeyLite",
    live: null,
  },
  {
    icon: "📱",
    title: "A Decentralized Social Media",
    badge: null,
    desc: "Built Decentagram - A full-stack decentralized social media application enabling users to upload, tip, and rank content using Ethereum smart contracts, with decentralized storage via IPFS and seamless wallet integration through MetaMask.",
    stack: [
      "Solidity",
      "Truffle",
      "Ganache",
      "MetaMask",
      "Web3.js",
      "IPFS",
      "React.js",
      "Node.js",
    ],
    github: "https://github.com/TheHarshKadam/Decentragram",
    live: null,
  },
  {
    icon: "🔢",
    title: "Number Trivia",
    badge: null,
    desc: "Developed a cross-platform mobile application using Flutter and Dart that fetches real-time numerical trivia via REST APIs, featuring dynamic user input handling and theme-based UI (dark/light mode).",
    stack: ["Flutter", "Dart", "RESTAPIs", "Andriod Studio", "iOS"],
    github: "https://github.com/TheHarshKadam/NumberTrivia",
    live: null,
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="s-label">What I've built</div>
      <h2 className="s-title">
        Featured <span className="g">Projects</span>
      </h2>

      <div className="pj-grid">
        {projects.map((p) => (
          <div className="glass-c pj-card" key={p.title}>

            {/* Badge */}
            {p.badge && (
              <span className={`pj-badge ${p.badgeClass}`}>
                {p.badge}
              </span>
            )}

            {/* Top Section */}
            <div className="pj-top">
              <span className="pj-ic">{p.icon}</span>

              <div className="pj-ls">
                {/* GitHub */}
                <a
                  className="pj-l"
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                >
                  <FaGithub />
                </a>

                {/* Live */}
                {p.live && (
                  <a
                    className="pj-l"
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live"
                  >
                    <FiExternalLink />
                  </a>
                )}
              </div>
            </div>

            {/* Title */}
            <div className="pj-t">{p.title}</div>

            {/* Description */}
            <div className="pj-d">{p.desc}</div>

            {/* Stack */}
            <div className="pj-stack">
              {p.stack.map((t) => (
                <span className="pj-tech" key={t}>
                  <span className="pj-icon">
                    {skillIcons[t] || "✨"}
                  </span>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      &nbsp;
      <div className="pj-more">
        <a
          href="https://github.com/TheHarshKadam"
          target="_blank"
          rel="noopener noreferrer"
          className="pj-more-link"
        >
          View all projects on GitHub <span className="arrow">↗</span>
        </a>
      </div>

    </section>
  );
}