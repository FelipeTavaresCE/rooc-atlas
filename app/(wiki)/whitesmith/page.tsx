import { PlaceholderSection } from '@/components/wiki/placeholder-section'
import { PageHero } from '@/components/wiki/page-hero'

export default function WhitesmithPage() {
  return (
    <div className="space-y-6">
      <PageHero
        eyebrow="Class Wiki"
        title="Whitesmith"
        description="Track the core Whitesmith knowledge base here, including future build paths, equipment targets, progression systems, and matchup planning once validated game data is ready."
      />
      <div className="grid gap-4 md:grid-cols-2">
        <PlaceholderSection title="Class Overview" description="Reserve this section for validated Whitesmith role guidance, stat goals, and content priorities." />
        <PlaceholderSection title="Progression Priorities" description="Reserve this section for milestone planning across gear, systems, and party utility." />
      </div>
    </div>
  )
}
