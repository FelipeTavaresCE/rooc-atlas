import { Dot } from 'lucide-react'

import { Card } from '@/components/ui/card'

type PlaceholderListProps = {
  title: string
  items: readonly string[]
}

export function PlaceholderList({ title, items }: PlaceholderListProps) {
  return (
    <Card className="space-y-4">
      <h3 className="text-lg font-semibold text-[var(--card-foreground)]">{title}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm leading-6 text-[var(--muted)]">
            <Dot className="mt-0.5 size-5 shrink-0 text-[var(--primary)]" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}
