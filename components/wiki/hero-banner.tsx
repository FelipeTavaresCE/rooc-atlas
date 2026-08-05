'use client'

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'
import { StatusBadge } from '@/components/wiki/status-badge'

type HeroBannerProps = {
  /** Small label shown above the title, e.g. "Class Wiki" */
  eyebrow: string
  title: string
  description?: string
  /** Optional status badge variant */
  status?: 'active' | 'wip' | 'planned' | 'deprecated' | 'draft'
  /** Override the label of the status badge */
  statusLabel?: string
  /** Optional action buttons or other content rendered below the description */
  actions?: ReactNode
  className?: string
}

export function HeroBanner({ eyebrow, title, description, status, statusLabel, actions, className }: HeroBannerProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <Card className={cn('space-y-4', className)}>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">{eyebrow}</p>
          {status && <StatusBadge status={status} label={statusLabel} />}
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold text-[var(--card-foreground)] md:text-4xl">{title}</h1>
          {description && <p className="max-w-3xl text-sm leading-7 text-[var(--muted)] md:text-base">{description}</p>}
        </div>
        {actions && <div className="flex flex-wrap gap-2 pt-1">{actions}</div>}
      </Card>
    </motion.div>
  )
}
