import Image from "next/image";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Projects — Adrian Velazquez",
  description: "Selected engineering projects and write-ups.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="mb-6 text-4xl font-bold tracking-tight">Projects</h1>

      {/* simple grid without any client-side state (no 'use client') */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.slug}
            className="overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="aspect-[16/9] w-full bg-muted">
              {p.cover ? (
                p.cover.endsWith(".gif") ? (
                  <img src={p.cover} alt="" className="h-full w-full object-cover" loading="lazy" />
                ) : (
                  <Image
                    src={p.cover}
                    alt=""
                    width={1280}
                    height={720}
                    className="h-full w-full object-cover"
                  />
                )
              ) : null}
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                {p.period ? <span className="text-xs text-muted-foreground">{p.period}</span> : null}
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{p.summary}</p>

              {/* buttons (open external links directly) */}
              {/* buttons (open external links directly) */}
              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                {p.links?.github && (
                  <a href={p.links.github} target="_blank" rel="noreferrer" className="rounded-md border px-3 py-1">
                    GitHub
                  </a>
                )}
                {p.links?.paper && (
                  <a
                    href={p.links.paper.startsWith('/') ? p.links.paper : `/${p.links.paper}`}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border px-3 py-1"
                  >
                    Paper (PDF)
                  </a>
                )}
                {p.links?.slides && (
                  <a
                    href={p.links.slides.startsWith('/') ? p.links.slides : p.links.slides}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border px-3 py-1"
                  >
                    Slides
                  </a>
                )}
                {p.links?.post && (
                  <a
                    href={p.links.post}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border px-3 py-1"
                  >
                    LinkedIn Post
                  </a>
                )}
                {p.links?.video && (
                  <a
                    href={p.links.video}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border px-3 py-1"
                  >
                    Video Showcase
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
