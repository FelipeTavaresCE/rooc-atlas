import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'
import { SectionTitle } from '@/components/wiki/section-title'

type WikiSectionProps = {
  title?: string
  children: ReactNode
  className?: string
  /** Render as a plain div instead of a Card */
  bare?: boolean
}

export function WikiSection({ title, children, className, bare = false }: WikiSectionProps) {
  if (bare) {
    return (
      <div className={cn('space-y-4', className)}>
        {title && <SectionTitle>{title}</SectionTitle>}
        {children}
      </div>
    )
  }

  return (
    <Card className={cn('space-y-4', className)}>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </Card>
  )
}
