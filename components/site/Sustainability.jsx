'use client'
import { motion } from 'framer-motion'
import { Leaf, Droplets, Sun, Recycle } from 'lucide-react'

const PILLARS = [
  { icon: Leaf, t: 'Free-Range Poultry', d: 'Pasture-raised flocks supporting natural pest control across our plantations.' },
  { icon: Recycle, t: 'Circular Agriculture', d: 'Every byproduct re-enters the chain — feed, fertilizer, biomass energy.' },
  { icon: Droplets, t: 'Water Stewardship', d: 'Closed-loop drip irrigation and aquifer recharge across 48,000 acres.' },
  { icon: Sun, t: 'Clean Energy First', d: '2.4 GW renewable pipeline powering manufacturing and cold chain.' },
]

export default function Sustainability() {
  return (
    <section id="sustainability" className="relative py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase font-mono-display text-navy-700">
              <span className="h-px w-8 bg-navy-700" /> 06 · Sustainability
            </div>
            <h2 className="mt-6 font-display text-5xl lg:text-6xl tracking-[-0.02em] text-navy-900 leading-[1.02]">
              A regenerative <span className="gradient-text">supply chain</span> by design.
            </h2>
            <p className="mt-6 text-slate-600 text-lg">Sustainability is not an offset — it's the operating system. Our integrated ecosystem closes loops between agriculture, livestock, energy and waste streams.</p>

            <div className="mt-10 rounded-3xl overflow-hidden hairline relative h-72">
              <img src="https://images.unsplash.com/photo-1562311395-d4ae0ea59359?auto=format&fit=crop&w=1600&q=80" className="w-full h-full object-cover" alt="plantation" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-[10px] tracking-[0.25em] uppercase text-white/70 font-mono-display">Congo Trade Ecosystem</div>
                <div className="font-display text-2xl text-white mt-1">Connecting African resource hubs to global markets through bonded warehousing and integrated logistics.</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {PILLARS.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.7 }}
                className="group relative overflow-hidden rounded-3xl hairline bg-gradient-to-br from-slate-50 to-white p-7 hover:-translate-y-1 transition-all duration-500">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald2-500 to-emerald2-600 grid place-items-center text-white shadow-lg">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-2xl text-navy-900">{p.t}</h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">{p.d}</p>
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-emerald2-500/5 group-hover:bg-emerald2-500/15 transition" />
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="sm:col-span-2 rounded-3xl bg-navy-900 text-white p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.3),_transparent_55%)]" />
              <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-5">
                <div>
                  <div className="text-[11px] tracking-[0.25em] uppercase text-emerald2-400 font-mono-display">Net Impact · 2030 Goal</div>
                  <div className="mt-3 font-display text-4xl lg:text-5xl gradient-gold">Carbon Negative</div>
                  <p className="mt-2 text-slate-300 max-w-md">Across all six markets, ahead of any regulatory mandate.</p>
                </div>
                <div className="flex gap-8">
                  <div><div className="font-display text-3xl">68%</div><div className="text-xs text-slate-400">Energy from renewables</div></div>
                  <div><div className="font-display text-3xl">94%</div><div className="text-xs text-slate-400">Water recycled</div></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
