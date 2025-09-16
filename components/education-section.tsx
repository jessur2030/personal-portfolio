import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export function EducationSection() {
  return (
    <section className="py-16 px-4 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              <div>
                <h3 className="text-xl">A.S. Information Technology / Software Engineering</h3>
                <p className="text-muted-foreground font-normal">New England Institute of Technology, RI</p>
              </div>
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    </section>
  )
}
