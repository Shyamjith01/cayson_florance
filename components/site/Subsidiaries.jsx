'use client'
import { motion } from 'framer-motion'
import { Egg, Bird, Bug, Ship, Globe2, ArrowUpRight } from 'lucide-react'

const NODES = [
  {
    icon: Bird, tag: 'Subsidiary 01', title: 'Sustainable Poultry Ecosystem',
    desc: 'Free-range flocks integrated with plantations — birds graze beneath canopy, fertilize soils, and break pest cycles naturally.',
    img: 'https://images.unsplash.com/photo-1652355687106-d4f35ff51783?auto=format&fit=crop&w=1400&q=80',
    metric: '2.1M', metricLabel: 'Free-range birds',
  },
  {
    icon: Egg, tag: 'Subsidiary 02', title: 'Large-Scale Egg Production',
    desc: 'Vertically integrated layer farms producing export-grade pasteurised eggs for Gulf and European retail channels.',
    img: 'https://images.unsplash.com/photo-1583052924678-f36e9dab1811?auto=format&fit=crop&w=1400&q=80',
    metric: '480M', metricLabel: 'Eggs / Year',
  },
  {
    icon: Bug, tag: 'Subsidiary 03', title: 'Natural Pest Control',
    desc: 'A regenerative biocontrol program — ducks, guinea fowl and beneficial insects replacing synthetic pesticides across 48,000 acres.',
    img: 'https://images.unsplash.com/photo-1562311395-d4ae0ea59359?auto=format&fit=crop&w=1400&q=80',
    metric: '−98%', metricLabel: 'Pesticide use',
  },
  {
    icon: Ship, tag: 'Subsidiary 04', title: 'Export Logistics Synergy',
    desc: 'Owned cold-chain, bonded warehousing and shared cargo windows turn six sovereign markets into one frictionless trade fabric.',
    img: 'https://images.unsplash.com/photo-1654026995029-26478cf4d705?auto=format&fit=crop&w=1400&q=80',
    metric: '14 Days', metricLabel: 'Farm → Shelf',
  },
  {
    icon: Globe2, tag: 'Subsidiary 05', title: 'Congo Trade Ecosystem',
    desc: 'Anchored mining-to-export corridors connecting Central African resource hubs to Gulf and Asian processing centres.',
    img: 'https://images.unsplash.com/photo-1709834750363-0794e3795637?auto=format&fit=crop&w=1400&q=80',
    metric: '3', metricLabel: 'Trade Corridors',
  },
]

export default function Subsidiaries() {
  return (
    <section id="subsidiaries" className="relative py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase font-mono-display text-navy-700">
              <span className="h-px w-8 bg-navy-700" /> 07 · Subsidiary Ecosystem
            </div>
            <h2 className="mt-6 font-display text-5xl lg:text-6xl tracking-[-0.02em] text-navy-900 leading-[1.02]">
              The <span className="gradient-text italic">connective tissue</span> of the group.
            </h2>
          </div>
          <p className="max-w-md text-slate-600">Five subsidiary businesses bind our primary verticals into a single, regenerative export engine — each one quietly compounding the others.</p>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-5">
          {/* Featured big card */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-7 group relative h-[460px] rounded-[28px] overflow-hidden hairline shine">
            <img src={NODES[0].img} alt={NODES[0].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.6s] group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/40 to-transparent" />
            <div className="absolute top-6 left-6 right-6 flex justify-between">
              <span className="glass rounded-full px-3 py-1 text-[10px] tracking-[0.25em] uppercase text-navy-800 font-mono-display">{NODES[0].tag}</span>
              <span className="h-10 w-10 rounded-full bg-white/90 grid place-items-center text-navy-800 group-hover:bg-emerald2-500 group-hover:text-white transition-all group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
            <div className="absolute bottom-0 inset-x-0 p-7 lg:p-9 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl glass-dark border border-white/20 grid place-items-center text-emerald2-300"><Bird className="h-5 w-5" /></div>
                <h3 className="font-display text-3xl lg:text-4xl tracking-tight">{NODES[0].title}</h3>
              </div>
              <p className="max-w-xl text-white/85 text-[15px] leading-relaxed">{NODES[0].desc}</p>
              <div className="mt-5 inline-flex items-center gap-5 pt-4 border-t border-white/15">
                <div>
                  <div className="font-display text-3xl gradient-gold">{NODES[0].metric}</div>
                  <div className="text-[10px] tracking-[0.22em] uppercase text-white/60 font-mono-display">{NODES[0].metricLabel}</div>
                </div>
                <div className="text-[11px] tracking-[0.22em] uppercase text-emerald2-300 font-mono-display border-l border-white/15 pl-5">Featured Program</div>
              </div>
            </div>
          </motion.div>

          {/* Right column: 2 stacked cards */}
          <div className="col-span-12 lg:col-span-5 grid grid-cols-1 gap-5">
            {[NODES[1], NODES[2]].map((n, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
                className="group relative h-[218px] rounded-[24px] overflow-hidden hairline">
                <img src={n.img} alt={n.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/55 to-navy-900/15" />
                <div className="relative h-full p-6 flex flex-col justify-between text-white">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-9 w-9 rounded-lg glass-dark border border-white/20 grid place-items-center text-emerald2-300"><n.icon className="h-4 w-4" /></div>
                      <span className="text-[10px] tracking-[0.22em] uppercase text-white/70 font-mono-display">{n.tag}</span>
                    </div>
                    <span className="h-8 w-8 rounded-full bg-white/15 grid place-items-center group-hover:bg-emerald2-500 group-hover:rotate-45 transition-all">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl lg:text-2xl tracking-tight">{n.title}</h3>
                    <div className="mt-2 flex items-end justify-between">
                      <p className="text-[12.5px] text-white/75 max-w-xs leading-snug line-clamp-2 pr-3">{n.desc}</p>
                      <div className="text-right shrink-0">
                        <div className="font-display text-2xl gradient-gold">{n.metric}</div>
                        <div className="text-[9px] tracking-[0.2em] uppercase text-white/60 font-mono-display">{n.metricLabel}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom row: 2 wider cards */}
          {[NODES[3], NODES[4]].map((n, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
              className="col-span-12 md:col-span-6 group relative h-[300px] rounded-[24px] overflow-hidden hairline">
              <img src={n.img} alt={n.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.6s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/30 to-transparent" />
              <div className="relative h-full p-7 flex flex-col justify-between text-white">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-xl glass-dark border border-white/20 grid place-items-center text-emerald2-300"><n.icon className="h-5 w-5" /></div>
                    <span className="text-[10px] tracking-[0.22em] uppercase text-white/70 font-mono-display">{n.tag}</span>
                  </div>
                  <span className="h-9 w-9 rounded-full bg-white/15 grid place-items-center group-hover:bg-emerald2-500 group-hover:rotate-45 transition-all">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl lg:text-3xl tracking-tight max-w-md">{n.title}</h3>
                  <div className="mt-3 flex items-end justify-between gap-4">
                    <p className="text-[13px] text-white/80 max-w-md leading-relaxed">{n.desc}</p>
                    <div className="text-right shrink-0">
                      <div className="font-display text-2xl gradient-gold">{n.metric}</div>
                      <div className="text-[9px] tracking-[0.2em] uppercase text-white/60 font-mono-display">{n.metricLabel}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* connective diagram */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
          className="mt-12 glass rounded-3xl p-7 lg:p-9">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <div className="lg:w-72 shrink-0">
              <div className="text-[10px] tracking-[0.3em] uppercase text-slate-500 font-mono-display">Integrated Loop</div>
              <div className="mt-2 font-display text-2xl text-navy-900">How the subsidiaries reinforce each other</div>
            </div>
            <div className="flex-1 flex items-center gap-2 overflow-x-auto pb-1">
              {['Poultry','Pest Control','Plantations','Eggs · Meat','Cold Chain','Congo Logistics','Global Markets'].map((s, i, arr) => (
                <div key={s} className="flex items-center gap-2 min-w-fit">
                  <div className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <span className="text-[12.5px] font-medium text-navy-900 whitespace-nowrap">{s}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <svg width="28" height="10"><line x1="0" y1="5" x2="28" y2="5" stroke="url(#sg)" strokeWidth="1.5" strokeDasharray="3 3" />
                      <defs><linearGradient id="sg" x1="0" x2="1"><stop offset="0" stopColor="#0a2a5e" stopOpacity="0.3"/><stop offset="1" stopColor="#10b981" stopOpacity="0.85"/></linearGradient></defs>
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
