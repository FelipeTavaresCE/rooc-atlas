import type { WikiPage } from '@/types/wiki'
import { Breadcrumb } from '@/components/wiki/breadcrumb'
import { BuildOverviewCard } from '@/components/wiki/build-overview-card'
import { BuildStageTimeline } from '@/components/wiki/build-stage-timeline'
import { ContentSection } from '@/components/wiki/content-section'
import { HeroBanner } from '@/components/wiki/hero-banner'
import { InvestmentPriorityGrid } from '@/components/wiki/investment-priority-grid'
import { OverviewCard } from '@/components/wiki/overview-card'
import { PageContainer } from '@/components/wiki/page-container'
import { PlaceholderList } from '@/components/wiki/placeholder-list'
import { PlaceholderSection } from '@/components/wiki/placeholder-section'
import { RecommendedReadingCard } from '@/components/wiki/recommended-reading-card'
import { SectionHeader } from '@/components/wiki/section-header'
import { StatusBadge } from '@/components/wiki/status-badge'
import { WikiSection } from '@/components/wiki/wiki-section'
import { Card } from '@/components/ui/card'

type BreadcrumbItem = { label: string; href?: string }

type WikiPageRendererProps = {
  page: WikiPage
  breadcrumbs: BreadcrumbItem[]
}

export function WikiPageRenderer({ page, breadcrumbs }: WikiPageRendererProps) {
  const { hero, overview, roadmap } = page

  return (
    <PageContainer spacing="lg">
      <Breadcrumb items={breadcrumbs} />

      <HeroBanner
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.description}
        status={hero.status}
        badges={hero.badges}
        backgroundVariant={hero.backgroundVariant}
      />

      <ContentSection>
        <SectionHeader
          title={overview.sections[0]?.title ?? ''}
          badge={overview.sections[0]?.badge}
          description={
            typeof overview.sections[0]?.body[0] === 'string'
              ? overview.sections[0].body[0]
              : overview.sections[0]?.body[0]?.text
          }
        />
      </ContentSection>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {overview.attributes.map((attr) => (
          <OverviewCard
            key={attr.title}
            title={attr.title}
            value={attr.value}
            icon={attr.icon}
            description={attr.description}
          />
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {overview.sections.map((section) => (
          <WikiSection key={section.title} title={section.title}>
            {section.body.map((paragraph, i) => {
              const text =
                typeof paragraph === 'string' ? paragraph : paragraph.text
              const placeholder =
                typeof paragraph === 'string' ? false : paragraph.placeholder

              return (
                <p
                  key={i}
                  className={
                    placeholder
                      ? 'rounded-xl border border-dashed border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-400'
                      : 'text-sm leading-6 text-[var(--muted)]'
                  }
                >
                  {text}
                </p>
              )
            })}
          </WikiSection>
        ))}
      </div>

      <ContentSection>
        <SectionHeader
          title={roadmap.title}
          badge={roadmap.badge}
          description="Build paths will be listed here once verified."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {roadmap.milestones.map((milestone) => (
            <Card key={milestone.label} className="space-y-3">
              <StatusBadge status={milestone.status} />
              <h3 className="text-base font-semibold text-[var(--card-foreground)]">
                {milestone.label}
              </h3>
              <p className="text-sm leading-6 text-[var(--muted)]">
                {milestone.description}
              </p>
            </Card>
          ))}
        </div>
      </ContentSection>

      {page.sections?.map((section) => (
        <ContentSection key={section.title}>
          <SectionHeader
            title={section.title}
            badge={section.badge}
            description={section.description}
          />
          {section.type === 'placeholder' && (
            <PlaceholderSection
              title={section.placeholderTitle}
              description={section.placeholderDescription}
            />
          )}
          {section.type === 'cards' && (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {section.items.map((item) => (
                <BuildOverviewCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              ))}
            </div>
          )}
          {section.type === 'timeline' && (
            <BuildStageTimeline stages={section.items} />
          )}
          {section.type === 'priorities' && (
            <InvestmentPriorityGrid items={section.items} />
          )}
          {section.type === 'list' && (
            <PlaceholderList title={section.listTitle} items={section.items} />
          )}
          {section.type === 'reading' && (
            <div className="grid gap-4 sm:grid-cols-2">
              {section.items.map((item) => (
                <RecommendedReadingCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  href={item.href}
                  icon={item.icon}
                />
              ))}
            </div>
          )}
        </ContentSection>
      ))}
    </PageContainer>
  )
}
