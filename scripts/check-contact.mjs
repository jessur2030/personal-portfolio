import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import test from "node:test"
import ts from "typescript"

const source = await readFile(new URL("../lib/contact.ts", import.meta.url), "utf8")
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText
const { submitContactForm, contactEndpoint } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}`)

for (const success of [true, "true"]) {
  test(`accepts confirmed success ${JSON.stringify(success)} and sends the form to the existing provider`, async () => {
    const form = new FormData()
    form.set("message", "Test data stays in this mock")
    await submitContactForm(form, async (url, options) => {
      assert.equal(url, contactEndpoint)
      assert.equal(options.method, "POST")
      assert.deepEqual(JSON.parse(options.body), Object.fromEntries(form))
      assert.equal(options.headers["Content-Type"], "application/json")
      assert.equal(options.headers.Accept, "application/json")
      assert.ok(options.signal instanceof AbortSignal)
      return Response.json({ success })
    })
  })
}

test("rejects HTTP failures", async () => {
  await assert.rejects(submitContactForm(new FormData(), async () => new Response("Error", { status: 503 })))
})

test("rejects provider failure even with HTTP 200", async () => {
  await assert.rejects(submitContactForm(new FormData(), async () => Response.json({ success: "false" })))
})

test("rejects an unconfirmed or malformed response", async () => {
  await assert.rejects(submitContactForm(new FormData(), async () => Response.json({ message: "Unknown" })))
  await assert.rejects(submitContactForm(new FormData(), async () => new Response("Not JSON")))
})

test("propagates network failure without changing entered values", async () => {
  const form = new FormData()
  form.set("message", "Keep this message")
  await assert.rejects(submitContactForm(form, async () => { throw new TypeError("Network unavailable") }))
  assert.equal(form.get("message"), "Keep this message")
})
