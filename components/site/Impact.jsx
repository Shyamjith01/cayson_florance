'use client'
import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { Recycle, Users, Truck, Sprout, Coins, Award, Trees, PackageOpen, Package, FlaskConical, ArrowDown, ArrowRight, RefreshCw } from 'lucide-react'

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

        {/* The Loop — Aligned Grid Flow */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
          className="mt-20 relative glass rounded-3xl p-6 sm:p-8 lg:p-12 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-emerald2-500/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-navy-700/8 blur-3xl" />

          {/* Heading + supporting */}
          <div className="relative grid lg:grid-cols-12 gap-6 lg:gap-10 mb-10 lg:mb-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-emerald2-800/70 font-mono-display">
                <span className="h-px w-6 bg-emerald2-700" /> The Loop
              </div>
              <h3 className="mt-4 font-display text-4xl sm:text-5xl lg:text-[3.25rem] tracking-[-0.02em] text-emerald2-900 leading-[1.05]">
                How our ecosystem <span className="gradient-emerald">closes back on itself.</span>
              </h3>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-end">
              <p className="text-slate-600 leading-relaxed">
                Seven regenerative stages — beginning and ending with the soil. Every byproduct re-enters the cycle, every farmer participates in the upside.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-px bg-emerald2-100/60 rounded-2xl overflow-hidden hairline">
                {[['7','Stages'], ['0','Linear Waste'], ['∞','Regenerative']].map(([v,l], i) => (
                  <div key={i} className="bg-white p-3 sm:p-4">
                    <div className="font-display text-xl sm:text-2xl text-emerald2-900">{v}</div>
                    <div className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-emerald2-800/65 font-mono-display">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Aligned Flow Grid */}
          <LoopFlow />
        </motion.div>
      </div>
    </section>
  )
}

/* ---------- Loop Diagram (desktop) ---------- */
const STEPS = [
  { n: '01', label: 'Farmer', icon: Users, desc: 'Direct partnerships with 500+ smallholders across Kerala and Tamil Nadu.' },
  { n: '02', label: 'Fresh Harvest', icon: Sprout, desc: 'Hand-picked at peak ripeness — purity is engineered from the field.' },
  { n: '03', label: 'Cold-Chain', icon: Truck, desc: 'Cold-pickup within 24 hours preserves every micronutrient.' },
  { n: '04', label: 'Bio-Processing', icon: FlaskConical, desc: 'Zero-waste conversion at our state-of-the-art Ernakulam facility.' },
  { n: '05', label: 'Functional Products', icon: Package, desc: 'Premium nutrition, packed and ready for the global wellness market.' },
  { n: '06', label: 'Upcycled Byproducts', icon: PackageOpen, desc: 'Shells, pulp and husk re-enter the cycle — nothing is wasted.' },
  { n: '07', label: 'Back to Soil', icon: Trees, desc: 'Organic matter returns to nourish the farms we sourced from.' },
]

/* ---------- Loop Flow ---------- */
function LoopFlow() {
  return (
    <div className="relative">
      {/* Stage cards: 1 col on mobile, 2 on sm, 4 on lg → 2 rows of 4 = 8 cells (7 stages + 1 closing card) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
        {STEPS.map((s, i) => (
          <StageCard key={s.n} stage={s} index={i} />
        ))}
        <ClosingCard />
      </div>

      {/* Decorative flow guide line under cards (desktop) */}
      <div className="hidden lg:flex items-center gap-3 mt-8 text-[10px] tracking-[0.28em] uppercase font-mono-display text-emerald2-700/70">
        <RefreshCw className="h-3.5 w-3.5 animate-spin-slow" />
        <span>Continuous · Regenerative · Closed-Loop</span>
        <div className="flex-1 h-px bg-gradient-to-r from-emerald2-500/50 via-emerald2-300 to-transparent" />
      </div>
    </div>
  )
}

function StageCard({ stage, index }) {
  const next = String(parseInt(stage.n) + 1).padStart(2, '0')
  const isLast = stage.n === '07'
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.07, duration: 0.55, ease: 'easeOut' }}
      className="group relative rounded-2xl bg-white border border-emerald2-100 p-5 lg:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald2-300 hover:shadow-[0_18px_40px_-18px_rgba(6,78,59,0.28)]"
    >
      <div className="flex items-center justify-between mb-5">
        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald2-600 to-emerald2-800 grid place-items-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
          <stage.icon className="h-5 w-5" />
        </div>
        <span className="text-[10px] tracking-[0.28em] uppercase text-emerald2-700/55 font-mono-display">Stage</span>
      </div>
      <div className="font-display text-2xl text-emerald2-900 leading-none mb-0.5">{stage.n}</div>
      <div className="font-display text-lg text-emerald2-900 leading-tight mt-1">{stage.label}</div>
      <p className="mt-2 text-[12px] text-slate-500 leading-snug">{stage.desc}</p>
      <div className="mt-4 pt-3 border-t border-emerald2-100/80 flex items-center justify-between">
        <span className="text-[10px] tracking-[0.22em] uppercase text-emerald2-700/65 font-mono-display">
          {isLast ? 'closes loop' : `\u2192 stage ${next}`}
        </span>
        <ArrowRight className="h-3.5 w-3.5 text-emerald2-600 group-hover:translate-x-1 transition-transform duration-300" />
      </div>
    </motion.div>
  )
}

function ClosingCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: 0.55, duration: 0.65, ease: 'easeOut' }}
      className="relative rounded-2xl bg-gradient-to-br from-emerald2-700 via-emerald2-800 to-emerald2-900 p-5 lg:p-6 text-white overflow-hidden group hover:-translate-y-1 transition-all duration-300 shadow-[0_18px_40px_-18px_rgba(6,78,59,0.45)]"
    >
      <div className="absolute -top-14 -right-14 w-40 h-40 rounded-full bg-emerald2-400/30 blur-2xl group-hover:bg-emerald2-300/40 transition-colors" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-gold-400/15 blur-2xl" />
      <div className="relative">
        <div className="flex items-center justify-between mb-5">
          <div className="h-12 w-12 rounded-xl bg-white/15 backdrop-blur grid place-items-center text-white ring-2 ring-white/30">
            <Recycle className="h-5 w-5 animate-spin-slow" />
          </div>
          <span className="text-[10px] tracking-[0.28em] uppercase text-emerald2-200 font-mono-display">Loop</span>
        </div>
        <div className="font-display text-2xl text-emerald2-100 leading-none mb-0.5">↺</div>
        <div className="font-display text-lg leading-tight mt-1">Closes back on itself</div>
        <p className="mt-2 text-[12px] text-emerald2-100/85 leading-snug">Stage 07 returns to Stage 01 — every cycle regenerates the next.</p>
        <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between">
          <span className="text-[10px] tracking-[0.22em] uppercase text-emerald2-200/90 font-mono-display">returns to stage 01</span>
          <RefreshCw className="h-3.5 w-3.5 text-emerald2-300 group-hover:rotate-180 transition-transform duration-700" />
        </div>
      </div>
    </motion.div>
  )
}
