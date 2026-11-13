const columns = [
  [
    { title: "Backend and data", description: "Backend services, databases, and background jobs.", tools: "TypeScript · Go · Node.js · SQL · MySQL · Redis" },
  ],
  [
    { title: "Cloud and infrastructure", description: "AWS infrastructure, containerized applications, and deployment tooling.", tools: "AWS · ECS · RDS · S3 · SQS · EventBridge · Cognito · CloudFormation · Docker" },
  ],
  [
    { title: "Frontend", description: "", tools: "React · Next.js · JavaScript" },
    { title: "Architecture and security", description: "", tools: "Multi-tenant SaaS · Event-driven systems · REST APIs · SSO · RBAC" },
  ],
]

export function SkillsSection() {
  return (
    <section id="skills" className="bg-muted/50 px-4 py-16" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-4xl">
        <h2 id="skills-heading" className="mb-8 text-3xl font-bold">Technical skills</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {columns.map((groups) => (
            <div key={groups[0].title} className="space-y-6">
              {groups.map((area) => (
                <div key={area.title}>
                  <h3 className="mb-3 text-lg font-semibold">{area.title}</h3>
                  {area.description && <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{area.description}</p>}
                  <p className="text-sm leading-relaxed">{area.tools}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-8 border-t pt-6">
          <h3 className="mb-3 text-lg font-semibold">AI-assisted development</h3>
          <p className="mb-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">AI coding tools for implementation, debugging, and tests, with code review and validation.</p>
          <p className="text-sm leading-relaxed">Claude Code · Codex · GitHub Copilot</p>
        </div>
        <p className="mt-8 text-sm text-muted-foreground">Additional experience: Lambda, CloudFront, and CI/CD.</p>
      </div>
    </section>
  )
}
