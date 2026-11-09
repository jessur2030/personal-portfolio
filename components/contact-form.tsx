"use client"

import { useState, type FormEvent } from "react"
import { Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { submitContactForm } from "@/lib/contact"
import { profile } from "@/lib/profile"

type Status = "idle" | "sending" | "success" | "error"

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === "sending") return
    const form = event.currentTarget
    setStatus("sending")
    try {
      await submitContactForm(new FormData(form))
      form.reset()
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  return (
    <Card className="mx-auto max-w-2xl">
      <CardHeader>
        <h3 className="flex items-center gap-2 text-lg font-semibold"><Mail className="h-5 w-5" aria-hidden="true" />Send a message</h3>
        <p className="text-sm text-muted-foreground">Tell me about the role, team, or engineering challenge.</p>
      </CardHeader>
      <CardContent>
        <form action="https://formsubmit.co/36e99a8657a6d17fd357a20c099b1ca4" method="POST" onSubmit={handleSubmit} className="space-y-4" aria-busy={status === "sending"}>
          <fieldset disabled={status === "sending"} className="space-y-4">
            <legend className="sr-only">Your contact details and message</legend>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2"><Label htmlFor="name">Name</Label><Input id="name" name="name" autoComplete="name" required maxLength={120} placeholder="Your name" /></div>
              <div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@company.com" /></div>
            </div>
            <div className="space-y-2"><Label htmlFor="subject">Subject</Label><Input id="subject" name="subject" required maxLength={200} placeholder="Senior Software Engineer opportunity" /></div>
            <div className="space-y-2"><Label htmlFor="message">Message</Label><Textarea id="message" name="message" required maxLength={10000} placeholder="Tell me about the role, team, or engineering challenge." rows={5} /></div>
            <Button type="submit" className="w-full"><Send aria-hidden="true" />{status === "sending" ? "Sending…" : "Send message"}</Button>
          </fieldset>
          <div role="status" aria-live="polite" aria-atomic="true">
            {status === "sending" && <p className="text-sm text-muted-foreground">Sending your message…</p>}
            {status === "success" && <p className="text-sm">Thanks — your message was sent.</p>}
          </div>
          {status === "error" && <p role="alert" className="text-sm">Your message could not be confirmed. Your text is still here; you can retry or <a href={`mailto:${profile.email}`} className="font-medium underline underline-offset-4">email me directly</a>.</p>}
        </form>
      </CardContent>
    </Card>
  )
}
