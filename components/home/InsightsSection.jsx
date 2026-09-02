'use client'
import { useState, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'

/* ─── Insight data ─── */
const ARTICLES = [
  {
    index: '01',
    category: 'Sustainability',
    title: 'Building a Circular Future for Generations',
    date: 'May 5, 2025',
    readTime: '5 min read',
    excerpt:
      'How closed-loop resource cycles and regenerative supply models are redefining industrial longevity.',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80&auto=format&fit=crop',
    href: '#',
  },
  {
    index: '02',
    category: 'Innovation',
    title: 'The Future of Agri-Tech & Smart Yields',
    date: 'May 3, 2025',
    readTime: '5 min read',
    excerpt:
      'Deploying precision telemetry, autonomous monitoring, and soil bio-intelligence to scale yields sustainably.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80&auto=format&fit=crop',
    href: '#',
  },
  {
    index: '03',
    category: 'Clean Energy',
    title: 'Renewable Energy Driving Industrial Change',
    date: 'May 1, 2025',
    readTime: '5 min read',
    excerpt:
      'Next-generation utility-scale solar and distributed battery architectures decarbonizing regional grids.',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80&auto=format&fit=crop',
    href: '#',
  },
  {
    index: '04',
    category: 'Global Impact',
    title: 'Expanding Impact, Creating Long-Term Value',
    date: 'Apr 28, 2025',
    readTime: '3 min read',
    excerpt:
      'Scaling our multi-sector footprint across strategic corridors while anchoring measurable social equity.',
    image: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=800&q=80&auto=format&fit=crop',
    href: '#',
  },
]

/* ─── Shared animation helper ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

/* ═══════════════════════════════════════════════
   Sub-components
   ═══════════════════════════════════════════════ */

/** Eyebrow + heading */
function InsightsHeader() {
  return (
    <div>
      <motion.div {...fadeUp(0)} className="flex items-center gap-2.5 mb-3">
        <span className="h-px w-7 bg-[var(--cf-primary)]" />
        <span className="text-[11px] tracking-[0.22em] uppercase font-mono-display text-[var(--cf-primary)] font-semibold">
          Insights & Updates
        </span>
      </motion.div>
      <motion.h2
        {...fadeUp(0.08)}
        id="insights-heading"
        className="font-display text-3xl lg:text-[2.5rem] text-[var(--cf-text)] leading-[1.15]"
      >
        Ideas. Innovations. Impact.
      </motion.h2>
    </div>
  )
}

/** "View All Insights →" link */
function ViewAllLink() {
  return (
    <motion.div {...fadeUp(0.12)}>
      <Link
        href="#"
        className="group inline-flex items-center gap-2 text-[var(--cf-primary)] text-sm font-medium transition-all"
      >
        View All Insights
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </Link>
    </motion.div>
  )
}

/** Single insight card — Inverted Text-First Items Alignment */
function InsightCard({ article, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="h-full flex flex-col flex-1"
    >
      <Link
        href={article.href}
        className="group relative flex flex-col justify-between w-full h-full rounded-[19px] bg-white border border-[#E7E4DC] p-5 sm:p-5.5 shadow-[0_2px_14px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_36px_-8px_rgba(6,75,59,0.14)] hover:border-[#064B3B]/25 hover:-translate-y-1.5 transition-all duration-300"
      >
        {/* ── Top Section: Category, Index, Headline, Meta, Excerpt ── */}
        <div className="flex flex-col">
          {/* Header Row: Category Badge + Index Number */}
          <div className="flex items-center justify-between gap-2 mb-3.5">
            <span className="inline-block px-3 py-1 rounded-full bg-[#EEF6F2] text-[#064B3B] text-[10px] font-mono tracking-[0.14em] uppercase font-semibold border border-[#064B3B]/10 group-hover:bg-[#064B3B] group-hover:text-white transition-colors duration-300">
              {article.category}
            </span>

            <span className="font-mono text-[12px] font-bold text-[#8C9691] tracking-widest flex items-center gap-1.5">
              <span className="text-[#C8D1CC] font-light">|</span>
              {article.index}
            </span>
          </div>

          {/* Headline */}
          <h3 className="font-display text-[18px] sm:text-[19px] font-bold text-[#1F2926] group-hover:text-[#064B3B] leading-[1.3] transition-colors duration-300 mb-2.5 line-clamp-2">
            {article.title}
          </h3>

          {/* Date & Read Time */}
          <div className="flex items-center gap-2 text-[11px] font-mono text-[#737E79] mb-3">
            <span>{article.date}</span>
            <span className="w-1 h-1 rounded-full bg-[#737E79]/40" />
            <span>{article.readTime}</span>
          </div>

          {/* Excerpt */}
          <p className="text-[12.5px] text-[#55605B] leading-[1.65] line-clamp-2">
            {article.excerpt}
          </p>
        </div>

        {/* ── Bottom Section: Inset Framed Photo with Floating Arrow ── */}
        <div className="relative h-[180px] sm:h-[190px] w-full rounded-[12px] overflow-hidden bg-[#EAE7DF] mt-5 shrink-0">
          <img
            src={article.image}
            alt={article.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Subtle bottom vignette to elevate arrow disc */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

          {/* Floating Action Disc in photo corner */}
          <div className="absolute bottom-3 right-3 z-10">
            <span className="h-9 w-9 rounded-full bg-[#064B3B] text-white flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.25)] border border-white/20 group-hover:bg-[#03372C] group-hover:scale-110 group-hover:shadow-[0_6px_16px_rgba(6,75,59,0.35)] transition-all duration-300">
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

/** Circular carousel navigation button */
function CarouselButton({ direction, onClick, disabled }) {
  const Icon = direction === 'prev' ? ChevronLeft : ChevronRight
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'prev' ? 'Previous insights' : 'Next insights'}
      className={`
        h-10 w-10 rounded-full bg-white border border-[var(--cf-border)]
        flex items-center justify-center
        shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08)]
        transition-all duration-300
        hover:shadow-[0_4px_16px_-4px_rgba(6,75,59,0.15)]
        hover:border-[var(--cf-primary)]/30
        hover:scale-105
        disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none
      `}
    >
      <Icon className="h-4 w-4 text-[var(--cf-text)]" />
    </button>
  )
}

/* ═══════════════════════════════════════════════
   Main section
   ═══════════════════════════════════════════════ */

export default function InsightsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
    loop: false,
  })
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section
      id="insights"
      className="py-20 lg:py-28 lg:pb-15"
      style={{ background: 'var(--cf-bg, #F8F7F2)' }}
      aria-labelledby="insights-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* ── Header row ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-12">
          <InsightsHeader />
          <div className="flex items-center gap-4">
            <ViewAllLink />
            {/* Desktop nav arrows beside the "View All" link */}
            <div className="hidden lg:flex items-center gap-2">
              <CarouselButton direction="prev" onClick={scrollPrev} disabled={!canScrollPrev} />
              <CarouselButton direction="next" onClick={scrollNext} disabled={!canScrollNext} />
            </div>
          </div>
        </div>

        {/* ── Carousel with Inverted Card Items Alignment ── */}
        <div className="relative">
          {/* Mobile/Tablet nav buttons */}
          <div className="lg:hidden flex items-center justify-end gap-2 mb-4">
            <CarouselButton direction="prev" onClick={scrollPrev} disabled={!canScrollPrev} />
            <CarouselButton direction="next" onClick={scrollNext} disabled={!canScrollNext} />
          </div>

          <div className="overflow-hidden py-4 -my-4 px-1 -mx-1" ref={emblaRef}>
            <div className="flex gap-5">
              {ARTICLES.map((article, i) => (
                <div
                  key={article.title}
                  className="flex-[0_0_80%] sm:flex-[0_0_46%] lg:flex-[0_0_calc(25%-15px)] min-w-0 flex flex-col"
                >
                  <InsightCard article={article} index={i} />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
