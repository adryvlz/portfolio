const ROLES = [
  {
    company: "Apple & Beats",
    role: "Systems Hardware Engineer Graduate Intern",
    when: "June to August 2026, Los Angeles",
    fact: "USB-C charging power path for audio products, and Python analysis of 46 Bluetooth RF test runs across 79 channels.",
  },
  {
    company: "Honeywell Aerospace",
    role: "Electrical Engineer Intern",
    when: "May to August 2025, Phoenix",
    fact: "Signal integrity and timing on MRAM interfaces across 15 avionics boards, setup and hold under 10 ns.",
  },
  {
    company: "HP Inc.",
    role: "Intern in AI & Program Management",
    when: "Summer 2024",
    fact: "AI industry research with HP’s Digital Transformations team, as part of the LEDA cohort.",
  },
] as const

export function Experience() {
  return (
    <section id="experience" className="section section--s">
      <div className="container grid12">
        <h2 className="rows-head">Where I’ve worked</h2>
        <ul className="rows">
          {ROLES.map((r) => (
            <li key={r.company} className="row">
              <h3>{r.company}</h3>
              <div className="row__body">
                <p>{r.role}</p>
                <p className="label">{r.when}</p>
                <p>{r.fact}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
