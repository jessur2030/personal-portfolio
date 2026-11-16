import { Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { profile } from "@/lib/profile"

export function Footer() {
  return (
    <footer className="border-t px-4 py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex gap-3">
          <Button variant="ghost" size="sm" asChild><a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="Jesus Rosario on GitHub"><Github aria-hidden="true" /></a></Button>
          <Button variant="ghost" size="sm" asChild><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Jesus Rosario on LinkedIn"><Linkedin aria-hidden="true" /></a></Button>
        </div>
      </div>
    </footer>
  )
}
