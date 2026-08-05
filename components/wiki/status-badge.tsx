import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const statusBadgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide',
  {
    variants: {
      status: {
        active: 'bg-green-500/15 text-green-400 ring-1 ring-green-500/30',
        wip: 'bg-yellow-500/15 text-yellow-400 ring-1 ring-yellow-500/30',
        planned: 'bg-blue-500/15 text-blue-400 ring-1 ring-blue-500/30',
        deprecated: 'bg-red-500/15 text-red-400 ring-1 ring-red-500/30',
        draft: 'bg-slate-500/15 text-slate-400 ring-1 ring-slate-500/30',
      },
    },
    defaultVariants: {
      status: 'draft',
    },
  },
)

type StatusBadgeProps = {
  label?: string
  className?: string
} & VariantProps<typeof statusBadgeVariants>

const defaultLabels: Record<NonNullable<VariantProps<typeof statusBadgeVariants>['status']>, string> = {
  active: 'Active',
  wip: 'In Progress',
  planned: 'Planned',
  deprecated: 'Deprecated',
  draft: 'Draft',
}

export function StatusBadge({ status = 'draft', label, className }: StatusBadgeProps) {
  return (
    <span className={cn(statusBadgeVariants({ status }), className)}>
      {label ?? defaultLabels[status!]}
    </span>
  )
}
