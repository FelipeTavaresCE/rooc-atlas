import { PlaceholderSection } from '@/components/wiki/placeholder-section'
import { PageHero } from '@/components/wiki/page-hero'

export default function EnchantmentsPage() {
  return (
    <div className="space-y-6">
      <PageHero
        eyebrow="Placeholder"
        title="Enchantments"
        description="This page is structured and ready for verified enchantments content once production game data is available."
      />
      <PlaceholderSection
        title="Enchantments planning"
        description="Use this area for curated enchantments references, recommendations, and update notes after verification."
      />
    </div>
  )
}
