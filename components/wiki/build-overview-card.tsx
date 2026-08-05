import type { LucideIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'

type BuildOverviewCardProps = {
  title: string
  description: string
  icon?: LucideIcon
  className?: string
}

export function BuildOverviewCard({ title, description, icon: Icon, className }: BuildOverviewCardProps) {
  return (
    <Card className={cn('flex h-full flex-col gap-3', className)}>
      <div className="flex items-center gap-2">
        {Icon && <Icon className="size-4 shrink-0 text-[var(--primary)]" aria-hidden />}
        <h3 className="text-base font-semibold text-[var(--card-foreground)]">{title}</h3>
      </div>
      <p className="text-sm leading-6 text-[var(--muted)]">{description}</p>
    </Card>
  )
}
