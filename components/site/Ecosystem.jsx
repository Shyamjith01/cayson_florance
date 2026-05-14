'use client'
import { motion } from 'framer-motion'

const FLOWS = [
  { title: 'Agro · Export Chain', steps: ['Plantations', 'Distilleries', 'Bottling', 'Logistics', 'Global Markets'], accent: 'from-emerald2-500 to-emerald2-600' },
  { title: 'Mining · Industrial', steps: ['Mining', 'Beneficiation', 'Manufacturing', 'Infrastructure', 'Export'], accent: 'from-navy-700 to-navy-800' },
  { title: 'Sustainable Protein', steps: ['Poultry', 'Organic Feed', 'Eggs · Meat', 'Cold Chain', 'Premium Retail'], accent: 'from-gold-400 to-gold-500' },
]

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="relative py-32 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase font-mono-display text-navy-700">
            <span className="h-px w-8 bg-navy-700" /> 02 · Global Ecosystem
          </div>
          <h2 className="mt-6 font-display text-5xl lg:text-6xl tracking-[-0.02em] text-navy-900 leading-[1.02]">
            One <span className="gradient-text">interconnected</span> industrial organism.
          </h2>
          <p className="mt-6 text-slate-600 text-lg">Three primary value chains operate in concert, each reinforcing the next — creating compounding margin, regenerative supply, and unmatched export leverage.</p>
        </div>

        <div className="mt-16 space-y-6">
          {FLOWS.map((f, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: idx * 0.15 }}
              className="glass rounded-3xl p-6 lg:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="lg:w-56 shrink-0">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-slate-500 font-mono-display">Flow · 0{idx+1}</div>
                  <div className="mt-2 font-display text-2xl text-navy-900">{f.title}</div>
                </div>
                <div className="flex-1 relative">
                  <div className="flex items-center justify-between gap-3 overflow-x-auto pb-2">
                    {f.steps.map((s, i) => (
                      <div key={i} className="flex items-center gap-3 min-w-fit">
                        <motion.div whileInView={{ scale: [0.6, 1.1, 1] }} viewport={{ once: true }} transition={{ delay: i * 0.15 + idx * 0.1, duration: 0.7 }}
                          className={`relative shrink-0 px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-sm group hover:shadow-md transition-all`}>
                          <span className={`absolute -inset-px rounded-xl bg-gradient-to-r ${f.accent} opacity-0 group-hover:opacity-100 transition-opacity blur-sm -z-10`} />
                          <span className="text-sm font-medium text-navy-900 whitespace-nowrap">{s}</span>
                        </motion.div>
                        {i < f.steps.length - 1 && (
                          <svg width="40" height="12" className="shrink-0">
                            <line x1="0" y1="6" x2="40" y2="6" stroke="url(#g)" strokeWidth="1.5" strokeDasharray="3 3" />
                            <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#0a2a5e" stopOpacity="0.3" /><stop offset="1" stopColor="#10b981" stopOpacity="0.8" /></linearGradient></defs>
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
