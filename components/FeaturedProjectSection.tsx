import Image from "next/image"
import { ExternalLink, Github, MapPin, Camera, Activity, Map } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FEATURED_PROJECT } from "@/data/portfolio"

const featureIcons = [MapPin, Camera, Activity, Map]

export function FeaturedProjectSection() {
  return (
    <section id="projects" className="scroll-mt-20 bg-card py-20">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-sm font-medium uppercase tracking-wider text-primary">
          Featured Project
        </p>
        <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
          {FEATURED_PROJECT.title}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground/80">
          {FEATURED_PROJECT.subtitle}
        </p>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
          {FEATURED_PROJECT.description}
        </p>

        {/* Browser-style screenshot frame */}
        <div className="mt-8 overflow-hidden rounded-xl border border-border shadow-lg">
          <div className="flex items-center gap-2 border-b border-border bg-muted px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#EC6A5E]" />
            <span className="h-3 w-3 rounded-full bg-[#F4BF4F]" />
            <span className="h-3 w-3 rounded-full bg-[#61C554]" />
            <div className="ml-3 flex-1">
              <div className="mx-auto max-w-sm rounded-md bg-background px-3 py-1 text-center text-xs text-muted-foreground">
                https://halifax-road-report.vercel.app/
              </div>
            </div>
          </div>
          <div className="relative aspect-video bg-muted/50">
            <Image
              src={FEATURED_PROJECT.image.src}
              alt={FEATURED_PROJECT.image.alt}
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_PROJECT.features.map((label, i) => {
            const Icon = featureIcons[i]
            return (
              <div
                key={label}
                className="flex items-center gap-3 rounded-lg border border-border bg-background p-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{label}</span>
              </div>
            )
          })}
        </div>

        <div className="mt-8 flex flex-col gap-2">
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <a href={FEATURED_PROJECT.previewUrl} target="_blank" rel="noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Interactive Preview
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={FEATURED_PROJECT.githubUrl} target="_blank" rel="noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground/70">
            Prototype demonstration (in development)
          </p>
        </div>
      </div>
    </section>
  )
}
