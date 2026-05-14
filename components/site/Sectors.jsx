'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const SECTORS = [
  { slug: 'distilleries', tag: 'Vertical 01', title: 'Industrial Distilleries & Beverages', desc: 'Premium pineapple brandy, cashew apple spirits and export-grade ethanol — luxury beverage manufacturing at industrial scale.', img: 'https://images.unsplash.com/photo-1596303275732-8d41472abf65?auto=format&fit=crop&w=1600&q=80', stat: '120M L', statLabel: 'Annual Capacity' },
  { slug: 'tissue-culture', tag: 'Vertical 02', title: 'Advanced Tissue Culture Lab', desc: 'Biotech agriculture infrastructure producing high-yield, disease-resistant saplings for plantation-scale deployment.', img: 'https://images.unsplash.com/photo-1616996691604-26dfd478cbbc?auto=format&fit=crop&w=1600&q=80', stat: '24M', statLabel: 'Saplings / Year' },
  { slug: 'aquaculture', tag: 'Vertical 03', title: 'Advanced Aquaculture', desc: 'Premium seafood ecosystems engineered for sustainability, traceability and luxury export markets.', img: 'https://images.unsplash.com/photo-1593011951191-3c69a6bfc151?auto=format&fit=crop&w=1600&q=80', stat: '38k MT', statLabel: 'Production' },
  { slug: 'mining', tag: 'Vertical 04', title: 'Mining & Value Addition', desc: 'Copper, lithium, cobalt and gold operations integrated with downstream copper sheet and cable manufacturing.', img: 'https://images.unsplash.com/photo-1658135354486-99c51db347be?auto=format&fit=crop&w=1600&q=80', stat: '6 Mines', statLabel: 'Active Operations' },
  { slug: 'agriculture', tag: 'Vertical 05', title: 'High-Value Agriculture', desc: 'Avocado, mango and jackfruit plantations, organic grains and drone-assisted precision farming.', img: 'https://images.unsplash.com/photo-1583052924678-f36e9dab1811?auto=format&fit=crop&w=1600&q=80', stat: '48,000 ac', statLabel: 'Under Cultivation' },
  { slug: 'energy', tag: 'Vertical 06', title: 'Green Energy & BESS', desc: 'Solar parks, wind farms, wave energy and grid-scale battery storage systems powering the next industrial decade.', img: 'https://images.unsplash.com/photo-1467579424161-6bbc141569d7?auto=format&fit=crop&w=1600&q=80', stat: '2.4 GW', statLabel: 'Installed' },
]

export default function Sectors() {
  return (
    <section id="sectors" className="relative py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase font-mono-display text-navy-700">
              <span className="h-px w-8 bg-navy-700" /> 03 · Sectors
            </div>
            <h2 className="mt-6 font-display text-5xl lg:text-6xl tracking-[-0.02em] text-navy-900 leading-[1.02]">
              Six verticals. <span className="gradient-text italic">One vision.</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-600">Each business unit operates as an independent powerhouse while contributing to a singular, vertically integrated thesis.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SECTORS.map((s, i) => (
            <motion.div key={s.slug} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.7, delay: (i % 3) * 0.1 }}>
              <Link href={`/sectors/${s.slug}`} className="group block relative h-[480px] rounded-3xl overflow-hidden hairline shine">
                <div className="absolute inset-0 transition-transform duration-[1.4s] group-hover:scale-110">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/35 to-navy-900/10" />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald2-500/10 via-transparent to-navy-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
                  <span className="glass rounded-full px-3 py-1 text-[10px] tracking-[0.25em] uppercase text-navy-800 font-mono-display">{s.tag}</span>
                  <span className="h-9 w-9 rounded-full bg-white/90 grid place-items-center text-navy-800 group-hover:bg-emerald2-500 group-hover:text-white transition-all group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-6 lg:p-7">
                  <div className="glass rounded-2xl p-5 transition-transform duration-500 group-hover:-translate-y-1">
                    <h3 className="font-display text-xl text-navy-900 leading-tight">{s.title}</h3>
                    <p className="mt-2 text-[13px] text-slate-600 leading-relaxed line-clamp-2">{s.desc}</p>
                    <div className="mt-4 flex items-end justify-between pt-3 border-t border-slate-200/70">
                      <div>
                        <div className="font-display text-2xl text-navy-900">{s.stat}</div>
                        <div className="text-[10px] tracking-[0.22em] uppercase text-slate-500 font-mono-display">{s.statLabel}</div>
                      </div>
                      <span className="text-[11px] tracking-[0.22em] uppercase text-emerald2-600 font-mono-display">Explore →</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
