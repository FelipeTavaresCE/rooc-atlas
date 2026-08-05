import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type PageContainerProps = {
  children: ReactNode
  /** Vertical spacing between children */
  spacing?: 'sm' | 'md' | 'lg'
  /** Max container width */
  width?: 'default' | 'wide' | 'narrow'
  className?: string
}

export function PageContainer({ children, spacing = 'md', width = 'default', className }: PageContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full',
        spacing === 'sm' && 'space-y-4',
        spacing === 'md' && 'space-y-6',
        spacing === 'lg' && 'space-y-10',
        width === 'narrow' && 'max-w-3xl',
        width === 'default' && 'max-w-5xl',
        width === 'wide' && 'max-w-7xl',
        className,
      )}
    >
      {children}
    </div>
  )
}
