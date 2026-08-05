'use client'

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'
import { StatusBadge } from '@/components/wiki/status-badge'

type HeroBannerBadge = {
  label: string
  variant?: 'active' | 'wip' | 'planned' | 'deprecated' | 'draft' | 'confirmed' | 'consensus' | 'experimental'
}

type HeroBannerProps = {
  /** Small label shown above the title, e.g. "Class Wiki" */
  eyebrow: string
  title: string
  /** Optional subtitle rendered below the title */
  subtitle?: string
  description?: string
  /** Optional status badge variant (single badge shorthand) */
  status?: 'active' | 'wip' | 'planned' | 'deprecated' | 'draft'
  /** Override the label of the status badge */
  statusLabel?: string
  /** Multiple status/info badges rendered in the header row */
  badges?: HeroBannerBadge[]
  /** Optional CTA rendered below the description */
  cta?: ReactNode
  /** Optional action buttons or other content rendered below the description */
  actions?: ReactNode
  /** Background visual variant */
  backgroundVariant?: 'default' | 'glow' | 'subtle'
  className?: string
}

export function HeroBanner({
  eyebrow,
  title,
  subtitle,
  description,
  status,
  statusLabel,
  badges,
  cta,
  actions,
  backgroundVariant = 'default',
  className,
}: HeroBannerProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <Card
        className={cn(
          'relative overflow-hidden space-y-4',
          backgroundVariant === 'glow' && 'shadow-[0_0_80px_rgba(96,165,250,0.12)]',
          backgroundVariant === 'subtle' && 'bg-white/5',
          className,
        )}
      >
        {backgroundVariant === 'glow' && (
          <div
            aria-hidden
            className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"
          />
        )}

        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">{eyebrow}</p>
          <div className="flex flex-wrap items-center gap-1.5">
            {status && <StatusBadge status={status} label={statusLabel} />}
            {badges?.map((b) => (
              <StatusBadge key={b.label} status={b.variant ?? 'draft'} label={b.label} />
            ))}
          </div>
        </div>

        <div className="space-y-1.5">
          <h1 className="text-3xl font-semibold text-[var(--card-foreground)] md:text-4xl">{title}</h1>
          {subtitle && <p className="text-base font-medium text-[var(--primary)]">{subtitle}</p>}
          {description && <p className="max-w-3xl text-sm leading-7 text-[var(--muted)] md:text-base">{description}</p>}
        </div>

        {(cta || actions) && (
          <div className="flex flex-wrap gap-2 pt-1">
            {cta}
            {actions}
          </div>
        )}
      </Card>
    </motion.div>
  )
}
