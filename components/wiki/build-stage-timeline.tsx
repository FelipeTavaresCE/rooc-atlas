import { Zap } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'

type TimelineStage = {
  title: string
  description: string
}

type BuildStageTimelineProps = {
  stages: readonly TimelineStage[]
  className?: string
}

export function BuildStageTimeline({ stages, className }: BuildStageTimelineProps) {
  return (
    <div className={cn('grid gap-4 md:grid-cols-2 xl:grid-cols-4', className)}>
      {stages.map((stage, index) => (
        <Card key={stage.title} className="relative flex h-full flex-col gap-4 overflow-hidden">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
              Stage {index + 1}
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 p-2 text-[var(--primary)]">
              <Zap className="size-4" aria-hidden />
            </span>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-[var(--card-foreground)]">{stage.title}</h3>
            <p className="text-sm leading-6 text-[var(--muted)]">{stage.description}</p>
          </div>
          {index < stages.length - 1 && (
            <div
              aria-hidden
              className="pointer-events-none absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-[var(--primary)]/40 via-white/10 to-transparent md:top-8 md:right-[-1rem] md:left-auto md:h-px md:w-4 xl:top-1/2 xl:w-8"
            />
          )}
        </Card>
      ))}
    </div>
  )
}
