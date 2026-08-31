'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

/* Decorative leaf SVG */
function LeafDecor({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M100 280 C60 220 20 180 10 120 C0 60 40 10 100 20 C160 10 200 60 190 120 C180 180 140 220 100 280Z"
        fill="white"
        fillOpacity="0.06"
      />
      <path
        d="M100 260 C70 210 40 175 32 125 C24 75 55 35 100 42 C145 35 176 75 168 125 C160 175 130 210 100 260Z"
        fill="white"
        fillOpacity="0.04"
      />
      <path
        d="M100 280 L100 40"
        stroke="white"
        strokeOpacity="0.08"
        strokeWidth="1"
        strokeDasharray="4 4"
      />
    </svg>
  )
}

export default function CTASection() {
  return (
    <section id="contact" className="py-16 lg:py-20 bg-[#F8F7F2]" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden bg-[#064B3B] px-8 py-14 lg:px-20 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          {/* Left leaf decor */}
          <LeafDecor className="absolute left-0 top-0 h-full w-28 opacity-80" />
          {/* Right leaf decor */}
          <LeafDecor className="absolute right-0 top-0 h-full w-28 opacity-80 scale-x-[-1]" />

          {/* Subtle background texture */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
              backgroundSize: '28px 28px',
            }}
          />

          {/* Text */}
          <div className="relative text-center lg:text-left max-w-2xl">
            <h2
              id="cta-heading"
              className="font-display text-3xl lg:text-4xl xl:text-5xl text-white leading-[1.15] tracking-tight"
            >
              Let's build a better,{' '}
              <span className="italic">more sustainable</span> world together.
            </h2>
          </div>

          {/* Button */}
          <div className="relative shrink-0">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-white text-[#064B3B] text-[15px] font-semibold px-8 py-4 hover:bg-[#F8F7F2] transition-all duration-300 group shadow-lg"
            >
              Partner With Us
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
