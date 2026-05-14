'use client'
import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

function Counter({ to, suffix = '', duration = 2 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0; const startTime = performance.now()
    const tick = (t) => {
      const p = Math.min((t - startTime) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(start + (to - start) * eased)
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, to, duration])
  const display = to >= 1000 ? Math.round(val).toLocaleString() : val.toFixed(to < 10 ? 1 : 0)
  return <span ref={ref}>{display}{suffix}</span>
}

const BAR_DATA = [
  { y: '2022', a: 38, b: 22 },
  { y: '2023', a: 56, b: 34 },
  { y: '2024', a: 78, b: 51 },
  { y: '2025', a: 102, b: 72 },
  { y: '2026E', a: 144, b: 98 },
  { y: '2027E', a: 196, b: 134 },
]

export default function Investors() {
  const max = Math.max(...BAR_DATA.map(d => d.a))
  return (
    <section id="investors" className="relative py-32 bg-navy-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.18),_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(176,137,73,0.15),_transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase font-mono-display text-emerald2-400">
            <span className="h-px w-8 bg-emerald2-400" /> 05 · Investor Outlook
          </div>
          <h2 className="mt-6 font-display text-5xl lg:text-6xl tracking-[-0.02em] leading-[1.02]">
            Compounding capital across <span className="gradient-gold italic">decades</span>, not quarters.
          </h2>
          <p className="mt-6 text-slate-300 text-lg">A long-horizon thesis backed by audited financials, geographic diversification and vertically integrated asset bases.</p>
        </div>

        <div className="mt-16 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 rounded-3xl glass-dark p-8 lg:p-10">
            <div className="flex items-end justify-between mb-8">
              <div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-slate-400 font-mono-display">Projected Revenue · USD Millions</div>
                <div className="mt-2 font-display text-3xl">Group Revenue Trajectory</div>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <span className="flex items-center gap-2"><span className="h-2 w-3 rounded-sm bg-emerald2-500" /> Industrial</span>
                <span className="flex items-center gap-2"><span className="h-2 w-3 rounded-sm bg-gold-400" /> Agro · Export</span>
              </div>
            </div>
            <div className="flex items-end gap-3 lg:gap-6 h-64">
              {BAR_DATA.map((d, i) => (
                <div key={d.y} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full flex items-end gap-1.5 h-full">
                    <motion.div initial={{ height: 0 }} whileInView={{ height: `${(d.a/max)*100}%` }} viewport={{ once: true }} transition={{ duration: 1.1, delay: i * 0.08, ease: 'easeOut' }}
                      className="flex-1 rounded-t-lg bg-gradient-to-t from-emerald2-600 to-emerald2-400 relative group">
                      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-emerald2-300 opacity-0 group-hover:opacity-100 transition">{d.a}M</span>
                    </motion.div>
                    <motion.div initial={{ height: 0 }} whileInView={{ height: `${(d.b/max)*100}%` }} viewport={{ once: true }} transition={{ duration: 1.1, delay: i * 0.08 + 0.15, ease: 'easeOut' }}
                      className="flex-1 rounded-t-lg bg-gradient-to-t from-gold-500 to-gold-300" />
                  </div>
                  <span className="text-[11px] tracking-[0.15em] text-slate-400 font-mono-display">{d.y}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {[
              { v: 1.4, s: 'B+', l: 'Projected Group Revenue (FY27E)', a: 'gold' },
              { v: 2.4, s: ' GW', l: 'Renewable Capacity Pipeline' },
              { v: 48000, s: '', l: 'Acres Under Cultivation' },
              { v: 18, s: '%', l: 'Five-Year Revenue CAGR' },
            ].map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.8 }}
                className="rounded-2xl glass-dark p-6 lg:p-7 relative overflow-hidden group">
                <div className={`font-display text-4xl lg:text-5xl ${m.a === 'gold' ? 'gradient-gold' : 'text-white'}`}>
                  {m.a === 'gold' && '$'}<Counter to={m.v} />{m.s}
                </div>
                <div className="mt-2 text-[11px] tracking-[0.2em] uppercase text-slate-400 font-mono-display leading-snug">{m.l}</div>
                <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-emerald2-500/10 blur-2xl group-hover:bg-emerald2-500/20 transition" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
