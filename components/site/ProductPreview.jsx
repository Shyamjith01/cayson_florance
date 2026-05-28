'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, Sparkles } from 'lucide-react'

export const PRODUCTS = [
  {
    slug: 'premium-sprouted-grain-biscuits',
    tag: 'Product 01',
    title: 'Premium Sprouted Grain Biscuits',
    short: '28 superfoods blended into a clean, nutrient-rich biscuit with sprouted grains, nuts, and zero refined sugar.',
    img: '/products/biscuit/prod1.webp',
    fallback: 'https://images.unsplash.com/photo-1574156754673-0b54b2934ded?auto=format&fit=crop&w=1800&q=85',
    accent: 'from-emerald2-500 to-emerald2-700',
    featured: true,
  },
  {
    slug: 'virgin-coconut-oil',
    tag: 'Product 02',
    title: '100% Pure Virgin Coconut Oil',
    short: 'Cold-pressed coconut wellness oil crafted for cooking, skincare, hair nourishment, and holistic living.',
    img: '/products/oil/prod2.webp',
    fallback: 'https://images.pexels.com/photos/30863190/pexels-photo-30863190.jpeg?auto=compress&w=1600&q=80',
    accent: 'from-emerald2-400 to-navy-700',
  },
  {
    slug: 'coconut-paneer',
    tag: 'Product 03',
    title: 'Premium Coconut Paneer',
    short: 'A soft, dairy-free plant-based paneer crafted from fresh coconut milk for modern healthy lifestyles.',
    img: '/products/paneer/paneerProd.webp',
    fallback: 'https://images.unsplash.com/photo-1631255325853-88ee53e458fc?auto=format&fit=crop&w=1600&q=80',
    accent: 'from-emerald2-500 to-emerald2-300',
  },
  {
    slug: 'coconut-water-powder',
    tag: 'Product 04',
    title: 'Premium Coconut Water Powder',
    short: 'Advanced low-temperature dried coconut water powder delivering instant hydration and natural electrolytes.',
    img: '/products/coco-powder/cocopowder.webp',
    fallback: 'https://images.pexels.com/photos/20720084/pexels-photo-20720084.jpeg?auto=compress&w=1600&q=80',
    accent: 'from-navy-700 to-emerald2-600',
  },
  {
    slug: 'coconut-milk-cream',
    tag: 'Product 05',
    title: 'Premium Coconut Milk Cream',
    short: 'First-press coconut milk cream with rich gourmet texture for premium dairy-free culinary experiences.',
    img: '/products/cream/prod1.webp',
    fallback: 'https://images.unsplash.com/photo-1567011345445-fd175f248019?auto=format&fit=crop&w=1600&q=80',
    accent: 'from-emerald2-700 to-emerald2-900',
  },
  {
    slug: 'pink-paradise-fizz',
    tag: 'Product 06',
    title: 'Pink Paradise Fizz',
    short: 'A sparkling tropical wellness drink infused with pineapple, coconut water, and natural beetroot energy.',
    img: '/products/protien/prodimg1.webp',
    fallback: 'https://images.unsplash.com/photo-1775199603078-e1d964929e10?auto=format&fit=crop&w=1600&q=80',
    accent: 'from-navy-700 to-emerald2-600',
  },
  {
    slug: 'bio-active-moringa-extract',
    tag: 'Product 07',
    title: 'Bio-Active Moringa Dry Extract',
    short: 'Ultra-fine water-soluble moringa extract developed with advanced nano-extraction wellness technology.',
    img: '/products/muringa/muringaprod1.webp',
    fallback: 'https://images.pexels.com/photos/6833682/pexels-photo-6833682.jpeg?auto=compress&w=1600&q=80',
    accent: 'from-emerald2-700 to-emerald2-900',
  },
]

function ProductImg({ src, fallback, alt, className }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => { if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback }}
    />
  )
}

export default function ProductPreview() {
  const featured = PRODUCTS[0]
  const rest = PRODUCTS.slice(1)
  return (
    <section id="products" className="relative py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase font-mono-display text-emerald2-800">
              <span className="h-px w-8 bg-emerald2-700" /> 03 · Innovative Products
            </div>
            <h2 className="mt-6 font-display text-5xl lg:text-6xl tracking-[-0.02em] text-emerald2-900 leading-[1.02]">
              Functional nutrition, <span className="gradient-emerald">engineered with care.</span>
            </h2>
          </div>
          <div className="max-w-md text-slate-600">
            <p>Seven flagship innovations spanning daily-wellness rituals, plant-based dairy alternatives, hydration, sports nutrition and premium nutraceuticals.</p>
            <Link href="/products" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-emerald2-700 hover:text-emerald2-800">
              View full product range <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Featured (Product 01) — hero-style wide card */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.8 }}>
          <Link href={`/products#${featured.slug}`} className="group block relative w-full rounded-[28px] overflow-hidden hairline shine bg-emerald2-900">
            <div className="grid lg:grid-cols-12 min-h-[360px] lg:min-h-[420px]">
              {/* Image side */}
              <div className="relative lg:col-span-7 min-h-[260px] lg:min-h-[420px] overflow-hidden">
                <ProductImg src={featured.img} fallback={featured.fallback} alt={featured.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.6s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald2-900/35 via-transparent to-emerald2-900/55 lg:via-transparent lg:to-emerald2-900/15" />
                <div className="absolute top-5 left-5 flex items-center gap-2">
                  <span className="glass rounded-full px-3 py-1 text-[10px] tracking-[0.25em] uppercase text-emerald2-800 font-mono-display">{featured.tag}</span>
                  <span className="glass rounded-full px-3 py-1 text-[10px] tracking-[0.25em] uppercase text-emerald2-800 font-mono-display flex items-center gap-1.5"><Sparkles className="h-3 w-3 text-gold-400" /> Flagship</span>
                </div>
                <span className="absolute top-5 right-5 lg:hidden h-9 w-9 rounded-full bg-white/95 grid place-items-center text-emerald2-800 group-hover:bg-emerald2-600 group-hover:text-white transition-all group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
              {/* Content side */}
              <div className="relative lg:col-span-5 bg-gradient-to-br from-white via-emerald2-50/50 to-white p-7 lg:p-10 flex flex-col justify-between">
                <div className="hidden lg:flex justify-end">
                  <span className="h-10 w-10 rounded-full bg-emerald2-50 grid place-items-center text-emerald2-700 group-hover:bg-emerald2-600 group-hover:text-white transition-all group-hover:rotate-45 border border-emerald2-200">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.28em] uppercase text-emerald2-700/65 font-mono-display">Daily Wellness Ritual</div>
                  <h3 className="mt-3 font-display text-3xl lg:text-4xl text-emerald2-900 leading-[1.05] tracking-[-0.01em]">{featured.title}</h3>
                  <p className="mt-4 text-[15px] text-slate-600 leading-relaxed">{featured.short}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    {['28 Superfoods', 'Sprouted Grains', 'Zero Refined Sugar', 'Nuts & Seeds'].map(t => (
                      <span key={t} className="text-[11px] tracking-[0.12em] uppercase font-mono-display rounded-full bg-emerald2-50 text-emerald2-800 px-3 py-1 border border-emerald2-100">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-5 border-t border-emerald2-100 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[12px] tracking-[0.2em] uppercase text-emerald2-700 font-mono-display">
                    Explore <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                  <div className={`h-1.5 w-24 rounded-full bg-gradient-to-r ${featured.accent}`} />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* 6 standard cards — perfect 3-col grid */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((p, i) => (
            <motion.div key={p.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}>
              <Link href={`/products#${p.slug}`} className="group block relative h-[440px] rounded-[24px] overflow-hidden hairline shine">
                <div className="absolute inset-0 transition-transform duration-[1.4s] group-hover:scale-110">
                  <ProductImg src={p.img} fallback={p.fallback} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-emerald2-900/85 via-emerald2-900/30 to-emerald2-900/5" />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald2-500/10 via-transparent to-navy-800/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
                  <span className="glass rounded-full px-3 py-1 text-[10px] tracking-[0.25em] uppercase text-emerald2-800 font-mono-display">{p.tag}</span>
                  <span className="h-9 w-9 rounded-full bg-white/90 grid place-items-center text-emerald2-800 group-hover:bg-emerald2-600 group-hover:text-white transition-all group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-5">
                  <div className="glass rounded-2xl p-5 transition-transform duration-500 group-hover:-translate-y-1">
                    <h3 className="font-display text-xl text-emerald2-900 leading-tight">{p.title}</h3>
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
