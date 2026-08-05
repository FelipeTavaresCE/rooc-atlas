import { Hammer, Shield, Swords, Trophy, TrendingUp, Coins, ChartBar } from 'lucide-react'

import { Breadcrumb } from '@/components/wiki/breadcrumb'
import { ContentSection } from '@/components/wiki/content-section'
import { HeroBanner } from '@/components/wiki/hero-banner'
import { OverviewCard } from '@/components/wiki/overview-card'
import { PageContainer } from '@/components/wiki/page-container'
import { PlaceholderSection } from '@/components/wiki/placeholder-section'
import { SectionHeader } from '@/components/wiki/section-header'
import { WikiSection } from '@/components/wiki/wiki-section'

export default function WhitesmithPage() {
  return (
    <PageContainer spacing="lg">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Classes' }, { label: 'Whitesmith' }]} />

      <HeroBanner
        eyebrow="Class Wiki"
        title="Whitesmith"
        subtitle="Weapon Merchant — Blacksmith 3rd Class"
        description="Track the core Whitesmith knowledge base here, including future build paths, equipment targets, progression systems, and matchup planning once validated game data is ready."
        status="wip"
        badges={[{ label: 'Confirmed', variant: 'confirmed' }]}
        backgroundVariant="glow"
      />

      <ContentSection>
        <SectionHeader
          title="Class Overview"
          badge="wip"
          description="Core role, stat priorities, and content suitability will be documented here once game data is verified."
        />
      </ContentSection>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <OverviewCard title="PvP" value="—" icon={Swords} description="PvP viability rating pending validated data." />
        <OverviewCard title="WoE" value="—" icon={Shield} description="War of Emperium performance rating pending." />
        <OverviewCard title="MVP" value="—" icon={Trophy} description="MVP hunting effectiveness pending data." />
        <OverviewCard title="Farm" value="—" icon={TrendingUp} description="Farm efficiency rating pending data." />
        <OverviewCard title="Difficulty" value="—" icon={ChartBar} description="Ease of play assessment pending data." />
        <OverviewCard title="Investment" value="—" icon={Coins} description="Gear cost curve pending data." />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <WikiSection title="Class Overview">
          <p className="text-sm leading-6 text-[var(--muted)]">
            Reserve this section for validated Whitesmith role guidance, stat goals, and content priorities.
          </p>
          <p className="rounded-xl border border-dashed border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-400">
            Content placeholder: production game data and verified recommendations will be added here.
          </p>
        </WikiSection>

        <WikiSection title="Progression Priorities">
          <p className="text-sm leading-6 text-[var(--muted)]">
            Reserve this section for milestone planning across gear, systems, and party utility.
          </p>
          <p className="rounded-xl border border-dashed border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-400">
            Content placeholder: production game data and verified recommendations will be added here.
          </p>
        </WikiSection>
      </div>

      <ContentSection>
        <SectionHeader title="Recommended Builds" badge="planned" description="Build paths will be listed here once verified." />
      </ContentSection>

      <PlaceholderSection
        title="Equipment & Gear"
        description="Recommended equipment sets, weapon choices, and gearing priorities for each build path."
      />

      <PlaceholderSection
        title="Skills & Mechanics"
        description="Key active and passive skills, optimal usage patterns, and interaction notes with Whitesmith's core toolkit."
      />

      <PlaceholderSection
        title="Weapon Mastery"
        description="Primary weapon type and mastery notes. Covers weapon switching, refinement targets, and specialty equipment."
      />
    </PageContainer>
  )
}
