import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Cloud, Settings } from "lucide-react"

export function SkillsSection() {
  const skills = [
    {
      category: "Languages & Frameworks",
      icon: <Code className="w-6 h-6 text-primary" />,
      items: ["JavaScript", "TypeScript", "Node.js", "PHP", "React.js", "Next.js"],
    },
    {
      category: "Databases & Cloud",
      icon: <Database className="w-6 h-6 text-primary" />,
      items: ["MySQL", "Redis", "AWS", "Docker", "Linux", "EC2", "S3", "RDS", "ECS", "Lambda"],
    },
    {
      category: "Architecture & Systems",
      icon: <Settings className="w-6 h-6 text-primary" />,
      items: ["Multi-tenant SaaS", "RESTful APIs", "Microservices", "System Design", "RBAC", "Payment Integration", "CI/CD"],
    },
  ]

  return (
    <section className="py-16 px-4" id="skills">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Expertise</h2>
        <Card>
          <CardContent className="p-8">
            <div className="space-y-8">
              {skills.map(({ category, icon, items }) => (
                <div key={category}>
                  <div className="flex items-center gap-3 mb-4">
                    {icon}
                    <h3 className="text-xl font-semibold text-foreground">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm py-2 px-3">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
