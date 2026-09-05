'use client'
import Link from 'next/link'
import Image from 'next/image'

const COMPANY_LINKS = [
  { href: '#', label: 'About Us' },
  { href: '#', label: 'Our Story' },
  { href: '#', label: 'Leadership' },
  { href: '#', label: 'Careers' },
]

const SECTOR_LINKS = [
  { href: '#', label: 'All Sectors' },
  { href: '/agriculture', label: 'Agriculture' },
  { href: '#', label: 'Infrastructure' },
  { href: '#', label: 'Renewable Energy' },
  { href: '#', label: 'Food & Beverages' },
]

const RESOURCE_LINKS = [
  { href: '#', label: 'Insights' },
  { href: '#', label: 'Sustainability' },
  { href: '#', label: 'Media Center' },
  { href: '#', label: 'Reports & Downloads' },
]

const SOCIAL_ICONS = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
]

/* Minimal world map SVG for footer */
function MiniWorldMap() {
  return (
    <div className="relative">
      <svg viewBox="0 0 300 180" className="w-full opacity-20" aria-hidden="true">
        <path d="M30 50 L80 40 L100 55 L110 75 L95 95 L80 105 L60 100 L40 85 Z" fill="none" stroke="#064B3B" strokeWidth="1.5" />
        <path d="M60 110 L85 100 L95 115 L100 145 L88 165 L75 168 L62 155 L55 135 Z" fill="none" stroke="#064B3B" strokeWidth="1.5" />
        <path d="M135 35 L160 30 L170 45 L165 62 L150 67 L138 60 Z" fill="none" stroke="#064B3B" strokeWidth="1.5" />
        <path d="M138 70 L165 63 L178 75 L182 105 L172 135 L158 145 L143 140 L135 115 L130 90 Z" fill="none" stroke="#064B3B" strokeWidth="1.5" />
        <path d="M165 34 L215 28 L245 40 L255 58 L248 72 L228 78 L205 75 L185 68 L170 58 Z" fill="none" stroke="#064B3B" strokeWidth="1.5" />
        <path d="M195 74 L218 69 L228 80 L232 105 L222 130 L208 138 L196 133 L188 110 Z" fill="none" stroke="#064B3B" strokeWidth="1.5" />
        <path d="M240 100 L275 93 L290 110 L292 138 L278 155 L255 155 L240 140 L235 120 Z" fill="none" stroke="#064B3B" strokeWidth="1.5" />
        <circle cx="197" cy="95" r="3.5" fill="#064B3B" opacity="0.7" />
      </svg>
      <p className="text-center text-[10px] font-mono-display text-[#66706C] tracking-[0.18em] uppercase mt-2">
        Global Presence · Local Impact
      </p>
    </div>
  )
}

export default function HomeFooter() {
  const year = new Date().getFullYear()

  function scrollToTop() {
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-white border-t border-[#E5E6E1]" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-14 pb-8">

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-10 mb-12">

          {/* Column 1 — Brand */}
          <div className="xl:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-3 group mb-5"
              aria-label="Cayson Florance International — Home"
            >
              <Image
                src="/logo/logo.webp"
                alt="Cayson Florance logo"
                width={38}
                height={38}
                className="h-9 w-9 object-contain"
              />
              <div>
                <div className="font-display text-[11px] tracking-tight text-[#064B3B] font-semibold uppercase leading-none">
                  Cayson Florance International
                </div>
                <div className="text-[8.5px] tracking-[0.14em] uppercase text-[#2E6B57]/70 font-mono-display mt-0.5">
                  Private Limited
                </div>
              </div>
            </Link>

            <p className="text-[#66706C] text-[13px] leading-relaxed mb-5 max-w-xs">
              Building integrated solutions across industries for a sustainable and prosperous future.
            </p>

            {/* Social icons */}
            <div className="flex gap-2" aria-label="Social media">
              {SOCIAL_ICONS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="h-8 w-8 rounded-full border border-[#E5E6E1] flex items-center justify-center text-[#66706C] hover:text-[#064B3B] hover:border-[#064B3B] transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Company */}
          <nav aria-label="Company links">
            <h3 className="text-[11px] tracking-[0.2em] uppercase font-mono-display text-[#1F2926] font-semibold mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="text-[13px] text-[#66706C] hover:text-[#064B3B] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3 — Sectors */}
          <nav aria-label="Sector links">
            <h3 className="text-[11px] tracking-[0.2em] uppercase font-mono-display text-[#1F2926] font-semibold mb-4">
              Sectors
            </h3>
            <ul className="space-y-2.5">
              {SECTOR_LINKS.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="text-[13px] text-[#66706C] hover:text-[#064B3B] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4 — Resources */}
          <nav aria-label="Resource links">
            <h3 className="text-[11px] tracking-[0.2em] uppercase font-mono-display text-[#1F2926] font-semibold mb-4">
              Resources
            </h3>
            <ul className="space-y-2.5">
              {RESOURCE_LINKS.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="text-[13px] text-[#66706C] hover:text-[#064B3B] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 5 — Contact */}
          <div>
            <h3 className="text-[11px] tracking-[0.2em] uppercase font-mono-display text-[#1F2926] font-semibold mb-4">
              Contact
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:info@caysonflorance.com"
                  className="text-[13px] text-[#66706C] hover:text-[#064B3B] transition-colors break-all"
                >
                  info@caysonflorance.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919831000400"
                  className="text-[13px] text-[#66706C] hover:text-[#064B3B] transition-colors"
                >
                  +91 983 100 0400
                </a>
              </li>
              <li className="text-[13px] text-[#66706C] leading-relaxed">
                Kochi, Kerala, India
              </li>
            </ul>
          </div>

        </div>

        {/* Mini world map */}
        <div className="hidden xl:block mb-8">
          <div className="max-w-[220px] ml-auto">
            <MiniWorldMap />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[#E5E6E1] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-[#66706C]">
            © {year} Cayson Florance International Private Limited. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[11px] text-[#064B3B] font-medium hover:gap-2.5 transition-all"
            aria-label="Back to top"
          >
            Back to Top
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </button>
        </div>

      </div>
    </footer>
  )
}
