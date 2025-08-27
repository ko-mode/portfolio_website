'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  // persist + init theme
  useEffect(() => {
    const el = document.documentElement
    const saved = localStorage.getItem('theme')
    el.dataset.theme =
      saved ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  }, [])

  const toggleTheme = () => {
    const el = document.documentElement
    const next = el.dataset.theme === 'dark' ? 'light' : 'dark'
    el.dataset.theme = next
    localStorage.setItem('theme', next)
  }

  return (
    <nav className="flex items-center gap-6 py-4">
      {/* left: brand */}
      <Link href="#" className="font-bold shrink-0">Home</Link>

      {/* hamburger (mobile only) */}
      <button
        className="md:hidden text-2xl ml-auto"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
      >
        ☰
      </button>

      {/* right: links + buttons (desktop) */}
      <div className="ml-auto hidden md:flex items-center gap-6">
        <Link href="#about">About</Link>
        <Link href="#experience">Experience</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
        <a className="btn" href="/Your_Resume.pdf">View CV</a>
        <button className="btn btn-ghost" onClick={toggleTheme}>Toggle theme</button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="absolute right-4 top-14 md:hidden card p-4 flex flex-col gap-3">
          <Link href="#about" onClick={() => setOpen(false)}>About</Link>
          <Link href="#experience" onClick={() => setOpen(false)}>Experience</Link>
          <Link href="#projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="#contact" onClick={() => setOpen(false)}>Contact</Link>
          <a className="btn" href="/Your_Resume.pdf" onClick={() => setOpen(false)}>View CV</a>
          <button className="btn btn-ghost" onClick={() => { toggleTheme(); setOpen(false) }}>
            Toggle theme
          </button>
        </div>
      )}
    </nav>
  )
}
