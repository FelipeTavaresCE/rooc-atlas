import { BookOpen, Shield, Sparkles, Sword, Target, Wand2 } from 'lucide-react'

import { Breadcrumb } from '@/components/wiki/breadcrumb'
import { BuildOverviewCard } from '@/components/wiki/build-overview-card'
import { BuildStageTimeline } from '@/components/wiki/build-stage-timeline'
import { ContentSection } from '@/components/wiki/content-section'
import { HeroBanner } from '@/components/wiki/hero-banner'
import { InvestmentPriorityGrid } from '@/components/wiki/investment-priority-grid'
import { PageContainer } from '@/components/wiki/page-container'
import { PlaceholderList } from '@/components/wiki/placeholder-list'
import { PlaceholderSection } from '@/components/wiki/placeholder-section'
import { RecommendedReadingCard } from '@/components/wiki/recommended-reading-card'
import { SectionHeader } from '@/components/wiki/section-header'

const playstyleCards = [
  { title: 'Burst Damage', icon: Sword, description: 'Validated burst patterns and damage windows will be documented here.' },
  { title: 'Mobility', icon: Wand2, description: 'Movement decisions, gap management, and map flow notes will be added after validation.' },
  { title: 'Positioning', icon: Target, description: 'Future guidance for angle control, frontline distance, and safe setup points belongs here.' },
  { title: 'Timing', icon: Sparkles, description: 'Cooldown syncing, commitment windows, and tempo cues will be inserted once verified.' },
  { title: 'Survivability', icon: Shield, description: 'Confirmed defensive habits, fallback plans, and sustain checkpoints will live in this card.' },
] as const

const progressionStages = [
  { title: 'Early Game', description: 'Placeholder for the first validated progression checkpoints, goals, and unlock order.' },
  { title: 'Mid Game', description: 'Placeholder for the next layer of power spikes, upgrades, and transition milestones.' },
  { title: 'Late Game', description: 'Placeholder for refined progression targets and advanced optimization checkpoints.' },
  { title: 'End Game', description: 'Placeholder for final investment goals, premium polish, and future-proof endgame guidance.' },
] as const

const investmentPriorities = ['Weapon', 'Equipment', 'Cards', 'Enchantments', 'Medals', 'Feathers', 'Astrocore', 'Pets'] as const

const commonMistakes = [
  'Placeholder for a validated mistake that will explain a frequent decision trap.',
  'Placeholder for a confirmed execution issue that should be avoided during progression.',
  'Placeholder for a future positioning or timing error once the recommendation is verified.',
] as const

const recommendedReading = [
  { title: 'Skills', description: 'Open the future skill module once validated priorities and usage notes are ready.', href: '/skills', icon: BookOpen },
  { title: 'Equipment', description: 'Jump to the equipment section for upcoming slot-by-slot progression references.', href: '/equipment', icon: Shield },
  { title: 'Cards', description: 'Visit the cards page for future card path validation and structured placeholders.', href: '/cards', icon: Sword },
  { title: 'Enchantments', description: 'Review the enchantments module when validated optimization paths are published.', href: '/enchantments', icon: Sparkles },
] as const

export default function WhitesmithPage() {
  return (
    <PageContainer spacing="lg">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Classes' }, { label: 'Whitesmith' }]} />

      <HeroBanner
        eyebrow="ROOC Atlas · Premium Class Guide"
        title="Whitesmith"
        subtitle="Build Overview"
        description="A premium overview shell for the Whitesmith build journey, ready to receive validated strategy, progression, and investment content without changing the page structure."
        status="draft"
        badges={[
          { label: 'Content Ready', variant: 'confirmed' },
          { label: 'Validation Pending', variant: 'planned' },
          { label: 'Reusable Layout', variant: 'confirmed' },
        ]}
        backgroundVariant="glow"
      />

      <ContentSection>
        <SectionHeader
          title="Build Philosophy"
          badge="draft"
          description="Structured placeholder reserved for the validated high-level identity, goals, and intended role of the build."
        />
        <PlaceholderSection
          title="Validated build philosophy coming soon"
          description="This section is intentionally limited to a premium placeholder until the Whitesmith overview principles, trade-offs, and decision framing are fully validated."
        />
      </ContentSection>

      <ContentSection>
        <SectionHeader
          title="Playstyle"
          badge="confirmed"
          description="Reusable cards prepared for future validated descriptions of the build’s execution profile."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {playstyleCards.map((item) => (
            <BuildOverviewCard key={item.title} title={item.title} description={item.description} icon={item.icon} />
          ))}
        </div>
      </ContentSection>

      <ContentSection>
        <SectionHeader
          title="Progression"
          badge="confirmed"
          description="Responsive timeline structure for validated milestones spanning the full build lifecycle."
        />
        <BuildStageTimeline stages={progressionStages} />
      </ContentSection>

      <ContentSection>
        <SectionHeader
          title="Investment Priority"
          badge="confirmed"
          description="Responsive priority slots that can later receive validated rationale without changing the ordering layout."
        />
        <InvestmentPriorityGrid items={investmentPriorities} />
      </ContentSection>

      <ContentSection>
        <SectionHeader
          title="Common Mistakes"
          badge="draft"
          description="Reusable list structure reserved for confirmed pitfalls and correction notes."
        />
        <PlaceholderList title="Validation placeholders" items={commonMistakes} />
      </ContentSection>

      <ContentSection>
        <SectionHeader
          title="Recommended Reading"
          badge="confirmed"
          description="Navigation cards that connect this overview to the next validated guide modules."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {recommendedReading.map((item) => (
            <RecommendedReadingCard
              key={item.title}
              title={item.title}
              description={item.description}
              href={item.href}
              icon={item.icon}
            />
          ))}
        </div>
      </ContentSection>
    </PageContainer>
  )
}
