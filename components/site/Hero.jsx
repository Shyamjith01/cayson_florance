'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Leaf, Droplets, Wheat, Sprout } from 'lucide-react'

const ICON_ITEMS = [
  { icon: Leaf, label: 'Natural Ingredients' },
  { icon: Droplets, label: 'Cold Pressed' },
  { icon: Wheat, label: 'Sprouted Grains' },
  { icon: Sprout, label: 'Zero Waste' },
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 220])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -10])
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.16])

  return (
    <section
      ref={ref}
      aria-labelledby="hero-heading"
      className="relative min-h-[100svh] w-full overflow-hidden bg-gradient-to-b from-emerald2-50/40 via-white to-white"
    >
      {/* Cinematic image backdrop — using next/image for proper LCP optimization */}
      <motion.div style={{ scale, y: y1 }} className="absolute inset-0" aria-hidden="true">
        <Image
          src="/hero_img1.webp"
          alt="Kerala coconut and moringa farm — source of Cayson Florance's natural ingredients"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
          quality={85}
        />
        {/* Vertical fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/25 to-white" />
        {/* Left-to-right fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />
        {/* Accent tint */}
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald2-700/10 via-transparent to-navy-800/8" />
      </motion.div>

      {/* Decorative grid + glow */}
      <div aria-hidden="true" className="absolute inset-0 grid-bg opacity-50" />
      <div aria-hidden="true" className="absolute -top-32 -right-32 w-[280px] h-[280px] md:w-[560px] md:h-[560px] rounded-full bg-emerald2-500/25 blur-3xl animate-float-slow" />
      <div aria-hidden="true" className="absolute -bottom-40 -left-40 w-[300px] h-[300px] md:w-[620px] md:h-[620px] rounded-full bg-navy-800/12 blur-3xl animate-float-slow" />

      {/* Floating data overlay — Top right */}
      <motion.aside
        style={{ y: y2, opacity }}
        aria-label="Bio-processing facility information"
        className="absolute right-6 lg:right-32 top-32 lg:top-40 hidden md:block"
      >
        <div className="glass rounded-2xl p-4 w-72 animate-float-slow">
          <div className="mt-0 font-display text-2xl text-emerald2-900">Ernakulam, Kerala</div>
          <div className="mt-1 text-xs text-emerald2-800/70">Bio-Processing Facility · Zero-Waste</div>
          <div className="mt-3 grid grid-cols-4 gap-1" role="list" aria-label="Key ingredient categories">
            {ICON_ITEMS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                role="listitem"
                title={label}
                className="h-9 rounded-lg bg-emerald2-50 grid place-items-center"
              >
                <Icon aria-hidden="true" className="h-4 w-4 text-emerald2-700" />
                <span className="sr-only">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.aside>

      {/* Floating data overlay — Mid right */}
      <motion.aside
        style={{ y: y2 }}
        aria-label="Partner farmer statistics"
        className="absolute right-6 lg:right-28 top-[60%] lg:top-[58%] hidden lg:block"
      >
        <div className="glass-emerald rounded-2xl p-4 w-64">
          <div className="text-[10px] tracking-[0.25em] text-emerald2-800/70 uppercase font-mono-display">
            Partner Farmers
          </div>
          <div className="mt-2 font-display text-4xl gradient-emerald" aria-label="Over 500 partner farmers">
            500+
          </div>
          <div className="mt-1 text-xs text-emerald2-800/70">Kerala · Tamil Nadu direct sourcing</div>
          <div className="mt-3 h-1.5 rounded-full bg-emerald2-100 overflow-hidden" role="progressbar" aria-valuenow={74} aria-valuemin={0} aria-valuemax={100} aria-label="Farmer partnership progress">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '74%' }}
              transition={{ duration: 2, delay: 0.6 }}
              className="h-full bg-gradient-to-r from-emerald2-600 to-navy-700"
            />
          </div>
        </div>
      </motion.aside>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:pt-[12rem] pt-36 sm:pt-36 lg:pt-48 pb-16 sm:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-flex items-center gap-2.5 bg-gradient-to-r from-emerald2-100/70 via-emerald2-50/40 to-transparent backdrop-blur-sm rounded-[20px] pl-4 sm:pl-5 pr-10 sm:pr-16 py-2 text-emerald2-700"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.4, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 0.7, type: 'spring', stiffness: 120 }}
            className="inline-flex"
          >
            <motion.span
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex"
            >
              <Leaf aria-hidden="true" className="h-4 w-4 text-emerald2-500" />
            </motion.span>
          </motion.span>
           
          <span className="font-script text-[13px] sm:text-[16px] tracking-wide">
            &ldquo;Enriching Lives Beyond Boundaries&rdquo;
          </span>
        </motion.p>

        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-3 sm:mt-5 font-display text-[clamp(1.6rem,6vw,4.3rem)] leading-[1.05] sm:leading-[0.96] tracking-[-0.02em] sm:tracking-[-0.03em] text-emerald2-900 max-w-5xl drop-shadow-[0_2px_12px_rgba(255,255,255,0.7)]"
        >
          Redefining health &amp; nutrition{' '}
          <span className="gradient-emerald drop-shadow-[0_2px_8px_rgba(255,255,255,0.6)]">
            through smart agri-tech.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9 }}
          className="mt-5 sm:mt-8 max-w-2xl text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed"
        >
          Sourcing the finest treasures of nature —{' '}
          <strong className="text-emerald2-800 font-semibold">
            Coconut, Pineapple, Sprouted Grains and Moringa
          </strong>{' '}
          — and upcycling them into world-class functional health foods.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-6 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
        >
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 rounded-full bg-emerald2-700 text-white px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-medium shine hover:bg-emerald2-800 transition-all focus:outline-none focus:ring-2 focus:ring-emerald2-600 focus:ring-offset-2"
            aria-label="Explore our innovative health and nutrition products"
          >
            Explore Our Innovations
            <ArrowRight aria-hidden="true" className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="#impact"
            className="group inline-flex items-center gap-2 rounded-full glass px-4 sm:px-5 py-3 sm:py-3.5 text-xs sm:text-sm font-medium text-emerald2-800 hover:bg-white/85 transition-all focus:outline-none focus:ring-2 focus:ring-emerald2-600 focus:ring-offset-2"
            aria-label="See the environmental and social impact of Cayson Florance"
          >
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-emerald2-500" />
            See Our Impact
          </a>
        </motion.div>

        {/* Metrics strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="mt-10 sm:mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-emerald2-100/60 rounded-2xl overflow-hidden hairline"
          role="list"
          aria-label="Key company metrics"
        >
          {[
            { k: '500+', l: 'Partner Farmers' },
            { k: '0', l: 'Waste Processing', s: 'Zero' },
            { k: '5', l: 'Innovative Products' },
            { k: '∞', l: 'Sustainable Ecosystem' },
          ].map((m) => (
            <div key={m.l} role="listitem" className="bg-white/75 backdrop-blur p-3 sm:p-5 lg:p-7">
              <div className="font-display text-xl sm:text-2xl lg:text-4xl text-emerald2-900">
                {m.s ? <span className="text-emerald2-600">{m.s}-</span> : null}
                {m.k}
              </div>
              <div className="mt-1 text-[9px] sm:text-[10px] lg:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] uppercase text-emerald2-800/65 font-mono-display">
                {m.l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="text-[10px] tracking-[0.3em] uppercase text-emerald2-800/60 font-mono-display">Scroll</div>
        <div className="h-10 w-px bg-gradient-to-b from-emerald2-700/50 to-transparent" />
      </motion.div>
    </section>
  )
}
