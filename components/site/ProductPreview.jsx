'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const PRODUCTS = [
  {
    slug: 'virgin-coconut-oil',
    tag: 'Product 01',
    title: 'Virgin Coconut Oil & Sprouted Grain Biscuits',
    short: 'Cold-pressed VCO paired with sprouted whole-grain biscuits — a daily-ritual wellness duo.',
    img: '/products/buisketpro.webp',
    accent: 'from-emerald2-500 to-emerald2-700',
  },
  {
    slug: 'coconut-paneer-milk-powder',
    tag: 'Product 02',
    title: 'Coconut Paneer & Coconut Milk Powder',
    short: 'Plant-based protein paneer and instant coconut milk powder for the modern, dairy-free kitchen.',
    img: 'https://images.unsplash.com/photo-1631255325853-88ee53e458fc?auto=format&fit=crop&w=1600&q=80',
    accent: 'from-emerald2-400 to-navy-700',
  },
  {
    slug: 'coconut-water-powder',
    tag: 'Product 03',
    title: 'Dehydrated Coconut Water Powder',
    short: 'Pure, freeze-dried coconut water electrolytes — instant hydration, zero additives.',
    img: 'https://images.pexels.com/photos/20720084/pexels-photo-20720084.jpeg?auto=compress&w=1600&q=80',
    accent: 'from-emerald2-500 to-emerald2-300',
  },
  {
    slug: 'sparkling-protein',
    tag: 'Product 04',
    title: 'Carbonated Sparkling Protein Drink',
    short: 'A futuristic functional beverage — sparkling, plant-protein-fortified and naturally sweetened.',
    img: 'https://images.unsplash.com/photo-1775199603078-e1d964929e10?auto=format&fit=crop&w=1600&q=80',
    accent: 'from-navy-700 to-emerald2-600',
  },
  {
    slug: 'moringa-extract',
    tag: 'Product 05',
    title: 'Advanced Dry Moringa Extract Powder',
    short: 'High-potency moringa extract — standardised, lab-validated, ready for premium nutraceutical use.',
    img: 'https://images.pexels.com/photos/6833682/pexels-photo-6833682.jpeg?auto=compress&w=1600&q=80',
    accent: 'from-emerald2-700 to-emerald2-900',
  },
]

export default function ProductPreview() {
  return (
    <section id="products" className="relative py-31 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase font-mono-display text-emerald2-800">
              <span className="h-px w-8 bg-emerald2-700" /> 03 · Innovative Products
            </div>
            <h2 className="mt-6 font-display text-5xl lg:text-6xl tracking-[-0.02em] text-emerald2-900 leading-[1.02]">
              Functional nutrition, <span className="gradient-emerald">engineered with care.</span>
            </h2>
          </div>
          <div className="max-w-md text-slate-600">
            <p>Five flagship innovations spanning daily-wellness rituals, plant-based dairy alternatives, hydration, sports nutrition and premium nutraceuticals.</p>
            <Link href="/products" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-emerald2-700 hover:text-emerald2-800">
              View full product range <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRODUCTS.map((p, i) => (
            <motion.div key={p.slug} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.7, delay: (i % 3) * 0.1 }}
              className={i === 0 ? 'lg:col-span-2' : ''}>
              <Link href={`/products#${p.slug}`} className="group block relative h-[420px] rounded-3xl overflow-hidden hairline shine">
                <div className="absolute inset-0 transition-transform duration-[1.4s] group-hover:scale-110">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-emerald2-900/85 via-emerald2-900/30 to-emerald2-900/5" />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald2-500/10 via-transparent to-navy-800/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
                  <span className="glass rounded-full px-3 py-1 text-[10px] tracking-[0.25em] uppercase text-emerald2-800 font-mono-display">{p.tag}</span>
                  <span className="h-9 w-9 rounded-full bg-white/90 grid place-items-center text-emerald2-800 group-hover:bg-emerald2-600 group-hover:text-white transition-all group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-6">
                  <div className="glass rounded-2xl p-5 transition-transform duration-500 group-hover:-translate-y-1">
                    <h3 className="font-display text-xl lg:text-2xl text-emerald2-900 leading-tight">{p.title}</h3>
                    <p className="mt-2 text-[13px] text-slate-600 leading-relaxed line-clamp-2">{p.short}</p>
                    <div className="mt-4 flex items-center justify-between pt-3 border-t border-emerald2-100/70">
                      <span className="text-[11px] tracking-[0.22em] uppercase text-emerald2-700 font-mono-display">Explore →</span>
                      <div className={`h-1.5 w-16 rounded-full bg-gradient-to-r ${p.accent}`} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
