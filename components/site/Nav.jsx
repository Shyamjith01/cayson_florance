'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Innovative Products', href: '/products' },
  { label: 'Impact', href: '/#impact' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const path = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    fn()
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Close menu on route change
  useEffect(() => { setOpen(false) }, [path])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 inset-x-0 z-50"
      role="banner"
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-5 mt-2 sm:mt-3">
        <div
          className={`flex items-center justify-between rounded-2xl px-3 sm:px-5 py-2.5 sm:py-3 transition-all duration-500 ${scrolled
            ? 'glass shadow-[0_10px_40px_-15px_rgba(6,78,59,0.22)]'
            : 'bg-white/55 backdrop-blur-md border border-white/50'
            }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="Cayson Florance International — Home"
          >
            <Image
              src="/logo/logo.svg"
              alt="Cayson Florance International logo"
              width={48}
              height={48}
              className="h-9 w-9 sm:h-9 sm:w-9 mt-1.5 mb-1.5 object-contain"
              priority
            />
            <div className="leading-tight">
              <div className="font-display text-[13px] sm:text-[15px] tracking-tight text-emerald2-900">
                Cayson Florance
              </div>
              <div className="text-[8px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.22em] uppercase text-emerald2-700/70 font-mono-display">
                Health · Nutrition · Agri-Tech
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {LINKS.map((l) => {
              const active =
                l.href === path || (l.href === '/' && path === '/')
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? 'page' : undefined}
                  className={`relative px-3.5 py-2 text-[13px] font-medium transition-colors group ${active
                    ? 'text-emerald2-800'
                    : 'text-slate-700 hover:text-emerald2-800'
                    }`}
                >
                  {l.label}
                  <span
                    aria-hidden="true"
                    className={`absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-emerald2-600 to-navy-700 ${active
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                      } origin-left transition-transform duration-300`}
                  />
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/products"
              className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-emerald2-700 text-white text-[12.5px] px-4 py-2 hover:bg-emerald2-800 transition-all hover:gap-2.5 group"
              aria-label="Explore our innovative health and nutrition products"
            >
              Explore Products{' '}
              <ArrowUpRight
                aria-hidden="true"
                className="h-3.5 w-3.5 group-hover:rotate-45 transition-transform"
              />
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
              className="lg:hidden h-10 w-10 grid place-items-center rounded-xl hairline focus:outline-none focus:ring-2 focus:ring-emerald2-600 focus:ring-offset-2"
            >
              {open ? (
                <X aria-hidden="true" className="h-5 w-5" />
              ) : (
                <Menu aria-hidden="true" className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-nav"
              role="navigation"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="lg:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-1"
            >
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={l.href === path ? 'page' : undefined}
                  className="px-3 py-2.5 text-sm text-slate-700 hover:bg-white/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald2-600 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/products"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-emerald2-700 text-white text-sm px-4 py-2.5 hover:bg-emerald2-800 transition-all"
              >
                Explore Products <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
