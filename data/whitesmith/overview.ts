import { ChartBar, Coins, Shield, Swords, TrendingUp, Trophy } from 'lucide-react'

import type { WikiOverview } from '@/types/wiki'

export const whitesmithOverview: WikiOverview = {
  sections: [
    {
      title: 'Class Overview',
      badge: 'wip',
      body: [
        'Core role, stat priorities, and content suitability will be documented here once game data is verified.',
        'Content placeholder: production game data and verified recommendations will be added here.',
      ],
    },
    {
      title: 'Progression Priorities',
      body: [
        'Reserve this section for milestone planning across gear, systems, and party utility.',
        'Content placeholder: production game data and verified recommendations will be added here.',
      ],
    },
  ],
  attributes: [
    {
      title: 'PvP',
      value: '—',
      icon: Swords,
      description: 'PvP viability rating pending validated data.',
    },
    {
      title: 'WoE',
      value: '—',
      icon: Shield,
      description: 'War of Emperium performance rating pending.',
    },
    {
      title: 'MVP',
      value: '—',
      icon: Trophy,
      description: 'MVP hunting effectiveness pending data.',
    },
    {
      title: 'Farm',
      value: '—',
      icon: TrendingUp,
      description: 'Farm efficiency rating pending data.',
    },
    {
      title: 'Difficulty',
      value: '—',
      icon: ChartBar,
      description: 'Ease of play assessment pending data.',
    },
    {
      title: 'Investment',
      value: '—',
      icon: Coins,
      description: 'Gear cost curve pending data.',
    },
  ],
}
