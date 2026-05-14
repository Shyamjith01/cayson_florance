'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const LINKS = [
  { label: 'Ecosystem', href: '#ecosystem' },
  { label: 'Sectors', href: '#sectors' },
  { label: 'Global Network', href: '#network' },
  { label: 'Investors', href: '#investors' },
  { label: 'Sustainability', href: '#sustainability' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    fn(); window.addEventListener('scroll', fn); return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-4'}`}
    >
      <div className={`mx-auto max-w-7xl px-5 transition-all duration-500 ${scrolled ? 'mt-2' : 'mt-3'}`}>
        <div className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${scrolled ? 'glass shadow-[0_10px_40px_-15px_rgba(10,42,94,0.25)]' : 'bg-white/40 backdrop-blur-md border border-white/40'}`}>
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative h-9 w-9">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-navy-800 via-navy-700 to-emerald2-500 rotate-3 group-hover:rotate-12 transition-transform duration-500" />
              <div className="absolute inset-[2px] rounded-[10px] bg-white flex items-center justify-center">
                <span className="font-display text-navy-800 text-lg leading-none">C<span className="text-emerald2-500">F</span></span>
              </div>
            </div>
            <div className="leading-tight">
              <div className="font-display text-[15px] tracking-tight text-navy-800">Cayson Florance</div>
              <div className="text-[10px] tracking-[0.22em] uppercase text-slate-500 font-mono-display">International</div>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {LINKS.map(l => (
              <a key={l.href} href={l.href} className="relative px-3.5 py-2 text-[13px] font-medium text-slate-700 hover:text-navy-800 transition-colors group">
                {l.label}
                <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-navy-800 to-emerald2-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href="#contact" className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-navy-800 text-white text-[12.5px] px-4 py-2 hover:bg-navy-900 transition-all hover:gap-2.5 group">
              Investor Portal <ArrowUpRight className="h-3.5 w-3.5 group-hover:rotate-45 transition-transform" />
            </a>
            <button onClick={() => setOpen(o => !o)} className="lg:hidden h-10 w-10 grid place-items-center rounded-xl hairline">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="lg:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-1">
              {LINKS.map(l => <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-3 py-2.5 text-sm text-slate-700 hover:bg-white/60 rounded-lg">{l.label}</a>)}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
