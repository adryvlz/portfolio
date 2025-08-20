// src/app/(marketing)/about/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
/* eslint-disable react/no-unescaped-entities */

export const metadata = {
  title: "About — Adrian Velazquez",
  description:
    "Brown University EE × Applied Math 2026. Hardware-minded engineer focused on reliable circuits, semiconductors, and applied ML.",
};

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium text-gray-700 dark:text-gray-300">
      {children}
    </span>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="text-gray-700 dark:text-gray-300">{children}</div>
    </section>
  );
}

export default function About() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">About</h1>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          I am <strong>Adrian Velazquez-Martinez</strong>, a senior at Brown University studying
          <strong> Electrical Engineering</strong> and <strong>Applied Mathematics</strong> (’26).
          I like building reliable hardware and the tooling around it.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge>Analog & mixed-signal</Badge>
          <Badge>Semiconductors / VLSI</Badge>
          <Badge>Verification & timing</Badge>
          <Badge>FPGA / Verilog</Badge>
          <Badge>Python · Julia · MATLAB</Badge>
        </div>
      </header>

      <Section title="What I am focused on">
        <ul className="list-disc pl-5 space-y-2">
          <li>Robust circuit design & simulation (LTspice, lab instrumentation).</li>
          <li>Timing & signal-integrity workflows (HyperLynx, TimingDesigner).</li>
          <li>Various ML / DL approaches (PINNs/PNNs) for clean experiment pipelines.</li>
        </ul>
      </Section>

      <Section title="Recent experience">
        <div className="space-y-4">
          <div>
            <h3 className="font-medium"> (Summer 2025) Honeywell Aerospace - Electrical Engineering Intern</h3>
            <p className="text-sm">
              Analog reset circuitry for an FMC and an MRAM timing investigation using
              Mentor/Siemens flows, HyperLynx, and TimingDesigner. Worked diligently
              alongside verification team, Airbus, and Boeing.
            </p>
          </div>
          <div>
            <h3 className="font-medium"> (Summer 2024) HP - Digital Tranformations</h3>
            <p className="text-sm">
              Applied AI tooling and delivery workflows; reliable data processing and documentation.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Education">
        <p>
          <strong>Brown University</strong> — B.S. in Electrical Engineering and Applied Mathematics,
          expected <strong>Spring 2026</strong>.
        </p>
      </Section>

      {/* CTAs — add your LinkedIn here */}
      <div className="flex flex-wrap gap-3 pt-2">
        <Button asChild><Link href="/projects">Explore projects</Link></Button>
        <Button asChild variant="outline">
          <a href="https://www.linkedin.com/in/adrian-velazquez-martinez-24b1b8225/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </Button>
      </div>
    </main>
  );
}
