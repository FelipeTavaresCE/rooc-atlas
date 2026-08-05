import { PlaceholderSection } from '@/components/wiki/placeholder-section'
import { PageHero } from '@/components/wiki/page-hero'

export default function BuildPage() {
  return (
    <div className="space-y-6">
      <PageHero
        eyebrow="Placeholder"
        title="Build"
        description="This page is structured and ready for verified build content once production game data is available."
      />
      <PlaceholderSection
        title="Build planning"
        description="Use this area for curated build references, recommendations, and update notes after verification."
      />
    </div>
  )
}
