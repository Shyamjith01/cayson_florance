'use client'
import { motion } from 'framer-motion'

const STATS = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.5c0-5 4-9 9-7.5C16 6.5 20 10 19.5 15c-.5 4-4 7-9 6-4-.8-6.5-4-6-8.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c1-3 3.5-5 6-5" />
      </svg>
    ),
    number: '9+',
    label: 'Business Sectors',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    number: '500+',
    label: 'Projects & Partners',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-4.14-3.36-7.5-7.5-7.5S4.5 7.86 4.5 12s3.36 7.5 7.5 7.5m7.5-7.5H4.5m15 0A7.47 7.47 0 0112 4.5m7.5 7.5A7.47 7.47 0 0112 19.5M12 4.5c2 2.5 3 5 3 7.5s-1 5-3 7.5M12 4.5C10 7 9 9.5 9 12s1 5 3 7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5l-9 9M7.5 7.5l9 9" />
      </svg>
    ),
    number: 'Zero Waste',
    label: 'Circular Approach',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3c-2.5 3-4 5.7-4 9s1.5 6 4 9M12 3c2.5 3 4 5.7 4 9s-1.5 6-4 9" />
      </svg>
    ),
    number: 'Global',
    label: 'Presence & Reach',
  },
]

export default function StatsBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-20 mx-auto max-w-6xl px-6 lg:px-10 -mt-14"
    >
      <div className="bg-white rounded-2xl shadow-lg border border-[#E5E6E1] overflow-hidden">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center text-center px-6 py-8 ${
                i < STATS.length - 1 ? 'border-b lg:border-b-0 border-r-0 lg:border-r border-[#E5E6E1] last:border-b-0 col-span-1' : ''
              }`}
            >
              <div className="text-[#064B3B] mb-3">{stat.icon}</div>
              <div className="font-display text-2xl lg:text-3xl text-[#1F2926] font-semibold leading-none mb-1.5">
                {stat.number}
              </div>
              <div className="text-[12px] text-[#66706C] font-medium tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
