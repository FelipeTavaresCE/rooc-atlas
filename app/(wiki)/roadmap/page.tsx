import { PlaceholderSection } from '@/components/wiki/placeholder-section'
import { PageHero } from '@/components/wiki/page-hero'

export default function RoadmapPage() {
  return (
    <div className="space-y-6">
      <PageHero
        eyebrow="Placeholder"
        title="Roadmap"
        description="This page is structured and ready for verified roadmap content once production game data is available."
      />
      <PlaceholderSection
        title="Roadmap planning"
        description="Use this area for curated roadmap references, recommendations, and update notes after verification."
      />
    </div>
  )
}
