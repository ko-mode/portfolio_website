import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'

const projects = [
  {
    title: 'Intraday Mean-Reversion Backtester',
    img: '/project1.png',
    alt: 'Backtesting dashboard',
    description: 'Vectorized Python backtester; 5-year sample; slippage modeled; Sharpe 1.3 OOS.',
    tags: ['Python','Pandas','NumPy','Backtesting'],
    links: [{ href: '#', label: 'Code' }, { href: '#', label: 'Write-up' }]
  },
  {
    title: 'Realtime Market Data Pipeline',
    img: '/project2.png',
    alt: 'System diagram',
    description: 'Kafka + FastAPI + Postgres; <120ms tick-to-feature latency; metrics + alerts.',
    tags: ['Kafka','FastAPI','Postgres','Monitoring'],
    links: [{ href: '#', label: 'Code' }, { href: '#', label: 'Demo' }]
  }
]

const skills = ['Python','C/C++','SQL','Pandas/NumPy','Linux','Git']

const experience = [
  {
    role: 'Investment Fund — Quant Member',
    date: '2025',
    summary: 'Led factor screen; built a small backtest framework; hosted bootcamp.'
  },
  {
    role: 'Student Council — Secretary',
    date: '2024',
    summary: 'Coordinated events; automated comms; improved response time by 40%.'
  }
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="container py-24">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Hi, I’m Your Name.</h1>
        <p className="mt-3 text-lg max-w-2xl text-[color:var(--muted)]">
          Math & Computer Science @ University — building data-driven systems and quant strategies.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="#projects" className="btn">View projects</Link>
          <a className="btn btn-ghost" href="mailto:you@email.com">Email me</a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container py-8">
        <h2 className="text-2xl md:text-3xl font-semibold">Featured Projects</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map(p => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
        <div className="mt-4">
          <Link href="/projects" className="underline">See all projects</Link>
        </div>
      </section>

      {/* About & Skills */}
      <section id="about" className="container py-8">
        <h2 className="text-2xl md:text-3xl font-semibold">About</h2>
        <p className="mt-2 max-w-2xl text-[color:var(--muted)]">
          First-year Math & CS student. Interested in systematic trading, optimization, and low-latency systems.
        </p>
        <ul className="tags mt-3">
          {skills.map(s => <li key={s} className="tag">{s}</li>)}
        </ul>
      </section>

      {/* Experience & Leadership */}
      <section id="experience" className="container py-8">
        <h2 className="text-2xl md:text-3xl font-semibold">Experience & Leadership</h2>
        <ul className="mt-3 space-y-2">
          {experience.map(e => (
            <li key={e.role} className="text-[color:var(--muted)]">
              <strong className="text-white">{e.role}</strong> ({e.date}) — {e.summary}
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="container py-8">
        <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
        <p className="mt-2">
          Email: <a className="underline" href="mailto:you@email.com">you@email.com</a> ·
          {' '}GitHub: <a className="underline" href="https://github.com/youruser">youruser</a> ·
          {' '}LinkedIn: <a className="underline" href="https://www.linkedin.com/in/youruser">youruser</a>
        </p>

        {/* If deploying on Netlify, this form works out of the box. 
            On Vercel, use Formspree or an API route instead. */}
        <form name="contact" method="POST" data-netlify="true" className="mt-4 grid gap-2 max-w-lg">
          <input type="hidden" name="form-name" value="contact" />
          <input className="card p-3" name="name" placeholder="Your name" required />
          <input className="card p-3" type="email" name="email" placeholder="Your email" required />
          <textarea className="card p-3" name="message" placeholder="Your message" required />
          <button className="btn w-fit" type="submit">Send</button>
        </form>
      </section>
    </>
  )
}
