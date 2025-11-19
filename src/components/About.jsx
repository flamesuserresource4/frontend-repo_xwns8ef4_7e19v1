export default function About() {
  const highlights = [
    {
      title: "What I do",
      text:
        "I craft end‑to‑end web apps: clean frontends, reliable backends, and data layers that scale. I care about DX, UX, and performance in equal measure.",
    },
    {
      title: "How I work",
      text:
        "Strong ownership, clear communication, and rapid prototyping. I iterate quickly and deliver production‑ready results.",
    },
    {
      title: "Tech I love",
      text:
        "React, Tailwind, FastAPI, MongoDB, Next.js, Vite, Prisma/ODM, and modern tooling.",
    },
  ]

  return (
    <section id="about" className="py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">About</h2>
        <p className="text-blue-200/80 mt-3 max-w-2xl">
          I'm Aman Singh, a developer who enjoys building thoughtful products and crisp interfaces.
          I value simple architectures, approachable UX, and a maintainable codebase.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {highlights.map((h) => (
            <div key={h.title} className="p-6 rounded-2xl bg-slate-800/60 border border-white/10 text-blue-100">
              <h3 className="text-white font-semibold text-lg mb-2">{h.title}</h3>
              <p className="text-blue-200/80 text-sm leading-relaxed">{h.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
