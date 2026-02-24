import Image from "next/image"
import { Github, Cloud, Bus, Bot, type LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PROJECTS } from "@/data/portfolio"

const iconMap: Record<string, LucideIcon> = { Cloud, Bus, Bot }

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
            className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-md"
          >
            {/* Project preview image */}
            {project.image ? (
              <div className="relative h-[200px] w-full overflow-hidden bg-muted/50">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  width={600}
                  height={200}
                  className="h-full w-full rounded-t-lg object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ) : (
              <div className="flex h-[200px] w-full items-center justify-center rounded-t-lg bg-muted/30">
                <Icon className="h-10 w-10 text-muted-foreground/40" />
              </div>
            )}

            <div className="flex flex-1 flex-col p-6">
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
          </div>
          )
        })}
      </div>
    </section>
  )
}
