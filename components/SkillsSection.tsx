import { Monitor, Server, Wrench, type LucideIcon } from "lucide-react"
import { SKILL_GROUPS } from "@/data/portfolio"

const iconMap: Record<string, LucideIcon> = { Monitor, Server, Wrench }

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 bg-card py-20">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-sm font-medium uppercase tracking-wider text-primary">
          Skills
        </p>
        <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
          Technical Skills
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {SKILL_GROUPS.map((group) => {
            const Icon = iconMap[group.iconName]
            return (
            <div
              key={group.title}
              className="rounded-lg border border-border bg-background p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-card px-3 py-1.5 font-mono text-xs text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
