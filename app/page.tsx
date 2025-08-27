import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'

export default function HomePage() {
  return (
    <>
      <section className="container py-24">
        <h1 className="text-4xl md:text-6xl font-bold">Hi, my name is Komut.</h1>
        <p className="mt-3 text-lg max-w-2xl text-[color:var(--muted)]">
          2nd year Maths & CS Student @ University of Birmingham
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="#projects" className="btn">View projects</Link>
          <a className="btn btn-ghost" href="mailto:tauchkomut06@gmail.com">Email me</a>
        </div>
      </section>

      <section id="projects" className="container py-8">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProjectCard
            title="The Spinning Raps!"
            img="/project1.png"
            alt="Backtesting dashboard"
            description="Vectorized Python backtester; 5-year sample, slippage modeled; Sharpe 1.3 OOS."
            links={[{ href: "#", label: "Code" }, { href: "#", label: "Write-up" }]}
          />
          <ProjectCard
            title="Realtime Market Data Pipeline"
            img="/project2.png"
            alt="System diagram"
            description="Kafka + FastAPI + Postgres; <120ms tick-to-feature latency; metrics + alerts."
            links={[{ href: "#", label: "Code" }, { href: "#", label: "Demo" }]}
          />
        </div>
      </section>
    </>
  )
}
