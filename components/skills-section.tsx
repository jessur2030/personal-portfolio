import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SkillsSection() {
  const skills = {
    "Languages & Frameworks": ["Node.js", "JavaScript", "TypeScript", "PHP", "React.js", "Next.js"],
    "Databases & Storage": ["MySQL", "Redis", "AWS S3"],
    "Cloud & DevOps": ["AWS (EC2, ECS, S3, RDS, Cognito, Amplify, Lambda)", "Docker", "CI/CD"],
    Methodologies: ["Agile/Scrum", "REST APIs", "Multi-tenant Architecture"],
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <Card key={category}>
              <CardHeader>
                <CardTitle className="text-lg">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
