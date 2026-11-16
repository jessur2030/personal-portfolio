import { Card, CardContent } from "@/components/ui/card"

const roles = [
  {
    title: "Lead Software Engineer",
    period: "Jan 2024 - Present",
    summary: "Led the architecture and launch of GovQuest 2.0, replacing a legacy application with a multi-tenant platform on AWS.",
    achievements: [
      "Lead technical planning, code reviews, and mentorship, working with product and leadership on delivery priorities.",
      "Designed and built workflow automation for request handling, deadlines, and follow-up actions, now used by production agencies.",
      "Build backend systems for background jobs, request payments, and enterprise authentication.",
    ],
  },
  {
    title: "Software Engineer",
    period: "May 2022 - Jan 2024",
    summary: "Took over legacy GovQuest maintenance and feature development as work moved in-house, while designing core MySQL data models for GovQuest 2.0.",
    achievements: [
      "Migrated legacy file storage from AWS EBS to S3, reducing file-storage costs by 77%.",
      "Rebuilt the legacy Stripe payment integration.",
      "Standardized development and deployment environments with Docker, simplifying day-to-day development and cutting developer onboarding time by about 50%.",
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
