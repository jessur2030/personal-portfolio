export function EducationSection() {
  return (
    <section className="px-4 py-12" aria-labelledby="education-heading">
      <div className="mx-auto max-w-4xl">
        <h2 id="education-heading" className="mb-4 text-2xl font-bold">Education and training</h2>
        <h3 className="font-semibold">A.S. Information Technology / Software Engineering</h3>
        <p className="mt-1 text-sm text-muted-foreground">New England Institute of Technology, East Greenwich, RI</p>
        <div className="mt-6 border-t pt-6">
          <h3 className="font-semibold">CJIS Security and Privacy Training - Privileged Role</h3>
          <p className="mt-1 text-sm text-muted-foreground">CJIS Online · Completed <time dateTime="2026-10-06">Oct 2026</time> · Expires <time dateTime="2027-10-06">Oct 2027</time></p>
        </div>
      </div>
    </section>
  )
}
