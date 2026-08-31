'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

const BENEFITS = [
  'End-to-end integrated solutions',
  'Global Partnerships',
  'Innovation & Technology',
  'Quality & Excellence',
  'Sustainability First',
  'Community Empowerment',
]

function CheckIcon() {
  return (
    <span className="h-5 w-5 rounded-full bg-[#EAF1EB] flex items-center justify-center shrink-0">
      <svg className="w-3 h-3 text-[#064B3B]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    </span>
  )
}

export default function WhyCaysonSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F8F7F2]" aria-labelledby="why-cayson-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left — Text */}
          <div>
            <motion.div {...fadeUp(0)} className="flex items-center gap-2 mb-4">
              <span className="h-px w-6 bg-[#064B3B]" />
              <span className="text-[11px] tracking-[0.22em] uppercase font-mono-display text-[#064B3B] font-semibold">
                Why Cayson Florance?
              </span>
            </motion.div>

            <motion.h2
              {...fadeUp(0.1)}
              id="why-cayson-heading"
              className="font-display text-3xl lg:text-4xl text-[#1F2926] leading-tight mb-6"
            >
              Driven by{' '}
              <span className="text-[#064B3B]">purpose.</span>{' '}
              Committed to{' '}
              <span className="text-[#064B3B]">impact.</span>
            </motion.h2>

            <motion.div {...fadeUp(0.2)} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {BENEFITS.map((b) => (
                <div key={b} className="flex items-center gap-2.5">
                  <CheckIcon />
                  <span className="text-[13.5px] text-[#1F2926] font-medium">{b}</span>
                </div>
              ))}
            </motion.div>

            <motion.div {...fadeUp(0.3)}>
              <Link
                href="/#about"
                className="inline-flex items-center gap-2 rounded-full border border-[#064B3B] text-[#064B3B] text-sm font-medium px-5 py-2.5 hover:bg-[#064B3B] hover:text-white transition-all duration-300 group"
              >
                Our Story
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
              </Link>
            </motion.div>
          </div>

          {/* Right — Video Card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl overflow-hidden aspect-[4/3] group cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=900&q=85&auto=format&fit=crop"
              alt="Dense green forest with winding river — Rooted in nature"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#064B3B]/65 via-[#064B3B]/25 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#064B3B]/60 via-transparent to-transparent" />

            {/* Text overlay */}
            <div className="absolute bottom-0 left-0 p-7 max-w-xs">
              <h3 className="font-display text-xl text-white leading-snug mb-2">
                Rooted in nature. Focused on the future.
              </h3>
              <p className="text-white/75 text-sm leading-relaxed">
                We combine natural resources, advanced technologies and responsible practices to create a better tomorrow.
              </p>
            </div>

            {/* Play button */}
            <button
              className="absolute right-7 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 animate-pulse-ring"
              aria-label="Watch video"
            >
              <Play className="h-5 w-5 text-[#064B3B] ml-0.5" fill="currentColor" aria-hidden="true" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
