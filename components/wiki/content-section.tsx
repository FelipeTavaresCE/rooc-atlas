import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type ContentSectionProps = {
  children: ReactNode
  /** Vertical padding size */
  spacing?: 'sm' | 'md' | 'lg'
  /** Background visual variant */
  background?: 'none' | 'card' | 'subtle'
  /** Content container max-width */
  width?: 'default' | 'wide' | 'narrow'
  className?: string
}

export function ContentSection({ children, spacing = 'md', background = 'none', width = 'default', className }: ContentSectionProps) {
  return (
    <section
      className={cn(
        'w-full',
        spacing === 'sm' && 'py-4',
        spacing === 'md' && 'py-6',
        spacing === 'lg' && 'py-10',
        background === 'card' && 'rounded-2xl border border-white/10 bg-[var(--card)] backdrop-blur',
        background === 'subtle' && 'rounded-2xl bg-white/5',
        className,
      )}
    >
      <div
        className={cn(
          'mx-auto',
          width === 'narrow' && 'max-w-3xl',
          width === 'default' && 'max-w-5xl',
          width === 'wide' && 'max-w-7xl',
          (background === 'card' || background === 'subtle') && 'px-6',
        )}
      >
        {children}
      </div>
    </section>
  )
}
