export default function Projects() {
  const projects = [
    {
      title: "TaskFlow",
      description:
        "A collaborative task manager with real‑time updates, role‑based access, and focus on clarity.",
      tags: ["React", "FastAPI", "MongoDB"],
      link: "#",
    },
    {
      title: "ShopLite",
      description:
        "Headless ecommerce starter with cart, payments, and admin dashboard.",
      tags: ["Next.js", "Stripe", "Tailwind"],
      link: "#",
    },
    {
      title: "PulseUI",
      description:
        "Component library of accessible, themeable UI primitives.",
      tags: ["React", "Radix", "Vite"],
      link: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
          <a href="#contact" className="text-blue-300 hover:text-white">Need something like this?</a>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              className="group p-6 rounded-2xl bg-slate-800/60 border border-white/10 hover:border-blue-400/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                <span className="text-xs text-blue-300/70">Case study</span>
              </div>
              <p className="text-blue-200/80 text-sm leading-relaxed mt-2">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-blue-500/10 border border-blue-400/30 text-blue-200">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
