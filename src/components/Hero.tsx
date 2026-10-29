import { EMAIL_ADDRESS } from "@/lib/contact"

// Ledge: the head rests at the base of the first screen; a matted print of
// the bench photograph stands in the field beside it.
export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container grid12 hero__grid">
        <div className="hero__text">
          <h1>Hardware, from schematic to silicon.</h1>
          <p className="lead">
            Adrian Velazquez-Martinez, ECE master’s student and GEM Fellow at
            Georgia Tech.
          </p>
          <div className="hero__actions">
            <a href={`mailto:${EMAIL_ADDRESS}`} className="btn">
              Write to me
            </a>
            <a href="#projects" className="link">
              See the ten projects
            </a>
          </div>
        </div>

        <figure className="hero__print">
          <div className="stock print">
            <div data-slot="hero" data-alt="Two Badger prototypes on the bench">
              <img
                src="/projects/project-01/badger-5-web.jpg"
                alt="Two Badger prototype boards on a workbench beside a multimeter, each e-paper display showing the same portrait."
                width={1200}
                height={1600}
                fetchPriority="high"
              />
            </div>
          </div>
          <figcaption>
            <span className="label">Badger, two prototypes on the bench</span>
            <span className="pencil">No. 01</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
