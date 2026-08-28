'use client'

import { motion } from 'framer-motion'

export function SectionHeading({ label, title, text }: { label: string; title: string; text?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55 }}
      className="mb-10 max-w-3xl"
    >
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-cyber-red">{label}</p>
      <h2 className="text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-7 text-cyber-secondary sm:text-lg">{text}</p>}
    </motion.div>
  )
}
