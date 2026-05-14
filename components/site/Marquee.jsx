'use client'
import { motion } from 'framer-motion'

const PARTNERS = [
  'BLACKROCK CAPITAL', 'STANDARD CHARTERED', 'DP WORLD', 'EMIRATES SKYCARGO',
  'KPMG · AUDIT', 'WORLD ECONOMIC FORUM', 'ROYAL HORTICULTURAL', 'BUREAU VERITAS',
  'GLOBAL G.A.P.', 'IFC · WORLD BANK', 'IRENA', 'PORT OF ROTTERDAM',
]

export default function Marquee() {
  return (
    <section className="relative py-14 bg-white border-y border-slate-200/60 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="text-[11px] tracking-[0.3em] uppercase text-slate-500 font-mono-display">Audited · Accredited · Partnered with</div>
          <div className="hidden md:block text-[11px] tracking-[0.3em] uppercase text-slate-400 font-mono-display">Global Institutional Network</div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        <motion.div
          className="flex gap-14 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 38, ease: 'linear', repeat: Infinity }}
        >
          {[...PARTNERS, ...PARTNERS].map((p, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-navy-800 to-emerald2-500" />
              <span className="font-display text-xl lg:text-2xl text-slate-400 hover:text-navy-800 transition-colors tracking-wide">{p}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
