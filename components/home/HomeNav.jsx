'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Sectors', href: '/#sectors' },
  { label: 'Products', href: '/products' },
  { label: 'Sustainability', href: '/#sustainability' },
  { label: 'Insights', href: '/#insights' },
  { label: 'Contact Us', href: '/#contact' },
]

export default function HomeNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const path = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    fn()
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [path])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed top-0 inset-x-0 z-50"
      role="banner"
    >
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E5E6E1]'
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-[70px]">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group shrink-0"
              aria-label="Cayson Florance International — Home"
            >
              <Image
                src="/logo/logo.svg"
                alt="Cayson Florance International logo"
                width={40}
                height={40}
                className="h-9 w-9 object-contain"
                priority
              />
              <div className="leading-tight">
                <div className="font-display text-[11px] lg:text-[12px] tracking-tight text-[#064B3B] font-semibold uppercase leading-none">
                  Cayson Florance
                </div>
                <div className="text-[8px] lg:text-[9px] tracking-[0.14em] uppercase text-[#2E6B57]/70 font-mono-display leading-tight mt-0.5">
                  International Pvt. Ltd.
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
              {LINKS.map((l) => {
                const active = l.href === '/' ? path === '/' : false
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    aria-current={active ? 'page' : undefined}
                    className={`relative px-3 py-2 text-[13px] font-medium transition-colors group ${
                      active
                        ? 'text-[#064B3B]'
                        : 'text-[#1F2926] hover:text-[#064B3B]'
                    }`}
                  >
                    {l.label}
                    <span
                      aria-hidden="true"
                      className={`absolute left-3 right-3 -bottom-0.5 h-[1.5px] bg-[#064B3B] transition-transform duration-300 origin-left ${
                        active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </Link>
                )
              })}
            </nav>

            {/* Right CTA */}
            <div className="flex items-center gap-3">
              <Link
                href="/#contact"
                className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#064B3B] text-white text-[12.5px] font-medium px-5 py-2.5 hover:bg-[#03372C] transition-all duration-300 group"
                aria-label="Get in touch with Cayson Florance"
              >
                Get in Touch
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
              </Link>

              {/* Mobile toggle */}
              <button
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                aria-controls="home-mobile-nav"
                aria-label={open ? 'Close menu' : 'Open menu'}
                className="lg:hidden h-10 w-10 grid place-items-center rounded-xl border border-[#E5E6E1] focus:outline-none focus:ring-2 focus:ring-[#064B3B]"
              >
                {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="home-mobile-nav"
            role="navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-b border-[#E5E6E1] px-6 pb-4 flex flex-col gap-1"
          >
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm text-[#1F2926] hover:text-[#064B3B] hover:bg-[#EAF1EB] rounded-lg transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#064B3B] text-white text-sm px-5 py-2.5 hover:bg-[#03372C] transition-all"
            >
              Get in Touch <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
