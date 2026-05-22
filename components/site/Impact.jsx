'use client'
import { motion } from 'framer-motion'
import { Recycle, Users, Truck, Sprout, Coins, Award, Trees, PackageOpen, Package, FlaskConical, ArrowDown } from 'lucide-react'

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

        {/* The Loop — Circular Regenerative Diagram */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
          className="mt-20 relative glass rounded-3xl p-8 lg:p-12 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-emerald2-500/12 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-navy-700/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            {/* Left: heading + supporting */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-emerald2-800/70 font-mono-display">
                <span className="h-px w-6 bg-emerald2-700" /> The Loop
              </div>
              <h3 className="mt-4 font-display text-4xl lg:text-5xl tracking-[-0.02em] text-emerald2-900 leading-[1.05]">
                How our ecosystem <span className="gradient-emerald">closes back on itself.</span>
              </h3>
              <p className="mt-5 text-slate-600 leading-relaxed">
                Seven regenerative stages — beginning and ending with the soil. Every byproduct re-enters the cycle, every farmer participates in the upside.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-px bg-emerald2-100/60 rounded-2xl overflow-hidden hairline">
                {[['7','Stages'], ['0','Linear Waste'], ['\u221e','Regenerative']].map(([v,l], i) => (
                  <div key={i} className="bg-white p-4">
                    <div className="font-display text-2xl text-emerald2-900">{v}</div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-emerald2-800/65 font-mono-display">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: circular diagram (desktop) + vertical timeline (mobile) */}
            <div className="lg:col-span-7 flex items-center justify-center">
              <LoopDiagram />
              <LoopTimeline />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ---------- Loop Diagram (desktop) ---------- */
const STEPS = [
  { label: 'Farmer', icon: Users, hue: 'from-emerald2-600 to-emerald2-800' },
  { label: 'Fresh Harvest', icon: Sprout, hue: 'from-emerald2-500 to-emerald2-700' },
  { label: 'Cold-Chain', icon: Truck, hue: 'from-emerald2-500 to-navy-700' },
  { label: 'Bio-Processing', icon: FlaskConical, hue: 'from-navy-700 to-emerald2-700' },
  { label: 'Functional Products', icon: Package, hue: 'from-emerald2-600 to-emerald2-800' },
  { label: 'Upcycled Byproducts', icon: PackageOpen, hue: 'from-emerald2-700 to-emerald2-900' },
  { label: 'Back to Soil', icon: Trees, hue: 'from-emerald2-800 to-emerald2-600' },
]

function LoopDiagram() {
  const SIZE = 520
  const C = SIZE / 2
  const R = 198
  const CIRC = 2 * Math.PI * R
  return (
    <div className="hidden md:block relative" style={{ width: SIZE, height: SIZE, maxWidth: '100%' }}>
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
        <defs>
          <linearGradient id="loopRing" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#047857" />
            <stop offset="0.5" stopColor="#10b981" />
            <stop offset="1" stopColor="#34d399" />
          </linearGradient>
          <radialGradient id="loopGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.18" />
            <stop offset="60%" stopColor="#10b981" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Soft inner glow */}
        <circle cx={C} cy={C} r={R - 28} fill="url(#loopGlow)" />
        {/* Dashed ring (static) */}
        <circle cx={C} cy={C} r={R} fill="none" stroke="#10b981" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="2 7" />
        {/* Inner thin ring */}
        <circle cx={C} cy={C} r={R - 16} fill="none" stroke="#047857" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="1 5" />
        {/* Animated spark traveling around the loop */}
        <circle cx={C} cy={C} r={R} fill="none" stroke="url(#loopRing)" strokeWidth="3" strokeLinecap="round"
          strokeDasharray={`70 ${CIRC - 70}`} className="animate-dash-arc" transform={`rotate(-90 ${C} ${C})`} />
      </svg>

      {/* Center orb */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center">
        <div className="relative inline-block">
          <div className="absolute inset-0 rounded-full bg-emerald2-500/30 blur-3xl scale-150" />
          <div className="relative h-28 w-28 rounded-full bg-gradient-to-br from-emerald2-600 via-emerald2-700 to-emerald2-900 grid place-items-center text-white shadow-[0_20px_50px_-12px_rgba(6,78,59,0.55)] ring-8 ring-white/70">
            <Recycle className="h-12 w-12 animate-spin-slow" />
          </div>
        </div>
        <div className="mt-3 font-display text-lg text-emerald2-900">Regenerative</div>
        <div className="text-[10px] tracking-[0.28em] uppercase text-emerald2-800/65 font-mono-display">Closed Loop</div>
      </div>

      {/* Nodes */}
      {STEPS.map((s, i) => {
        const a = (i / STEPS.length) * 2 * Math.PI - Math.PI / 2
        const x = C + R * Math.cos(a)
        const y = C + R * Math.sin(a)
        const labelBelow = Math.sin(a) >= -0.2
        return (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.15 + i * 0.1, duration: 0.7, type: 'spring', stiffness: 110 }}
            style={{ left: `${(x / SIZE) * 100}%`, top: `${(y / SIZE) * 100}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 group z-20"
          >
            <div className={`relative flex ${labelBelow ? 'flex-col' : 'flex-col-reverse'} items-center gap-2`}>
              <div className={`relative h-14 w-14 rounded-2xl bg-gradient-to-br ${s.hue} grid place-items-center text-white shadow-[0_15px_30px_-10px_rgba(6,78,59,0.4)] ring-4 ring-white group-hover:scale-110 group-hover:-translate-y-0.5 transition-all duration-300`}>
                <s.icon className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-emerald2-400 ring-2 ring-white animate-pulse-ring" />
              </div>
              <div className="whitespace-nowrap rounded-full bg-white/90 backdrop-blur border border-emerald2-100 px-3 py-1 shadow-sm">
                <span className="text-[10px] tracking-[0.18em] uppercase text-emerald2-700/70 font-mono-display mr-1.5">{String(i+1).padStart(2,'0')}</span>
                <span className="text-[11.5px] font-medium text-emerald2-900">{s.label}</span>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

/* ---------- Loop Timeline (mobile) ---------- */
function LoopTimeline() {
  return (
    <div className="md:hidden relative w-full">
      <div className="relative pl-10">
        <div className="absolute left-[15px] top-3 bottom-10 w-px bg-gradient-to-b from-emerald2-500 via-emerald2-400 to-emerald2-300" />
        {STEPS.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
            className="relative mb-4 last:mb-2">
            <div className={`absolute -left-[34px] top-1 h-8 w-8 rounded-xl bg-gradient-to-br ${s.hue} grid place-items-center text-white shadow-md ring-2 ring-white`}>
              <s.icon className="h-4 w-4" />
            </div>
            <div className="rounded-xl bg-white border border-emerald2-100 px-4 py-2.5 shadow-sm">
              <div className="text-[10px] tracking-[0.22em] uppercase text-emerald2-800/60 font-mono-display">Stage {String(i+1).padStart(2,'0')}</div>
              <div className="font-medium text-emerald2-900">{s.label}</div>
            </div>
          </motion.div>
        ))}
        {/* Return arrow */}
        <div className="relative mt-2 flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase font-mono-display text-emerald2-700">
          <div className="absolute -left-[34px] top-1 h-8 w-8 rounded-xl glass-emerald grid place-items-center text-emerald2-700 ring-2 ring-white">
            <ArrowDown className="h-4 w-4 rotate-180" />
          </div>
          <span>Returns to Stage 01 — loop closes</span>
        </div>
      </div>
    </div>
  )
}
