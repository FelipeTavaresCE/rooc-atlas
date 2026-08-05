import { CheckCircle2, Coins, Shield, Skull, Swords, Target, TrendingUp, Trophy, Zap } from 'lucide-react'

import { Breadcrumb } from '@/components/wiki/breadcrumb'
import { ContentSection } from '@/components/wiki/content-section'
import { HeroBanner } from '@/components/wiki/hero-banner'
import { OverviewCard } from '@/components/wiki/overview-card'
import { PageContainer } from '@/components/wiki/page-container'
import { PlaceholderSection } from '@/components/wiki/placeholder-section'
import { SectionHeader } from '@/components/wiki/section-header'
import { WikiSection } from '@/components/wiki/wiki-section'

const quickOverview = [
  { title: 'PvP', value: 'A', icon: Swords, description: 'Strong pressure with ranged burst windows and utility uptime.' },
  { title: 'WoE', value: 'A+', icon: Shield, description: 'Reliable frontline breaker with great objective control presence.' },
  { title: 'MVP', value: 'S', icon: Trophy, description: 'High boss damage scaling with strong sustain and consistency.' },
  { title: 'Farm', value: 'A', icon: TrendingUp, description: 'Efficient map clears and good single-target fallback for elites.' },
  { title: 'Investment', value: 'High', icon: Coins, description: 'Shines with gear milestones; early performance is still solid.' },
  { title: 'Difficulty', value: 'Medium', icon: Target, description: 'Accessible baseline with meaningful optimization ceiling.' },
] as const

const strengths = [
  'Excellent single-target damage for MVP and mini-boss routes.',
  'Consistent contribution in WoE with pressure, disruption and objective threat.',
  'Scales hard with investment while keeping strong mid-game momentum.',
  'Flexible performance profile across farm, bossing and coordinated content.',
]

const weaknesses = [
  'Power spikes depend on key gear milestones and refinement targets.',
  'Positioning errors are punished heavily in high-pressure PvP/WoE fights.',
  'Resource and cooldown management becomes demanding in extended sessions.',
  'Can feel less impactful when undergeared compared to low-investment classes.',
]

const roadmap = [
  {
    phase: 'Early',
    items: [
      'Stabilize leveling and zeny flow with a farm-first route.',
      'Prioritize baseline survivability and core damage enablers.',
      'Build comfort with your main rotation and buff rhythm.',
    ],
  },
  {
    phase: 'Mid',
    items: [
      'Push first major damage breakpoint for MVP consistency.',
      'Start role specialization for PvP/WoE objectives.',
      'Optimize uptime windows and map routing efficiency.',
    ],
  },
  {
    phase: 'Late',
    items: [
      'Complete premium gear path and refinement goals.',
      'Fine-tune matchup plans for top-end PvP/WoE play.',
      'Maximize account-wide systems for final scaling layers.',
    ],
  },
] as const

const wikiNavigation = [
  { title: 'Build', description: 'Core archetypes, stat paths and role variants.', href: '/build' },
  { title: 'Skills', description: 'Priority skills, rotation logic and utility usage.', href: '/skills' },
  { title: 'Equipment', description: 'Slot-by-slot recommendations and upgrade order.', href: '/equipment' },
  { title: 'Cards', description: 'Best-in-slot and budget card progression picks.', href: '/cards' },
  { title: 'Enchantments', description: 'High-value enchant targets by progression stage.', href: '/enchantments' },
  { title: 'Feathers', description: 'Feather setup priorities for each game mode.', href: '/feathers' },
  { title: 'Astrocore', description: 'Astrocore milestones and stat conversion value.', href: '/astrocore' },
  { title: 'Pets', description: 'Companion options and synergy recommendations.', href: '/pets' },
  { title: 'Matchups', description: 'Threat matrix and playstyle adaptations by class.', href: '/matchups' },
] as const

export default function WhitesmithPage() {
  return (
    <PageContainer spacing="lg">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Classes' }, { label: 'Whitesmith' }]} />

      <HeroBanner
        eyebrow="ROOC Atlas · Premium Class Guide"
        title="Whitesmith"
        subtitle="MVP Breaker · Economy Engine · Siege Pressure"
        description="A polished, progression-first overview of Whitesmith focused on fast clarity for PvP, WoE, MVP and farming decisions."
        status="live"
        badges={[
          { label: 'MVP Ready', variant: 'confirmed' },
          { label: 'WoE Viable', variant: 'planned' },
          { label: 'Beginner Friendly', variant: 'planned' },
        ]}
        backgroundVariant="glow"
      />

      <ContentSection>
        <SectionHeader
          title="Quick Overview"
          badge="live"
          description="Snapshot ratings to help you evaluate where Whitesmith excels and how much investment it demands."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {quickOverview.map((item) => (
            <OverviewCard key={item.title} title={item.title} value={item.value} icon={item.icon} description={item.description} />
          ))}
        </div>
      </ContentSection>

      <div className="grid gap-4 md:grid-cols-2">
        <WikiSection title="Strengths">
          <ul className="space-y-3">
            {strengths.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm leading-6 text-[var(--muted)]">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-300" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </WikiSection>

        <WikiSection title="Weaknesses">
          <ul className="space-y-3">
            {weaknesses.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm leading-6 text-[var(--muted)]">
                <Skull className="mt-0.5 size-4 shrink-0 text-amber-300" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </WikiSection>
      </div>

      <ContentSection>
        <SectionHeader
          title="Progression Roadmap"
          badge="live"
          description="High-level route for account growth from first setup to endgame optimization."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {roadmap.map((stage) => (
            <WikiSection key={stage.phase} title={stage.phase}>
              <ul className="space-y-3">
                {stage.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-6 text-[var(--muted)]">
                    <Zap className="mt-0.5 size-4 shrink-0 text-cyan-300" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </WikiSection>
          ))}
        </div>
      </ContentSection>

      <ContentSection>
        <SectionHeader
          title="Wiki Navigation"
          badge="live"
          description="Jump to each guide module as they are expanded with full production data."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {wikiNavigation.map((item) => (
            <PlaceholderSection key={item.title} title={item.title} description={item.description} href={item.href} />
          ))}
        </div>
      </ContentSection>

      <PlaceholderSection
        title="FAQ"
        description="Answers for common Whitesmith questions will be published here, including build pivots, investment priorities and progression troubleshooting."
      />
    </PageContainer>
  )
}
