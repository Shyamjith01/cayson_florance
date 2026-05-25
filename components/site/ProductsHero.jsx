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
    <section ref={ref} className="relative min-h-[60svh] md:min-h-[88svh] w-full overflow-hidden bg-gradient-to-b from-emerald2-50/40 via-white to-white">
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/productpage.webp')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-tr from-white via-white/90 via-[30%] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60" />
      </motion.div>
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-emerald2-500/20 blur-3xl animate-float-slow" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-28 sm:pt-36 lg:pt-48 pb-14 sm:pb-24">
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-emerald2-800 hover:text-emerald2-900 glass rounded-full px-3 py-1.5">
          ← Back to Home
        </Link>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="mt-5 sm:mt-8">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 sm:px-4 py-1.5 text-[9px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.22em] font-mono-display text-emerald2-800">
            <Sparkles className="h-3.5 w-3.5 text-gold-400" /> Five Flagship Innovations
          </div>
          <h1 className="mt-5 sm:mt-8 font-display text-[clamp(1.6rem,6vw,5.2rem)] tracking-[-0.02em] sm:tracking-[-0.03em] leading-[1.05] sm:leading-[0.96] text-emerald2-900 max-w-5xl">
            Our innovative <span className="gradient-emerald">product range.</span>
          </h1>
          <p className="mt-5 sm:mt-7 max-w-2xl text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
            Cinematic, functional, scientifically engineered — each product upcycles a treasured ingredient into a daily wellness ritual.
          </p>
          <div className="mt-6 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
            <a href="#virgin-coconut-oil" className="group inline-flex items-center gap-2 rounded-full bg-emerald2-700 text-white px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-medium shine hover:bg-emerald2-800 transition-all">
              Begin the Journey <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="hidden sm:flex items-center gap-3 text-[10px] sm:text-[12px] text-emerald2-800/70 font-mono-display tracking-[0.18em] uppercase">
              <span className="h-px w-10 bg-emerald2-700/40" />
              Scroll for product stories
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
