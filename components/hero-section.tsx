import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { profile } from "@/lib/profile"

export function HeroSection() {
  return (
    <section className="px-4 py-16 sm:py-24" aria-labelledby="intro-heading">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
          <span className="h-2 w-2 rounded-full bg-current" aria-hidden="true" />
          Open to Senior and Lead engineering opportunities
        </p>
        <h1 id="intro-heading" className="mb-4 text-balance text-4xl font-bold sm:text-6xl">{profile.name}</h1>
        <p className="mb-2 text-2xl font-semibold sm:text-3xl">{profile.title}</p>
        <p className="mb-6 text-lg font-medium text-primary sm:text-xl">{profile.focus}</p>
        <p className="mx-auto mb-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          I design and build multi-tenant SaaS platforms and backend systems on AWS,
          from architecture through production.
        </p>
        <p className="mx-auto mb-8 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          At PRI, I led the development and launch of GovQuest 2.0 and continue to lead its engineering team.
        </p>
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          <Button size="lg" asChild>
            <a href="#projects"><ArrowDown aria-hidden="true" />Explore my work</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href={profile.resume} download><Download aria-hidden="true" />Download resume</a>
          </Button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" aria-hidden="true" />{profile.location}</span>
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-foreground"><Mail className="h-4 w-4" aria-hidden="true" />Email</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-foreground"><Linkedin className="h-4 w-4" aria-hidden="true" />LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-foreground"><Github className="h-4 w-4" aria-hidden="true" />GitHub</a>
        </div>
      </div>
    </section>
  )
}
