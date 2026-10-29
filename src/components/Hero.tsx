import { EMAIL_ADDRESS } from "@/lib/contact"

export function Hero() {
  return (
    <section id="top" className="hero proof">
      <div className="container grid12 hero__grid">
        <div className="hero__text">
          <h1>Designing hardware from schematic to silicon.</h1>
          <p className="lead">
            Adrian Velazquez-Martinez, ECE master’s student and GEM Fellow at
            Georgia Tech.
          </p>
          <div className="hero__actions">
            <a href={`mailto:${EMAIL_ADDRESS}`} className="btn btn--primary">
              Email me
            </a>
            <a href="#badger" className="btn">
              See the Badger build
            </a>
          </div>
        </div>

        <figure className="hero__figure">
          <div className="crop">
            <img
              src="/projects/project-01/badger-5-web.jpg"
              alt="Two Badger prototype boards on a workbench beside a multimeter, each e-paper display showing the same portrait."
              width={1200}
              height={1600}
              fetchPriority="high"
              className="photo hero__photo"
            />
          </div>
          <div className="redline" aria-hidden="true">
            <span />
          </div>
          <figcaption>
            <span className="label">
              Two Badger prototypes on the bench, showing the same image.
            </span>
            <span className="label num">3:4</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
