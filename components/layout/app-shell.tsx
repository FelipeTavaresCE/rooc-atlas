import type { ReactNode } from 'react'

import { Footer } from '@/components/layout/footer'
import { Sidebar } from '@/components/layout/sidebar'
import { TopNav } from '@/components/layout/top-nav'

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen md:flex">
      <Sidebar />
      <div className="flex min-h-screen flex-1 flex-col">
        <TopNav />
        <main className="flex-1 px-4 py-6 md:px-8 md:py-8">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
