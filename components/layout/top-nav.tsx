import Link from 'next/link'

import { Button } from '@/components/ui/button'

export function TopNav() {
  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-slate-950/65 backdrop-blur">
      <div className="flex items-center justify-between gap-4 px-4 py-4 md:px-8">
        <div>
          <p className="text-sm font-semibold text-white">Production-ready ROOC Atlas</p>
          <p className="text-xs text-slate-400">Structured for scalable class, gear, and progression content.</p>
        </div>
        <Link href="/roadmap">
          <Button variant="secondary">View roadmap</Button>
        </Link>
      </div>
    </header>
  )
}
