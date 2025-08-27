'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="flex items-center justify-between py-4">
      <Link href="#" className="font-bold">Your Name</Link>
      <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>☰</button>
      <div className={`md:flex gap-4 ${open ? 'block absolute right-4 top-14 card p-3' : 'hidden md:block'}`}>
        <Link href="#projects">Projects</Link>
        <Link href="#about">About</Link>
        <Link href="#experience">Experience</Link>
        <Link href="#contact">Contact</Link>
        <a className="btn md:ml-2" href="/Your_Resume.pdf">Résumé</a>
      </div>
    </nav>
  )
}
