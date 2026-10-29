import { PROJECTS } from "@/lib/projects"

interface ProjectGridProps {
  onCardClick?: (id: string) => void
}

// The work as a catalogue: each project a matted print with its pencilled
// number, opening its case.
export function ProjectGrid({ onCardClick }: ProjectGridProps) {
  return (
    <ul className="catalogue">
      {PROJECTS.map((project, idx) => {
        const cover = project.cover ?? project.images[0]
        return (
          <li key={project.id}>
            <button
              type="button"
              className="card"
              aria-haspopup="dialog"
              onClick={onCardClick ? () => onCardClick(project.id) : undefined}
            >
              <span className="stock print">
                <span data-slot={`project-${idx + 1}`} data-alt={project.title} style={{ display: "block" }}>
                  {cover && <img src={cover} alt="" loading="lazy" />}
                </span>
              </span>
              <span className="card__name">{project.title}</span>
              <span className="card__meta">
                <span className="label">{project.when}</span>
                <span className="pencil">No. {String(idx + 1).padStart(2, "0")}</span>
              </span>
            </button>
          </li>
        )
      })}
    </ul>
  )
}
