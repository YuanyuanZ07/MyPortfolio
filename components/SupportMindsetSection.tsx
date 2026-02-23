import { Search, GitBranch, MessageCircle, type LucideIcon } from "lucide-react"
import { IT_SUPPORT } from "@/data/portfolio"

const iconMap: Record<string, LucideIcon> = { Search, GitBranch, MessageCircle }

export function SupportMindsetSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-sm font-medium uppercase tracking-wider text-primary">
        Mindset
      </p>
      <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
        IT Support & Troubleshooting
      </h2>

      <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
        {IT_SUPPORT.description}
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {IT_SUPPORT.cards.map((card) => {
          const Icon = iconMap[card.iconName]
          return (
          <div
            key={card.title}
            className="rounded-lg border border-border bg-card p-6"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {card.description}
            </p>
          </div>
          )
        })}
      </div>
    </section>
  )
}
