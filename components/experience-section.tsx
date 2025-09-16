import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Lead Software Engineer",
      company: "Police Records Management Group (PRI)",
      period: "Jan 2024 – Present",
      achievements: [
        "Led the architecture and launch of GovQuest 2.0, a multi-tenant SaaS system for public records management, scaling from small agencies to full cities and state-level organizations. Expanded market reach and replaced outdated legacy platforms.",
        "Designed and delivered end-to-end features for authentication, billing, and request workflows, building REST APIs, backend services, and integrations that improved reliability and eliminated recurring issues.",
        "Built GovQuest 2.0's payment system end-to-end with Stripe, supporting per-request fees, subscription tiers, refunds, and reconciliation. Delivered a secure, scalable platform that eliminated client payment issues and improved compliance.",
        "Built a Task Management feature to help organizations assign, track, and manage request-related tasks, improving turnaround times and accountability.",
        "Delivered the Department and Department Groups module to seamlessly integrate complex organizational hierarchies into the platform, streamlining role assignment, access control, and collaboration for organizations of all sizes.",
        "Directed technical planning and mentoring, facilitating code reviews, guiding junior engineers, and aligning delivery with client and compliance needs.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Police Records Management Group (PRI)",
      period: "May 2022 – Jan 2024",
      achievements: [
        "Architected multi-tenant MySQL schemas for GovQuest 2.0, a multi-tenant SaaS with strong data isolation.",
        "Redesigned payment system with Stripe SDK + PHP CodeIgniter, improving compliance and eliminating all payment-related support issues.",
        "Migrated file storage from AWS Block Storage to S3, reducing costs by 77% and improving retrieval speeds by 40%.",
        "Standardized development environments with Docker, reducing setup time by 50% and accelerating CI/CD pipelines.",
      ],
    },
  ]

  return (
    <section className="py-16 px-4 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <p className="text-lg text-muted-foreground">{exp.company}</p>
                  </div>
                  <Badge variant="default" className="w-fit">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm leading-relaxed">{achievement}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
