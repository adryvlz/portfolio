import { useEffect, useRef } from "react"
import type { Project } from "@/lib/projects"

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

// A case sheet laid over the page. Semantics: role=dialog + aria-modal,
// Escape closes, click-outside closes, focus moves into the sheet on open and
// back to the row that opened it on close, body scroll locked while open.
// Nothing glides: the sheet appears and disappears in one frame.
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
    const opener = document.activeElement as HTMLElement | null
    const raf = requestAnimationFrame(() => panelRef.current?.focus())
    return () => {
      cancelAnimationFrame(raf)
      opener?.focus()
    }
  }, [isOpen])

  return (
    <>
      {project && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${project.id}-title`}
          className="sheet-wrap"
        >
          <button
            type="button"
            aria-label="Close"
            tabIndex={-1}
            onClick={onClose}
            className="sheet-scrim"
          />

          <div ref={panelRef} tabIndex={-1} className="sheet">
            <button type="button" onClick={onClose} className="btn sheet__close">
              Close
            </button>

            <div className="sheet__head">
              <h2 id={`${project.id}-title`}>{project.title}</h2>
              <p className="label">
                {project.category}
                {project.category && project.timeline ? ", " : ""}
                {project.timeline}
              </p>
            </div>

            <p className="sheet__body">{project.body ?? project.description}</p>

            <dl className="specs">
              {project.stack && (
                <div>
                  <dt>Stack</dt>
                  <dd>{project.stack}</dd>
                </div>
              )}
              {project.role && (
                <div>
                  <dt>Role</dt>
                  <dd>{project.role}</dd>
                </div>
              )}
              <div>
                <dt>Skills</dt>
                <dd>{project.skills.join(", ")}</dd>
              </div>
              {project.links && project.links.length > 0 && (
                <div>
                  <dt>Links</dt>
                  <dd>
                    {project.links.map((link, idx) => (
                      <span key={link.url}>
                        {idx > 0 && ", "}
                        <a href={link.url} target="_blank" rel="noreferrer" className="link">
                          {link.label}
                        </a>
                      </span>
                    ))}
                  </dd>
                </div>
              )}
            </dl>

            {project.images.length === 0 ? (
              <p className="label sheet__empty">Images coming soon.</p>
            ) : (
              <ul className="sheet__gallery">
                {project.images.map((src, idx) => (
                  <li key={src + idx}>
                    <img
                      src={src}
                      alt={`${project.title}, image ${idx + 1} of ${project.images.length}`}
                      loading="lazy"
                      className="ink-print"
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  )
}
