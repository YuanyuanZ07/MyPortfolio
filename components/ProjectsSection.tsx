import { Github, Cloud, Bus, type LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PROJECTS } from "@/data/portfolio"

const iconMap: Record<string, LucideIcon> = { Cloud, Bus }

export function ProjectsSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-sm font-medium uppercase tracking-wider text-primary">
        Other Projects
      </p>
      <h2 className="mt-2 text-2xl font-bold text-foreground">
        More Things I Built
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {PROJECTS.map((project) => {
          const Icon = iconMap[project.iconName]
          return (
          <div
            key={project.title}
            className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-secondary px-3 py-1 font-mono text-xs text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-5">
              <Button variant="outline" size="sm" asChild>
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-3.5 w-3.5" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
          )
        })}
      </div>
    </section>
  )
}
