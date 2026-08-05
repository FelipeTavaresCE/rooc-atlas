import {
  Axe,
  BookOpen,
  Bone,
  Compass,
  Gem,
  Hammer,
  Home,
  PawPrint,
  ScrollText,
  Shield,
  Sparkles,
  Swords,
} from 'lucide-react'

import type { NavigationItem } from '@/types/navigation'

export const navigationItems: NavigationItem[] = [
  { title: 'Home', href: '/', description: 'Project dashboard and direction.', icon: Home },
  {
    title: 'Whitesmith',
    href: '/whitesmith',
    description: 'Class overview, priorities, and future data sections.',
    icon: Hammer,
  },
  { title: 'Build', href: '/build', description: 'Future build recommendations.', icon: Compass },
  { title: 'Skills', href: '/skills', description: 'Skill priorities and rotations.', icon: BookOpen },
  {
    title: 'Equipment',
    href: '/equipment',
    description: 'Planned equipment references.',
    icon: Shield,
  },
  { title: 'Cards', href: '/cards', description: 'Card slot planning and notes.', icon: Axe },
  {
    title: 'Enchantments',
    href: '/enchantments',
    description: 'Enchant strategy placeholders.',
    icon: Sparkles,
  },
  {
    title: 'Feathers',
    href: '/feathers',
    description: 'Feather path placeholders.',
    icon: ScrollText,
  },
  {
    title: 'Astrocore',
    href: '/astrocore',
    description: 'Astrocore optimization placeholders.',
    icon: Gem,
  },
  { title: 'Medal', href: '/medal', description: 'Medal progression planning.', icon: Bone },
  { title: 'Pets', href: '/pets', description: 'Pet recommendations placeholder.', icon: PawPrint },
  {
    title: 'Matchups',
    href: '/matchups',
    description: 'PvE and PvP matchup planning.',
    icon: Swords,
  },
  { title: 'Roadmap', href: '/roadmap', description: 'Content release roadmap.', icon: ScrollText },
]
