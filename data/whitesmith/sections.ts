import { BookOpen, Shield, Sparkles, Sword, Target, Wand2 } from 'lucide-react'

import type { WikiPageSection } from '@/types/wiki'

export const whitesmithSections: WikiPageSection[] = [
  {
    type: 'placeholder',
    title: 'Build Philosophy',
    badge: 'draft',
    description:
      'Structured placeholder reserved for the validated high-level identity, goals, and intended role of the build.',
    placeholderTitle: 'Validated build philosophy coming soon',
    placeholderDescription:
      'This section is intentionally limited to a premium placeholder until the Whitesmith overview principles, trade-offs, and decision framing are fully validated.',
  },
  {
    type: 'cards',
    title: 'Playstyle',
    badge: 'confirmed',
    description:
      'Reusable cards prepared for future validated descriptions of the build’s execution profile.',
    items: [
      {
        title: 'Burst Damage',
        icon: Sword,
        description:
          'Validated burst patterns and damage windows will be documented here.',
      },
      {
        title: 'Mobility',
        icon: Wand2,
        description:
          'Movement decisions, gap management, and map flow notes will be added after validation.',
      },
      {
        title: 'Positioning',
        icon: Target,
        description:
          'Future guidance for angle control, frontline distance, and safe setup points belongs here.',
      },
      {
        title: 'Timing',
        icon: Sparkles,
        description:
          'Cooldown syncing, commitment windows, and tempo cues will be inserted once verified.',
      },
      {
        title: 'Survivability',
        icon: Shield,
        description:
          'Confirmed defensive habits, fallback plans, and sustain checkpoints will live in this card.',
      },
    ],
  },
  {
    type: 'timeline',
    title: 'Progression',
    badge: 'confirmed',
    description:
      'Responsive timeline structure for validated milestones spanning the full build lifecycle.',
    items: [
      {
        title: 'Early Game',
        description:
          'Placeholder for the first validated progression checkpoints, goals, and unlock order.',
      },
      {
        title: 'Mid Game',
        description:
          'Placeholder for the next layer of power spikes, upgrades, and transition milestones.',
      },
      {
        title: 'Late Game',
        description:
          'Placeholder for refined progression targets and advanced optimization checkpoints.',
      },
      {
        title: 'End Game',
        description:
          'Placeholder for final investment goals, premium polish, and future-proof endgame guidance.',
      },
    ],
  },
  {
    type: 'priorities',
    title: 'Investment Priority',
    badge: 'confirmed',
    description:
      'Responsive priority slots that can later receive validated rationale without changing the ordering layout.',
    items: [
      'Weapon',
      'Equipment',
      'Cards',
      'Enchantments',
      'Medals',
      'Feathers',
      'Astrocore',
      'Pets',
    ],
  },
  {
    type: 'list',
    title: 'Common Mistakes',
    badge: 'draft',
    description:
      'Reusable list structure reserved for confirmed pitfalls and correction notes.',
    listTitle: 'Validation placeholders',
    items: [
      'Placeholder for a validated mistake that will explain a frequent decision trap.',
      'Placeholder for a confirmed execution issue that should be avoided during progression.',
      'Placeholder for a future positioning or timing error once the recommendation is verified.',
    ],
  },
  {
    type: 'reading',
    title: 'Recommended Reading',
    badge: 'confirmed',
    description:
      'Navigation cards that connect this overview to the next validated guide modules.',
    items: [
      {
        title: 'Skills',
        description:
          'Open the future skill module once validated priorities and usage notes are ready.',
        href: '/skills',
        icon: BookOpen,
      },
      {
        title: 'Equipment',
        description:
          'Jump to the equipment section for upcoming slot-by-slot progression references.',
        href: '/equipment',
        icon: Shield,
      },
      {
        title: 'Cards',
        description:
          'Visit the cards page for future card path validation and structured placeholders.',
        href: '/cards',
        icon: Sword,
      },
      {
        title: 'Enchantments',
        description:
          'Review the enchantments module when validated optimization paths are published.',
        href: '/enchantments',
        icon: Sparkles,
      },
    ],
  },
]
