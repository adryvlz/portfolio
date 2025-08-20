'use client';
import { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/lib/projects";

export default function ProjectsClient({ projects }: { projects: Project[] }) {
  const [tag, setTag] = useState("All");
  const tags = useMemo(() => ["All", ...Array.from(new Set(projects.flatMap(p => p.tech)))], [projects]);
  const filtered = tag === "All" ? projects : projects.filter(p => p.tech.includes(tag));

  return (
    <>
      {/* chips… */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => <ProjectCard key={p.slug} {...p} />)}
      </section>
    </>
  );
}