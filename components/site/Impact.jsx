'use client'
import { motion } from 'framer-motion'
import { Recycle, Users, Truck, Sprout, Coins, Award, Trees, PackageOpen } from 'lucide-react'

const CIRCULAR = [
  { icon: Recycle, t: 'Zero-Waste Manufacturing', d: 'Every input is engineered into value — no plant material leaves our facility as waste.' },
  { icon: PackageOpen, t: 'Coconut Shell Upcycling', d: 'Shells transformed into bio-activated carbon, building materials and bio-fuel inputs.' },
  { icon: Sprout, t: 'Pineapple Pulp Reuse', d: 'Fiber pulp converted into functional dietary fiber blends and natural fermentation feedstock.' },
  { icon: Trees, t: 'Sustainable Production', d: 'Solar-augmented processing with closed-loop water and biomass-powered drying systems.' },
]

const FARMER = [
  { icon: Users, t: 'Direct Farmer Partnerships', d: 'No middlemen. We contract directly with 500+ smallholders across Kerala and Tamil Nadu.' },
  { icon: Coins, t: 'Fair Pricing', d: 'Transparent floor pricing pegged 18–22% above mandi rates, paid within 7 days of harvest.' },
  { icon: Truck, t: 'Reduced Post-Harvest Loss', d: 'Cold-chain pickup within 24 hours — cutting traditional post-harvest losses by over 60%.' },
  { icon: Award, t: 'Sustainable Farming Ecosystem', d: 'Agronomy support, organic input subsidies and yield insurance for our farmer network.' },
]

export default function Impact() {
  return (
    <section id="impact" className="relative py-32 bg-gradient-to-b from-emerald2-50/40 via-white to-emerald2-50/30 overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase font-mono-display text-emerald2-800">
            <span className="h-px w-8 bg-emerald2-700" /> 02 · Our Impact
          </div>
          <h2 className="mt-6 font-display text-5xl lg:text-6xl tracking-[-0.02em] text-emerald2-900 leading-[1.02]">
            Two loops. <span className="gradient-emerald">One regenerative ecosystem.</span>
          </h2>
          <p className="mt-6 text-slate-600 text-lg">Our impact thesis is built on two interlocking systems — a circular production model and a farmer-first sourcing network. Each one quietly compounds the other.</p>
        </div>

        {/* Circular Economy */}
        <div className="mt-20 grid lg:grid-cols-12 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full glass-emerald px-3 py-1 text-[10px] tracking-[0.25em] uppercase font-mono-display text-emerald2-800">Loop 01</div>
            <h3 className="mt-4 font-display text-4xl lg:text-5xl text-emerald2-900 tracking-[-0.02em] leading-[1.05]">Circular Economy</h3>
            <p className="mt-5 text-slate-600 leading-relaxed">Zero-waste manufacturing built around upcycling — coconut shells, pineapple pulp and grain husk become inputs for the next cycle.</p>
            <div className="mt-8 grid grid-cols-3 gap-px bg-emerald2-100/60 rounded-2xl overflow-hidden hairline">
              {[['100%','Upcycled'], ['0','Plant Waste'], ['4','Reuse Streams']].map(([v,l], i) => (
                <div key={i} className="bg-white p-4">
                  <div className="font-display text-2xl text-emerald2-900">{v}</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-emerald2-800/65 font-mono-display">{l}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {CIRCULAR.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl hairline bg-gradient-to-br from-white to-emerald2-50/40 p-6 hover:-translate-y-1 transition-all duration-500">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-emerald2-600 to-emerald2-800 grid place-items-center text-white">
                  <c.icon className="h-5 w-5" />
                </div>
                <h4 className="mt-4 font-display text-xl text-emerald2-900">{c.t}</h4>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{c.d}</p>
                <div className="absolute -bottom-1 left-7 right-7 h-px bg-gradient-to-r from-transparent via-emerald2-500/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Connector */}
        <div className="my-20 flex items-center justify-center gap-4">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-emerald2-400" />
          <div className="h-12 w-12 rounded-full glass grid place-items-center">
            <Recycle className="h-5 w-5 text-emerald2-700 animate-spin-slow" />
          </div>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-emerald2-400" />
        </div>

        {/* Farmer First */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 order-2 lg:order-1">
            {FARMER.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl hairline bg-gradient-to-br from-white to-emerald2-50/40 p-6 hover:-translate-y-1 transition-all duration-500">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-navy-700 to-navy-800 grid place-items-center text-white">
                  <c.icon className="h-5 w-5" />
                </div>
                <h4 className="mt-4 font-display text-xl text-emerald2-900">{c.t}</h4>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{c.d}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="lg:col-span-5 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full glass-emerald px-3 py-1 text-[10px] tracking-[0.25em] uppercase font-mono-display text-emerald2-800">Loop 02</div>
            <h3 className="mt-4 font-display text-4xl lg:text-5xl text-emerald2-900 tracking-[-0.02em] leading-[1.05]">Farmer First</h3>
            <p className="mt-5 text-slate-600 leading-relaxed">A direct partnership network across Kerala and Tamil Nadu — fair pricing, agronomy support and dramatically lower post-harvest losses.</p>
            <div className="mt-8 grid grid-cols-3 gap-px bg-navy-100/60 rounded-2xl overflow-hidden hairline">
              {[['500+','Farmers'], ['+22%','Above Mandi'], ['−60%','Post-Harvest Loss']].map(([v,l], i) => (
                <div key={i} className="bg-white p-4">
                  <div className="font-display text-2xl text-navy-800">{v}</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-emerald2-800/65 font-mono-display">{l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Ecosystem flow */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
          className="mt-20 glass rounded-3xl p-7 lg:p-9">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <div className="lg:w-72 shrink-0">
              <div className="text-[10px] tracking-[0.3em] uppercase text-emerald2-800/70 font-mono-display">The Loop</div>
              <div className="mt-2 font-display text-2xl text-emerald2-900">How our ecosystem closes back on itself</div>
            </div>
            <div className="flex-1 flex items-center gap-2 overflow-x-auto pb-1">
              {['Farmer','Fresh Harvest','Cold-Chain','Bio-Processing','Functional Products','Upcycled Byproducts','Back to Soil'].map((s, i, arr) => (
                <div key={s} className="flex items-center gap-2 min-w-fit">
                  <div className="px-3.5 py-2 rounded-xl bg-white border border-emerald2-100 shadow-sm">
                    <span className="text-[12.5px] font-medium text-emerald2-900 whitespace-nowrap">{s}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <svg width="28" height="10"><line x1="0" y1="5" x2="28" y2="5" stroke="url(#imp)" strokeWidth="1.5" strokeDasharray="3 3" />
                      <defs><linearGradient id="imp" x1="0" x2="1"><stop offset="0" stopColor="#047857" stopOpacity="0.4"/><stop offset="1" stopColor="#10b981" stopOpacity="0.9"/></linearGradient></defs>
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
