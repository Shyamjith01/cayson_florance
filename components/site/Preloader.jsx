'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden'
    
    const duration = 2500
    const startTime = Date.now()

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progressRatio = Math.min(1, elapsed / duration)
      
      // Easing function for smoother progress
      const easeOutQuart = 1 - Math.pow(1 - progressRatio, 4)
      const currentProgress = Math.min(100, Math.floor(easeOutQuart * 100))
      
      setProgress(currentProgress)

      if (progressRatio >= 1) {
        clearInterval(timer)
        setTimeout(() => {
          setIsLoading(false)
          document.body.style.overflow = 'auto'
        }, 500)
      }
    }, 20)

    return () => {
      clearInterval(timer)
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020A0A]"
          style={{
            backgroundImage: `radial-gradient(
              ellipse at 50% 45%,
              rgba(10, 71, 52, 0.28) 0%,
              rgba(3, 17, 15, 0.7) 45%,
              transparent 100%
            )`
          }}
        >
          <div className="flex flex-col items-center text-center max-w-2xl px-6 w-full">
            
            {/* Top Eyebrow */}
            <div className="flex items-center gap-5 mb-6">
              <span className="text-[11px] sm:text-[12px] tracking-[0.3em] font-sans uppercase text-[#9BA9A5] font-medium">
                Innovate
              </span>
              <span className="w-1 h-1 rounded-full bg-[#6F817C]/50" />
              <span className="text-[11px] sm:text-[12px] tracking-[0.3em] font-sans uppercase text-[#9BA9A5] font-medium">
                Sustain
              </span>
              <span className="w-1 h-1 rounded-full bg-[#6F817C]/50" />
              <span className="text-[11px] sm:text-[12px] tracking-[0.3em] font-sans uppercase text-[#9BA9A5] font-medium">
                Impact
              </span>
            </div>

            {/* Separator line */}
            <div className="w-16 h-[1.5px] bg-[#117A58] mb-10" />

            {/* Circular Progress Indicator */}
            <div className="relative flex items-center justify-center w-[200px] h-[200px] mb-12">
              {/* SVG Circle Background & Clip */}
              <svg width="200" height="200" viewBox="0 0 200 200" className="-rotate-90 absolute inset-0 z-10">
                <defs>
                  <mask id="progress-mask">
                    <circle
                      cx="100" cy="100" r="80"
                      fill="transparent"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray={2 * Math.PI * 80}
                      strokeDashoffset={2 * Math.PI * 80 - (2 * Math.PI * 80 * progress) / 100}
                    />
                  </mask>
                </defs>
                {/* Background Track */}
                <circle
                  cx="100" cy="100" r="80"
                  fill="transparent"
                  stroke="#17302B"
                  strokeWidth="2"
                />
              </svg>
              
              {/* Conic Gradient Progress */}
              <div 
                className="absolute inset-0 z-20"
                style={{
                  background: `conic-gradient(from 0deg, #17302B 0deg, #0A4734 ${Math.max(0.1, progress * 3.6 * 0.4)}deg, #117A58 ${Math.max(0.1, progress * 3.6 * 0.7)}deg, #1AB168 ${Math.max(0.1, progress * 3.6 * 0.9)}deg, #4EDB9A ${Math.max(0.1, progress * 3.6)}deg, transparent ${Math.max(0.1, progress * 3.6)}deg)`,
                  WebkitMaskImage: 'url(#progress-mask)',
                  maskImage: 'url(#progress-mask)'
                }}
              />
              
              {/* Rotating Thumb Container */}
              <div 
                className="absolute inset-0"
                style={{ transform: `rotate(${progress * 3.6}deg)` }}
              > 
                {/* The thumb (dot) */}
                <div 
                  className="absolute top-[20px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#D9E1DE] border-[3px] border-[#4EDB9A] shadow-[0_0_15px_rgba(26,177,104,0.6)] z-30"
                />
              </div>

              {/* Center Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pt-2 z-10">
                <div className="text-[42px] font-sans font-light text-[#D9E1DE] leading-none mb-1 tracking-tight">
                  {progress}<span className="text-[24px]">%</span>
                </div>
                <div className="text-[9px] tracking-[0.3em] font-sans uppercase text-[#6F817C] font-medium">
                  Loading
                </div>
              </div>
            </div>

            {/* Subtitle / Bottom Text */}
            <div className="text-[10px] sm:text-[11px] tracking-[0.25em] font-sans uppercase text-[#9BA9A5] font-medium mb-5">
              Loading our world of possibilities
            </div>

            <div className="text-[11px] sm:text-[12px] tracking-[0.2em] font-sans text-[#6F817C] font-medium">
              Good ideas take a moment...
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
