import { PlaceholderSection } from '@/components/wiki/placeholder-section'
import { PageHero } from '@/components/wiki/page-hero'

export default function FeathersPage() {
  return (
    <div className="space-y-6">
      <PageHero
        eyebrow="Placeholder"
        title="Feathers"
        description="This page is structured and ready for verified feathers content once production game data is available."
      />
      <PlaceholderSection
        title="Feathers planning"
        description="Use this area for curated feathers references, recommendations, and update notes after verification."
      />
    </div>
  )
}
