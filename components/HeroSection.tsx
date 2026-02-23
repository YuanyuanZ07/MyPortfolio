import { Github, Linkedin, ArrowDown, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/data/portfolio"

export function HeroSection() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center px-6 pb-20 pt-16 text-center md:pt-24">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs text-muted-foreground">
        <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
        {PERSONAL_INFO.statusBadge}
      </div>

      <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
        {PERSONAL_INFO.name}
      </h1>

      <p className="mt-3 text-base text-primary md:text-lg">
        {PERSONAL_INFO.title}
      </p>

      <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
        {PERSONAL_INFO.summary}
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button asChild>
          <a href="#projects">
            View Projects
            <ArrowDown className="ml-2 h-4 w-4" />
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href="#contact">
            <Mail className="mr-2 h-4 w-4" />
            Contact
          </a>
        </Button>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <a
          href={SOCIAL_LINKS.github.url}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href={SOCIAL_LINKS.linkedin.url}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <Linkedin className="h-5 w-5" />
        </a>
      </div>
    </section>
  )
}
