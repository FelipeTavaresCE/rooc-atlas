import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'

type InfoCardProps = {
  title: string
  description?: string
  /** Optional icon from lucide-react */
  icon?: LucideIcon
  /** Optional badge/tag rendered after the title */
  badge?: ReactNode
  /** Optional action or footer content */
  footer?: ReactNode
  className?: string
}

export function InfoCard({ title, description, icon: Icon, badge, footer, className }: InfoCardProps) {
  return (
    <Card className={cn('flex flex-col gap-3', className)}>
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          {Icon && <Icon className="mt-0.5 size-4 shrink-0 text-[var(--primary)]" aria-hidden />}
          <h3 className="font-semibold text-[var(--card-foreground)]">{title}</h3>
        </div>
        {badge && <div className="shrink-0">{badge}</div>}
      </div>
      {description && <p className="text-sm leading-6 text-[var(--muted)]">{description}</p>}
      {footer && <div className="mt-auto pt-2">{footer}</div>}
    </Card>
  )
}
