import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail, Phone } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export function HeroSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Jesus Rosario</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">Lead Software Engineer</p>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
          Lead Software Engineer with a strong background in designing and scaling APIs, multi-tenant SaaS platforms,
          and data-driven systems. Skilled at driving technical strategy, delivering scalable cloud solutions, and
          guiding teams to build high-impact products that balance performance, reliability, and business goals.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button asChild>
            <a href="mailto:jesusmrdev@gmail.com">
              <Mail className="w-4 h-4 mr-2" />
              Email
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="tel:(860) 514-9347">
              <Phone className="w-4 h-4 mr-2" />
              (860) 514-9347
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://linkedin.com/in/jesus-rosario" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/jesusrosario" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
          <Button variant="secondary">
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
        </div>

        <p className="text-muted-foreground">Miami, FL • jessusdev.com</p>
      </div>
    </section>
  )
}
