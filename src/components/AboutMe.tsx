export function AboutMe() {
  return (
    <section id="about" className="section about">
      <div className="container grid12 about__grid">
        <figure className="about__figure crop">
          <img
            src="/photos/personal.jpg"
            alt="Portrait of Adrian Velazquez-Martinez in a suit and tie."
            width={1244}
            height={1600}
            loading="lazy"
            className="photo"
          />
        </figure>

        <div className="about__text">
          <h2>Brown, then Georgia Tech</h2>
          <p>
            I’m drawn to CPU and processor architecture, SoC design and
            verification. At Brown I built a multicycle RISC-V processor; at
            Georgia Tech I’m studying digital systems test and GPU co-design.
          </p>
          <dl className="specs">
            <div>
              <dt>
                <a href="https://www.gatech.edu" target="_blank" rel="noreferrer" className="link">
                  Georgia Tech
                </a>
              </dt>
              <dd>M.S. Electrical & Computer Engineering, expected December 2027</dd>
            </div>
            <div>
              <dt>
                <a href="https://www.brown.edu" target="_blank" rel="noreferrer" className="link">
                  Brown University
                </a>
              </dt>
              <dd>B.Sc. Electrical Engineering and B.A. Applied Mathematics, May 2026</dd>
            </div>
            <div>
              <dt>Awards</dt>
              <dd>GEM Fellow, HSF STEM Scholar, LEDA Scholar & Career Fellow</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
