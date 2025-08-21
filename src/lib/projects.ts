// src/lib/projects.ts
export type Project = {
  slug: string;
  title: string;
  summary: string;
  tech: string[];
  period?: string;
  cover?: string; // path under /public (e.g., "/projects/pnn/cover.jpg")
  links?: {
    github?: string;
    demo?: string;
    paper?: string;
    slides?: string;
    post?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "reset-circuit-study",
    title: "Reset Circuit Timing Study (Honeywell)",
    summary:
      "Exploration of analog reset behavior and timing requirements for MRAM; performed extensive verification & validation on Flight Management Computers (FMC)",
    tech: ["Analog", "Timing", "HyperLynx"],
    period: "Summer 2025",
    cover: "/Picture2.jpg",
    links: { slides: "https://drive.google.com/file/d/1jHr6R2D4DVSgYKl5UuWd0burr7UApsPZ/view?usp=sharing"},
  },
  {
    slug: "pnn-circuit-simulator",
    title: "Poisson Neural Network Simulator",
    summary:
      "SympNet, PNN, & PINN model that predicts EM behavior for a particle (Grad level course).",
    tech: ["Python", "PyTorch"],
    period: "Spring 2025",
    cover: "/animation_1500.gif",
    links: { github: "https://github.com/adryvlz/APMA2070-Final-Project", 
             paper: "/APMA2070.pdf",
    },
  },
  {
    slug: "diodes",
    title: "Van Wickle Wafers",
    summary: "Co-founded a Brown based diodes startup as a class project with great returns",
    tech: ["Semiconductors"],
    period: "Spring 2025",
    cover: "/diodelayout.png",
    links: { paper: "/1590report.pdf"},
  },
  {
    slug: "fpga-pong",
    title: "FPGA Pong!",
    summary:
      "Verilog implementation with VGA timing and debounced controls for Pong.",
    tech: ["Verilog", "FPGA", "VGA"],
    period: "Fall 2024",
    cover: "/pong.png",
    links: { github: "https://github.com/youruser/fpga-pong" },
  },
  {
    slug: "am-radio",
    title: "AM Radio (from-scratch build)",
    summary:
      "Preamplifier, AM modulator, power amp, and full signal analysis on bench instruments.",
    tech: ["Analog", "LTspice", "Lab"],
    period: "Spring 2024",
    cover: "/preamp.png",
  },
  {
    slug: "AI w/ HP",
    title: "AI Research (Hewlett-Packard",
    summary: "Conducted AI industry research within the Digital Transformations Team",
    tech: ["AI"],
    period: "Summer 2024",
    cover: "/HP_pic.jpeg",
    links: { post: "https://www.linkedin.com/posts/adrian-velazquez-martinez_leda4life-activity-7228777272562872321-h3dI?utm_source=share&utm_medium=member_desktop&rcm=ACoAADhyzlsBgRpUfymP4ck5YO0G3nYs9-6y82Q" }
  },
  {
    slug: "BEEM",
    title: "NASA & Zenit Labs Bubbles Research",
    summary: "Co-developed the electrical system for sensors & motors, while aiding with audio analysis to determine speed of sound",
    tech: ["Circuits"],
    period: "Spring 2024",
    cover: "/beem.png",
  }
];

// helpers
export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}