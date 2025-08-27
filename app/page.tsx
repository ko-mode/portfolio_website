import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'
import Education from '@/components/Education'

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

const skills = ['Python','C/C++','SQL','Pandas/NumPy/Polars','XGBoost','Git']

const experience = [
  {
    role: 'Quantitative Finance Vice President',
    date: '2025',
    summary: 'Led factor screen; built a small backtest framework; hosted bootcamp.'
  },
  {
    role: 'Student Council — Secretary',
    date: '2024',
    summary: 'Coordinated events; automated comms; improved response time by 40%.'
  }
]

/* --- Education data (top-level accordion; Year 1/2 nested) --- */
const education = [
  {
    degree: "BSc Mathematics & Computer Science",
    institution: "University of Birmingham",
    period: "Sep 2024 — Present",
    location: "Birmingham, United Kingdom",
    years: [
      {
        label: "Year 1",
        modules: [
          "Vectors, Geometry and Linear Algebra",
          "Object-Oriented Programming",
          "Real Analysis",
          "Computer Systems & Professional Practice",
          "Probability & Statistics",
          "Data Structures and Algorithms",
          "Mechanics"
        ]
      },
      {
        label: "Year 2",
        modules: [
          "Algebra & Combinatorics 1",
          "Databases & Web Programming",
          "Linear Algebra & Linear Programming",
          "Functional Programming",
          "Statistics",
          "Security & Networks"
        ]
      }
    ]
  },
  {
    degree: "Summer School",
    institution: "University College London",
    period: "Jun 2025 — Aug 2025",
    location: "London, United Kingdom",
    modules: [
      "Mathematics for Machine Learning",
      "Mathematical Finance"
    ]
  }
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="container py-24">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Hi! My name is Komut.</h1>
        <p className="mt-3 text-lg max-w-2xl text-[color:var(--muted)]">
          2nd-year Maths & Computer Science @ University of Birmingham
        </p>
      </section>

      {/* Education (accordion) */}
      <Education items={education} />

      {/* About & Skills */}
      <section id="about" className="container py-8">
        <h2 className="text-2xl md:text-3xl font-semibold">About</h2>
        <p className="mt-2 max-w-2xl text-[color:var(--muted)]">
          2nd-year Maths & CS Student @ University of Birmingham
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
            <li key={e.role} className="text-muted">
              <strong className="text-main">{e.role}</strong> ({e.date}) — {e.summary}
            </li>
          ))}
        </ul>
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

      {/* Contact */}
      <section id="contact" className="container py-8">
        <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
        <ul className="mt-3 list-disc pl-6 space-y-1 text-[color:var(--muted)]">
          <li>
            Email: <a className="underline" href="mailto:you@email.com">you@email.com</a>
          </li>
          <li>
            GitHub: <a className="underline" href="https://github.com/youruser" target="_blank" rel="noreferrer">youruser</a>
          </li>
          <li>
            LinkedIn: <a className="underline" href="https://www.linkedin.com/in/youruser" target="_blank" rel="noreferrer">youruser</a>
          </li>
        </ul>
      </section>
    </>
  )
}
