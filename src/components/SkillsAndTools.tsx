import { SKILL_GROUPS } from "@/lib/skills"

export function SkillsAndTools() {
  return (
    <section className="section section--s">
      <div className="container">
        <div className="split split--lead cells">
          <div className="split__text">
            <h2>Skills and tools</h2>
          </div>
          <div className="split__proof">
            <dl className="specs skills">
              {SKILL_GROUPS.map((group) => (
                <div key={group.category}>
                  <dt>{group.category}</dt>
                  <dd>{group.items.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
