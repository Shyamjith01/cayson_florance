'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Play, Globe2, Sparkles } from 'lucide-react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -120])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.18])

  return (
    <section ref={ref} className="relative min-h-[100svh] w-full overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      {/* layered backdrop */}
      <motion.div style={{ scale, y: y1 }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1658135353412-f7f442edd157?auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/55 to-white" />
        <div className="absolute inset-0 bg-gradient-to-tr from-navy-800/15 via-transparent to-emerald2-500/10" />
      </motion.div>

      {/* grid + glow */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-emerald2-500/20 blur-3xl animate-float-slow" />
      <div className="absolute -bottom-32 -right-32 w-[620px] h-[620px] rounded-full bg-navy-800/15 blur-3xl animate-float-slow" />

      {/* floating UI chips */}
      <motion.div style={{ y: y2, opacity }} className="absolute right-6 lg:right-16 top-32 lg:top-40 hidden md:block">
        <div className="glass rounded-2xl p-4 w-72 animate-float-slow">
          <div className="flex items-center justify-between">
            <div className="text-[10px] tracking-[0.25em] text-slate-500 uppercase font-mono-display">Live · Global Operations</div>
            <span className="h-2 w-2 rounded-full bg-emerald2-500 animate-pulse-ring" />
          </div>
          <div className="mt-3 font-display text-2xl text-navy-800">6 Countries</div>
          <div className="mt-1 text-xs text-slate-500">India · UAE · USA · UK · Zambia · Congo</div>
          <div className="mt-4 h-1.5 rounded-full bg-slate-100 overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={{ width: '78%' }} transition={{ duration: 2, delay: 0.6 }} className="h-full bg-gradient-to-r from-navy-800 to-emerald2-500" />
          </div>
        </div>
      </motion.div>

      <motion.div style={{ y: y2 }} className="absolute left-6 lg:left-16 bottom-44 hidden lg:block">
        <div className="glass rounded-2xl p-4 w-64">
          <div className="flex items-center gap-2 text-[10px] tracking-[0.25em] text-slate-500 uppercase font-mono-display"><Globe2 className="h-3 w-3" /> Q4 Projection</div>
          <div className="mt-2 font-display text-3xl gradient-text">$1.4B</div>
          <div className="text-xs text-slate-500">Cross-sector revenue forecast</div>
        </div>
      </motion.div>

      {/* main content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 lg:pt-48 pb-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] font-mono-display text-navy-800">
          <Sparkles className="h-3.5 w-3.5 text-gold-400" />
          A Global Agro-Industrial Conglomerate
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }}
          className="mt-8 font-display text-[clamp(2.5rem,6.5vw,6rem)] leading-[0.95] tracking-[-0.03em] text-navy-900 max-w-5xl">
          Building the future of <span className="gradient-text">global agro-industrial</span> infrastructure.
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.9 }}
          className="mt-8 max-w-2xl text-lg text-slate-600 leading-relaxed">
          From plantations to distilleries, from mining to renewable energy — Cayson Florance International orchestrates one of the world's most ambitious diversified industrial ecosystems across six continents.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#sectors" className="group inline-flex items-center gap-2 rounded-full bg-navy-800 text-white px-6 py-3.5 text-sm font-medium shine hover:bg-navy-900 transition-all">
            Explore the Ecosystem
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#investors" className="group inline-flex items-center gap-2 rounded-full glass px-5 py-3.5 text-sm font-medium text-navy-800 hover:bg-white/80 transition-all">
            <span className="h-7 w-7 rounded-full bg-navy-800 text-white grid place-items-center group-hover:scale-110 transition-transform">
              <Play className="h-3 w-3 fill-white ml-0.5" />
            </span>
            Investor Presentation · 2:14
          </a>
        </motion.div>

        {/* metrics strip */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3, duration: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200/60 rounded-2xl overflow-hidden hairline">
          {[
            { k: '6', l: 'Global Markets', s: '+' },
            { k: '12', l: 'Industrial Verticals', s: '' },
            { k: '48,000', l: 'Plantation Acreage', s: 'ac' },
            { k: '2.4 GW', l: 'Renewable Capacity', s: '' },
          ].map((m, i) => (
            <div key={i} className="bg-white/70 backdrop-blur p-6 lg:p-7">
              <div className="font-display text-3xl lg:text-4xl text-navy-800">{m.k}<span className="text-emerald2-500 text-2xl">{m.s}</span></div>
              <div className="mt-1 text-[11px] tracking-[0.2em] uppercase text-slate-500 font-mono-display">{m.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="text-[10px] tracking-[0.3em] uppercase text-slate-500 font-mono-display">Scroll</div>
        <div className="h-10 w-px bg-gradient-to-b from-navy-800/40 to-transparent" />
      </motion.div>
    </section>
  )
}
