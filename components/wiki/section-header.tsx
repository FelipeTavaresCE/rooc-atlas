import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { StatusBadge } from '@/components/wiki/status-badge'

type SectionHeaderProps = {
  title: string
  subtitle?: string
  /** StatusBadge variant to render next to the title */
  badge?: 'active' | 'wip' | 'planned' | 'deprecated' | 'draft' | 'confirmed' | 'consensus' | 'experimental'
  /** Custom badge label override */
  badgeLabel?: string
  description?: string
  /** Optional right-side content */
  action?: ReactNode
  className?: string
}

export function SectionHeader({ title, subtitle, badge, badgeLabel, description, action, className }: SectionHeaderProps) {
  return (
    <div className={cn('space-y-1', className)}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="text-xl font-semibold text-[var(--card-foreground)]">{title}</h2>
          {badge && <StatusBadge status={badge} label={badgeLabel} />}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
      {subtitle && <p className="text-sm font-medium text-[var(--primary)]">{subtitle}</p>}
      {description && <p className="text-sm leading-6 text-[var(--muted)]">{description}</p>}
    </div>
  )
}
