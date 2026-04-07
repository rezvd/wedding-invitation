import type { ReactNode } from 'react'

type SectionCardProps = {
  title?: string
  children: ReactNode
  className?: string
}

function SectionCard({ title, children, className }: SectionCardProps) {
  return (
    <section className={`section-card ${className ?? ''}`.trim()}>
      {title ? <h2 className="section-title">{title}</h2> : null}
      {children}
    </section>
  )
}

export default SectionCard
