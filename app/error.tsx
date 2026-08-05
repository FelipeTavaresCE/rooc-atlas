'use client'

import { useEffect } from 'react'

import { Button } from '@/components/ui/button'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-[50vh] flex-col items-start justify-center gap-4">
      <h1 className="text-2xl font-semibold text-white">Something went wrong</h1>
      <p className="max-w-xl text-sm text-slate-300">
        ROOC Atlas hit an unexpected issue while rendering this page. Please retry, and if the problem persists,
        investigate the affected route or data source.
      </p>
      <Button onClick={reset}>Try again</Button>
    </div>
  )
}
