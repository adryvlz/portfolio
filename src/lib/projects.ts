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
  };
};

export const projects: Project[] = [
  {
    slug: "pnn-circuit-simulator",
    title: "Poisson Neural Network Simulator",
    summary:
      "Physics-informed model that predicts EM behavior in interconnects; includes a small web demo.",
    tech: ["Python", "PyTorch"],
    period: "Spring 2025",
    cover: "/animation_1500.gif",
    links: { github: "https://github.com/adryvlz/APMA2070-Final-Project", 
             paper: "/APMA2070.pdf",
    },
  },
  {
    slug: "am-radio",
    title: "AM Radio (from-scratch build)",
    summary:
      "Preamplifier, AM modulator, power amp, and full signal analysis on bench instruments.",
    tech: ["Analog", "LTspice", "Lab"],
    period: "Spring 2024",
    cover: "/projects/am-radio/cover.jpg",
  },
  {
    slug: "fpga-pong",
    title: "FPGA Mini-Project: Pong",
    summary:
      "Verilog implementation with VGA timing and debounced controls on a low-cost FPGA board.",
    tech: ["Verilog", "FPGA", "VGA"],
    period: "Fall 2024",
    cover: "/projects/fpga-pong/cover.jpg",
    links: { github: "https://github.com/youruser/fpga-pong" },
  },
  {
    slug: "reset-circuit-study",
    title: "Reset Circuit Timing Study",
    summary:
      "Exploration of analog reset behavior and timing margins; simulated corner cases and SI considerations.",
    tech: ["Analog", "Timing", "HyperLynx"],
    period: "Summer 2025",
    cover: "",
    links: { slides: "https://drive.google.com/file/d/1jHr6R2D4DVSgYKl5UuWd0burr7UApsPZ/view?usp=sharing"},
  },
];

// helpers
export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}