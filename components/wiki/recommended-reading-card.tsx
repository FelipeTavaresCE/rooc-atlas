import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'

type RecommendedReadingCardProps = {
  title: string
  description: string
  href: string
  icon?: LucideIcon
  className?: string
}

export function RecommendedReadingCard({
  title,
  description,
  href,
  icon: Icon,
  className,
}: RecommendedReadingCardProps) {
  return (
    <Link href={href} className="block h-full">
      <Card
        className={cn(
          'flex h-full flex-col gap-4 transition duration-200 hover:border-[var(--primary)]/40 hover:bg-white/8',
          className,
        )}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            {Icon && <Icon className="size-4 shrink-0 text-[var(--primary)]" aria-hidden />}
            <h3 className="text-base font-semibold text-[var(--card-foreground)]">{title}</h3>
          </div>
          <ArrowRight className="size-4 shrink-0 text-[var(--primary)]" aria-hidden />
        </div>
        <p className="text-sm leading-6 text-[var(--muted)]">{description}</p>
      </Card>
    </Link>
  )
}
