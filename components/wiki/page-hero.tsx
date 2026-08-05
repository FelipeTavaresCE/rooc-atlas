'use client'

import { motion } from 'framer-motion'

import { Card } from '@/components/ui/card'

type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <Card className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">{eyebrow}</p>
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold text-white md:text-4xl">{title}</h1>
          <p className="max-w-3xl text-sm leading-7 text-slate-300 md:text-base">{description}</p>
        </div>
      </Card>
    </motion.div>
  )
}
