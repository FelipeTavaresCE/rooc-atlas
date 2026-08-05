import { Hammer } from 'lucide-react'

import { Breadcrumb } from '@/components/wiki/breadcrumb'
import { HeroBanner } from '@/components/wiki/hero-banner'
import { InfoCard } from '@/components/wiki/info-card'
import { PageContainer } from '@/components/wiki/page-container'
import { RatingCard } from '@/components/wiki/rating-card'
import { StatusBadge } from '@/components/wiki/status-badge'
import { WikiSection } from '@/components/wiki/wiki-section'

export default function WhitesmithPage() {
  return (
    <PageContainer>
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Classes' }, { label: 'Whitesmith' }]} />

      <HeroBanner
        eyebrow="Class Wiki"
        title="Whitesmith"
        description="Track the core Whitesmith knowledge base here, including future build paths, equipment targets, progression systems, and matchup planning once validated game data is ready."
        status="wip"
      />

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

      <div className="grid gap-4 md:grid-cols-3">
        <InfoCard
          title="Weapon Mastery"
          icon={Hammer}
          description="Primary weapon type and mastery notes will appear here once validated."
          badge={<StatusBadge status="planned" />}
        />
        <InfoCard
          title="Party Role"
          description="Party utility and support capabilities for the Whitesmith class."
          badge={<StatusBadge status="wip" />}
        />
        <InfoCard
          title="Solo Viability"
          description="Solo grinding and farming potential across key content tiers."
          badge={<StatusBadge status="planned" />}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <RatingCard
          title="Overall Strength"
          rating={0}
          ratingLabel="TBD"
          description="Rating pending validated game data."
        />
        <RatingCard
          title="Ease of Play"
          rating={0}
          ratingLabel="TBD"
          description="Difficulty assessment pending validated game data."
        />
      </div>
    </PageContainer>
  )
}
