import { AnimatePresence, motion } from "motion/react"
import { X } from "lucide-react"
import { useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import type { Project } from "@/lib/projects"

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

// Minimal a11y-aware modal shell built around motion.div + layoutId so the
// shared-layout expand from the card stays clean. Not using shadcn Dialog
// because its own open/close transitions conflict with Motion's layoutId
// system. Semantics covered: role=dialog + aria-modal, Escape closes,
// click-outside closes, focus moves into panel on open, body scroll locked
// while open.
export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const isOpen = project !== null

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen) return
    const original = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = original
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const raf = requestAnimationFrame(() => panelRef.current?.focus())
    return () => cancelAnimationFrame(raf)
  }, [isOpen])

  return (
    <AnimatePresence>
      {project && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${project.id}-title`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <motion.button
            type="button"
            aria-label="Close"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 cursor-default bg-background/25"
          />

          <motion.div
            ref={panelRef}
            layoutId={project.id}
            tabIndex={-1}
            className="relative flex h-[85vh] w-[85vw] max-w-[85vw] flex-col gap-6 overflow-y-auto border border-border bg-card p-8 outline-none"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute left-4 top-4 z-10 flex size-9 cursor-pointer items-center justify-center border border-border bg-card text-muted-foreground hover:text-foreground"
            >
              <X className="size-4" />
            </button>

            <Carousel
              opts={{ loop: true }}
              className="mx-auto w-full max-w-4xl pt-8"
            >
              <CarouselContent>
                {project.images.length === 0 ? (
                  <CarouselItem>
                    <div className="flex aspect-video items-center justify-center border border-dashed border-border">
                      <span className="text-xs uppercase tracking-widest text-muted-foreground">
                        images coming soon
                      </span>
                    </div>
                  </CarouselItem>
                ) : (
                  project.images.map((src, idx) => (
                    <CarouselItem key={src + idx}>
                      {src.startsWith("/") ? (
                        <div className="flex aspect-video items-center justify-center overflow-clip border border-border bg-[#e9ecec]">
                          <img
                            src={src}
                            alt={`${project.title} — ${idx + 1}`}
                            className="size-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="flex aspect-video items-center justify-center border border-dashed border-border">
                          <span className="text-xs uppercase tracking-widest text-muted-foreground">
                            image {idx + 1} / {project.images.length}
                          </span>
                        </div>
                      )}
                    </CarouselItem>
                  ))
                )}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

            <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
              <div className="flex flex-col gap-3">
                <h2
                  id={`${project.id}-title`}
                  className="text-3xl font-semibold"
                >
                  {project.title}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {project.body && (
                <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                  {project.body}
                </p>
              )}

              {(project.stack || project.role || project.timeline) && (
                <section aria-label="Specs">
                  <h3 className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
                    Specs
                  </h3>
                  <dl className="grid grid-cols-[max-content_1fr] gap-x-6 gap-y-1 border-t border-border pt-2 text-sm">
                    {project.stack && (
                      <>
                        <dt className="text-muted-foreground">Stack</dt>
                        <dd>{project.stack}</dd>
                      </>
                    )}
                    {project.role && (
                      <>
                        <dt className="text-muted-foreground">Role</dt>
                        <dd>{project.role}</dd>
                      </>
                    )}
                    {project.timeline && (
                      <>
                        <dt className="text-muted-foreground">Timeline</dt>
                        <dd>{project.timeline}</dd>
                      </>
                    )}
                  </dl>
                </section>
              )}

              {project.links && project.links.length > 0 && (
                <section aria-label="Links">
                  <h3 className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
                    Links
                  </h3>
                  <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                    {project.links.map((link) => (
                      <li key={link.url}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="underline underline-offset-4 hover:text-brand"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
