const projects = [
  {
    title: "AutoTest AI — Commissioning Test Generator",
    desc: "Placeholder: AI tool that generates missing PLC commissioning test cases from logs/state transitions.",
    img: "./assets/projects/p1.jpeg"
  },
  {
    title: "Distributed Multi-Agent Control (ESP32)",
    desc: "Placeholder: multiple agents coordinating via MQTT + consensus + fault tolerance.",
    img: "https://picsum.photos/seed/p1/1200/800"
  },
  {
    title: "Smart Farming IoT Sensor System",
    desc: "Placeholder: sensor suite + cloud dashboard for microgreens cultivation monitoring.",
    img: "https://picsum.photos/seed/p1/1200/800"
  },
  {
    title: "HMI Alarm + Diagnostics Platform",
    desc: "Placeholder: operator-facing alarms, diagnostics, timers, access control.",
    img: "https://picsum.photos/seed/p1/1200/800"
  },
  {
    title: "PLC Case Packer / Conveyor Controls",
    desc: "Placeholder: ladder logic sequences, interlocks, and system states.",
    img: "https://picsum.photos/seed/p1/1200/800"
  },
  {
    title: "Embedded Gesture-Controlled MP3 System",
    desc: "Placeholder: ESP32 + MPU6050 gestures to control DFPlayer Mini tracks/volume.",
    img: "https://picsum.photos/seed/p1/1200/800"
  }
];

const grid = document.getElementById("projectsGrid");

projects.forEach((p) => {
  const card = document.createElement("article");
  card.className = "card";

  card.innerHTML = `
    <img class="thumb" src="${p.img}" alt="${p.title}" loading="lazy" />
    <div class="card-body">
      <h3 class="card-title">${p.title}</h3>
      <p class="card-meta">${p.desc}</p>
    </div>
  `;

  grid.appendChild(card);
});

document.getElementById("year").textContent = new Date().getFullYear();
