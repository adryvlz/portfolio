export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  id: string
  title: string
  description: string
  category?: string
  skills: string[]
  images: string[]
  status?: "shipped" | "in-progress" | "prototype"
  // Short date shown in the work index.
  when: string
  // Optional long-form fields surfaced only in the modal. Rows / sections
  // are hidden when their field is undefined so early-stage projects stay
  // uncluttered.
  body?: string
  stack?: string
  role?: string
  timeline?: string
  links?: ProjectLink[]
}

export const PROJECTS: Project[] = [
  {
    id: "project-01",
    title: "Badger",
    description:
      "Consumer friendly electronic conference badge with full-stack bring up from BOM to firmware to app, pushing NFC well past tap to pay.",
    category: "Electronics + Firmware",
    when: "2025 to now",
    status: "prototype",
    skills: [
      "STM32U0",
      "PN7160 NFC",
      "NCI 2.0",
      "ISO-DEP",
      "E-Paper",
      "KiCAD",
      "STM32Cube HAL",
      "C",
    ],
    images: [
      "/projects/project-01/badger-1.png",
      "/projects/project-01/badger-2.jpg",
      "/projects/project-01/badger-3.jpg",
      "/projects/project-01/badger-4.jpg",
      "/projects/project-01/badger-5.jpg",
    ],
    body:
      "Badger is a consumer friendly electronic conference badge that pushes NFC well past tap to pay. Under the hood, an STM32U0 Cortex M0+ drives a 400×300 color e-paper display and orchestrates an NXP PN7160 NFC controller over a custom NCI 2.0 stack. It runs two roles on the same MCU: as an ISO-DEP Type-4 Tag it exposes a VCard contact record to any phone; flipped into initiator/reader mode it exchanges contact info and images with other badges over a proprietary APDU set layered on top of the NFC Forum stack. My scope covered the whole stack from components, BOM, KiCAD schematic and PCB, hardware validation, RF tuning against NXP AN13218, firmware (STM32Cube HAL, C, no RTOS, no DMA), and the companion app. Every other electronic badge on the market ships as a DIY kit, but Badger's goal is to be the first that a any and all users can turn on and use.",
    stack:
      "STM32U073CCT6, PN7160 NFC, 400×300 color e-paper, KiCAD, STM32Cube HAL, C",
    role: "Lead full-stack engineer: PCB, firmware, app",
    timeline: "Capstone at Brown ECE, then a startup since August 2025",
  },
  {
    id: "project-02",
    title: "Silicon Jackets (Physical Design)",
    description:
      "Joined the Silicon Jackets physical design team after onboarding in digital design, verification and physical design on a RISC-V processor. Project to be decided.",
    category: "Physical Design",
    when: "In progress",
    status: "in-progress",
    skills: ["Physical Design", "Synopsys Design Compiler", "Cadence Innovus", "Tcl", "Static Timing Analysis", "RISC-V"],
    images: ["/projects/project-02/silicon-jackets-1.jpeg"],
  },
  {
    id: "project-03",
    title: "DFT Test Software",
    description:
      "Course project for Digital Systems Test: building software to drive and evaluate Design for Test (DFT) features against a DUT.",
    category: "Test + DFT",
    when: "In progress",
    status: "in-progress",
    skills: ["DFT", "Scan Chains", "ATPG", "Python", "Test Automation"],
    images: ["/projects/project-03/dft-1.png"],
  },
  {
    id: "project-04",
    title: "Reset Circuit Timing Study (Honeywell)",
    description:
      "Exploration of analog reset behavior and timing requirements for MRAM; performed extensive verification & validation on Flight Management Computers (FMC).",
    category: "Analog + V&V",
    when: "Summer 2025",
    skills: ["Analog", "Timing", "HyperLynx", "MRAM", "FMC"],
    images: ["/projects/project-04/reset-circuit-1.jpg"],
    timeline: "Summer 2025, Honeywell Aerospace",
    links: [
      {
        label: "Slides",
        url: "https://drive.google.com/file/d/1jHr6R2D4DVSgYKl5UuWd0burr7UApsPZ/view?usp=sharing",
      },
    ],
  },
  {
    id: "project-05",
    title: "Poisson Neural Network Simulator",
    description:
      "SympNet, PNN, and PINN models that predict EM behavior for a particle. Grad-level APMA 2070 final project.",
    category: "ML + Physics",
    when: "Spring 2025",
    skills: ["Python", "PyTorch", "SympNet", "PINN", "Numerical Methods"],
    images: ["/projects/project-05/pnn-1.gif"],
    timeline: "Spring 2025, APMA 2070 (Brown)",
    links: [
      { label: "Source", url: "https://github.com/adryvlz/APMA2070-Final-Project" },
      { label: "Paper", url: "/docs/pnn-report.pdf" },
    ],
  },
  {
    id: "project-06",
    title: "Van Wickle Wafers",
    description:
      "Co-founded a Brown-based diode startup as a class project, end to end from device layout to a shipped run with great returns.",
    category: "Semiconductors + Startup",
    when: "Spring 2025",
    skills: ["Semiconductors", "Device Layout", "Fab", "Business"],
    images: ["/projects/project-06/diodes-1.png"],
    timeline: "Spring 2025",
    links: [{ label: "Report", url: "/docs/vwwafers-report.pdf" }],
  },
  {
    id: "project-07",
    title: "FPGA Pong",
    description:
      "Verilog implementation of Pong with VGA timing and debounced controls, deployed on an FPGA dev board.",
    category: "FPGA + Digital",
    when: "Fall 2024",
    skills: ["Verilog", "FPGA", "VGA", "Debouncing"],
    images: ["/projects/project-07/pong-1.png"],
    timeline: "Fall 2024",
    links: [
      {
        label: "Video",
        url: "https://drive.google.com/file/d/1sUgzDXn_6I_TfRzhTtQ7qJVvK5OIWH7u/view?usp=sharing",
      },
    ],
  },
  {
    id: "project-08",
    title: "AI Research (Hewlett-Packard)",
    description:
      "Conducted AI industry research within HP's Digital Transformations team as part of the Leda cohort.",
    category: "AI + Research",
    when: "Summer 2024",
    skills: ["AI", "Industry Research", "Program Management"],
    images: ["/projects/project-08/hp-1.jpeg"],
    timeline: "Summer 2024, HP Inc.",
    links: [
      {
        label: "Post",
        url: "https://www.linkedin.com/posts/adrian-velazquez-martinez_leda4life-activity-7228777272562872321-h3dI",
      },
    ],
  },
  {
    id: "project-09",
    title: "NASA & Zenit Labs: Bubbles Research (BEEM)",
    description:
      "Co-developed the electrical system for sensors and motors, plus audio analysis for speed-of-sound measurements. Flown on a parabolic flight (see post).",
    category: "Circuits + Research",
    when: "Spring 2024",
    skills: ["Circuits", "Sensors", "Audio DSP", "Parabolic Flight"],
    images: ["/projects/project-09/beem-1.png"],
    timeline: "Spring 2024, NASA and Zenit Labs",
    links: [
      {
        label: "Slides",
        url: "https://drive.google.com/file/d/1AL7dK5sN4cWJpAIhDTxyElMfVHOxPgST/view?usp=sharing",
      },
      {
        label: "Post",
        url: "https://www.instagram.com/p/DNnfjTFRjBc/",
      },
    ],
  },
  {
    id: "project-10",
    title: "AM Radio (from-scratch build)",
    description:
      "Preamplifier, AM modulator, power amp, and full signal analysis on bench instruments, from schematic to a working radio.",
    category: "Analog + RF",
    when: "Spring 2024",
    skills: ["Analog", "LTspice", "RF", "Lab Bench"],
    images: ["/projects/project-10/amradio-1.png"],
    timeline: "Spring 2024",
  },
]
