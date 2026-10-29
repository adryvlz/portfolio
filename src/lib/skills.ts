export interface SkillGroup {
  category: string
  items: readonly string[]
}

// Grouped from the résumé's Technical Skills section.
export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    category: "Digital design and verification",
    items: [
      "Verilog, SystemVerilog, VHDL",
      "Testbenches, regressions, coverage",
      "Cadence Xcelium and SimVision",
      "FPGA on Intel Quartus",
    ],
  },
  {
    category: "SoC and physical design",
    items: [
      "Synopsys Design Compiler",
      "Cadence Innovus, Tcl",
      "Static timing analysis",
      "Clock gating and PPA",
    ],
  },
  {
    category: "Embedded",
    items: [
      "Bare-metal C and C++",
      "STM32 Arm Cortex-M0+",
      "SPI, I2C, UART",
      "NFC over NCI 2.0",
    ],
  },
  {
    category: "Analog, RF and test",
    items: [
      "LTspice, PSpice, HyperLynx",
      "PVT and Monte Carlo",
      "VNAs and SimSmith",
      "Python, MATLAB, Perl",
    ],
  },
]
