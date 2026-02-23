import { PERSONAL_INFO } from "@/data/portfolio"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-8">
      <div className="mx-auto max-w-5xl px-6 text-center text-sm text-muted-foreground">
        <p>{PERSONAL_INFO.builtWith}</p>
        <p className="mt-1">{PERSONAL_INFO.copyright}</p>
      </div>
    </footer>
  )
}
