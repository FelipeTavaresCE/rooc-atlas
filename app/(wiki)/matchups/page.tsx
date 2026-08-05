import { PlaceholderSection } from '@/components/wiki/placeholder-section'
import { PageHero } from '@/components/wiki/page-hero'

export default function MatchupsPage() {
  return (
    <div className="space-y-6">
      <PageHero
        eyebrow="Placeholder"
        title="Matchups"
        description="This page is structured and ready for verified matchups content once production game data is available."
      />
      <PlaceholderSection
        title="Matchups planning"
        description="Use this area for curated matchups references, recommendations, and update notes after verification."
      />
    </div>
  )
}
