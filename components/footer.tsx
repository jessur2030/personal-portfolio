import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 px-4 border-t bg-muted/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">© {currentYear} Jesus Rosario. All rights reserved.</p>
        <div className="flex gap-4">
          <Button variant="ghost" size="sm" asChild>
            <a href="https://github.com/jessur2030" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="https://www.linkedin.com/in/jesus-rosario" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}
