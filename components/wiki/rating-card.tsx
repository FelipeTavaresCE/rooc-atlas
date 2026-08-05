import { Star } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'

type RatingCardProps = {
  title: string
  description?: string
  /** Rating value from 0 to max (default max = 5) */
  rating: number
  max?: number
  /** Label shown next to the stars, e.g. "S-Tier" */
  ratingLabel?: string
  className?: string
}

export function RatingCard({ title, description, rating, max = 5, ratingLabel, className }: RatingCardProps) {
  const clamped = Math.min(Math.max(rating, 0), max)

  return (
    <Card className={cn('flex flex-col gap-3', className)}>
      <h3 className="font-semibold text-[var(--card-foreground)]">{title}</h3>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-0.5" aria-label={`Rating: ${clamped} out of ${max}`} role="img">
          {Array.from({ length: max }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                'size-4',
                i < clamped ? 'fill-yellow-400 text-yellow-400' : 'fill-transparent text-slate-600',
              )}
              aria-hidden
            />
          ))}
        </div>
        {ratingLabel && <span className="text-xs font-semibold text-[var(--primary)]">{ratingLabel}</span>}
      </div>
      {description && <p className="text-sm leading-6 text-[var(--muted)]">{description}</p>}
    </Card>
  )
}
