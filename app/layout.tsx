import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your Name – Portfolio',
  description: 'Math & CS student focusing on quantitative finance.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="container sticky top-0 backdrop-blur">
          <Nav />
        </header>
        <main>{children}</main>
        <footer className="container py-16 text-[color:var(--muted)] text-center">
          <small>© {new Date().getFullYear()} Your Name — Built with Next.js</small>
        </footer>
      </body>
    </html>
  )
}
