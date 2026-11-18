import { ArrowUpRight } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'

type InvestmentPriorityGridProps = {
  items: readonly string[]
  className?: string
}

export function InvestmentPriorityGrid({ items, className }: InvestmentPriorityGridProps) {
  return (
    <div className={cn('grid gap-3 sm:grid-cols-2 lg:grid-cols-4', className)}>
      {items.map((item, index) => (
        <Card key={item} className="flex h-full items-center justify-between gap-3">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Priority {index + 1}</p>
            <h3 className="text-base font-semibold text-[var(--card-foreground)]">{item}</h3>
          </div>
          <ArrowUpRight className="size-4 shrink-0 text-[var(--primary)]" aria-hidden />
        </Card>
      ))}
    </div>
  )
}
