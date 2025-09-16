import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { EducationSection } from "@/components/education-section"
import { ContactSection } from "@/components/contact-section"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </div>
  )
}
