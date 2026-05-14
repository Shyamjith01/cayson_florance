'use client'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="relative py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
          className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 p-10 lg:p-20 text-white">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-emerald2-500/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gold-400/15 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

          <div className="relative grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase font-mono-display text-emerald2-400">
                <span className="h-px w-8 bg-emerald2-400" /> Partnership · Investment
              </div>
              <h3 className="mt-6 font-display text-4xl lg:text-6xl tracking-[-0.02em] leading-[1.02]">
                Architect the next era with <span className="gradient-gold">Cayson Florance</span>.
              </h3>
              <p className="mt-6 text-slate-300 text-lg max-w-2xl">For institutional investors, sovereign partners and global enterprise alliances. Confidential briefings available on request.</p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <a href="#" className="group inline-flex items-center justify-between gap-3 rounded-full bg-white text-navy-900 px-7 py-4 text-sm font-medium shine hover:bg-emerald2-500 hover:text-white transition-all">
                <span>Request Investor Deck</span>
                <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition" />
              </a>
              <a href="#" className="group inline-flex items-center justify-between gap-3 rounded-full glass-dark border border-white/15 text-white px-7 py-4 text-sm font-medium hover:border-white/40 transition-all">
                <span>Schedule a Briefing</span>
                <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
