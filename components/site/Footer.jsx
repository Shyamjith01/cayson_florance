import Link from 'next/link'

const EXPLORE_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Innovative Products' },
  { href: '/#impact', label: 'Our Impact' },
  { href: '/#about', label: 'About Us' },
]

const PRODUCT_LINKS = [
  { href: '/products#sprouted-grain-biscuits', label: 'Sprouted Grain Biscuits' },
  { href: '/products#virgin-coconut-oil', label: 'Virgin Coconut Oil' },
  { href: '/products#coconut-paneer', label: 'Coconut Paneer' },
  { href: '/products#coconut-water-powder', label: 'Coconut Water Powder' },
  { href: '/products#coconut-milk-cream', label: 'Coconut Milk Cream' },
  { href: '/products#pink-paradise-fizz', label: 'Pink Paradise Fizz' },
  { href: '/products#bio-active-moringa-extract', label: 'Bio-Active Moringa Extract' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative bg-white border-t border-emerald2-100"
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-10 pb-8 sm:pt-16 sm:pb-8">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              aria-label="Cayson Florance International — Home"
            >
              <div className="relative h-10 w-10" aria-hidden="true">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald2-700 via-emerald2-500 to-navy-700" />
                <div className="absolute inset-[2px] rounded-[10px] bg-white grid place-items-center">
                  <span className="font-display text-emerald2-800">
                    C<span className="text-navy-700">F</span>
                  </span>
                </div>
              </div>
              <div>
                <div className="font-display text-base sm:text-lg text-emerald2-900">
                  Cayson Florance International
                </div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-emerald2-700/70 font-mono-display">
                  Private Limited · Health · Nutrition · Agri-Tech
                </div>
              </div>
            </Link>

            <p className="mt-4 sm:mt-6 text-slate-600 text-xs sm:text-sm max-w-md leading-relaxed">
              A futuristic health, nutrition and bio-processing startup based in Ernakulam,
              Kerala — upcycling nature's finest into world-class functional foods.
            </p>

            <div className="mt-4 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2" aria-label="Core ingredients">
              {['Coconut', 'Pineapple', 'Moringa', 'Sprouted Grains'].map((c) => (
                <span
                  key={c}
                  className="text-[10px] sm:text-[11px] tracking-[0.12em] sm:tracking-[0.15em] uppercase font-mono-display rounded-full bg-emerald2-50 text-emerald2-800 px-2.5 sm:px-3 py-0.5 sm:py-1"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">

            {/* Explore */}
            <nav aria-label="Explore pages">
              <h3 className="text-[10px] tracking-[0.25em] uppercase text-emerald2-800/70 font-mono-display">
                Explore
              </h3>
              <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-slate-700">
                {EXPLORE_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="hover:text-emerald2-800 transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Products */}
            <nav aria-label="Our products">
              <h3 className="text-[10px] tracking-[0.25em] uppercase text-emerald2-800/70 font-mono-display">
                Products
              </h3>
              <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-slate-700">
                {PRODUCT_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="hover:text-emerald2-800 transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Connect */}
            <div>
              <h3 className="text-[10px] tracking-[0.25em] uppercase text-emerald2-800/70 font-mono-display">
                Connect
              </h3>
              <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li>
                  <a
                    href="mailto:support@caysonflorance.com"
                    aria-label="Email Cayson Florance at support@caysonflorance.com"
                    className="hover:text-emerald2-800 transition-colors break-all"
                  >
                    support@caysonflorance.com
                  </a>
                </li>
                <li>
                  <address className="not-italic text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <span itemScope itemType="https://schema.org/PostalAddress">
                      <span itemProp="streetAddress">1st Floor, Door No: 66/1150, Suite B7</span>
                      <br />
                      <span itemProp="addressLocality">Ernakulam North</span>
                      <br />
                      <span itemProp="postalCode">682018</span>
                      <br />
                      <span itemProp="addressRegion">Kerala</span>,{' '}
                      <span itemProp="addressCountry">India</span>
                    </span>
                  </address>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 sm:mt-14 pt-4 sm:pt-6 border-t border-emerald2-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] sm:text-xs text-slate-500 text-center">
            © {year} Cayson Florance International Private Limited. All rights reserved.
          </p>
          <p className="text-[10px] sm:text-xs text-slate-400 text-center">
            Ernakulam, Kerala · Health · Nutrition · Agri-Tech
          </p>
        </div>
      </div>
    </footer>
  )
}
