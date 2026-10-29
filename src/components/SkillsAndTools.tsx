import { SKILL_GROUPS } from "@/lib/skills"

export function SkillsAndTools() {
  return (
    <section className="section section--s">
      <div className="container">
        <div className="head grid12">
          <h2>Skills and tools</h2>
        </div>
        <div className="skills grid12">
          {SKILL_GROUPS.map((group) => (
            <div key={group.category}>
              <h3>{group.category}</h3>
              <ul className="ruled">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
