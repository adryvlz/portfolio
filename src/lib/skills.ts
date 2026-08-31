export interface SkillGroup {
  category: string
  items: readonly string[]
}

export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    category: "RF & Microwave",
    items: [
      "SimSmith (Smith chart / impedance matching)",
      "VNAs",
      "RF signal testing & benchmarking",
      "Oscilloscopes",
      "Logic Analyzers",
      "DMMs",
      "Function/Signal Generators",
    ],
  },
  {
    category: "Circuit Design & Simulation",
    items: [
      "SPICE",
      "PSpice",
      "LTspice",
      "Cadence Allegro",
      "CMOS",
      "VHDL",
      "RTL",
      "KiCAD",
      "KLayout",
      "Intel Quartus",
      "Altium",
    ],
  },
  {
    category: "Programming & Tools",
    items: [
      "Python (PyTorch)",
      "MATLAB",
      "C",
      "C++",
      "CUDA",
      "Perl",
      "Git",
      "LaTeX",
      "Linux",
      "Jira",
    ],
  },
  {
    category: "Process & Manufacturing",
    items: ["DFM", "SMT Assembly"],
  },
]
