import { useEffect, useMemo, useState } from "react";
import "./App.css";

// Your photo: keep this at src/assets/me.jpg
import meImg from "./assets/me.jpg";

function IconLinkedIn(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.94v5.666H9.35V9h3.414v1.561h.046c.476-.9 1.636-1.85 3.366-1.85 3.6 0 4.268 2.37 4.268 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.814 20.452H3.86V9h2.954v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0z"
      />
    </svg>
  );
}

function IconGitHub(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 .5C5.73.5.75 5.62.75 12.02c0 5.12 3.17 9.46 7.57 10.99.55.1.76-.25.76-.55v-2.1c-3.08.69-3.73-1.54-3.73-1.54-.5-1.32-1.22-1.67-1.22-1.67-1-.71.08-.7.08-.7 1.11.08 1.69 1.17 1.69 1.17.98 1.74 2.58 1.24 3.21.95.1-.73.38-1.24.69-1.52-2.46-.29-5.04-1.25-5.04-5.56 0-1.23.43-2.24 1.13-3.03-.12-.29-.49-1.46.11-3.04 0 0 .92-.3 3.01 1.16a10.1 10.1 0 0 1 2.74-.38c.93 0 1.87.13 2.74.38 2.09-1.46 3.01-1.16 3.01-1.16.6 1.58.23 2.75.11 3.04.7.79 1.13 1.8 1.13 3.03 0 4.32-2.58 5.26-5.05 5.55.39.36.74 1.08.74 2.18v3.23c0 .3.2.65.77.55 4.39-1.53 7.56-5.87 7.56-10.99C23.25 5.62 18.27.5 12 .5z"
      />
    </svg>
  );
}

function IconMail(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"
      />
    </svg>
  );
}

function IconPhone(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.21 2.2z"
      />
    </svg>
  );
}

export default function App() {
  const [activeProject, setActiveProject] = useState(null);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  // Reveal-on-scroll
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("show");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // ESC closes modal
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setActiveProject(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Prevent background scroll while modal open
  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [activeProject]);

  const skills = useMemo(
    () => [
      {
        title: "Controls + Automation",
        items: ["Allen-Bradley PLCs", "Studio 5000 / RSLogix", "I/O + interlocks", "Troubleshooting"],
        icon: "⚙️",
      },
      {
        title: "HMI + Operator UX",
        items: ["FactoryTalk View", "Alarms + diagnostics", "Clean screen layouts", "Operator clarity"],
        icon: "🖥️",
      },
      {
        title: "Embedded + IoT",
        items: ["ESP32", "MQTT", "Sensors + data logging", "Hardware + software integration"],
        icon: "📡",
      },
      {
        title: "Electrical Design",
        items: ["AutoCAD Electrical", "Wiring schematics", "BOMs + SOPs", "Panel documentation"],
        icon: "🔌",
      },
    ],
    []
  );

  const experience = useMemo(
    () => [
      {
        role: "Controls Engineering Specialist",
        company: "Cirkul Inc.",
        dates: "Aug 2024 – Dec 2025",
        bullets: [
          "Built & debugged PLC/HMI features to stabilize automation and improve uptime.",
          "Standardized BOMs, wiring schematics, and SOPs in AutoCAD for build consistency.",
          "Commissioned equipment: I/O validation, safety interlocks, troubleshooting, tuning.",
        ],
      },
      {
        role: "Controls Engineering Co-Op / Specialist",
        company: "Cirkul Inc.",
        dates: "May 2024 – Aug 2024",
        bullets: [
          "Hands-on panel/equipment wiring support alongside electricians for upgrades.",
          "Improved documentation accuracy with schematic revisions and panel layout updates.",
          "Validated I/O points and reduced install errors through verification checklists.",
        ],
      },
    ],
    []
  );

  const projects = useMemo(
    () => [
      {
        id: "p1",
        title: "Smart IoT Farming System for Microgreens",
        img: "/assets/p1.jpeg",
        tags: ["ESP32", "MQTT", "Sensors", "Cloud"],
        what: [
          "Monitors environmental + water parameters to support consistent microgreens growth.",
          "Streams sensor data to the cloud for visibility and logging.",
        ],
        how: ["ESP32 microcontroller", "MQTT messaging", "IoT sensors + data streaming"],
        why: ["Reduces manual guesswork and improves consistency.", "Connects hardware + software for real operations."],
        outcome: ["A practical monitoring system foundation ready for alerting and automation."],
      },
      {
        id: "p2",
        title: "Gesture-Controlled ESP32-Based MP3 Player",
        img: "/assets/p2.png",
        tags: ["ESP32", "MPU6050", "DFPlayer Mini", "C / Arduino IDE"],
        what: [
          "Portable MP3 player that plays audio from a microSD card.",
          "Gesture-based controls: swipe to skip, tilt for volume, shake to pause.",
        ],
        how: ["ESP32 + DFPlayer Mini", "MPU6050 motion sensing", "C (Arduino IDE) firmware for gesture mapping"],
        why: ["Creates a hands-free, intuitive interface using embedded sensing + real-time control."],
        outcome: ["A responsive, user-friendly playback system combining motion input + audio output."],
      },
    ],
    []
  );

  return (
    <div className="page">
      {/* NAV */}
      <div className="topbar">
        <div className="topbarInner">
          <button className="brand" onClick={() => scrollTo("home")} aria-label="Go to top">
            <span className="brandMark">A</span>
            <span className="brandText">Anjila</span>
          </button>

          <div className="nav">
            <button className="navLink" onClick={() => scrollTo("about")}>About</button>
            <button className="navLink" onClick={() => scrollTo("skills")}>Skills</button>
            <button className="navLink" onClick={() => scrollTo("experience")}>Experience</button>
            <button className="navLink" onClick={() => scrollTo("projects")}>Projects</button>
            <button className="navCta" onClick={() => scrollTo("contact")}>Contact</button>
          </div>
        </div>
      </div>

      {/* HERO */}
      <header className="hero" id="home">
        <div className="heroInner">
          <div className="heroGrid reveal">
            <div className="heroLeft">
              <p className="kicker">Hi, I’m</p>

              <h1 className="headline">
                Anjila <span className="accent">Belbase</span>
              </h1>

              <p className="subhead">
                Electrical Engineering • Controls • Automation • Embedded Systems
              </p>

              <div className="ctaRow">
                <button className="btn primary" onClick={() => scrollTo("projects")}>
                  See Projects
                </button>
                <button className="btn ghost" onClick={() => scrollTo("about")}>
                  About Me
                </button>
              </div>

              <div className="scrollMini" onClick={() => scrollTo("about")} role="button" tabIndex={0}>
                <span className="scrollDot" />
                Scroll
              </div>
            </div>

            <div className="heroRight">
              <div className="portraitStack">
                <div className="blob" aria-hidden="true" />
                <div className="portraitFrame">
                  <img className="portrait" src={meImg} alt="Anjila portrait" />
                </div>

                {/* Social row BELOW photo (horizontal) + includes number */}
                <div className="socialRow" aria-label="Social links and contact">
                  <a
                    className="iconBtn"
                    href="https://www.linkedin.com/in/anjilab"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <IconLinkedIn className="iconSvg" />
                  </a>

                  <a
                    className="iconBtn"
                    href="https://github.com/anjila1"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <IconGitHub className="iconSvg" />
                  </a>

                  <a className="iconBtn" href="mailto:belbaseanjila@gmail.com" aria-label="Email" title="Email">
                    <IconMail className="iconSvg" />
                  </a>

                  <a className="phonePill" href="tel:+18135733270" aria-label="Phone number" title="Phone">
                    <IconPhone className="phoneIcon" />
                    <span className="phoneText">+1 (813) 573-3270</span>
                  </a>
                </div>
              </div>

              <div className="miniBadgeRow" aria-hidden="true">
                <span className="miniBadge">clean systems</span>
                <span className="miniBadge">hands-on builds</span>
                <span className="miniBadge">creative mindset</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="sectionHeader reveal">
          <h2>About Me</h2>
          <p />
        </div>

        <div className="aboutWrap reveal">
          <div className="aboutCard">
            <p>
              Hi, I’m Anjila! I’m a recent Electrical Engineering graduate with interests in controls, automation, embedded systems, and both software and hardware design. I enjoy building new things through programming, electronics, and designing clean, functional systems.
            </p>
            <p>
              I’m especially interested in working at the intersection of hardware and software and have worked on projects ranging from industrial control systems to ESP32 based embedded and IoT work. Outside of engineering, I enjoy painting, art, and design.
            </p>
            <p className="aboutLast">
              Feel free to check out some of my projects below! :)
            </p>
          </div>

          <div className="aboutArtCard" aria-hidden="true">
            <div className="artTop">
              <div className="artTitle">creative + technical</div>
              <div className="artHint">aesthetic systems • clean logic • playful design</div>
            </div>
            <div className="artGrid">
              <div className="artTile t1" />
              <div className="artTile t2" />
              <div className="artTile t3" />
              <div className="artTile t4" />
              <div className="artTile t5" />
              <div className="artTile t6" />
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section" id="skills">
        <div className="sectionHeader reveal">
          <h2>Skills</h2>
          <p />
        </div>

        <div className="skillsViz reveal">
          <div className="skillsBoard" aria-label="Graphical skills display">
            <div className="trace" aria-hidden="true" />

            {skills.map((b) => (
              <div key={b.title} className="skillBubble">
                <div className="skillBubbleTop">
                  <div className="skillIcon" aria-hidden="true">{b.icon}</div>
                  <div className="skillTitle">{b.title}</div>
                </div>
                <div className="skillChips">
                  {b.items.map((x) => (
                    <span className="chip" key={x}>
                      {x}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="skillsNote">
            <div className="noteCard">
              <div className="noteTitle">How I like to work</div>
              <div className="noteText">
                Build clean systems, keep it easy to follow, and make the interface feel nice to use.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section" id="experience">
        <div className="sectionHeader reveal">
          <h2>Experience</h2>
          <p />
        </div>

        <div className="timeline reveal" aria-label="Experience timeline">
          <div className="timelineLine" aria-hidden="true" />

          {experience.map((e, idx) => (
            <div key={e.role} className={`timelineRow ${idx % 2 === 0 ? "left" : "right"}`}>
              <div className="timelineNode">
                <div className="nodeCore" />
                <div className="nodeGlow" />
              </div>

              <div className="timelineCard">
                <div className="timelineTop">
                  <div className="timelineRole">{e.role}</div>
                  <div className="timelineDates">{e.dates}</div>
                </div>
                <div className="timelineCompany">{e.company}</div>
                <ul className="timelineList">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <div className="sectionHeader reveal">
          <h2>Projects</h2>
          <p />
        </div>

        <div className="projectsGrid reveal">
          {projects.map((p) => (
            <button
              key={p.id}
              type="button"
              className="projectCard"
              onClick={() => setActiveProject(p)}
              aria-haspopup="dialog"
              aria-label={`Open details for ${p.title}`}
            >
              <div className="projectMedia">
                <img className="projectImg" src={p.img} alt={p.title} loading="lazy" />
              </div>

              <div className="projectBody">
                <div className="projectTitle">{p.title}</div>

                <div className="projectTags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="projectOpen">Open details →</div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact" id="contact">
        <div className="sectionHeader reveal">
          <h2>Contact</h2>
          <p />
        </div>

        <div className="contactCard reveal">
          <div className="contactRow">
            <span className="contactLabel">Email</span>
            <a className="contactValue" href="mailto:belbaseanjila@gmail.com">
              belbaseanjila@gmail.com
            </a>
          </div>

          <div className="contactRow">
            <span className="contactLabel">Phone</span>
            <a className="contactValue" href="tel:+18135733270">
              +1 (813) 573-3270
            </a>
          </div>

          <div className="contactRow">
            <span className="contactLabel">LinkedIn</span>
            <a className="contactValue" href="https://www.linkedin.com/in/anjilab" target="_blank" rel="noreferrer">
              linkedin.com/in/anjilab
            </a>
          </div>

          <div className="contactRow">
            <span className="contactLabel">GitHub</span>
            <a className="contactValue" href="https://github.com/anjila1" target="_blank" rel="noreferrer">
              github.com/anjila1
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">© {new Date().getFullYear()} Anjila Belbase</footer>

      {/* MODAL */}
      {activeProject && (
        <div className="modalOverlay" onClick={() => setActiveProject(null)} role="dialog" aria-modal="true">
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modalHeader">
              <div className="modalTitle">{activeProject.title}</div>
              <button className="modalClose" onClick={() => setActiveProject(null)} aria-label="Close">
                ✕
              </button>
            </div>

            <div className="modalBody">
              <div className="modalHero">
                <img className="modalImg" src={activeProject.img} alt={activeProject.title} />
              </div>

              <div className="modalGrid">
                <div className="modalItem">
                  <div className="modalLabel">What</div>
                  <ul>
                    {activeProject.what.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>

                <div className="modalItem">
                  <div className="modalLabel">How (Tools)</div>
                  <ul>
                    {activeProject.how.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>

                <div className="modalItem">
                  <div className="modalLabel">Why</div>
                  <ul>
                    {activeProject.why.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>

                <div className="modalItem">
                  <div className="modalLabel">Outcome</div>
                  <ul>
                    {activeProject.outcome.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="modalActions">
                <button
                  className="btn primary"
                  onClick={() => {
                    setActiveProject(null);
                    setTimeout(() => scrollTo("contact"), 50);
                  }}
                >
                  Contact
                </button>
                <button className="btn ghost" onClick={() => setActiveProject(null)}>
                  Close
                </button>
              </div>

              <div className="modalHint">Tip: press Esc to close</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
