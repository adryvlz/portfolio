export function AboutMe() {
  return (
    <section id="about" className="section">
      <div className="container grid12">
        <h2 className="visually-hidden">About</h2>
        <p className="about__lead">
          I’m drawn to CPU and processor architecture, SoC design and
          verification. At Brown I built a multicycle RISC-V processor; at
          Georgia Tech I’m studying digital systems test and GPU co-design.
        </p>
        <div className="about__schools">
          <div>
            <span className="year">2027</span>
            <a href="https://www.gatech.edu" target="_blank" rel="noreferrer" className="link">
              Georgia Tech
            </a>
            <span className="label">M.S. Electrical & Computer Engineering, expected December</span>
          </div>
          <div>
            <span className="year">2026</span>
            <a href="https://www.brown.edu" target="_blank" rel="noreferrer" className="link">
              Brown University
            </a>
            <span className="label">B.Sc. Electrical Engineering and B.A. Applied Mathematics</span>
          </div>
          <div>
            <span className="year">GEM</span>
            <span>Fellow, Graduate Education for Minorities</span>
            <span className="label">Also HSF STEM Scholar, LEDA Scholar & Career Fellow</span>
          </div>
        </div>
      </div>
    </section>
  )
}
