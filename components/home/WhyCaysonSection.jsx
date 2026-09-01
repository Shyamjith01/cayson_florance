'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRef, useState, useCallback } from 'react'
import { ArrowRight, Play, Pause } from 'lucide-react'

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
    <span className="h-5 w-5 rounded-full bg-[#064B3B] flex items-center justify-center shrink-0">
      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    </span>
  )
}

export default function WhyCaysonSection() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const togglePlayPause = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }, [])

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F8F7F2]" aria-labelledby="why-cayson-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-4 items-center">

          {/* Left — Text */}
          <div>
            <motion.p {...fadeUp(0)} className="text-[11px] tracking-[0.22em] uppercase font-semibold text-[#064B3B] mb-5">
              Why Cayson Florance?
            </motion.p>

            <motion.h2
              {...fadeUp(0.1)}
              id="why-cayson-heading"
              className="text-[#1F2926] leading-[1.15] mb-5 text-3xl lg:text-[2.6rem]"
            >
              <span className="font-display">Driven by </span>
              <em className="font-display  text-primary">purpose.</em>
              <br />
              <span className="font-display">Committed to </span>
              <em className="font-display  text-primary">impact.</em>
            </motion.h2>

            <motion.p
              {...fadeUp(0.15)}
              className="text-[#4A5550] text-[15px] leading-relaxed mb-8 max-w-md"
            >
              We combine natural resources, advanced technologies and
              responsible practices to build resilient solutions that
              create a better tomorrow.
            </motion.p>

            <motion.div {...fadeUp(0.2)} className="grid grid-cols-2 gap-x-8 gap-y-3 mb-10">
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
                className="inline-flex items-center gap-2.5 rounded-full bg-[#064B3B] text-white text-sm font-medium px-7 py-3 hover:bg-[#053229] transition-all duration-300 group shadow-sm"
              >
                Discover Our Story
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
              </Link>
            </motion.div>
          </div>

          {/* Right — Video Card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[20px] overflow-hidden aspect-[4/3] lg:aspect-[5/3.5] group cursor-pointer"
            onClick={togglePlayPause}
          >
            {/* Streaming video background */}
            <video
              ref={videoRef}
              src="/api/video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Layered overlays for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A2E23]/70 via-[#0A2E23]/35 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A2E23]/25 to-[#0A2E23]/15 pointer-events-none" />
            <div className="absolute inset-0 bg-[#0A2E23]/10 pointer-events-none" />

            {/* Content layout — flex row for text left, play right */}
            <div className="absolute inset-0 flex items-start justify-between p-8 lg:p-10 pointer-events-none">

              {/* Text — top-left */}
              <div className="max-w-[300px] pt-2">
                <h3 className="font-display text-[22px] lg:text-[26px] text-white leading-[1.25] font-semibold mb-4">
                  Rooted in nature.
                  <br />
                  Focused on the future.
                </h3>
                <p className="text-white/75 text-[13px] lg:text-sm leading-relaxed">
                  We operate with a long-term vision to
                  create lasting value for people,
                  businesses and the planet.
                </p>
              </div>

              {/* Controls — bottom-right */}
              <div className="flex flex-col items-start gap-3 self-end pointer-events-auto">
                {/* Play / Pause button */}
                <button
                  onClick={(e) => { e.stopPropagation(); togglePlayPause() }}
                  className="relative h-16 w-16 rounded-full bg-white/95 backdrop-blur flex items-center justify-center shadow-xl hover:bg-white transition-all duration-300 hover:scale-110 ring-[3px] ring-white/30 ring-offset-0"
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5 text-[#064B3B]" fill="currentColor" aria-hidden="true" />
                  ) : (
                    <Play className="h-5 w-5 text-[#064B3B] ml-0.5" fill="currentColor" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

