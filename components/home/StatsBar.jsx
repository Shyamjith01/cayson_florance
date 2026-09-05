'use client'
import { motion } from 'framer-motion'

const STATS = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-leaf">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 21c.5 -4.5 2.5 -8 7 -10" />
        <path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3l.014 0" />
      </svg>
    ),
    number: '9+',
    label: 'Business Sectors',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-heart-handshake">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        <path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25" />
        <path d="M12.5 15.5l2 2" />
        <path d="M15 13l2 2" />
      </svg>
    ),
    number: '500+',
    label: 'Projects & Partners',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-recycle">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 17l-2 2l2 2" />
        <path d="M10 19h9a2 2 0 0 0 1.75 -2.75l-.55 -1" />
        <path d="M8.536 11l-.732 -2.732l-2.732 .732" />
        <path d="M7.804 8.268l-4.5 7.794a2 2 0 0 0 1.506 2.89l1.141 .024" />
        <path d="M15.464 11l2.732 .732l.732 -2.732" />
        <path d="M18.196 11.732l-4.5 -7.794a2 2 0 0 0 -3.256 -.14l-.591 .976" />
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
              className={`flex items-center gap-3 px-6 py-5 lg:py-6 ${i < STATS.length - 1 ? 'border-b lg:border-b-0 lg:border-r border-[#E5E6E1]' : ''
                }`}
            >
              <div className="text-[#064B3B] flex-shrink-0">{stat.icon}</div>
              <div>
                <div className="font-display text-xl lg:text-2xl text-[#1F2926] font-semibold leading-tight">
                  {stat.number}
                </div>
                <div className="text-[11px] text-[#66706C] font-medium tracking-wide">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
