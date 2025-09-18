import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  ExternalLink, 
} from "lucide-react"
import Link from "next/link"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl font-bold text-center mb-12 text-balance">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="font-serif text-xl">GovQuest 2.0</CardTitle>
              <CardDescription>Multi-tenant SaaS Platform</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 text-sm">
                A public records management system serving agencies from small towns to state-level
                organizations. Features end-to-end payment processing, task management, and complex organizational
                hierarchies.
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                <Badge variant="outline" className="text-xs">
                  Node.js
                </Badge>
                <Badge variant="outline" className="text-xs">
                  TypeScript
                </Badge>
                <Badge variant="outline" className="text-xs">
                  MySQL
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Redis
                </Badge>
                <Badge variant="outline" className="text-xs">
                  AWS (S3, EC2, RDS, Lambda, ECS, Amplify, Cognito)
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Stripe SDK
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Multi-tenant SaaS
                </Badge>
              </div>
              <Button variant="outline" size="sm" className="w-full gap-2 bg-transparent" asChild>
                <Link href={"http://govquest.com/"} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3 h-3" />
                  View Project
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-dashed border-2 border-muted-foreground/20">
            <CardContent className="flex flex-col items-center justify-center h-full py-12 text-center">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                <span className="text-2xl">+</span>
              </div>
              <p className="text-muted-foreground text-sm">More projects coming soon</p>
            </CardContent>
          </Card>

          <Card className="border-dashed border-2 border-muted-foreground/20">
            <CardContent className="flex flex-col items-center justify-center h-full py-12 text-center">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                <span className="text-2xl">+</span>
              </div>
              <p className="text-muted-foreground text-sm">More projects coming soon</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
