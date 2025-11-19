import { useState } from "react"

export default function Contact() {
  const [status, setStatus] = useState(null)

  async function onSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      // In a real deployment, connect to your backend or use an email service
      await new Promise((r) => setTimeout(r, 800))
      setStatus({ ok: true, message: "Thanks! I'll get back to you soon." })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, message: "Something went wrong. Try again." })
    }
  }

  return (
    <section id="contact" className="py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Contact</h2>
        <p className="text-blue-200/80 mt-3 max-w-2xl">
          Have a project in mind or need help with an existing product? Send a note—I'd love to help.
        </p>

        <form onSubmit={onSubmit} className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="md:col-span-1">
            <label className="block text-sm text-blue-200/80 mb-2">Name</label>
            <input name="name" required className="w-full rounded-lg bg-slate-800/60 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm text-blue-200/80 mb-2">Email</label>
            <input name="email" type="email" required className="w-full rounded-lg bg-slate-800/60 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@email.com" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-blue-200/80 mb-2">Message</label>
            <textarea name="message" rows={5} required className="w-full rounded-lg bg-slate-800/60 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell me about your idea..." />
          </div>
          <div className="md:col-span-2 flex items-center gap-4">
            <button type="submit" className="px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors">Send message</button>
            {status && (
              <p className={status.ok ? "text-green-300" : "text-red-300"}>{status.message}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
