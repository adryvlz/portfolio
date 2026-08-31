import { useState } from "react"
import { Analytics } from "@vercel/analytics/react"
import { AboutMe } from "@/components/AboutMe"
import { AmbientCircuit } from "@/components/AmbientCircuit"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { NameLockup } from "@/components/NameLockup"
import { Nav } from "@/components/Nav"
import { ProjectGrid } from "@/components/ProjectGrid"
import { ProjectModal } from "@/components/ProjectModal"
import { Quote } from "@/components/Quote"
import { useHeroExit } from "@/hooks/useHeroExit"
import { PROJECTS } from "@/lib/projects"

function App() {
  const docked = useHeroExit()
  const [activeId, setActiveId] = useState<string | null>(null)
  const activeProject = PROJECTS.find((p) => p.id === activeId) ?? null

  return (
    <>
      <AmbientCircuit />

      <Hero docked={docked} />

      {docked && (
        <Header>
          <div className="flex h-full items-center justify-between px-6 md:px-10">
            <NameLockup mode="docked" />
            <Nav />
          </div>
        </Header>
      )}

      <AboutMe />

      <section
        id="projects"
        className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24"
      >
        <ProjectGrid onCardClick={setActiveId} />
      </section>

      <Contact />

      <Footer />

      <Quote />

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveId(null)}
      />

      <Analytics />
    </>
  )
}

export default App
