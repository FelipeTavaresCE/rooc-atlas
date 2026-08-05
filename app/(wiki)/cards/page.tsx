import { PlaceholderSection } from '@/components/wiki/placeholder-section'
import { PageHero } from '@/components/wiki/page-hero'

export default function CardsPage() {
  return (
    <div className="space-y-6">
      <PageHero
        eyebrow="Placeholder"
        title="Cards"
        description="This page is structured and ready for verified cards content once production game data is available."
      />
      <PlaceholderSection
        title="Cards planning"
        description="Use this area for curated cards references, recommendations, and update notes after verification."
      />
    </div>
  )
}
