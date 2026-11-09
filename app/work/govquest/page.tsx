import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { profile } from "@/lib/profile"

export const metadata: Metadata = {
  title: "GovQuest 2.0 Engineering Case Study",
  description: "Jesus Rosario's architecture and technical leadership on GovQuest 2.0: multi-tenant data models, reliable background processing, workflow automation, and enterprise integrations.",
  alternates: { canonical: "/work/govquest" },
}

const systems = [
  {
    title: "Multi-tenant data and agency structures",
    context: "Agencies organize requests across departments and groups, with different responsibilities and access needs.",
    contribution: "I designed tenant-scoped MySQL data models and modules for departments, groups, and task management. This gave the platform an organizational model that could support different agency structures while keeping data scoped to each tenant.",
  },
  {
    title: "Durable background processing",
    context: "A request update can trigger background work. A failure between saving that update and dispatching the work can leave the two out of sync.",
    contribution: "I built background processing in TypeScript with a transactional outbox, recording pending work in the same transaction as the business change. Deduplication, retries, and delivery checkpoints support recovery when processing is interrupted.",
  },
  {
    title: "Production workflow automation",
    context: "Agencies need configurable workflows for request events, requester inactivity, and upcoming or overdue deadlines.",
    contribution: "I designed and built an automation engine with event and time-based triggers, conditional rules, business-day calendars, and ordered actions. I separated trigger evaluation from execution and committed each action's database changes together with its recovery checkpoint. On retry, the executor can skip completed database actions; run history makes execution easier to inspect and troubleshoot.",
  },
  {
    title: "Payments and billing",
    context: "Payment outcomes need to stay connected to records requests, including refunds and invoicing.",
    contribution: "I built Stripe workflows for request charges, refunds, pricing rules, and custom PDF invoicing. Webhook-driven updates keep payment state connected to the application workflow.",
  },
  {
    title: "Security and compliance",
    context: "Agency systems need enterprise sign-in and access controls appropriate to staff responsibilities and security requirements.",
    contribution: "I implemented enterprise SSO, multi-factor authentication, and role-based access control aligned with CJIS requirements and integrated with agency organizational models. I also contribute engineering work to GovQuest's ongoing FedRAMP compliance preparation.",
  },
]

export default function GovQuestCaseStudy() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
      <Link href="/#projects" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="h-4 w-4" aria-hidden="true" />Back to selected work</Link>
      <header className="mb-12">
        <p className="mb-3 text-sm font-medium text-primary">Professional work at PRI</p>
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl">GovQuest 2.0</h1>
        <p className="mb-6 text-2xl leading-snug">From a legacy application to a multi-tenant platform</p>
        <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">GovQuest helps government agencies manage public records requests. At PRI, I led the architecture and launch of GovQuest 2.0 on AWS and continue to lead engineering delivery, with hands-on responsibility for backend systems and relational data models.</p>
        <dl className="mt-8 grid gap-6 border-y py-6 sm:grid-cols-3">
          <div><dt className="mb-1 text-sm text-muted-foreground">My role</dt><dd className="font-medium">Lead Software Engineer</dd></div>
          <div><dt className="mb-1 text-sm text-muted-foreground">Focus</dt><dd className="font-medium">Backend systems and data</dd></div>
          <div><dt className="mb-1 text-sm text-muted-foreground">Product reach</dt><dd className="font-medium">{profile.reach}</dd></div>
        </dl>
      </header>
      <section className="mb-12" aria-labelledby="challenge-heading">
        <h2 id="challenge-heading" className="mb-4 text-2xl font-bold">The engineering challenge</h2>
        <p className="leading-relaxed text-muted-foreground">GovQuest 2.0 needed to replace a legacy product and support agencies with different departments, groups, access roles, and request processes. The challenge was to model those differences within a shared platform while keeping background workflows recoverable when processing fails.</p>
      </section>
      <section className="mb-12" aria-labelledby="ownership-heading">
        <h2 id="ownership-heading" className="mb-4 text-2xl font-bold">My role and scope</h2>
        <p className="leading-relaxed text-muted-foreground">I work hands-on across application code, data models, and AWS infrastructure. I also guide technical planning, design and code reviews, and mentorship, and work with product and leadership on delivery priorities.</p>
      </section>
      <section className="mb-12" aria-labelledby="systems-heading">
        <h2 id="systems-heading" className="mb-8 text-2xl font-bold">Engineering decisions and implementation</h2>
        <div className="space-y-8">
          {systems.map((system, index) => (
            <section key={system.title} className="border-l-2 border-primary/30 pl-5" aria-labelledby={`system-${index}`}>
              <h3 id={`system-${index}`} className="mb-3 text-xl font-semibold">{system.title}</h3>
              <p className="mb-3 leading-relaxed text-muted-foreground">{system.context}</p>
              <p className="leading-relaxed">{system.contribution}</p>
            </section>
          ))}
        </div>
      </section>
      <section className="mb-12" aria-labelledby="outcome-heading">
        <h2 id="outcome-heading" className="mb-4 text-2xl font-bold">Outcome and continued ownership</h2>
        <p className="leading-relaxed text-muted-foreground">Agency staff can organize requests around departments and groups, configure workflow rules, and manage payments and access within one platform. GovQuest 2.0 and its automation engine are used in production. I continue to lead engineering delivery and develop backend capabilities.</p>
      </section>
      <div className="flex flex-wrap gap-3 border-t pt-8">
        <Button asChild><a href={`mailto:${profile.email}`}>Discuss my work</a></Button>
        <Button variant="outline" asChild><a href={profile.resume} download><Download aria-hidden="true" />Download resume</a></Button>
        <Button variant="outline" asChild><a href={profile.product} target="_blank" rel="noopener noreferrer">Visit GovQuest<ExternalLink aria-hidden="true" /></a></Button>
      </div>
    </article>
  )
}
