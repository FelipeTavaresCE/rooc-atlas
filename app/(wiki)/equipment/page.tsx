import { PlaceholderSection } from '@/components/wiki/placeholder-section'
import { PageHero } from '@/components/wiki/page-hero'

export default function EquipmentPage() {
  return (
    <div className="space-y-6">
      <PageHero
        eyebrow="Placeholder"
        title="Equipment"
        description="This page is structured and ready for verified equipment content once production game data is available."
      />
      <PlaceholderSection
        title="Equipment planning"
        description="Use this area for curated equipment references, recommendations, and update notes after verification."
      />
    </div>
  )
}
