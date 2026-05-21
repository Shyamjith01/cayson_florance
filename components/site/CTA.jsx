'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, Mail, Phone } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="relative py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
          className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-emerald2-900 via-emerald2-800 to-navy-900 p-10 lg:p-20 text-white">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-emerald2-500/25 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gold-400/15 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

          <div className="relative grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase font-mono-display text-emerald2-300">
                <span className="h-px w-8 bg-emerald2-300" /> Partner With Us
              </div>
              <h3 className="mt-6 font-display text-4xl lg:text-6xl tracking-[-0.02em] leading-[1.02]">
                Let's build the future of <span className="gradient-gold">functional nutrition</span> — together.
              </h3>
              <p className="mt-6 text-emerald2-100/80 text-lg max-w-2xl">For investors, distribution partners, Startup India ecosystem collaborators and large-format retailers — we're opening Phase 1 conversations now.</p>
              <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-emerald2-100/80">
                <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> hello@caysonflorance.in</span>
                <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> +91 · Ernakulam, Kerala</span>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link href="/products" className="group inline-flex items-center justify-between gap-3 rounded-full bg-white text-emerald2-900 px-7 py-4 text-sm font-medium shine hover:bg-emerald2-500 hover:text-white transition-all">
                <span>Explore Innovative Products</span>
                <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition" />
              </Link>
              <a href="#about" className="group inline-flex items-center justify-between gap-3 rounded-full glass-dark border border-white/15 text-white px-7 py-4 text-sm font-medium hover:border-white/40 transition-all">
                <span>Request a Briefing</span>
                <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
