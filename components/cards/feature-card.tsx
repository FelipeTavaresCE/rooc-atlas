import { Card } from '@/components/ui/card'

type FeatureCardProps = {
  title: string
  description: string
}

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <Card className="space-y-3">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm leading-6 text-slate-300">{description}</p>
    </Card>
  )
}
