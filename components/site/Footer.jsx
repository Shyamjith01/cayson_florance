import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-emerald2-100">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative h-10 w-10">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald2-700 via-emerald2-500 to-navy-700" />
                <div className="absolute inset-[2px] rounded-[10px] bg-white grid place-items-center">
                  <span className="font-display text-emerald2-800">C<span className="text-navy-700">F</span></span>
                </div>
              </div>
              <div>
                <div className="font-display text-lg text-emerald2-900">Cayson Florance International</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-emerald2-700/70 font-mono-display">Private Limited · Health · Nutrition · Agri-Tech</div>
              </div>
            </Link>
            <p className="mt-6 text-slate-600 text-sm max-w-md leading-relaxed">A futuristic health, nutrition and bio-processing startup based in Ernakulam, Kerala — upcycling nature's finest into world-class functional foods.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Coconut','Pineapple','Moringa','Sprouted Grains'].map(c => (
                <span key={c} className="text-[11px] tracking-[0.15em] uppercase font-mono-display rounded-full bg-emerald2-50 text-emerald2-800 px-3 py-1">{c}</span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-emerald2-800/70 font-mono-display">Explore</div>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
                <li><Link href="/" className="hover:text-emerald2-800">Home</Link></li>
                <li><Link href="/products" className="hover:text-emerald2-800">Innovative Products</Link></li>
                <li><a href="/#impact" className="hover:text-emerald2-800">Our Impact</a></li>
                <li><a href="/#about" className="hover:text-emerald2-800">About</a></li>
              </ul>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-emerald2-800/70 font-mono-display">Products</div>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
                <li><Link href="/products#virgin-coconut-oil" className="hover:text-emerald2-800">Virgin Coconut Oil</Link></li>
                <li><Link href="/products#coconut-paneer-milk-powder" className="hover:text-emerald2-800">Coconut Paneer & Milk Powder</Link></li>
                <li><Link href="/products#coconut-water-powder" className="hover:text-emerald2-800">Coconut Water Powder</Link></li>
                <li><Link href="/products#sparkling-protein" className="hover:text-emerald2-800">Sparkling Protein Drink</Link></li>
                <li><Link href="/products#moringa-extract" className="hover:text-emerald2-800">Moringa Extract</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-emerald2-800/70 font-mono-display">Connect</div>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
                <li>hello@caysonflorance.in</li>
                <li>Ernakulam, Kerala</li>
                <li>Startup India · Phase 01</li>
                <li><a href="#contact" className="hover:text-emerald2-800">Partner With Us</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-emerald2-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500">© {new Date().getFullYear()} Cayson Florance International Private Limited. All rights reserved.</div>
          <div className="flex items-center gap-5 text-xs text-slate-500">
            <a href="#" className="hover:text-emerald2-800">Privacy</a>
            <a href="#" className="hover:text-emerald2-800">Terms</a>
            <a href="#" className="hover:text-emerald2-800">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
