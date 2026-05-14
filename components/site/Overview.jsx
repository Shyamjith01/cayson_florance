'use client'
import { motion } from 'framer-motion'
import { TrendingUp, Layers, Building2, Leaf } from 'lucide-react'

export default function Overview() {
  return (
    <section id="overview" className="relative py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase font-mono-display text-navy-700">
                <span className="h-px w-8 bg-navy-700" /> 01 · Overview
              </div>
              <h2 className="mt-6 font-display text-5xl lg:text-6xl tracking-[-0.02em] text-navy-900 leading-[1.02]">
                A diversified conglomerate, engineered for the next century.
              </h2>
              <p className="mt-8 text-slate-600 text-lg leading-relaxed">
                Cayson Florance International is a privately-held multinational operating at the intersection of agriculture, advanced manufacturing, renewable energy, mining, logistics and global exports — uniting heritage industries with the precision of futuristic infrastructure.
              </p>
              <div className="mt-10 flex items-center gap-6">
                <div className="font-display text-4xl gradient-gold">2008</div>
                <div className="text-sm text-slate-500">Founded · Operating across<br/>six sovereign markets</div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {[
              { icon: Layers, t: 'Vertically Integrated', d: 'End-to-end ownership from plantation to export. We control yield, quality and margin at every stage.', n: '01' },
              { icon: Building2, t: 'Industrial Scale', d: 'Multi-billion dollar capex deployed across 12 industrial verticals and 6 international markets.', n: '02' },
              { icon: Leaf, t: 'Circular Ecosystem', d: 'Free-range poultry, natural pest control, organic plantations — a regenerative supply chain by design.', n: '03' },
              { icon: TrendingUp, t: 'Investor Grade', d: 'Disciplined capital allocation. Audited operations. Long-horizon thesis for institutional partners.', n: '04' },
            ].map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl hairline bg-gradient-to-br from-white to-slate-50/80 p-7 hover:shadow-[0_20px_50px_-20px_rgba(10,42,94,0.25)] transition-all duration-500 hover:-translate-y-1">
                <div className="absolute top-5 right-5 text-[10px] tracking-[0.3em] text-slate-400 font-mono-display">{c.n}</div>
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-navy-800 to-navy-700 grid place-items-center text-white">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl text-navy-900">{c.t}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{c.d}</p>
                <div className="absolute -bottom-1 left-7 right-7 h-px bg-gradient-to-r from-transparent via-emerald2-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
