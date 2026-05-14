'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

export default function SectorHero({ d }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start','end start'] })
  const scale = useTransform(scrollYProgress, [0,1], [1, 1.15])
  const y = useTransform(scrollYProgress, [0,1], [0, 120])
  return (
    <section ref={ref} className="relative h-[88svh] min-h-[640px] w-full overflow-hidden bg-white">
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <img src={d.img} alt={d.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-white" />
        <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/40 via-transparent to-emerald2-500/10" />
      </motion.div>
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 pt-44 lg:pt-52">
        <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-white/90 hover:text-white glass rounded-full px-3 py-1.5">
          <ChevronLeft className="h-4 w-4" /> Back to overview
        </Link>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="mt-8 max-w-4xl">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-[11px] tracking-[0.25em] uppercase text-navy-800 font-mono-display">
            {d.tag}
          </div>
          <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5.5rem)] tracking-[-0.03em] leading-[0.98] text-white drop-shadow-lg">{d.title}</h1>
          <p className="mt-5 text-white/90 text-lg max-w-2xl drop-shadow-md">{d.sub}</p>
        </motion.div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
