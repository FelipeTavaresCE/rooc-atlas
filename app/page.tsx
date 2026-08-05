import { FeatureCard } from '@/components/cards/feature-card'
import { PageHero } from '@/components/wiki/page-hero'

const features = [
  'Scalable app router structure for future classes and progression systems.',
  'Reusable layout and wiki components for consistent production delivery.',
  'Purposeful placeholders for verified ROOC content without fabricated data.',
]

export default function HomePage() {
  return (
    <div className="space-y-6">
      <PageHero
        eyebrow="Dashboard"
        title="ROOC Atlas starts with a production-ready Whitesmith foundation"
        description="This bootstrap provides the application shell, dark theme, SEO metadata, and reusable content scaffolding needed to grow a high-quality Ragnarok Origin Classic companion site."
      />
      <section className="grid gap-4 md:grid-cols-3">
        {features.map((description, index) => (
          <FeatureCard key={description} title={`Foundation ${index + 1}`} description={description} />
        ))}
      </section>
    </div>
  )
}
