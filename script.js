// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// ONE project (for now)
const projects = [
  {
    title: "Smart Farming IoT Monitoring System",
    desc: "ESP32-based sensor system that logs environmental conditions and sends data to the cloud for monitoring and insights.",
    img: "images/p1.jpeg",
    link: "https://github.com/anjila1" // later replace with the specific repo link
  }
];

const grid = document.getElementById("projectsGrid");

grid.innerHTML = projects
  .map(
    (p) => `
    <a class="card" href="${p.link}" target="_blank" rel="noopener">
      <img class="card-img" src="${p.img}" alt="${p.title}">
      <div class="card-body">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
      </div>
    </a>
  `
  )
  .join("");
