import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-emerald2-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-10 pb-8 sm:pt-16 sm:pb-8">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative h-10 w-10">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald2-700 via-emerald2-500 to-navy-700" />
                <div className="absolute inset-[2px] rounded-[10px] bg-white grid place-items-center">
                  <span className="font-display text-emerald2-800">C<span className="text-navy-700">F</span></span>
                </div>
              </div>
              <div>
                <div className="font-display text-base sm:text-lg text-emerald2-900">Cayson Florance International</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-emerald2-700/70 font-mono-display">Private Limited · Health · Nutrition · Agri-Tech</div>
              </div>
            </Link>
            <p className="mt-4 sm:mt-6 text-slate-600 text-xs sm:text-sm max-w-md leading-relaxed">A futuristic health, nutrition and bio-processing startup based in Ernakulam, Kerala — upcycling nature's finest into world-class functional foods.</p>
            <div className="mt-4 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2">
              {['Coconut', 'Pineapple', 'Moringa', 'Sprouted Grains'].map(c => (
                <span key={c} className="text-[10px] sm:text-[11px] tracking-[0.12em] sm:tracking-[0.15em] uppercase font-mono-display rounded-full bg-emerald2-50 text-emerald2-800 px-2.5 sm:px-3 py-0.5 sm:py-1">{c}</span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-emerald2-800/70 font-mono-display">Explore</div>
              <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li><Link href="/" className="hover:text-emerald2-800">Home</Link></li>
                <li><Link href="/products" className="hover:text-emerald2-800">Innovative Products</Link></li>
                <li><a href="/#impact" className="hover:text-emerald2-800">Our Impact</a></li>
                <li><a href="/#about" className="hover:text-emerald2-800">About</a></li>
              </ul>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-emerald2-800/70 font-mono-display">Products</div>
              <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li><Link href="/products#sprouted-grain-biscuits" className="hover:text-emerald2-800">Sprouted Grain Biscuits</Link></li>
                <li><Link href="/products#virgin-coconut-oil" className="hover:text-emerald2-800">Virgin Coconut Oil</Link></li>
                <li><Link href="/products#coconut-paneer" className="hover:text-emerald2-800">Coconut Paneer</Link></li>
                <li><Link href="/products#coconut-water-powder" className="hover:text-emerald2-800">Coconut Water Powder</Link></li>
                <li><Link href="/products#coconut-milk-cream" className="hover:text-emerald2-800">Coconut Milk Cream</Link></li>
                <li><Link href="/products#pink-paradise-fizz" className="hover:text-emerald2-800">Pink Paradise Fizz</Link></li>
                <li><Link href="/products#bio-active-moringa-extract" className="hover:text-emerald2-800">Bio-Active Moringa Extract</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-emerald2-800/70 font-mono-display">Connect</div>
              <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li><a href="mailto:contact@caysonflorance.com" className="hover:text-emerald2-800 transition-colors">contact@caysonflorance.com</a></li>
                <li>
                  1st Floor<br />
                  Ernakulam<br />
                  Door No: 66/1150, Suite B7<br />
                  Ernakulam North<br />
                  Ernakulam - 682018<br />
                  Kerala
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 sm:mt-14 pt-4 sm:pt-6 border-t border-emerald2-100 flex justify-center">
          <div className="text-[10px] sm:text-xs text-slate-500 text-center">© {new Date().getFullYear()} Cayson Florance International Private Limited. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
