import type { LucideIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'

type OverviewCardProps = {
  title: string
  /** Primary value or rating displayed prominently */
  value: string
  /** Icon from lucide-react */
  icon?: LucideIcon
  description?: string
  className?: string
}

export function OverviewCard({ title, value, icon: Icon, description, className }: OverviewCardProps) {
  return (
    <Card className={cn('flex flex-col gap-3', className)}>
      <div className="flex items-center gap-2">
        {Icon && <Icon className="size-4 shrink-0 text-[var(--primary)]" aria-hidden />}
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">{title}</p>
      </div>
      <p className="text-2xl font-bold text-[var(--card-foreground)]">{value}</p>
      {description && <p className="text-sm leading-6 text-[var(--muted)]">{description}</p>}
    </Card>
  )
}
