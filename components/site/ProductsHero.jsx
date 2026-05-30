'use client'
import { motion } from 'framer-motion'
import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '@/components/SEO/Breadcrumb'

export default function ProductsHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 180])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Innovative Products', href: '/products' },
  ]

  return (
    <section
      ref={ref}
      aria-labelledby="products-page-heading"
      className="relative min-h-[60svh] md:min-h-[90svh] w-full overflow-hidden bg-gradient-to-b from-emerald2-50/40 via-white to-white"
    >
      {/* Parallax background — next/image for LCP */}
      <motion.div style={{ scale, y }} className="absolute inset-0" aria-hidden="true">
        <Image
          src="/products/prodbg.webp"
          alt="Cayson Florance product showcase — health and nutrition products"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/70 via-[53%] to-transparent to-[65%]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60" />
      </motion.div>

      <div aria-hidden="true" className="absolute inset-0 grid-bg opacity-50" />
      <div aria-hidden="true" className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-emerald2-500/20 blur-3xl animate-float-slow" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-28 sm:pt-36 lg:pt-38 pb-14 sm:pb-24">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-5 sm:mt-8"
        >
          <p className="inline-flex items-center gap-2 rounded-full glass px-3 sm:px-4 py-1.5 text-[9px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.22em] font-mono-display text-emerald2-800">
            <Sparkles aria-hidden="true" className="h-3.5 w-3.5 text-gold-400" />
            Seven Flagship Innovations
          </p>

          <h1
            id="products-page-heading"
            className="mt-5 sm:mt-8 font-display text-[clamp(1.6rem,6vw,5.2rem)] tracking-[-0.02em] sm:tracking-[-0.03em] leading-[1.05] sm:leading-[0.96] text-emerald2-900 max-w-5xl"
          >
            Our innovative <span className="gradient-emerald">product range.</span>
          </h1>

          <p className="mt-5 sm:mt-7 max-w-2xl text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
            Cinematic, functional, scientifically engineered — each product upcycles a treasured
            ingredient into a daily wellness ritual. From sprouted grain biscuits to bio-active
            moringa extract, discover health foods for every lifestyle.
          </p>

          <div className="mt-6 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#sprouted-grain-biscuits"
              className="group inline-flex items-center gap-2 rounded-full bg-emerald2-700 text-white px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-medium shine hover:bg-emerald2-800 transition-all focus:outline-none focus:ring-2 focus:ring-emerald2-600 focus:ring-offset-2"
              aria-label="Begin exploring our innovative product range"
            >
              Begin the Journey{' '}
              <ArrowRight aria-hidden="true" className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <div aria-hidden="true" className="hidden sm:flex items-center gap-3 text-[10px] sm:text-[12px] text-emerald2-800/70 font-mono-display tracking-[0.18em] uppercase">
              <span className="h-px w-10 bg-emerald2-700/40" />
              Scroll for product stories
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
