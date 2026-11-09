export const contactEndpoint = "https://formsubmit.co/ajax/36e99a8657a6d17fd357a20c099b1ca4"

export async function submitContactForm(formData: FormData, send: typeof fetch = fetch) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 20_000)

  try {
    const response = await send(contactEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(Object.fromEntries(formData)),
      signal: controller.signal,
    })
    if (!response.ok) throw new Error("Message delivery failed")
    const result: { success?: boolean | string } = await response.json()
    if (result.success !== true && result.success !== "true") throw new Error("Message delivery was not confirmed")
  } finally {
    clearTimeout(timeout)
  }
}
