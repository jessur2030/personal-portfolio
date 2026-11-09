"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import { profile } from "@/lib/profile"

const navLinks = [
  { href: "/#projects", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  useEffect(() => { setIsOpen(false) }, [pathname])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 px-4 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
        <Link href="/" className="text-lg font-bold" onClick={() => setIsOpen(false)}>{profile.name}</Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((link) => <Link key={link.href} href={link.href} className="text-muted-foreground transition-colors hover:text-foreground">{link.label}</Link>)}
          <a href={profile.resume} download className="text-muted-foreground hover:text-foreground">Resume</a>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button type="button" variant="ghost" size="icon" className="md:hidden" aria-label={isOpen ? "Close navigation" : "Open navigation"} aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen(!isOpen)} onKeyDown={(event) => { if (event.key === "Escape") setIsOpen(false) }}>
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </div>
      <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!isOpen} className="mx-auto mt-4 max-w-6xl md:hidden" onKeyDown={(event) => { if (event.key === "Escape") setIsOpen(false) }}>
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => <Link key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-foreground" onClick={() => setIsOpen(false)}>{link.label}</Link>)}
          <a href={profile.resume} download className="text-sm text-muted-foreground hover:text-foreground" onClick={() => setIsOpen(false)}>Download resume</a>
        </div>
      </nav>
    </header>
  )
}
