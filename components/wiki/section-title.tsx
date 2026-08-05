import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type SectionTitleProps = {
  children: ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4'
}

export function SectionTitle({ children, className, as: Tag = 'h2' }: SectionTitleProps) {
  return (
    <Tag
      className={cn(
        'font-semibold leading-tight text-[var(--card-foreground)]',
        Tag === 'h1' && 'text-3xl md:text-4xl',
        Tag === 'h2' && 'text-xl',
        Tag === 'h3' && 'text-lg',
        Tag === 'h4' && 'text-base',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
