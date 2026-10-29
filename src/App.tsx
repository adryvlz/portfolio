import { useState } from "react"
import { Analytics } from "@vercel/analytics/react"
import { AboutMe } from "@/components/AboutMe"
import { BadgerCase } from "@/components/BadgerCase"
import { Contact } from "@/components/Contact"
import { Experience } from "@/components/Experience"
import { Footer } from "@/components/Footer"
import { Hero } from "@/components/Hero"
import { Nav } from "@/components/Nav"
import { ProjectGrid } from "@/components/ProjectGrid"
import { ProjectModal } from "@/components/ProjectModal"
import { SkillsAndTools } from "@/components/SkillsAndTools"
import { PROJECTS } from "@/lib/projects"

function App() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const activeProject = PROJECTS.find((p) => p.id === activeId) ?? null

  return (
    <>
      <Nav />

      <main>
        <Hero />

        <BadgerCase onOpenCase={() => setActiveId("project-01")} />

        <section id="projects" className="section section--l">
          <div className="container">
            <div className="head grid12">
              <h2>Ten projects, 2024 to now</h2>
              <p className="label">Each opens its case: the build, the stack and the photographs.</p>
            </div>
            <ProjectGrid onCardClick={setActiveId} />
          </div>
        </section>

        <Experience />

        <AboutMe />

        <SkillsAndTools />

        <Contact />
      </main>

      <Footer />

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveId(null)}
      />

      <Analytics />
    </>
  )
}

export default App
