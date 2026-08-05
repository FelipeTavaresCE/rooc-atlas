import { PlaceholderSection } from '@/components/wiki/placeholder-section'
import { PageHero } from '@/components/wiki/page-hero'

export default function MedalPage() {
  return (
    <div className="space-y-6">
      <PageHero
        eyebrow="Placeholder"
        title="Medal"
        description="This page is structured and ready for verified medal content once production game data is available."
      />
      <PlaceholderSection
        title="Medal planning"
        description="Use this area for curated medal references, recommendations, and update notes after verification."
      />
    </div>
  )
}
