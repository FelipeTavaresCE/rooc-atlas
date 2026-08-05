import type { WikiRoadmap } from '@/types/wiki'

export const whitesmithRoadmap: WikiRoadmap = {
  title: 'Recommended Builds',
  badge: 'planned',
  milestones: [
    {
      label: 'Axe Mastery Build',
      status: 'planned',
      description: 'High-damage physical build centered on two-handed axes and Cart Termination.',
    },
    {
      label: 'Forging Support',
      status: 'planned',
      description: 'Economy-focused path leveraging weapon forging and upgrade systems.',
    },
    {
      label: 'Full Support / Buff',
      status: 'planned',
      description: 'Party-utility build path using Adrenaline Rush and blacksmith buffs.',
    },
  ],
}
