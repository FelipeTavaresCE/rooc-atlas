import { Card } from '@/components/ui/card'

type PlaceholderSectionProps = {
  title: string
  description: string
}

export function PlaceholderSection({ title, description }: PlaceholderSectionProps) {
  return (
    <Card className="space-y-3">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="text-sm leading-6 text-slate-300">{description}</p>
      <p className="rounded-xl border border-dashed border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-400">
        Content placeholder: production game data and verified recommendations will be added here.
      </p>
    </Card>
  )
}
