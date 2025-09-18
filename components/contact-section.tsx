import { Separator } from "@/components/ui/separator"
import { ContactForm } from "./contact-form"

export function ContactSection() {
  return (
    <section id="contact" className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
