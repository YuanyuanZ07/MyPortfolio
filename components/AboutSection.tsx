import { PERSONAL_INFO } from "@/data/portfolio"

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 bg-card py-20">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-sm font-medium uppercase tracking-wider text-primary">
          About Me
        </p>
        <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
          A Bit About Myself
        </h2>

        <div className="mt-6 max-w-2xl">
          <p className="leading-relaxed text-muted-foreground">
            {PERSONAL_INFO.aboutText}
          </p>
        </div>
      </div>
    </section>
  )
}
