import { SkillsAndTools } from "@/components/SkillsAndTools"

export function AboutMe() {
  return (
    <section
      id="about"
      className="mx-auto flex max-w-6xl scroll-mt-20 flex-col gap-12 px-6 py-24"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,1fr)_18rem] md:gap-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            About Me
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            I graduated from Brown University with a Bachelors of Science in
            Electrical and Computer engineering, and currently pursuing a MSECE
            @ Georgia Tech as part of the GEM (Graduate Education for Minorities)
            Fellow. I previously worked as an intern at HP Inc., Honeywell Aerospace, and Apple's Beats
            by dr.dre division tackling RF testing and component performance for{" "}
            <Redacted>no leaks here :D</Redacted>.
          </p>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            As a capstone and startup, I led the development of Badger, an electronic
            badge where we designed the whole stack: components, BOM, PCB, hardware
            validation, RF tuning, firmware, software, and app. No other product
            on the market had stepped away from DIY (Do it yourself) but us, focusing
            on being consumer friendly and pushing NFC capabilities well past
            tap to pay.
          </p>
        </div>
        <Roadmap />
      </div>
      <SkillsAndTools />
    </section>
  )
}

// Placeholder redaction bar. Wrap any text and it renders as a solid
// black bar the same width as the hidden text. Swap `<Redacted>foo</Redacted>`
// for plain text later, or remove the wrapper entirely.
function Redacted({ children }: { children: React.ReactNode }) {
  return (
    <span className="select-none rounded-sm bg-foreground/85 px-1.5 text-transparent">
      {children}
    </span>
  )
}

// Vertical roadmap of career stops. Each stop is a numbered circle with
// company + role to the right, connected by short teal lines. After the
// last stop the line continues as a gradient that fades to transparent —
// signal for "still chasing what's next" per user intent.
function Roadmap() {
  return (
    <div className="flex flex-col md:mt">
      <RoadmapStop
        step={1}
        company="HP Inc."
        role="Intern in AI & Program Management"
      />
      <RoadmapConnector />
      <RoadmapStop
        step={2}
        company="Honeywell Aerospace"
        role="EE intern in Verification & Validation"
      />
      <RoadmapConnector />
      <RoadmapStop
        step={3}
        company="Apple (Beats by Dr. Dre)"
        role="Systems Hardware Engineer Graduate Intern"
      />
      <RoadmapContinuation />
    </div>
  )
}

interface RoadmapStopProps {
  step: number
  company: string
  role: string
}

function RoadmapStop({ step, company, role }: RoadmapStopProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex size-[60px] shrink-0 items-center justify-center rounded-full border-2 border-brand bg-card text-lg font-semibold text-brand">
        {step}
      </div>
      <div className="flex flex-col">
        <p className="text-base font-semibold text-foreground">{company}</p>
        <p className="text-xs text-muted-foreground">{role}</p>
      </div>
    </div>
  )
}

// size-[60px] circle center = 30px; line = 2px; offset to align = 29px
function RoadmapConnector() {
  return <div className="ml-[29px] h-8 w-0.5 bg-brand/40" />
}

function RoadmapContinuation() {
  return <div className="ml-[29px] h-24 w-0.5 bg-gradient-to-b from-brand/40 via-brand/20 to-transparent" />
}
