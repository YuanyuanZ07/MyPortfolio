"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { NAV_LINKS, PERSONAL_INFO } from "@/data/portfolio"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold text-foreground">
          {PERSONAL_INFO.initials}
        </a>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((navItem) => (
            <li key={navItem.href}>
              <a
                href={navItem.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {navItem.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 pb-4 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map((navItem) => (
              <li key={navItem.href}>
                <a
                  href={navItem.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {navItem.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
