'use client'
import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    number: '1M+',
    label: 'Farmers Impacted',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    number: '2.5M+',
    label: 'Tons of Food Processed',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    number: '300K+',
    label: 'Clean Energy Generated (MWh)',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
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
    <section id="impact" className="py-8 lg:py-10 lg:pt-0 bg-[#F8F7F2]" aria-labelledby="impact-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl overflow-hidden bg-[#064B3B] px-6 py-6 lg:px-10 lg:py-5"
        >
          {/* Subtle gradient overlay for depth */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cpath d='M0 50 Q25 30 50 50 Q75 70 100 50' stroke='white' fill='none' strokeWidth='1'/%3E%3Cpath d='M0 30 Q25 10 50 30 Q75 50 100 30' stroke='white' fill='none' strokeWidth='1'/%3E%3Cpath d='M0 70 Q25 50 50 70 Q75 90 100 70' stroke='white' fill='none' strokeWidth='1'/%3E%3C/svg%3E")`,
              backgroundSize: '100px 100px',
            }}
          />

          {/* Single-row layout: label on the left, stats on the right */}
          <div className="relative flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-0">
            {/* Label - left aligned */}
            <div className="flex-shrink-0 lg:pr-8 lg:border-r lg:border-white/15">
              <span className="text-[10px] tracking-[0.2em] uppercase font-mono-display text-white/50 font-semibold whitespace-nowrap">
                Our Impact in Action
              </span>
            </div>

            {/* Stats row */}
            <div className="flex flex-col sm:flex-row sm:items-center flex-1 lg:pl-2">
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex items-center gap-3 px-4 lg:px-6 py-2 sm:py-0 flex-1 ${
                    i < STATS.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-white/15' : ''
                  }`}
                >
                  {/* Icon in circular container */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50">
                    {stat.icon}
                  </div>

                  {/* Number + Label stacked to the right of icon */}
                  <div className="flex flex-col">
                    <div className="font-display text-xl lg:text-2xl text-white font-semibold leading-none">
                      <AnimatedNumber target={stat.number} />
                    </div>
                    <div className="text-white/50 text-[11px] font-medium leading-tight mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
