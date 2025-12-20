import { useEffect } from "react";
import "./App.css";

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("show")),
      { threshold: 0.15 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page">
      <header className="hero">
        <div className="heroOverlay" />
        <div className="heroInner reveal">
          <p className="kicker">ELECTRICAL ENGINEERING • CONTROLS • AUTOMATION</p>
          <h1 className="name">Anjila Belbase</h1>

          <p className="bio">
            Controls Engineering Specialist @ Cirkul • BSc in Electrical Engineering @ USF (Dec 2025).
            <br />
            I am a recent Electrical Engineering graduate with hands-on experience in industrial automation and controls engineering.
            I have worked extensively with PLCs, HMIs, and electrical systems in a manufacturing environment, focusing on improving equipment reliability, uptime, and operator usability.
            I enjoy building practical systems that bridge hardware, software, and real-world operations.
          </p>

          <div className="cta">
            <a className="btn primary" href="#projects">View Project ↓</a>
            <a className="btn ghost" href="/resume.pdf" download>Download Resume</a>
          </div>
        </div>
      </header>

      <section className="section" id="projects">
        <div className="sectionHeader reveal">
          <h2>Featured Project</h2>
          <p>Right now I’m showcasing one project — more coming soon.</p>
        </div>

        <a
          className="card reveal"
          href="https://github.com/anjila1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="cardImg" src="/assets/p1.jpeg" alt="Smart IoT Farming System for Microgreens" />
          <div className="cardBody">
            <h3>Smart IoT Farming System for Microgreens</h3>
            <p>
              ESP32-based IoT sensor system to monitor environmental + water parameters and improve microgreens growing efficiency
              through real-time data visibility and practical automation.
            </p>
            <span className="cardLink">Open on GitHub →</span>
          </div>
        </a>
      </section>

      <footer className="footer">© {new Date().getFullYear()} Anjila Belbase</footer>
    </div>
  );
}
