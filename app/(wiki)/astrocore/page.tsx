import { PlaceholderSection } from '@/components/wiki/placeholder-section'
import { PageHero } from '@/components/wiki/page-hero'

export default function AstrocorePage() {
  return (
    <div className="space-y-6">
      <PageHero
        eyebrow="Placeholder"
        title="Astrocore"
        description="This page is structured and ready for verified astrocore content once production game data is available."
      />
      <PlaceholderSection
        title="Astrocore planning"
        description="Use this area for curated astrocore references, recommendations, and update notes after verification."
      />
    </div>
  )
}
