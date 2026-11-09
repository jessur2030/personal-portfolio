const areas = [
  { title: "Backend and data", description: "Application services, relational data models, billing, and durable background processing.", tools: "TypeScript · Go · Node.js · SQL · MySQL · Redis" },
  { title: "Cloud and infrastructure", description: "Multi-tenant AWS systems, containerized delivery, and deployment tooling.", tools: "AWS · ECS · RDS · S3 · SQS · EventBridge · Cognito · CloudFormation · Docker" },
  { title: "Full-stack delivery", description: "Hands-on frontend development alongside backend architecture and technical team leadership.", tools: "React · Next.js · JavaScript · REST APIs · Enterprise SSO · RBAC" },
]

export function SkillsSection() {
  return (
    <section id="skills" className="bg-muted/50 px-4 py-16" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-4xl">
        <h2 id="skills-heading" className="mb-8 text-3xl font-bold">Technical focus</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {areas.map((area) => (
            <div key={area.title}>
              <h3 className="mb-3 text-lg font-semibold">{area.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{area.description}</p>
              <p className="text-sm leading-relaxed">{area.tools}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t pt-6">
          <h3 className="mb-3 text-lg font-semibold">AI-assisted development</h3>
          <p className="mb-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">Hands-on use of AI coding tools for implementation, debugging, and test development, with code review and validation of generated changes.</p>
          <p className="text-sm leading-relaxed">Claude Code · Codex · GitHub Copilot</p>
        </div>
        <p className="mt-8 text-sm text-muted-foreground">Additional experience: Lambda, CloudFront, and CI/CD.</p>
      </div>
    </section>
  )
}
