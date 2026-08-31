import { Badge } from "@/components/ui/badge"
import { SKILL_GROUPS } from "@/lib/skills"

export function SkillsAndTools() {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        Skills &amp; Tools
      </h3>
      <div className="flex flex-col gap-4">
        {SKILL_GROUPS.map((group) => (
          <div key={group.category} className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
            <span className="text-sm text-muted-foreground md:w-56 md:shrink-0">
              {group.category}
            </span>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item} variant="secondary">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
