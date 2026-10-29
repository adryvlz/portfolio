const ROLES = [
  {
    company: "Apple & Beats",
    role: "Systems Hardware Engineer Graduate Intern",
    when: "Summer 2026",
    fact: "USB-C charging power path for audio products, and Python analysis of 46 Bluetooth RF test runs across 79 channels.",
  },
  {
    company: "Honeywell Aerospace",
    role: "Electrical Engineer Intern",
    when: "Summer 2025",
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
      <div className="container">
        <h2 className="head">Where I’ve worked</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Company</th>
              <th scope="col">Role</th>
              <th scope="col">When</th>
              <th scope="col">What I did</th>
            </tr>
          </thead>
          <tbody>
            {ROLES.map((r) => (
              <tr key={r.company}>
                <th scope="row">{r.company}</th>
                <td>{r.role}</td>
                <td>{r.when}</td>
                <td>{r.fact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
