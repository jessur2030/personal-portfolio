import { Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { profile } from "@/lib/profile"

export function ContactSection() {
  return (
    <section id="contact" className="bg-muted/50 px-4 py-16" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="contact-heading" className="mb-4 text-3xl font-bold">Get in touch</h2>
          <p className="mb-6 leading-relaxed text-muted-foreground">For engineering opportunities, email me or connect on LinkedIn.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild><a href={`mailto:${profile.email}`}><Mail aria-hidden="true" />Email me</a></Button>
            <Button variant="outline" asChild><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin aria-hidden="true" />Connect on LinkedIn</a></Button>
          </div>
        </div>
      </div>
    </section>
  )
}
