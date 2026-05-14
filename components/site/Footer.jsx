import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-slate-200/70">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative h-10 w-10">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-navy-800 via-navy-700 to-emerald2-500" />
                <div className="absolute inset-[2px] rounded-[10px] bg-white grid place-items-center">
                  <span className="font-display text-navy-800">C<span className="text-emerald2-500">F</span></span>
                </div>
              </div>
              <div>
                <div className="font-display text-lg text-navy-900">Cayson Florance International</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-slate-500 font-mono-display">Private Limited · Est. 2008</div>
              </div>
            </Link>
            <p className="mt-6 text-slate-600 text-sm max-w-md leading-relaxed">A multinational diversified conglomerate building the future of global agro-industrial infrastructure across six sovereign markets.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['India','UAE','USA','UK','Zambia','Congo'].map(c => (
                <span key={c} className="text-[11px] tracking-[0.15em] uppercase font-mono-display rounded-full bg-slate-100 text-slate-700 px-3 py-1">{c}</span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-slate-500 font-mono-display">Sectors</div>
              <ul className="mt-4 space-y-2.5">
                {['Distilleries','Tissue Culture','Aquaculture','Mining','Agriculture','Energy'].map(l => (
                  <li key={l}><Link href={`/sectors/${l.toLowerCase().replace(' ','-')}`} className="text-sm text-slate-700 hover:text-navy-800">{l}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-slate-500 font-mono-display">Group</div>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
                <li><a href="#overview" className="hover:text-navy-800">Overview</a></li>
                <li><a href="#ecosystem" className="hover:text-navy-800">Ecosystem</a></li>
                <li><a href="#network" className="hover:text-navy-800">Global Network</a></li>
                <li><a href="#sustainability" className="hover:text-navy-800">Sustainability</a></li>
              </ul>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-slate-500 font-mono-display">Investors</div>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
                <li><a className="hover:text-navy-800" href="#investors">Financial Outlook</a></li>
                <li><a className="hover:text-navy-800" href="#contact">Investor Portal</a></li>
                <li><a className="hover:text-navy-800" href="#contact">Press & Media</a></li>
                <li><a className="hover:text-navy-800" href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-slate-200/70 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500">© {new Date().getFullYear()} Cayson Florance International Private Limited. All rights reserved.</div>
          <div className="flex items-center gap-5 text-xs text-slate-500">
            <a href="#" className="hover:text-navy-800">Privacy</a>
            <a href="#" className="hover:text-navy-800">Terms</a>
            <a href="#" className="hover:text-navy-800">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
