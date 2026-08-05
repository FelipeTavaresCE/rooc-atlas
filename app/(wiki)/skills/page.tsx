import { PlaceholderSection } from '@/components/wiki/placeholder-section'
import { PageHero } from '@/components/wiki/page-hero'

export default function SkillsPage() {
  return (
    <div className="space-y-6">
      <PageHero
        eyebrow="Placeholder"
        title="Skills"
        description="This page is structured and ready for verified skills content once production game data is available."
      />
      <PlaceholderSection
        title="Skills planning"
        description="Use this area for curated skills references, recommendations, and update notes after verification."
      />
    </div>
  )
}
