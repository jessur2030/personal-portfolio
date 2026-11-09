import { Card, CardContent } from "@/components/ui/card"

const roles = [
  {
    title: "Lead Software Engineer",
    period: "Jan 2024 - Present",
    summary: "Led the architecture and launch of GovQuest 2.0 and lead its engineering team through technical planning, architecture reviews, code review, and mentorship.",
    achievements: [
      "Designed and built workflow automation used by production agencies, with event and time-based triggers, ordered actions, recovery checkpoints, and run history.",
      "Build backend systems spanning durable background jobs, request payments, and enterprise authentication.",
      "Guide backend architecture, data modeling, and AWS infrastructure, partnering with product and leadership on technical priorities.",
    ],
  },
  {
    title: "Software Engineer",
    period: "May 2022 - Jan 2024",
    summary: "Took ownership of legacy GovQuest as development moved in-house, maintaining the product while designing tenant-scoped MySQL data models for its successor.",
    achievements: [
      "Migrated legacy file storage to S3, reducing storage costs.",
      "Rebuilt the legacy Stripe integration and standardized development and deployment environments with Docker.",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="px-4 py-16" aria-labelledby="experience-heading">
      <div className="mx-auto max-w-4xl">
        <h2 id="experience-heading" className="mb-8 text-3xl font-bold">Experience</h2>
        <Card className="mb-6">
          <CardContent>
            <h3 className="mb-6 text-xl font-semibold">Police Records and Information Management Group (PRI)</h3>
            <div className="space-y-8">
              {roles.map((role) => (
                <div key={role.title} className="border-l-2 border-primary/30 pl-5">
                  <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h4 className="text-lg font-semibold">{role.title}</h4>
                    <p className="text-sm text-muted-foreground">{role.period}</p>
                  </div>
                  <p className="mb-3 leading-relaxed text-muted-foreground">{role.summary}</p>
                  <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                    {role.achievements.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="px-6">
          <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:justify-between">
            <h3 className="font-semibold">Freelance Software Engineer · Self-employed</h3>
            <p className="text-sm text-muted-foreground">Jan 2021 - Mar 2022</p>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">Delivered responsive websites for small businesses from discovery through launch and support; contributed backend APIs and database schema work alongside a senior engineer.</p>
        </div>
      </div>
    </section>
  )
}
