'use client'
import { useState, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

/* ─── Insight data ─── */
const ARTICLES = [
  {
    category: 'Sustainability',
    title: 'Building a Circular Future for Generations',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80&auto=format&fit=crop',
    date: 'May 5, 2025',
    readTime: '5 min read',
    href: '#',
  },
  {
    category: 'Innovation',
    title: 'The Future of Agri-Tech',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80&auto=format&fit=crop',
    date: 'May 3, 2025',
    readTime: '5 min read',
    href: '#',
  },
  {
    category: 'Industry News',
    title: 'Renewable Energy Driving Change',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80&auto=format&fit=crop',
    date: 'May 1, 2025',
    readTime: '5 min read',
    href: '#',
  },
  {
    category: 'Company Updates',
    title: 'Expanding Impact, Creating Value',
    image: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=800&q=80&auto=format&fit=crop',
    date: 'May 1, 2025',
    readTime: '3 min read',
    href: '#',
  },
]

/* ─── Shared animation helper ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
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

/** Category pill badge — white/translucent, dark green text */
function CategoryBadge({ category }) {
  return (
    <span className="inline-block rounded-full bg-white/90 backdrop-blur-[6px] border border-white/50 px-3 py-[5px] text-[9.5px] font-mono-display font-bold tracking-[0.16em] uppercase text-[var(--cf-primary)] shadow-[0_1px_6px_-1px_rgba(0,0,0,0.08)]">
      {category}
    </span>
  )
}

/** Clock SVG icon — small circle clock for metadata */
function ClockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-[11px] w-[11px] shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.828a1 1 0 101.415-1.414L11 9.586V6z"
        clipRule="evenodd"
      />
    </svg>
  )
}

/** Bottom metadata row — ⏱ date · ⏱ readTime */
function InsightMeta({ date, readTime }) {
  return (
    <div className="flex items-center gap-[5px] text-[10.5px] text-[#6b7370] font-mono-display">
      <ClockIcon />
      <span>{date}</span>
      <span className="mx-[2px]">
        <ClockIcon />
      </span>
      <span>{readTime}</span>
    </div>
  )
}

/** Single insight card — image fills entire card, content overlaid */
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
      className="h-full"
    >
      <Link
        href={article.href}
        className="group relative block rounded-[15px] overflow-hidden h-full border border-[rgba(0,0,0,0.06)] shadow-[0_2px_20px_-6px_rgba(0,0,0,0.07)] hover:shadow-[0_12px_40px_-8px_rgba(6,75,59,0.16)] transition-all duration-400 hover:-translate-y-[3px]"
      >
        {/* Card container — fixed height matching user request */}
        <div className="relative h-[340px] overflow-hidden">
          {/* Background image — fills entire card */}
          <img
            src={article.image}
            alt={article.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />

          {/* Gradient overlay — opaque white at bottom, transparent at ~45% from top */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(
                to top,
                rgba(255,255,255,0.98) 0%,
                rgba(255,255,255,0.95) 15%,
                rgba(255,255,255,0.80) 32%,
                rgba(255,255,255,0.45) 48%,
                rgba(255,255,255,0.12) 60%,
                rgba(255,255,255,0.0) 72%
              )`,
            }}
          />

          {/* ── Overlaid content — spread across full card height ── */}
          <div className="absolute inset-0 z-10 flex flex-col justify-between p-4 sm:p-5">
            {/* Top — Category badge */}
            <div>
              <CategoryBadge category={article.category} />
            </div>

            {/* Bottom — Title + Metadata */}
            <div className="flex flex-col gap-2.5">
              <h3 className="text-[15px] sm:text-[16px] font-bold text-[var(--cf-text)] leading-[1.35] group-hover:text-[var(--cf-primary)] transition-colors duration-300 max-w-[90%]">
                {article.title}
              </h3>
              <InsightMeta date={article.date} readTime={article.readTime} />
            </div>
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

        {/* ── Carousel ── */}
        <div className="relative">
          {/* Mobile/Tablet nav buttons */}
          <div className="lg:hidden flex items-center justify-end gap-2 mb-4">
            <CarouselButton direction="prev" onClick={scrollPrev} disabled={!canScrollPrev} />
            <CarouselButton direction="next" onClick={scrollNext} disabled={!canScrollNext} />
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-5">
              {ARTICLES.map((article, i) => (
                <div
                  key={article.title}
                  className="flex-[0_0_80%] sm:flex-[0_0_46%] lg:flex-[0_0_calc(25%-15px)] min-w-0"
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
