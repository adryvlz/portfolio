import { ProjectCard } from "@/components/ProjectCard"
import { PROJECTS } from "@/lib/projects"

interface ProjectGridProps {
  onCardClick?: (id: string) => void
}

export function ProjectGrid({ onCardClick }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-2 gap-6">
      {PROJECTS.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={onCardClick}
        />
      ))}
    </div>
  )
}
