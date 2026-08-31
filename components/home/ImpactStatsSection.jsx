'use client'
import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    number: '1M+',
    label: 'Farmers Impacted',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 6.75v4.5m-16.5-4.5v4.5m16.5-9v4.5m-16.5-4.5v4.5" />
      </svg>
    ),
    number: '2.5M+',
    label: 'Tons of Food Processed',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    number: '300K+',
    label: 'Clean Energy Generated (MWh)',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3c-2.5 3-4 5.7-4 9s1.5 6 4 9M12 3c2.5 3 4 5.7 4 9s-1.5 6-4 9" />
      </svg>
    ),
    number: '45+',
    label: 'Countries Connected',
  },
]

function AnimatedNumber({ target, once }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView || !ref.current) return
    const num = parseInt(target.replace(/\D/g, ''))
    const suffix = target.replace(/[0-9]/g, '')
    if (!num) { ref.current.textContent = target; return }
    let start = 0
    const duration = 1800
    const step = Math.ceil(num / (duration / 16))
    const timer = setInterval(() => {
      start = Math.min(start + step, num)
      if (ref.current) ref.current.textContent = start.toLocaleString() + suffix
      if (start >= num) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, target])

  return <span ref={ref}>{target}</span>
}

export default function ImpactStatsSection() {
  return (
    <section id="impact" className="py-16 lg:py-20 bg-[#F8F7F2]" aria-labelledby="impact-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden bg-[#064B3B] px-8 py-12 lg:px-16 lg:py-16"
        >
          {/* Topographic background pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cpath d='M0 50 Q25 30 50 50 Q75 70 100 50' stroke='white' fill='none' strokeWidth='1'/%3E%3Cpath d='M0 30 Q25 10 50 30 Q75 50 100 30' stroke='white' fill='none' strokeWidth='1'/%3E%3Cpath d='M0 70 Q25 50 50 70 Q75 90 100 70' stroke='white' fill='none' strokeWidth='1'/%3E%3C/svg%3E")`,
              backgroundSize: '100px 100px',
            }}
          />

          {/* Label */}
          <div className="relative text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="h-px w-6 bg-white/40" />
              <span className="text-[11px] tracking-[0.22em] uppercase font-mono-display text-white/60 font-semibold">
                Our Impact in Action
              </span>
              <span className="h-px w-6 bg-white/40" />
            </div>
          </div>

          {/* Stats grid */}
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-0">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center px-6 py-4 ${
                  i < STATS.length - 1 ? 'border-b lg:border-b-0 lg:border-r border-white/15' : ''
                } ${i === 1 ? 'border-r lg:border-r-[inherit]' : ''}`}
              >
                <div className="text-white/60 mb-4">{stat.icon}</div>
                <div className="font-display text-3xl lg:text-4xl text-white font-semibold leading-none mb-2">
                  <AnimatedNumber target={stat.number} />
                </div>
                <div className="text-white/60 text-[12.5px] font-medium leading-snug max-w-[120px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
