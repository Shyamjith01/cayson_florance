'use client'
import { motion } from 'framer-motion'

export default function SectorBody({ d }) {
  return (
    <section className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5">
            <div className="text-[11px] tracking-[0.25em] uppercase font-mono-display text-navy-700">Operating Vision</div>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl tracking-[-0.02em] text-navy-900 leading-[1.05]">A vertically integrated business of <span className="gradient-text italic">consequence.</span></h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.8 }} className="lg:col-span-7">
            <p className="text-slate-600 text-lg leading-relaxed">{d.intro}</p>
            <div className="mt-8 grid grid-cols-3 gap-px bg-slate-200 rounded-2xl overflow-hidden hairline">
              {d.stats.map(([v,l], i) => (
                <div key={i} className="bg-white p-5">
                  <div className="font-display text-3xl text-navy-900">{v}</div>
                  <div className="mt-1 text-[10px] tracking-[0.22em] uppercase text-slate-500 font-mono-display">{l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-5">
          {d.pillars.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.7 }}
              className="group relative overflow-hidden rounded-3xl hairline bg-gradient-to-br from-slate-50 to-white p-8 hover:-translate-y-1 transition-all">
              <div className="text-[10px] tracking-[0.3em] uppercase text-slate-400 font-mono-display">0{i+1}</div>
              <h3 className="mt-3 font-display text-2xl text-navy-900">{p.t}</h3>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">{p.d}</p>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-emerald2-500/5 group-hover:bg-emerald2-500/15 transition" />
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="mt-20 rounded-[32px] overflow-hidden relative h-[420px]">
          <img src={d.img} alt={d.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/80 via-navy-900/30 to-transparent" />
          <div className="absolute inset-0 flex items-end p-10 lg:p-14">
            <div className="max-w-2xl">
              <div className="text-[11px] tracking-[0.25em] uppercase font-mono-display text-emerald2-300">Global Market Focus</div>
              <h3 className="mt-3 font-display text-3xl lg:text-4xl text-white leading-tight">Operating across India, UAE, USA, UK, Zambia and Congo — connected through bonded warehousing, owned logistics and integrated trade desks.</h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
