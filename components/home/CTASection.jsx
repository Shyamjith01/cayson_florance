'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

/* Realistic leaf SVG — overlapping petals with a stem */
function LeafDecor({ className, flipped = false }) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={flipped ? { transform: 'scaleX(-1)' } : undefined}
    >
      {/* Back leaf */}
      <path
        d="M80 200 C30 155 -10 115 5 65 C18 18 65 5 90 30 C115 55 120 100 100 145 C90 170 85 185 80 200Z"
        fill="#2d7a4f"
        opacity="0.55"
      />
      {/* Front leaf */}
      <path
        d="M80 210 C50 165 20 130 28 82 C36 36 75 22 100 48 C122 72 118 118 100 158 C90 180 85 198 80 210Z"
        fill="#3a9960"
        opacity="0.7"
      />
      {/* Leaf midrib */}
      <path
        d="M80 210 C85 160 95 110 90 60"
        stroke="#2d7a4f"
        strokeOpacity="0.6"
        strokeWidth="1.2"
        fill="none"
      />
      {/* Side veins */}
      <path d="M80 175 C68 160 55 155 48 148" stroke="#2d7a4f" strokeOpacity="0.35" strokeWidth="0.8" fill="none"/>
      <path d="M83 145 C72 132 62 128 55 122" stroke="#2d7a4f" strokeOpacity="0.35" strokeWidth="0.8" fill="none"/>
      <path d="M87 115 C95 102 100 96 104 88" stroke="#2d7a4f" strokeOpacity="0.35" strokeWidth="0.8" fill="none"/>
      {/* Stem */}
      <path
        d="M80 210 C78 220 76 230 74 240"
        stroke="#2d7a4f"
        strokeOpacity="0.5"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-[#064B3B]"
      style={{ minHeight: '88px' }}
      aria-labelledby="cta-heading"
    >
      {/* Subtle dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Left leaves cluster */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-end pointer-events-none select-none" style={{ height: '130px' }}>
        <LeafDecor className="h-[110px] w-auto -translate-x-4 -rotate-12 opacity-90" />
        <LeafDecor className="h-[130px] w-auto -translate-x-10 rotate-6 opacity-80" />
        <LeafDecor className="h-[95px] w-auto -translate-x-16 rotate-20 opacity-60" />
      </div>

      {/* Right leaves cluster */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-end pointer-events-none select-none" style={{ height: '130px' }}>
        <LeafDecor flipped className="h-[95px] w-auto translate-x-16 -rotate-20 opacity-60" />
        <LeafDecor flipped className="h-[130px] w-auto translate-x-10 -rotate-6 opacity-80" />
        <LeafDecor flipped className="h-[110px] w-auto translate-x-4 rotate-12 opacity-90" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex flex-row items-center justify-between gap-6 px-32 py-7"
      >
        {/* Text */}
        <h2
          id="cta-heading"
          className="font-display text-[22px] lg:text-[26px] text-white leading-[1.25] tracking-tight"
        >
          Let's build a better,{' '}
          <br className="hidden sm:block" />
          <span className="italic">more sustainable</span> world together.
        </h2>

        {/* Button */}
        <div className="shrink-0">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2.5 rounded-full bg-white text-[#064B3B] text-[14px] font-semibold px-7 py-3 hover:bg-[#F8F7F2] transition-all duration-300 group shadow-md whitespace-nowrap"
          >
            Partner With Us
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
