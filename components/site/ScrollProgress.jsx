'use client'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 22, mass: 0.2 })
  return (
    <motion.div
      style={{ scaleX: x, transformOrigin: '0% 50%' }}
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-gradient-to-r from-navy-800 via-emerald2-500 to-gold-400"
    />
  )
}
