import type { WikiPage } from '@/types/wiki'
import { whitesmithHero } from './attributes'
import { whitesmithOverview } from './overview'
import { whitesmithRoadmap } from './roadmap'
import { whitesmithSections } from './sections'

export const whitesmithPage: WikiPage = {
  hero: whitesmithHero,
  overview: whitesmithOverview,
  roadmap: whitesmithRoadmap,
  sections: whitesmithSections,
}
