'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { MoveRight, PlayCircle, Volume2, VolumeX, Maximize, ChevronRight, Users, Handshake, Globe2, Leaf } from 'lucide-react'
import Video from 'next-video'
import bannerVideo from '/videos/caysonflorancebanner3.mp4'

/* ─── Animated count-up ─── */
function AnimatedCounter({ value }) {
  const match = value.match(/^(\d+)(.*)$/)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  const target = match ? parseInt(match[1], 10) : 0
  const suffix = match ? match[2] : ''
  const isNumeric = !!match

  useEffect(() => {
    if (!isInView || !isNumeric || hasAnimated.current) return
    hasAnimated.current = true
    const duration = 2000
    const startTime = performance.now()
    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4)
    let raf
    const animate = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.round(easeOutQuart(progress) * target))
      if (progress < 1) raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [isInView, isNumeric, target])

  if (!isNumeric) return <span ref={ref}>{value}</span>
  return <span ref={ref}>{count}{suffix}</span>
}

/* ─── Sectors ─── */
const SECTORS = [
  {
    id: '01',
    label: 'Agriculture &\nPlantations',
    icon: <Leaf className="w-5 h-5" strokeWidth={1.5} />
  },
  {
    id: '02',
    label: 'Dairy, Livestock\n& Poultry',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 3c-1.5 0-2.5 1-3 2.5a4.5 4.5 0 0 0-4.5 4.5v1l-2 3v3h19v-3l-2-3v-1A4.5 4.5 0 0 0 15 5.5C14.5 4 13.5 3 12 3z" /><path d="M9 14h6" /><path d="M12 14v4" /></svg>
  },
  {
    id: '03',
    label: 'Food Processing\n& Beverages',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M7 3h10M9 3v18M15 3v18M7 21h10" /><path d="M7 10h10" /></svg>
  },
  {
    id: '04',
    label: 'Infrastructure &\nReal Estate',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-5h6v5M10 11h4M10 15h4" /></svg>
  },
  {
    id: '05',
    label: 'Renewable Energy\n& Industry',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
  },
  {
    id: '06',
    label: 'International Trade\n& Logistics',
    icon: <Globe2 className="w-5 h-5" strokeWidth={1.5} />
  },
];

/* ─── Stats ─── */
const STATS = [
  {
    number: '09+',
    label: 'Business Sectors',
    icon: <Users className="w-5 h-5" strokeWidth={1.5} />
  },
  {
    number: '500+',
    label: 'Projects & Partnerships',
    icon: <Handshake className="w-5 h-5" strokeWidth={1.5} />
  },
  {
    number: 'Global',
    label: 'Presence & Reach',
    icon: <Globe2 className="w-5 h-5" strokeWidth={1.5} />
  },
  {
    number: '100%',
    label: 'Commitment to Sustainability',
    icon: <Leaf className="w-5 h-5" strokeWidth={1.5} />
  }
];

export default function HeroSection() {
  const [activeSector, setActiveSector] = useState(0);
  const [progress, setProgress] = useState(0);
  const [muted, setMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const DURATION = 3500;
  const INTERVAL = 50;

  useEffect(() => {
    let elapsed = 0;
    const timer = setInterval(() => {
      elapsed += INTERVAL;
      setProgress(elapsed / DURATION);
      if (elapsed >= DURATION) {
        elapsed = 0;
        setActiveSector((prev) => (prev + 1) % SECTORS.length);
      }
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [activeSector]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      sectionRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <section ref={sectionRef} className="relative w-full h-screen flex flex-col overflow-hidden bg-black" aria-label="Hero">
      {/* ── Background Video ── */}
      <div className="absolute inset-0 z-0 bg-black">
        <Video
          src={bannerVideo}
          autoPlay="muted"
          loop
          poster="/placeholder/image.png"
          muted
          playsInline
          controls={false}
          className="w-full h-full object-cover object-center"
        />

        {/* Gradient overlays optimized for video visibility */}
        {/* Deep shadow on the left for text, completely clear on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/38 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/0 pointer-events-none" />

        {/* Subtle CSS noise overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
        />
      </div>

      {/* ── Main Content Container ── */}
      <div className="relative z-10 flex flex-col justify-between h-full w-full max-w-7xl mx-auto px-6 lg:px-10">

        {/* Top Area: Text, Compact Stats & CTAs */}
        <div className="flex-1 flex flex-col justify-end max-w-3xl pt-24 pb-8">

          {/* Minimalist Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="relative flex items-center justify-center w-2.5 h-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#4ade80]"></span>
            </div>
            <span className="uppercase tracking-[0.2em] text-[10px] sm:text-[11px] font-semibold text-white/70">
              Enriching Lives Beyond Boundaries
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="font-display text-[2.75rem] sm:text-[3.75rem] lg:text-[4.75rem] leading-[1.05] tracking-tight text-white mb-6"
          >
            Creating Impact.<br />
            Across Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-[#22c55e]">Industry.</span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-white/80 text-sm sm:text-base lg:text-lg max-w-2xl mb-8 leading-relaxed font-light"
          >
            From agriculture and food to infrastructure, technology and global trade, we create integrated solutions that connect industries, empower people and build a more sustainable future.
          </motion.p>

          {/* Compact Stats (Integrated to reduce congestion) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="flex flex-wrap items-center gap-x-8 gap-y-5 mb-10 border-l border-[#4ade80]/30 pl-4 sm:pl-6"
          >
            {STATS.map(stat => (
              <div key={stat.label} className="flex flex-col justify-center">
                <span className="font-display text-xl sm:text-2xl text-white font-medium leading-tight">
                  <AnimatedCounter value={stat.number} />
                </span>
                <span className="text-[10px] text-white/50 uppercase tracking-wider font-semibold mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-wrap items-center gap-5 sm:gap-8"
          >
            <Link href="/#sectors" className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-black text-sm font-semibold overflow-hidden transition-all hover:scale-105">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#4ade80] to-[#22c55e] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Explore Our World</span>
              <MoveRight className="relative z-10 w-4 h-4 group-hover:text-white transition-colors duration-300 group-hover:translate-x-1" />
            </Link>

            <button onClick={() => setShowModal(true)} className="group inline-flex items-center gap-3 text-white text-sm font-medium transition-all hover:text-[#4ade80]">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#4ade80]/50 transition-colors bg-white/5 backdrop-blur-md">
                <PlayCircle className="w-4 h-4 text-white group-hover:text-[#4ade80] transition-colors" />
              </div>
              <span className="tracking-wide">Watch Our Story</span>
            </button>
          </motion.div> */}
        </div>

        {/* Bottom Area: Ultra-Minimal Timeline */}

      </div>

      {/* ── Image Modal ── */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl mx-4 aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl relative border border-white/10"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 border border-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all hover:scale-105 backdrop-blur-md"
              >
                ✕
              </button>
              <Video
                src={bannerVideo}
                autoPlay
                controls
                playsInline
                className="w-full h-full object-cover bg-black"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
