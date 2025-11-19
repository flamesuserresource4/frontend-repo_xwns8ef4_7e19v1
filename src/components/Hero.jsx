export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_80%_20%,rgba(59,130,246,0.15),transparent)]" />
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-blue-300/80 mb-2">Portfolio • Software Engineer</p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Aman Singh
          </h1>
          <p className="mt-4 text-blue-100/90 leading-relaxed">
            Full‑stack developer focused on building delightful, performant web experiences.
            I turn ideas into scalable products with modern JavaScript, Python, and cloud‑native tools.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#projects" className="px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors">View Projects</a>
            <a href="#contact" className="px-5 py-3 rounded-lg border border-blue-400/40 text-blue-200 hover:border-blue-300/80 hover:text-white transition-colors">Contact</a>
          </div>
          <div className="mt-6 text-blue-200/70 text-sm">
            <p>JavaScript • TypeScript • React • Node.js • Python • FastAPI • MongoDB • Tailwind</p>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 border border-white/10 shadow-2xl" />
          <div className="absolute inset-0 -z-10 blur-3xl bg-blue-500/20 rounded-full" />
        </div>
      </div>
    </section>
  )
}
