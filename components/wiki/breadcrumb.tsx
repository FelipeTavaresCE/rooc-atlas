import Link from 'next/link'

import { cn } from '@/lib/utils'

type BreadcrumbItem = {
  label: string
  href?: string
}

type BreadcrumbProps = {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('flex flex-wrap items-center gap-1.5 text-xs text-[var(--muted)]', className)}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <span key={item.label} className="flex items-center gap-1.5">
            {index > 0 && <span aria-hidden>/</span>}
            {item.href && !isLast ? (
              <Link href={item.href} className="hover:text-[var(--foreground)] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className={cn(isLast && 'text-[var(--foreground)]')} aria-current={isLast ? 'page' : undefined}>
                {item.label}
              </span>
            )}
          </span>
        )
      })}
    </nav>
  )
}
