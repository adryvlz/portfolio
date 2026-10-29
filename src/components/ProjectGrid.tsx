import { PROJECTS } from "@/lib/projects"

interface ProjectGridProps {
  onCardClick?: (id: string) => void
}

// The work as an index: one row per project, each opening its case.
export function ProjectGrid({ onCardClick }: ProjectGridProps) {
  return (
    <ul className="index">
      {PROJECTS.map((project) => (
        <li key={project.id}>
          <button
            type="button"
            className="index__row"
            aria-haspopup="dialog"
            onClick={onCardClick ? () => onCardClick(project.id) : undefined}
          >
            <span className="index__title">{project.title}</span>
            <span className="label index__cat">{project.category}</span>
            <span className="label index__when">{project.when}</span>
          </button>
        </li>
      ))}
    </ul>
  )
}
