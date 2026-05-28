'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function ProductsHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 180])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  return (
    <section ref={ref} className="relative min-h-[88svh] w-full overflow-hidden bg-gradient-to-b from-emerald2-50/40 via-white to-white">
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1597636319015-1fce74db8798?auto=format&fit=crop&w=2400&q=85')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/70 to-white" />
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald2-700/15 via-transparent to-navy-800/8" />
      </motion.div>
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-emerald2-500/20 blur-3xl animate-float-slow" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 lg:pt-48 pb-24">
        <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-emerald2-800 hover:text-emerald2-900 glass rounded-full px-3 py-1.5">
          ← Back to Home
        </Link>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="mt-8">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] font-mono-display text-emerald2-800">
            <Sparkles className="h-3.5 w-3.5 text-gold-400" /> Seven Flagship Innovations
          </div>
          <h1 className="mt-8 font-display text-[clamp(2.5rem,6vw,5.5rem)] tracking-[-0.03em] leading-[0.96] text-emerald2-900 max-w-5xl">
            Our innovative <span className="gradient-emerald">product range.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-slate-600 leading-relaxed">
            Cinematic, functional, scientifically engineered — each product upcycles a treasured ingredient into a daily wellness ritual.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#virgin-coconut-oil" className="group inline-flex items-center gap-2 rounded-full bg-emerald2-700 text-white px-6 py-3.5 text-sm font-medium shine hover:bg-emerald2-800 transition-all">
              Begin the Journey <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-3 text-[12px] text-emerald2-800/70 font-mono-display tracking-[0.18em] uppercase">
              <span className="h-px w-10 bg-emerald2-700/40" />
              Scroll for product stories
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
