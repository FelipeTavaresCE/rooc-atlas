import type { LucideIcon } from 'lucide-react'

// ── Status ────────────────────────────────────────────────────────────────────

export type WikiStatus =
  | 'active'
  | 'wip'
  | 'planned'
  | 'deprecated'
  | 'draft'
  | 'confirmed'
  | 'consensus'
  | 'experimental'

// ── Attribute cards (the rating grid) ────────────────────────────────────────

export type WikiAttribute = {
  title: string
  value: string
  icon: LucideIcon
  description: string
}

// ── Generic text section ──────────────────────────────────────────────────────

export type WikiTextSection = {
  title: string
  body: string[]
  badge?: WikiStatus
}

// ── Roadmap milestone ─────────────────────────────────────────────────────────

export type WikiRoadmapMilestone = {
  label: string
  status: WikiStatus
  description: string
}

export type WikiRoadmap = {
  title: string
  badge?: WikiStatus
  milestones: WikiRoadmapMilestone[]
}

// ── Hero / banner ─────────────────────────────────────────────────────────────

export type WikiHero = {
  eyebrow: string
  title: string
  subtitle?: string
  description: string
  status: 'active' | 'wip' | 'planned' | 'deprecated' | 'draft'
  badges?: Array<{ label: string; variant?: WikiStatus }>
  backgroundVariant?: 'default' | 'glow' | 'subtle'
}

// ── Overview (text + attributes) ─────────────────────────────────────────────

export type WikiOverview = {
  sections: WikiTextSection[]
  attributes: WikiAttribute[]
}

// ── Full page model ───────────────────────────────────────────────────────────

export type WikiPage = {
  hero: WikiHero
  overview: WikiOverview
  roadmap: WikiRoadmap
}
