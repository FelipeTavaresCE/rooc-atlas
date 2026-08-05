import type { WikiPage } from '@/types/wiki'
import { Breadcrumb } from '@/components/wiki/breadcrumb'
import { ContentSection } from '@/components/wiki/content-section'
import { HeroBanner } from '@/components/wiki/hero-banner'
import { OverviewCard } from '@/components/wiki/overview-card'
import { PageContainer } from '@/components/wiki/page-container'
import { SectionHeader } from '@/components/wiki/section-header'
import { WikiSection } from '@/components/wiki/wiki-section'

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
          description={overview.sections[0]?.body[0]}
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
            {section.body.map((paragraph, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? 'text-sm leading-6 text-[var(--muted)]'
                    : 'rounded-xl border border-dashed border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-400'
                }
              >
                {paragraph}
              </p>
            ))}
          </WikiSection>
        ))}
      </div>

      <ContentSection>
        <SectionHeader title={roadmap.title} badge={roadmap.badge} description="Build paths will be listed here once verified." />
      </ContentSection>
    </PageContainer>
  )
}
