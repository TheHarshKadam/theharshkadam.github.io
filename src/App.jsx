import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";   // ← NEW
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div>
      <div className="ambient">
        <div className="amb-blob"></div>
        <div className="amb-blob"></div>
        <div className="amb-blob"></div>
      </div>
      <div className="grid-overlay"></div>

      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Testimonials />  
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