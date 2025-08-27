import Image from 'next/image'
import Link from 'next/link'

type LinkItem = { href: string; label: string }

export default function ProjectCard({
  title, img, alt, description, links = []
}: {
  title: string
  img: string
  alt: string
  description: string
  links?: LinkItem[]
}) {
  return (
    <article className="card grid grid-cols-[160px,1fr] gap-3">
      <div className="relative h-28 w-full overflow-hidden rounded-xl">
        <Image src={img} alt={alt} fill className="object-cover" />
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-1 text-[color:var(--muted)]">{description}</p>
        <div className="mt-2 flex gap-3">
          {links.map(l => (
            <Link key={l.label} href={l.href} className="underline">{l.label}</Link>
          ))}
        </div>
      </div>
    </article>
  )
}
