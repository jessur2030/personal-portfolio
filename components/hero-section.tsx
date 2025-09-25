import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail, Phone, MapPin as Location, MapPin, Zap } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export function HeroSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Available for new opportunities
            </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Jesus Rosario</h1>
        <p className="text-2xl md:text-3xl text-primary font-semibold mb-8 text-balance">Lead Software Engineer</p>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Lead Software Engineer with a proven track record of building and scaling SaaS platforms from the ground up. 
            Experienced in multi-tenant architectures, backend systems, and cloud-native applications, with a focus on 
            delivering reliable, maintainable solutions that drive real business impact. Proven ability to turn complex 
            requirements into clear designs and guide a team of developers to ship high-quality software in fast-paced environments.
        </p>

        <div className="flex flex-col items-center gap-4 mb-8">
     
           <div className="flex flex-wrap justify-center gap-4">
            <Button variant="default" asChild>
              <a href="/jesus-rosario-resume.pdf" target="_blank" rel="noopener noreferrer" download>
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </Button>

          <Button variant="outline" size="lg" className="gap-2 bg-transparent" asChild>
              <a href="#contact">
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
          </Button>
          </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Miami, FL
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                (860) 514-9347
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                jesusmrdev@gmail.com
              </div>
            </div>
    
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" asChild>
              <a href="https://linkedin.com/in/jesus-rosario" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/jessur2030" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
        {/* Download Resume button moved into contact row above. Removed duplicate Miami, FL. */}
      </div>
    </section>
  )
}
