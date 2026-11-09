import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { profile } from "@/lib/profile"

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-muted/50 px-4 py-16" aria-labelledby="work-heading">
      <div className="mx-auto max-w-4xl">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">Selected work</p>
        <h2 id="work-heading" className="mb-8 text-3xl font-bold">Engineering a production SaaS platform</h2>
        <Card>
          <CardContent className="grid gap-8 sm:p-8 md:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="mb-3 text-sm text-muted-foreground">Professional work at PRI · Architecture and technical leadership</p>
              <h3 className="mb-4 text-2xl font-bold">GovQuest 2.0</h3>
              <p className="mb-5 leading-relaxed text-muted-foreground">
                I led the architecture and launch of GovQuest 2.0, a multi-tenant platform
                on AWS that helps government agencies manage public records requests.
                I continue to lead engineering delivery and build its backend systems.
              </p>
              <p className="mb-5 text-sm font-medium">Serving {profile.reach}</p>
              <div className="mb-6 flex flex-wrap gap-2">
                {["TypeScript", "Node.js", "MySQL", "AWS", "Multi-tenant SaaS"].map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild><Link href="/work/govquest">Read case study<ArrowUpRight aria-hidden="true" /></Link></Button>
                <Button variant="outline" asChild><a href={profile.product} target="_blank" rel="noopener noreferrer">Product website<ExternalLink aria-hidden="true" /></a></Button>
              </div>
            </div>
            <div className="space-y-6 border-t pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              {[
                ["Multi-tenant data models", "Tenant-scoped MySQL models for agency departments, groups, and roles."],
                ["Reliable background processing", "Transactional outbox, deduplication, and retries to recover interrupted work."],
                ["Workflow automation", "Configurable triggers and ordered actions, with recovery checkpoints and run history."],
                ["Security and compliance", "Enterprise SSO, MFA, and access controls aligned with CJIS requirements; engineering support for FedRAMP compliance preparation."],
              ].map(([title, text]) => (
                <div key={title}><h4 className="mb-2 font-semibold">{title}</h4><p className="text-sm leading-relaxed text-muted-foreground">{text}</p></div>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="mt-12" aria-labelledby="open-source-heading">
          <h3 id="open-source-heading" className="mb-3 text-2xl font-semibold">Open-source developer tools</h3>
          <p className="mb-6 max-w-2xl leading-relaxed text-muted-foreground">Outside my work at PRI, I build tools for everyday development.</p>
          <Card className="mb-6 gap-0 overflow-hidden py-0">
            <div className="grid md:grid-cols-[1.25fr_1fr]">
              <div className="flex items-center p-5 pb-0 sm:p-6 sm:pb-0 md:pb-6 md:pr-0">
                <Image src="/projects/structflow-json-annotated.png" alt="StructFlow store preview: themeable, searchable JSON with an in-page viewer" width={1280} height={800} className="h-auto w-full rounded-lg border border-border shadow-sm" sizes="(min-width: 896px) 475px, (min-width: 768px) 53vw, 100vw" />
              </div>
              <CardContent className="p-6 sm:p-8">
                <p className="mb-2 text-sm text-muted-foreground">Independent project · Browser extension</p>
                <h4 className="mb-3 text-xl font-semibold">StructFlow</h4>
                <p className="mb-4 leading-relaxed text-muted-foreground">An offline browser workspace for code snippets, JSON exploration, and Markdown notes, with a searchable library, import/export, and local storage in IndexedDB.</p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {["React", "TypeScript", "IndexedDB"].map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" asChild><a href="https://chromewebstore.google.com/detail/structflow/gnjabohddgleaghkhglofkepfmadclmj" target="_blank" rel="noopener noreferrer">Chrome Web Store<ExternalLink aria-hidden="true" /></a></Button>
                  <Button variant="ghost" asChild><a href="https://github.com/jessur2030/structflow" target="_blank" rel="noopener noreferrer">View source<ArrowUpRight aria-hidden="true" /></a></Button>
                </div>
              </CardContent>
            </div>
          </Card>
          <div className="flex flex-col gap-4 rounded-xl border bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <h4 className="mb-2 text-lg font-semibold">Aura Noir</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">A VS Code theme family with nine variants, semantic highlighting, and coordinated editor and workbench colors.</p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-x-5 gap-y-3 text-sm font-medium">
              <a href="https://marketplace.visualstudio.com/items?itemName=jessusdev.aura-noir-theme" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 underline underline-offset-4 hover:text-primary">Marketplace<ExternalLink className="h-4 w-4" aria-hidden="true" /></a>
              <a href="https://github.com/jessur2030/aura-noir-theme" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 underline underline-offset-4 hover:text-primary">GitHub<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
