import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Globe } from "lucide-react"
import { ContactForm } from "./contact-form"

export function ContactSection() {
  return (
    <footer className="py-12 px-4 bg-muted/50 border-t">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <ContactForm />
        </div>

        <Separator className="mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">© 2025 Jesus Rosario. All rights reserved.</p>
          <div className="flex gap-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/jesusrosario" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://linkedin.com/in/jesus-rosario" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://jessusdev.com" target="_blank" rel="noopener noreferrer">
                <Globe className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
