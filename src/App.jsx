import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div>
      {/* Ambient blobs */}
      <div className="ambient">
        <div className="amb-blob"></div>
        <div className="amb-blob"></div>
        <div className="amb-blob"></div>
      </div>

      {/* Grid overlay */}
      <div className="grid-overlay"></div>

      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

      <footer>
        <p>
          Designed &amp; built by <span>TheHarshKadam</span>
          &nbsp;·&nbsp; Backend &nbsp;·&nbsp; FullStack &nbsp;·&nbsp; © 2026
        </p>
      </footer>
    </div>
  );
}