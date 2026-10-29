export function AboutMe() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="split split--even cells">
          <div className="split__text">
            <h2>Brown, then Georgia Tech</h2>
            <p>
              I’m drawn to CPU and processor architecture, SoC design and
              verification. At Brown I built a multicycle RISC-V processor; at
              Georgia Tech I’m studying digital systems test and GPU co-design.
            </p>
          </div>
          <div className="split__proof">
            <div className="facts cells">
              <div className="cell">
                <span className="cell__big num">2027</span>
                <a href="https://www.gatech.edu" target="_blank" rel="noreferrer" className="link">
                  Georgia Tech
                </a>
                <span className="label">M.S. Electrical & Computer Engineering, expected December</span>
              </div>
              <div className="cell">
                <span className="cell__big num">2026</span>
                <a href="https://www.brown.edu" target="_blank" rel="noreferrer" className="link">
                  Brown University
                </a>
                <span className="label">B.Sc. Electrical Engineering and B.A. Applied Mathematics</span>
              </div>
              <div className="cell cell--ink" style={{ gridColumn: "1 / -1" }}>
                <span className="cell__big">GEM Fellow</span>
                <span className="label">Also HSF STEM Scholar, LEDA Scholar & Career Fellow</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
