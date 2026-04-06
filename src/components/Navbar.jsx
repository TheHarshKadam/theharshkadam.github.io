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

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const toggleTheme = () => {
    document.body.classList.toggle("lm");
    setDark(!dark);
  };

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // close after click
  };

  return (
    <nav>
      <div className="logo" onClick={() => goTo("home")}>THK.</div>

      {/* 🔥 DESKTOP NAV */}
      <ul className="nav-links desktop">
        {["home", "about", "skills", "experience", "projects", "contact"].map((sec) => (
          <li key={sec}>
            <a href="#" onClick={(e) => { e.preventDefault(); goTo(sec); }}>
              {sec === "experience" ? "Timeline" : sec.charAt(0).toUpperCase() + sec.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-r">
        <button className="tbtn" onClick={toggleTheme}>
          {dark ? "🌙" : "☀️"}
        </button>

        {/* 🔥 HAMBURGER BUTTON */}
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
            {["home", "about", "skills", "experience", "projects", "contact"].map((sec) => (
              <a key={sec} onClick={() => goTo(sec)}>
                {sec === "experience" ? "Timeline" : sec.toUpperCase()}
              </a>
            ))}
          </div>
        </>
      )}
    </nav>
  );
}