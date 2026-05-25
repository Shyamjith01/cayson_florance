'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles, Leaf, Droplets, Wheat, Sprout } from 'lucide-react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 220])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -10])
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.16])

  return (
    <section ref={ref} className="relative min-h-[100svh] w-full overflow-hidden bg-gradient-to-b from-emerald2-50/40 via-white to-white">
      {/* Cinematic image backdrop */}
      <motion.div style={{ scale, y: y1 }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/hero_img1.webp')] bg-cover bg-center" />
        {/* Vertical fade — stronger white wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/25 to-white" />
        {/* Left-to-right fade — keeps text side very readable, image visible on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />
        {/* Accent tint */}
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald2-700/10 via-transparent to-navy-800/8" />
      </motion.div>

      {/* grid + glow */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute -top-32 -right-32 w-[280px] h-[280px] md:w-[560px] md:h-[560px] rounded-full bg-emerald2-500/25 blur-3xl animate-float-slow" />
      <div className="absolute -bottom-40 -left-40 w-[300px] h-[300px] md:w-[620px] md:h-[620px] rounded-full bg-navy-800/12 blur-3xl animate-float-slow" />

      {/* Floating data overlay : Top right */}
      <motion.div style={{ y: y2, opacity }} className="absolute right-6 lg:right-32 top-32 lg:top-40 hidden md:block">
        <div className="glass rounded-2xl p-4 w-72 animate-float-slow">
          <div className="mt-0 font-display text-2xl text-emerald2-900">Ernakulam, Kerala</div>
          <div className="mt-1 text-xs text-emerald2-800/70">Bio-Processing Facility · Zero-Waste</div>
          <div className="mt-3 grid grid-cols-4 gap-1">
            {[Leaf, Droplets, Wheat, Sprout].map((I, i) => (
              <div key={i} className="h-9 rounded-lg bg-emerald2-50 grid place-items-center">
                <I className="h-4 w-4 text-emerald2-700" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating data overlay : Mid right */}
      <motion.div style={{ y: y2 }} className="absolute right-6 lg:right-28 top-[60%] lg:top-[58%] hidden lg:block">
        <div className="glass-emerald rounded-2xl p-4 w-64">
          <div className="text-[10px] tracking-[0.25em] text-emerald2-800/70 uppercase font-mono-display">Partner Farmers</div>
          <div className="mt-2 font-display text-4xl gradient-emerald">500+</div>
          <div className="mt-1 text-xs text-emerald2-800/70">Kerala · Tamil Nadu direct sourcing</div>
          <div className="mt-3 h-1.5 rounded-full bg-emerald2-100 overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={{ width: '74%' }} transition={{ duration: 2, delay: 0.6 }} className="h-full bg-gradient-to-r from-emerald2-600 to-navy-700" />
          </div>
        </div>
      </motion.div>

      {/* Floating data overlay : Bottom left */}
      {/* <motion.div style={{ y: y2 }} className="absolute left-6 bottom-44 hidden lg:block">
        <div className="glass rounded-2xl p-4 w-72">
          <div className="flex items-center gap-2 text-[10px] tracking-[0.25em] text-emerald2-800/70 uppercase font-mono-display"><Sparkles className="h-3 w-3 text-gold-400" /> Startup India · Ready</div>
          <div className="mt-2 font-display text-2xl text-navy-800">5 Innovative Products</div>
          <div className="mt-1 text-xs text-slate-500">Coconut · Moringa · Sprouted Grains</div>
        </div>
      </motion.div> */}

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:pt-[12rem] pt-28 sm:pt-36 lg:pt-48 pb-16 sm:pb-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full glass px-3 sm:px-4 py-1.5 text-[9px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.22em] font-mono-display text-emerald2-800">
          <Sparkles className="h-3.5 w-3.5 text-gold-400" />
          Health · Nutrition · Smart Agri-Tech
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }}
          className="mt-5 sm:mt-8 font-display text-[clamp(1.6rem,6vw,4.3rem)] leading-[1.05] sm:leading-[0.96] tracking-[-0.02em] sm:tracking-[-0.03em] text-emerald2-900 max-w-5xl drop-shadow-[0_2px_12px_rgba(255,255,255,0.7)]">
          Redefining health &amp; nutrition{' '}
          <span className="gradient-emerald drop-shadow-[0_2px_8px_rgba(255,255,255,0.6)]">through smart agri-tech.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.9 }}
          className="mt-5 sm:mt-8 max-w-2xl text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed">
          Sourcing the finest treasures of nature — <span className="text-emerald2-800 font-semibold">Coconut, Pineapple, Sprouted Grains and Moringa</span> — and upcycling them into world-class functional health foods.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }}
          className="mt-6 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
          <Link href="/products" className="group inline-flex items-center gap-2 rounded-full bg-emerald2-700 text-white px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-medium shine hover:bg-emerald2-800 transition-all">
            Explore Our Innovations
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a href="#impact" className="group inline-flex items-center gap-2 rounded-full glass px-4 sm:px-5 py-3 sm:py-3.5 text-xs sm:text-sm font-medium text-emerald2-800 hover:bg-white/85 transition-all">
            <span className="h-2 w-2 rounded-full bg-emerald2-500" />
            See Our Impact
          </a>
        </motion.div>

        {/* Metrics strip */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3, duration: 1 }}
          className="mt-10 sm:mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-emerald2-100/60 rounded-2xl overflow-hidden hairline">
          {[
            { k: '500+', l: 'Partner Farmers' },
            { k: '0', l: 'Waste Processing', s: 'Zero' },
            { k: '5', l: 'Innovative Products' },
            { k: '∞', l: 'Sustainable Ecosystem' },
          ].map((m, i) => (
            <div key={i} className="bg-white/75 backdrop-blur p-3 sm:p-5 lg:p-7">
              <div className="font-display text-xl sm:text-2xl lg:text-4xl text-emerald2-900">
                {m.s ? <span className="text-emerald2-600">{m.s}-</span> : null}{m.k}
              </div>
              <div className="mt-1 text-[9px] sm:text-[10px] lg:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] uppercase text-emerald2-800/65 font-mono-display">{m.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="text-[10px] tracking-[0.3em] uppercase text-emerald2-800/60 font-mono-display">Scroll</div>
        <div className="h-10 w-px bg-gradient-to-b from-emerald2-700/50 to-transparent" />
      </motion.div>
    </section>
  )
}
