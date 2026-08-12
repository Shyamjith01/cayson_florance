'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, Mail, Phone } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" aria-labelledby="cta-heading" className="relative py-12 sm:py-20 lg:py-24 mt-3 sm:mt-5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-gradient-to-br from-emerald2-900 via-emerald2-800 to-navy-900 p-6 sm:p-10 lg:p-20 text-white"
        >
          {/* Decorative blobs */}
          <div aria-hidden="true" className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-[250px] sm:w-[400px] lg:w-[500px] h-[250px] sm:h-[400px] lg:h-[500px] rounded-full bg-emerald2-500/25 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-[250px] sm:w-[400px] lg:w-[500px] h-[250px] sm:h-[400px] lg:h-[500px] rounded-full bg-gold-400/15 blur-3xl pointer-events-none" />
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

          <div className="relative grid lg:grid-cols-12 gap-6 sm:gap-10 items-end">
            <div className="lg:col-span-8">
              <p className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase font-mono-display text-emerald2-300">
                <span aria-hidden="true" className="h-px w-8 bg-emerald2-300" /> Partner With Us
              </p>
              <h2
                id="cta-heading"
                className="mt-4 sm:mt-6 font-display text-2xl sm:text-3xl lg:text-6xl tracking-[-0.02em] leading-[1.1] sm:leading-[1.02]"
              >
                Let's build the future of{' '}
                <span className="gradient-gold">functional nutrition</span> — together.
              </h2>
              <p className="mt-4 sm:mt-6 text-emerald2-100/80 text-sm sm:text-base lg:text-lg max-w-2xl">
                For investors, distribution partners, Startup India ecosystem collaborators and large-format
                retailers — we're opening Phase 1 conversations now.
              </p>
              <div className="mt-5 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-5 text-xs sm:text-sm text-emerald2-100/80 relative z-20">
                <a
                  href="mailto:support@caysonflorance.com"
                  aria-label="Send an email to support@caysonflorance.com"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail aria-hidden="true" className="h-4 w-4" />
                  support@caysonflorance.com
                </a>
                <a
                  href="tel:+919833662866"
                  aria-label="Call Cayson Florance at +91 9833662866"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone aria-hidden="true" className="h-4 w-4" />
                  +91 9833662866
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                href="/products"
                className="group inline-flex items-center justify-between gap-3 rounded-full bg-white text-emerald2-900 px-5 sm:px-7 py-3 sm:py-4 text-xs sm:text-sm font-medium shine hover:bg-emerald2-500 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald2-900"
              >
                <span>Explore Innovative Products</span>
                <ArrowUpRight aria-hidden="true" className="h-4 w-4 group-hover:rotate-45 transition" />
              </Link>
              <a
                href="/#about"
                className="group inline-flex items-center justify-between gap-3 rounded-full glass-dark border border-white/15 text-white px-5 sm:px-7 py-3 sm:py-4 text-xs sm:text-sm font-medium hover:border-white/40 transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Request a briefing — learn more about Cayson Florance"
              >
                <span>Request a Briefing</span>
                <ArrowUpRight aria-hidden="true" className="h-4 w-4 group-hover:rotate-45 transition" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
