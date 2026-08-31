import { motion } from "motion/react"
import type { Project } from "@/lib/projects"

interface ProjectCardProps {
  project: Project
  onClick?: (id: string) => void
}

// A real image path is public/-rooted (starts with "/"). Placeholder keys
// like "placeholder-1" fall through to the empty tile.
function firstRealImage(images: string[]): string | null {
  const hit = images.find((src) => src.startsWith("/"))
  return hit ?? null
}

// Ported from Figma node 4:90 (project-card). Layout, spacing, and color
// choices come from the design; typography stays on Geist so the cards
// match the rest of the site's type system.
export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const thumb = firstRealImage(project.images)

  return (
    <motion.article
      layoutId={project.id}
      onClick={onClick ? () => onClick(project.id) : undefined}
      className="flex cursor-pointer flex-col overflow-clip rounded-2xl border border-border bg-card shadow-[0px_4px_16px_0px_rgba(0,0,0,0.05)]"
    >
      <div className="flex h-[240px] w-full items-center justify-center overflow-clip bg-[#e9ecec]">
        {thumb ? (
          <img
            src={thumb}
            alt={project.title}
            className="size-full object-cover"
          />
        ) : (
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
            {project.status === "in-progress" ? "in progress" : "image"}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-3 p-7">
        {project.category && (
          <p className="text-xs font-semibold uppercase text-brand">
            {project.category}
          </p>
        )}
        <h3 className="text-[22px] font-semibold leading-tight">
          {project.title}
        </h3>
        <p className="text-[15px] leading-[1.5] text-muted-foreground">
          {project.description}
        </p>
      </div>
    </motion.article>
  )
}
