import "./App.css";

const projects = [
  { title: "Project 1", img: "./assets/projects/p1.jpeg" },
  { title: "Project 2", img: "https://picsum.photos/seed/p2/1200/800" },
  { title: "Project 3", img: "https://picsum.photos/seed/p3/1200/800" },
  { title: "Project 4", img: "https://picsum.photos/seed/p4/1200/800" },
  { title: "Project 5", img: "https://picsum.photos/seed/p5/1200/800" },
  { title: "Project 6", img: "https://picsum.photos/seed/p6/1200/800" },
];

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="overlay" />
        <div className="heroContent">
          <h1>Anjila Belbase</h1>
          <p className="bio">
            Electrical Engineering • Controls • Automation • Embedded Systems
          </p>
          <a className="btn" href="#projects">View Projects ↓</a>
        </div>
      </header>

      <main className="section" id="projects">
        <h2>Projects</h2>
        <div className="grid">
          {projects.map((p) => (
            <div className="card" key={p.title}>
              <img src={p.img} alt={p.title} />
              <div className="cardBody">
                <h3>{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
