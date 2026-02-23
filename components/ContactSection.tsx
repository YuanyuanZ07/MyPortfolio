import { Mail, Linkedin, Github } from "lucide-react"
import { SOCIAL_LINKS } from "@/data/portfolio"

const contactLinks = [
  {
    icon: Mail,
    label: SOCIAL_LINKS.email.label,
    href: SOCIAL_LINKS.email.url,
    display: SOCIAL_LINKS.email.display,
  },
  {
    icon: Linkedin,
    label: SOCIAL_LINKS.linkedin.label,
    href: SOCIAL_LINKS.linkedin.url,
    display: SOCIAL_LINKS.linkedin.display,
  },
  {
    icon: Github,
    label: SOCIAL_LINKS.github.label,
    href: SOCIAL_LINKS.github.url,
    display: SOCIAL_LINKS.github.display,
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-sm font-medium uppercase tracking-wider text-primary">
          Contact
        </p>
        <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
          Get In Touch
        </h2>
        <p className="mt-3 text-muted-foreground">
          {"Feel free to reach out — I'd love to hear from you."}
        </p>

        <div className="mt-8 flex flex-col gap-4">
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{item.label}</p>
                <p className="text-sm text-muted-foreground group-hover:text-primary">
                  {item.display}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
