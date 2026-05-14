'use client'
import { motion } from 'framer-motion'

const NODES = [
  { id: 'IN', name: 'India', x: 68, y: 48, role: 'HQ · R&D · Plantations' },
  { id: 'AE', name: 'UAE', x: 60, y: 50, role: 'Trade Hub · Logistics' },
  { id: 'US', name: 'USA', x: 22, y: 42, role: 'Export Markets' },
  { id: 'UK', name: 'United Kingdom', x: 46, y: 33, role: 'Beverage Distribution' },
  { id: 'ZM', name: 'Zambia', x: 54, y: 70, role: 'Mining Operations' },
  { id: 'CG', name: 'D.R. Congo', x: 51, y: 64, role: 'Mining · Trade' },
]

const ROUTES = [
  ['IN','AE'], ['IN','UK'], ['AE','US'], ['IN','US'], ['ZM','AE'], ['CG','AE'], ['CG','ZM'], ['UK','US'], ['ZM','IN']
]

export default function GlobalNetwork() {
  const map = Object.fromEntries(NODES.map(n => [n.id, n]))
  return (
    <section id="network" className="relative py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase font-mono-display text-navy-700">
            <span className="h-px w-8 bg-navy-700" /> 04 · Global Network
          </div>
          <h2 className="mt-6 font-display text-5xl lg:text-6xl tracking-[-0.02em] text-navy-900 leading-[1.02]">
            A logistics fabric spanning <span className="gradient-text italic">six sovereign markets.</span>
          </h2>
          <p className="mt-6 text-slate-600 text-lg">Cargo aircraft, container vessels and bonded warehouses moving raw materials, finished goods and capital across continents in real time.</p>
        </div>

        <div className="relative mt-16 rounded-3xl glass p-6 lg:p-10 overflow-hidden">
          <div className="absolute inset-0 dot-bg opacity-40" />
          <div className="absolute -top-32 -right-20 w-96 h-96 rounded-full bg-emerald2-500/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-navy-800/10 blur-3xl" />

          <div className="relative aspect-[16/9] w-full">
            <img src="https://images.unsplash.com/photo-1601027191903-f97442c175c2?auto=format&fit=crop&w=2200&q=80" alt="world map" className="absolute inset-0 w-full h-full object-cover opacity-[0.18] rounded-2xl" />
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id="route" x1="0" x2="1">
                  <stop offset="0" stopColor="#0a2a5e" stopOpacity="0.0" />
                  <stop offset="0.5" stopColor="#10b981" stopOpacity="0.9" />
                  <stop offset="1" stopColor="#0a2a5e" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              {ROUTES.map(([a,b], i) => {
                const A = map[a], B = map[b]
                const mx = (A.x + B.x)/2, my = Math.min(A.y, B.y) - 8
                return (
                  <g key={i}>
                    <path d={`M ${A.x} ${A.y} Q ${mx} ${my} ${B.x} ${B.y}`} fill="none" stroke="url(#route)" strokeWidth="0.3" strokeDasharray="1 2" className="animate-dash" />
                  </g>
                )
              })}
            </svg>
            {NODES.map((n, i) => (
              <motion.div key={n.id} initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.6, type: 'spring' }}
                style={{ left: `${n.x}%`, top: `${n.y}%` }} className="absolute -translate-x-1/2 -translate-y-1/2 group">
                <div className="relative">
                  <span className="absolute inset-0 rounded-full bg-emerald2-500/40 animate-pulse-ring" />
                  <span className="relative block h-3 w-3 rounded-full bg-gradient-to-br from-emerald2-400 to-navy-800 ring-4 ring-white shadow-lg" />
                </div>
                <div className="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap glass px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="font-display text-sm text-navy-900">{n.name}</div>
                  <div className="text-[10px] tracking-[0.18em] uppercase text-slate-500 font-mono-display">{n.role}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {NODES.map((n, i) => (
              <motion.div key={n.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.06 }}
                className="rounded-xl bg-white/70 backdrop-blur hairline px-4 py-3">
                <div className="text-[10px] tracking-[0.25em] uppercase text-slate-500 font-mono-display">{n.id}</div>
                <div className="font-display text-base text-navy-900">{n.name}</div>
                <div className="text-[11px] text-slate-500 leading-tight mt-0.5">{n.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
