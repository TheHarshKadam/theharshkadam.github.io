import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const toggleTheme = () => {
    document.body.classList.toggle("lm");
    setDark(!dark);
  };

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const sections = ["home", "about", "skills", "experience", "projects", "testimonials", "contact"];

  const label = (sec) => {
    if (sec === "experience") return "Timeline";
    if (sec === "testimonials") return "Reviews";
    return sec.charAt(0).toUpperCase() + sec.slice(1);
  };

  return (
    <nav>
      <div className="logo" onClick={() => goTo("home")}>THK.</div>

      {/* DESKTOP NAV */}
      <ul className="nav-links desktop">
        {sections.map((sec) => (
          <li key={sec}>
            <a href="#" onClick={(e) => { e.preventDefault(); goTo(sec); }}>
              {label(sec)}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-r">
        <button className="tbtn" onClick={toggleTheme}>
          {dark ? "🌙" : "☀️"}
        </button>

        {/* HAMBURGER */}
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <button className="hire-btn" onClick={() => goTo("contact")}>
          Hire Me
        </button>
      </div>

      {menuOpen && (
        <>
          <div className="overlay" onClick={() => setMenuOpen(false)} />
          <div className="mobile-menu" ref={menuRef}>
            {sections.map((sec) => (
              <a key={sec} onClick={() => goTo(sec)}>
                {label(sec).toUpperCase()}
              </a>
            ))}
          </div>
        </>
      )}
    </nav>
  );
}