'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { navigationItems } from '@/data/navigation'
import { cn } from '@/lib/utils'

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-full border-b border-white/10 bg-slate-950/70 md:sticky md:top-0 md:h-screen md:w-72 md:border-b-0 md:border-r">
      <div className="flex h-full flex-col p-4 md:p-6">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">ROOC Atlas</p>
          <h2 className="mt-2 text-xl font-semibold text-white">Whitesmith Companion</h2>
        </div>
        <nav aria-label="Primary" className="grid gap-2 md:overflow-y-auto">
          {navigationItems.map(({ href, icon: Icon, title }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  'flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-300 transition hover:bg-slate-900/80 hover:text-white',
                  active && 'bg-blue-500/15 text-white ring-1 ring-blue-400/30',
                )}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                <span>{title}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
