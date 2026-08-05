'use client'

import { WhitesmithHero } from '@/components/wiki/whitesmith/whitesmith-hero'
import { QuickOverviewCards } from '@/components/wiki/whitesmith/quick-overview-cards'
import { StrengthsSection } from '@/components/wiki/whitesmith/strengths-section'
import { WeaknessesSection } from '@/components/wiki/whitesmith/weaknesses-section'
import { RoadmapPreview } from '@/components/wiki/whitesmith/roadmap-preview'
import { WikiSectionsGrid } from '@/components/wiki/whitesmith/wiki-sections-grid'
import { LatestUpdates } from '@/components/wiki/whitesmith/latest-updates'

export default function WhitesmithPage() {
  return (
    <div className="space-y-12">
      <WhitesmithHero />
      <QuickOverviewCards />
      <div className="grid gap-8 lg:grid-cols-2">
        <StrengthsSection />
        <WeaknessesSection />
      </div>
      <RoadmapPreview />
      <WikiSectionsGrid />
      <LatestUpdates />
    </div>
  )
}
