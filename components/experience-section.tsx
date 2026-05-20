import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Lead Software Engineer",
      company: "Police Records and Information Management Group (PRI)",
      period: "Jan 2024 – Present",
      achievements: [
        "Led the architecture and launch of GovQuest 2.0, a cloud-native multi-tenant SaaS on AWS built to CJIS security standards, replacing a legacy single-tier product and now serving 50+ government organizations across mid-market, enterprise, and state-level segments the company previously could not sell to.",
        "Built an event-driven service in TypeScript on AWS EventBridge, SQS, and ECS with dead-letter queues, providing at-least-once delivery and automated failure recovery for async workflows across the platform.",
        "Architected GovQuest's Stripe payment system end-to-end: subscription tiers, per-request billing, refunds, event-driven payment state handling, dynamic fee calculations, and automated invoicing.",
        "Delivered enterprise authentication and security aligned with CJIS requirements: Azure AD / Entra ID SSO, MFA, Cognito session hardening, domain restrictions, and role-based access control.",
        "Built Department, Department Groups, and Task Management modules to model complex organizational hierarchies, a capability the legacy system could not support.",
        "Designed a configurable workflow automation engine with routing logic, assignment pools, and request orchestration, replacing manual handoffs across thousands of public records requests processed monthly and helping organizations meet statutory response deadlines.",
        "Lead a team of 4 engineers through architecture reviews, technical planning, code reviews, and mentorship, and partner with product and leadership on roadmap and compliance alignment.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Police Records and Information Management Group (PRI)",
      period: "May 2022 – Jan 2024",
      achievements: [
        "Took ownership of the legacy GovQuest codebase as the first internal engineer after development was brought in-house from an outsourced vendor, handling maintenance, feature delivery, and platform stabilization.",
        "Designed core multi-tenant MySQL schemas powering GovQuest 2.0, turning complex domain requirements into clean relational models with strong tenant isolation.",
        "Rebuilt the legacy GovQuest payment integration with Stripe SDK and PHP CodeIgniter, hardening transaction reliability and aligning with current compliance standards.",
        "Migrated file storage from AWS Block Storage to S3, reducing storage costs by 77% and improving retrieval performance by 40%.",
        "Standardized development and deployment environments with Docker, cutting onboarding time by ~50% and improving CI/CD consistency.",
      ],
    },
    {
      title: "Freelance Software Engineer",
      company: "Self-employed",
      period: "Jan 2021 – Mar 2022",
      achievements: [
        "Designed and built responsive websites for small business clients, handling discovery, scoping, development, and launch end-to-end.",
        "Contributed backend development and database schema work to a multi-component project alongside a senior engineer, focused on data modeling and API design.",
        "Managed the full client relationship for each engagement: requirements gathering, technical proposals, delivery, and post-launch support.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-16 px-4 bg-muted/50">
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
