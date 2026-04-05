import { useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    document.body.classList.toggle("lm");
    setDark(!dark);
  };

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav>
      <div className="logo" onClick={() => goTo("home")}>HK.</div>
      <ul className="nav-links">
        {["home","about","skills","experience","projects","contact"].map((sec) => (
          <li key={sec}>
            <a href="#" onClick={(e) => { e.preventDefault(); goTo(sec); }}>
              {sec === "experience" ? "Timeline" : sec.charAt(0).toUpperCase() + sec.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      <div className="nav-r">
        <button className="tbtn" onClick={toggleTheme}>{dark ? "🌙" : "☀️"}</button>
        <button className="hire-btn" onClick={() => goTo("contact")}>Hire Me</button>
      </div>
    </nav>
  );
}