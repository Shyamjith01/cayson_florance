'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

/* ─── SVG World Map (simplified dotted outline) ─── */
function WorldMap() {
  return (
    <div className="relative w-full h-full">
      <svg
        viewBox="0 0 900 500"
        className="w-full h-full"
        aria-label="Interactive world map showing global presence"
      >
        {/* Dotted background grid */}
        <defs>
          <pattern id="dots" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#C8D5C4" />
          </pattern>
          {/* Glow filter for pins */}
          <filter id="pinGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Map background dots */}
        <rect width="900" height="500" fill="url(#dots)" rx="16" />

        {/* Continent outlines — simplified paths */}
        {/* North America */}
        <path d="M95 95 L180 80 L220 100 L240 140 L220 180 L200 220 L180 240 L150 260 L130 240 L110 210 L90 170 L80 140 Z" fill="#D4E4CF" fillOpacity="0.6" stroke="#A8C5A0" strokeWidth="1.2" />
        {/* South America */}
        <path d="M170 265 L210 250 L230 270 L240 320 L225 380 L205 420 L185 430 L170 400 L155 360 L150 320 L155 290 Z" fill="#D4E4CF" fillOpacity="0.6" stroke="#A8C5A0" strokeWidth="1.2" />
        {/* Europe */}
        <path d="M385 75 L440 70 L460 90 L455 120 L430 130 L410 125 L395 110 L380 100 Z" fill="#D4E4CF" fillOpacity="0.6" stroke="#A8C5A0" strokeWidth="1.2" />
        {/* Africa */}
        <path d="M395 145 L450 135 L475 155 L485 200 L480 260 L465 310 L445 345 L420 350 L400 330 L385 285 L380 240 L375 200 L380 170 Z" fill="#D4E4CF" fillOpacity="0.6" stroke="#A8C5A0" strokeWidth="1.2" />
        {/* Asia */}
        <path d="M465 75 L560 65 L640 80 L680 100 L700 130 L690 160 L660 175 L620 170 L580 180 L550 165 L520 155 L495 140 L475 125 L460 110 Z" fill="#D4E4CF" fillOpacity="0.6" stroke="#A8C5A0" strokeWidth="1.2" />
        {/* India peninsula */}
        <path d="M570 165 L595 160 L610 175 L620 210 L605 250 L590 265 L575 250 L565 215 L560 185 Z" fill="#C5DAC0" fillOpacity="0.8" stroke="#A8C5A0" strokeWidth="1.2" />
        {/* Southeast Asia */}
        <path d="M650 170 L700 165 L720 180 L715 210 L695 220 L670 215 L650 200 Z" fill="#D4E4CF" fillOpacity="0.6" stroke="#A8C5A0" strokeWidth="1.2" />
        {/* Australia */}
        <path d="M670 280 L740 270 L780 290 L790 330 L775 370 L740 385 L700 380 L675 360 L660 320 L658 295 Z" fill="#D4E4CF" fillOpacity="0.6" stroke="#A8C5A0" strokeWidth="1.2" />

        {/* Connection lines */}
        <path d="M590 210 Q500 150 150 130" stroke="#064B3B" strokeWidth="1" strokeDasharray="4 3" fill="none" opacity="0.4" />
        <path d="M590 210 Q650 180 700 200" stroke="#064B3B" strokeWidth="1" strokeDasharray="4 3" fill="none" opacity="0.4" />
        <path d="M590 210 Q520 240 430 250" stroke="#064B3B" strokeWidth="1" strokeDasharray="4 3" fill="none" opacity="0.4" />
        <path d="M590 210 Q620 290 720 320" stroke="#064B3B" strokeWidth="1" strokeDasharray="4 3" fill="none" opacity="0.4" />

        {/* Location pins */}
        {/* India (Head Office) */}
        <g filter="url(#pinGlow)">
          <circle cx="590" cy="208" r="7" fill="#064B3B" />
          <circle cx="590" cy="208" r="4" fill="white" />
          <circle cx="590" cy="208" r="2" fill="#064B3B" />
        </g>
        {/* USA */}
        <g>
          <circle cx="150" cy="135" r="5" fill="#2E6B57" />
          <circle cx="150" cy="135" r="2.5" fill="white" />
        </g>
        {/* UK/Europe */}
        <g>
          <circle cx="410" cy="100" r="5" fill="#2E6B57" />
          <circle cx="410" cy="100" r="2.5" fill="white" />
        </g>
        {/* UAE */}
        <g>
          <circle cx="545" cy="165" r="5" fill="#2E6B57" />
          <circle cx="545" cy="165" r="2.5" fill="white" />
        </g>
        {/* Singapore */}
        <g>
          <circle cx="695" cy="215" r="5" fill="#2E6B57" />
          <circle cx="695" cy="215" r="2.5" fill="white" />
        </g>
        {/* Australia */}
        <g>
          <circle cx="728" cy="330" r="5" fill="#2E6B57" />
          <circle cx="728" cy="330" r="2.5" fill="white" />
        </g>
        {/* South Africa */}
        <g>
          <circle cx="430" cy="340" r="4.5" fill="#8FAF89" />
          <circle cx="430" cy="340" r="2" fill="white" />
        </g>
        {/* Brazil */}
        <g>
          <circle cx="200" cy="340" r="4.5" fill="#8FAF89" />
          <circle cx="200" cy="340" r="2" fill="white" />
        </g>
      </svg>

      {/* Floating India card */}
      <div className="absolute top-[36%] left-[60%] translate-x-2">
        <div className="bg-white rounded-xl shadow-lg border border-[#E5E6E1] px-4 py-3 min-w-[140px]">
          <div className="flex items-center gap-2 mb-1">
            <div className="h-2 w-2 rounded-full bg-[#064B3B]" />
            <span className="text-[12px] font-semibold text-[#1F2926]">India</span>
          </div>
          <p className="text-[10px] text-[#66706C] font-mono-display uppercase tracking-wide mb-1.5">Head Office</p>
          <p className="text-[10px] text-[#066B3B] font-medium">Projects · Partnerships · Impact</p>
        </div>
        {/* Connector line */}
        <div className="absolute -left-3 top-1/2 w-3 h-px bg-[#064B3B]/40" />
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl border border-[#E5E6E1] px-4 py-3 space-y-1.5">
        {[
          { color: '#064B3B', label: 'Operations' },
          { color: '#2E6B57', label: 'Partners' },
          { color: '#8FAF89', label: 'Future Expansion' },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
            <span className="text-[11px] text-[#1F2926] font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function GlobalPresenceSection() {
  return (
    <section id="sustainability" className="py-20 lg:py-28 bg-white" aria-labelledby="global-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="h-px w-6 bg-[#064B3B]" />
              <span className="text-[11px] tracking-[0.22em] uppercase font-mono-display text-[#064B3B] font-semibold">
                Global Presence
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              id="global-heading"
              className="font-display text-3xl lg:text-4xl text-[#1F2926] leading-tight mb-5"
            >
              A global network.{' '}
              <span className="text-[#064B3B]">Delivering local impact.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-[#66706C] text-[14.5px] leading-relaxed mb-8 max-w-md"
            >
              With partners and operations across continents, we are bringing sustainable solutions where they are needed most.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-[#064B3B] text-[#064B3B] text-sm font-medium px-5 py-2.5 hover:bg-[#064B3B] hover:text-white transition-all duration-300 group"
              >
                Explore Our Presence
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
              </Link>
            </motion.div>
          </div>

          {/* Right — Map */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl overflow-hidden bg-[#EAF1EB] border border-[#E5E6E1]"
            style={{ height: '360px' }}
          >
            <WorldMap />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
