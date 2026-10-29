import { PROJECTS } from "@/lib/projects"

interface ProjectGridProps {
  onCardClick?: (id: string) => void
}

// The work as a boxed table: one cell per project, each opening its case.
export function ProjectGrid({ onCardClick }: ProjectGridProps) {
  return (
    <ol className="index cells" aria-label="Projects">
      {PROJECTS.map((project, idx) => (
        <li key={project.id}>
          <button
            type="button"
            className="index__row"
            aria-haspopup="dialog"
            onClick={onCardClick ? () => onCardClick(project.id) : undefined}
          >
            <span className="num index__n" aria-hidden="true">
              {String(idx + 1).padStart(2, "0")}
            </span>
            <span className="index__title">{project.title}</span>
            <span className="label index__when">{project.when}</span>
          </button>
        </li>
      ))}
    </ol>
  )
}
