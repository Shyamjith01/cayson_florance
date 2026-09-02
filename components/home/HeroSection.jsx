'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Play, Leaf } from 'lucide-react'

/* ─── Animated count-up component ─── */
function AnimatedCounter({ value }) {
  const match = value.match(/^(\d+)(.*)$/)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  const target = match ? parseInt(match[1], 10) : 0
  const suffix = match ? match[2] : ''
  const isNumeric = !!match

  useEffect(() => {
    if (!isInView || !isNumeric || hasAnimated.current) return
    hasAnimated.current = true

    const duration = 2000
    const startTime = performance.now()
    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4)

    let raf
    const animate = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.round(easeOutQuart(progress) * target))
      if (progress < 1) {
        raf = requestAnimationFrame(animate)
      }
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [isInView, isNumeric, target])

  if (!isNumeric) {
    return <span ref={ref}>{value}</span>
  }

  return <span ref={ref}>{count}{suffix}</span>
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

/* ─── Stats card items (top-right glassmorphic card) ─── */
const STATS_ITEMS = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.5c0-5 4-9 9-7.5C16 6.5 20 10 19.5 15c-.5 4-4 7-9 6-4-.8-6.5-4-6-8.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c1-3 3.5-5 6-5" />
      </svg>
    ),
    number: '9+',
    label: 'Business\nSectors',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    number: '500+',
    label: 'Projects &\nPartners',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-4.14-3.36-7.5-7.5-7.5S4.5 7.86 4.5 12s3.36 7.5 7.5 7.5m7.5-7.5H4.5m15 0A7.47 7.47 0 0112 4.5m7.5 7.5A7.47 7.47 0 0112 19.5M12 4.5c2 2.5 3 5 3 7.5s-1 5-3 7.5M12 4.5C10 7 9 9.5 9 12s1 5 3 7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5l-9 9M7.5 7.5l9 9" />
      </svg>
    ),
    number: 'Zero Waste',
    label: 'Circular\nApproach',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3c-2.5 3-4 5.7-4 9s1.5 6 4 9M12 3c2.5 3 4 5.7 4 9s-1.5 6-4 9" />
      </svg>
    ),
    number: 'Global',
    label: 'Presence &\nReach',
  },
]

/* ─── Mission items (bottom-right white card) ─── */
const MISSION_ITEMS = [
  {
    label: 'Sustainable\nGrowth',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.5c0-5 4-9 9-7.5C16 6.5 20 10 19.5 15c-.5 4-4 7-9 6-4-.8-6.5-4-6-8.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c1-3 3.5-5 6-5" />
      </svg>
    ),
  },
  {
    label: 'Innovation\nDriven',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a7 7 0 0 1 7 7c0 2.8-1.64 5.22-4 6.35V17a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1.65A7 7 0 0 1 12 2Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 21h6" />
      </svg>
    ),
  },
  {
    label: 'Global\nImpact',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3c-2.5 3-4 5.7-4 9s1.5 6 4 9M12 3c2.5 3 4 5.7 4 9s-1.5 6-4 9" />
      </svg>
    ),
  },
  {
    label: 'People\nFocused',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <circle cx="10" cy="7" r="4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: 'Responsible\nBy Nature',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
]

export default function HeroSection() {
  return (
    <section  className="relative min-h-screen flex pt-12 flex-col overflow-hidden" aria-label="Hero">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/homepage.webp"
          alt="Sustainable multi-industry ecosystem"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark gradient overlay from left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f18]/80 via-[#0a1f18]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f18]/50 via-transparent to-[#0a1f18]/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center pt-28 pb-32 lg:pb-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 w-full">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">

            {/* Left — Hero Text (spans 5 cols) */}
            <div className="lg:col-span-6">
              <motion.p
                {...fadeUp(0.1)}
                className="relative inline-flex items-center gap-2.5 bg-gradient-to-r from-white/15 via-emerald-400/10 to-transparent backdrop-blur-sm rounded-[20px] pl-4 sm:pl-5 pr-10 sm:pr-16 py-1.5 text-white mb-6 lg:mb-4 before:absolute before:inset-0 before:rounded-[20px] before:border before:border-white/20 before:pointer-events-none before:[mask-image:linear-gradient(to_right,white_30%,transparent_100%)]"
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.4, rotate: -45 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.7, type: 'spring', stiffness: 120 }}
                  className="inline-flex"
                >
                  <motion.span
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="inline-flex"
                  >
                    <Leaf aria-hidden="true" className="h-4 w-4 text-emerald-400" />
                  </motion.span>
                </motion.span>
                 
                <span className="font-script not-italic font-medium text-[13px] sm:text-[16px] tracking-wide text-white/90">
                  &ldquo;Enriching Lives Beyond Boundaries&rdquo;
                </span>
              </motion.p>

              <motion.h1
                {...fadeUp(0.2)}
                className="font-display text-[2.6rem] sm:text-[3.2rem] lg:text-[3.6rem] xl:text-[4rem] leading-[1.05] tracking-tight text-white mb-6 lg:mb-7"
              >
                Building a{' '}
                <span className="text-emerald-400">sustainable future</span>{' '}
                across industries.
              </motion.h1>

              <motion.p
                {...fadeUp(0.3)}
                className="text-white/65 text-sm lg:text-[15px] leading-relaxed mb-9 max-w-md"
              >
                From agriculture and food to infrastructure and renewable energy — we build integrated solutions that create value, empower communities and protect our planet for generations to come.
              </motion.p>

              <motion.div {...fadeUp(0.4)} className="flex flex-wrap items-center gap-4">
                <Link
                  href="/#sectors"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#064B3B] text-white text-sm font-medium px-7 py-3.5 hover:bg-[#03372C] transition-all duration-300 group border border-emerald-600/30"
                >
                  Explore Our Solutions
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                </Link>
                <button className="inline-flex items-center gap-3 rounded-full border border-white/30 text-white text-sm font-medium px-6 py-3.5 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  <span className="h-7 w-7 rounded-full border border-white/60 grid place-items-center">
                    <Play className="h-3 w-3 ml-0.5 fill-white" aria-hidden="true" />
                  </span>
                  Watch Corporate Film
                </button>
              </motion.div>
            </div>

            {/* Right — Two Stacked Cards (spans 7 cols) */}
            <div className="lg:col-span-6 flex flex-col items-end gap-0">

              {/* Cards wrapper — single container for alignment */}
              <div className="w-full max-w-[420px]">

                {/* Top Card — Glassmorphic Stats 2×2 */}
                <motion.div
                  initial={{ opacity: 0, y: 32, x: 16 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full rounded-t-2xl overflow-hidden border border-white/15 border-b-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(10,31,24,0.55) 0%, rgba(6,75,59,0.35) 100%)',
                    backdropFilter: 'blur(24px) saturate(160%)',
                    WebkitBackdropFilter: 'blur(24px) saturate(160%)',
                  }}
                >
                  <div className="grid grid-cols-2">
                    {STATS_ITEMS.map((item, i) => (
                      <div
                        key={item.number}
                        className={`flex items-center gap-3 px-5 py-5 ${
                          i < 2 ? 'border-b border-white/10' : ''
                        } ${i % 2 === 0 ? 'border-r border-white/10' : ''}`}
                      >
                        <div className="h-11 w-11 rounded-full border border-white/20 flex items-center justify-center text-emerald-400/90 shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <div className="font-display text-xl lg:text-2xl text-white font-semibold leading-none mb-0.5">
                            <AnimatedCounter value={item.number} />
                          </div>
                          <div className="text-[10px] text-white/50 font-mono-display leading-tight whitespace-pre-line">
                            {item.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Bottom Card — Core Mission */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full rounded-b-2xl overflow-hidden border border-white/20 border-t-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.88) 0%, rgba(248,247,242,0.92) 100%)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                  }}
                >
                  <div className="px-5 pt-4 pb-2">
                    <p className="text-[9px] tracking-[0.22em] uppercase font-mono-display text-[#66706C] mb-0.5">
                      Core Mission
                    </p>
                    <h3 className="font-display text-base lg:text-[17px] text-[#1F2926] font-semibold leading-snug">
                      More Possibilities. Greater Impact.
                    </h3>
                  </div>
                  <div className="flex items-stretch justify-between px-3 pb-4 pt-1">
                    {MISSION_ITEMS.map((item) => (
                      <div
                        key={item.label}
                        className="flex flex-col items-center text-center flex-1 px-1"
                      >
                        <div className="h-10 w-10 rounded-xl bg-[#EAF1EB] flex items-center justify-center text-[#064B3B] mb-1.5">
                          {item.icon}
                        </div>
                        <span className="text-[9px] leading-tight font-medium text-[#1F2926] whitespace-pre-line">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
