import { PlaceholderSection } from '@/components/wiki/placeholder-section'
import { PageHero } from '@/components/wiki/page-hero'

export default function PetsPage() {
  return (
    <div className="space-y-6">
      <PageHero
        eyebrow="Placeholder"
        title="Pets"
        description="This page is structured and ready for verified pets content once production game data is available."
      />
      <PlaceholderSection
        title="Pets planning"
        description="Use this area for curated pets references, recommendations, and update notes after verification."
      />
    </div>
  )
}
