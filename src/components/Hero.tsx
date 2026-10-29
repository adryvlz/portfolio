import { ProjectGrid } from "@/components/ProjectGrid"
import { EMAIL_ADDRESS, LINKEDIN_URL } from "@/lib/contact"

interface HeroProps {
  onProjectClick: (id: string) => void
}

// Index hero: the name, one line and the actions, then the work itself as a
// boxed table. The table is the page's lead.
export function Hero({ onProjectClick }: HeroProps) {
  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="hero__top grid12">
          <h1>Adrian Velazquez-Martinez</h1>
          <div className="hero__side">
            <p>Hardware engineer designing systems from schematic to silicon.</p>
            <div className="hero__actions">
              <a href={`mailto:${EMAIL_ADDRESS}`} className="btn btn--ink">
                Email me
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="btn">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div id="projects">
          <ProjectGrid onCardClick={onProjectClick} />
        </div>
      </div>
    </section>
  )
}
