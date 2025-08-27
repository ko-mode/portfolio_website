'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

type Year = { label: string; modules: string[] }
type Edu = {
  degree: string
  institution: string
  period: string
  location: string
  years?: Year[]
  modules?: string[] // for short entries like a summer school
}

export default function Education({ items }: { items: Edu[] }) {
  // open first item by default (set to null if you want all collapsed)
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section id="education" className="container py-8">
      <h2 className="text-2xl md:text-3xl font-semibold">Education</h2>

      <div className="mt-4 space-y-4">
        {items.map((e, idx) => {
          const isOpen = openIdx === idx
          return (
            <article key={e.degree} className="card p-4">
              {/* Top row (click to open/close) */}
              <button
                className="w-full flex items-start md:items-center justify-between gap-3 text-left"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                aria-expanded={isOpen}
              >
                <div>
                  <h3 className="font-semibold">{e.degree}</h3>
                  <p className="text-[color:var(--muted)]">{e.institution}</p>
                </div>

                <div className="flex flex-col text-sm text-[color:var(--muted)] md:items-end md:text-right leading-snug shrink-0">
                  <span>{e.period}</span>
                  <span>{e.location}</span>
                </div>

                <ChevronDown
                  size={18}
                  className={`mt-1 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Body */}
              {isOpen && (
                <div className="mt-3 space-y-3">
                  {/* Per-year dropdowns */}
                  {e.years?.map((y) => (
                    <details key={y.label} className="group card p-4">
                      <summary className="flex items-center justify-between cursor-pointer select-none">
                        <span className="font-semibold">{y.label}</span>
                        <ChevronDown className="transition-transform group-open:rotate-180" size={18} />
                      </summary>
                      <ul className="mt-3 grid gap-1 md:grid-cols-2 list-disc pl-6 text-[color:var(--muted)]">
                        {y.modules.map((m) => <li key={m}>{m}</li>)}
                      </ul>
                    </details>
                  ))}

                  {/* Flat modules list (for entries without years) */}
                  {e.modules?.length ? (
                    <ul className="grid gap-1 md:grid-cols-2 list-disc pl-6 text-[color:var(--muted)]">
                      {e.modules.map((m) => <li key={m}>{m}</li>)}
                    </ul>
                  ) : null}
                </div>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}
