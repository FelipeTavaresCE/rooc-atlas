import type { ReactNode } from 'react'

import type { Metadata } from 'next'

import { metadata as siteMetadata } from '@/app/metadata'
import { AppShell } from '@/components/layout/app-shell'

import './globals.css'

export const metadata: Metadata = siteMetadata

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
