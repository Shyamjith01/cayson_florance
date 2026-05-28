'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, Sparkles } from 'lucide-react'

export const PRODUCTS = [
  {
    slug: 'premium-sprouted-grain-biscuits',
    tag: 'Product 01',
    eyebrow: 'Daily Wellness Ritual',
    title: 'Premium Sprouted Grain Biscuits',
    short: '28 superfoods blended into a clean, nutrient-rich biscuit with sprouted grains, nuts, and zero refined sugar.',
    chips: ['28 Superfoods', 'Sprouted Grains', 'Zero Refined Sugar', 'Nuts & Seeds'],
    img: '/products/biscuit/prod1.webp',
    fallback: 'https://images.unsplash.com/photo-1574156754673-0b54b2934ded?auto=format&fit=crop&w=1800&q=85',
    accent: 'from-emerald2-500 to-emerald2-700',
    flagship: true,
  },
  {
    slug: 'virgin-coconut-oil',
    tag: 'Product 02',
    eyebrow: 'Multipurpose Wellness',
    title: '100% Pure Virgin Coconut Oil',
    short: 'Cold-pressed coconut wellness oil crafted for cooking, skincare, hair nourishment and holistic living.',
    img: '/products/oil/prod2.webp',
    fallback: 'https://images.pexels.com/photos/30863190/pexels-photo-30863190.jpeg?auto=compress&w=1600&q=80',
    accent: 'from-emerald2-400 to-navy-700',
  },
  {
    slug: 'coconut-paneer',
    tag: 'Product 03',
    eyebrow: 'Plant-Based Dairy',
    title: 'Premium Coconut Paneer',
    short: 'A soft, dairy-free plant-based paneer crafted from fresh coconut milk for modern healthy lifestyles.',
    img: '/products/paneer/paneerProd.webp',
    fallback: 'https://images.unsplash.com/photo-1631255325853-88ee53e458fc?auto=format&fit=crop&w=1600&q=80',
    accent: 'from-emerald2-500 to-emerald2-300',
  },
  {
    slug: 'coconut-water-powder',
    tag: 'Product 04',
    eyebrow: 'Instant Hydration',
    title: 'Premium Coconut Water Powder',
    short: 'Low-temperature dried coconut water powder delivering instant hydration and natural electrolytes.',
    img: '/products/coco-powder/cocopowder.webp',
    fallback: 'https://images.pexels.com/photos/20720084/pexels-photo-20720084.jpeg?auto=compress&w=1600&q=80',
    accent: 'from-navy-700 to-emerald2-600',
  },
  {
    slug: 'coconut-milk-cream',
    tag: 'Product 05',
    eyebrow: 'Gourmet Plant-Based',
    title: 'Premium Coconut Milk Cream',
    short: 'First-press coconut milk cream with rich gourmet texture for premium dairy-free culinary experiences.',
    img: '/products/cream/prod1.webp',
    fallback: 'https://images.unsplash.com/photo-1567011345445-fd175f248019?auto=format&fit=crop&w=1600&q=80',
    accent: 'from-emerald2-700 to-emerald2-900',
  },
  {
    slug: 'pink-paradise-fizz',
    tag: 'Product 06',
    eyebrow: 'Functional Beverage',
    title: 'Pink Paradise Fizz',
    short: 'A sparkling tropical wellness drink infused with pineapple, coconut water and natural beetroot energy.',
    chips: ['Tropical Infusion', 'Naturally Sparkling', 'Beetroot Energy', '0g Added Sugar'],
    img: '/products/protien/prodimg1.webp',
    fallback: 'https://images.unsplash.com/photo-1775199603078-e1d964929e10?auto=format&fit=crop&w=1800&q=85',
    accent: 'from-navy-700 to-emerald2-600',
    feature: true,
  },
  {
    slug: 'bio-active-moringa-extract',
    tag: 'Product 07',
    eyebrow: 'Premium Nutraceutical',
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

/* ---------------- Wide Hero Card (2-col span on desktop) ---------------- */
function HeroCard({ p, index = 0, flagship = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.75, delay: index * 0.06 }}
      className="sm:col-span-2 lg:col-span-2"
    >
      <Link href={`/products#${p.slug}`} className="group block relative h-full rounded-[24px] overflow-hidden hairline shine bg-emerald2-900">
        <div className="grid grid-cols-1 md:grid-cols-12 h-full min-h-[460px]">
          {/* Image side */}
          <div className="relative md:col-span-7 min-h-[240px] md:min-h-0 overflow-hidden">
            <ProductImg src={p.img} fallback={p.fallback} alt={p.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.6s] group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald2-900/30 via-transparent to-emerald2-900/40 md:to-transparent" />
            <div className="absolute top-5 left-5 flex flex-wrap items-center gap-2">
              <span className="glass rounded-full px-3 py-1 text-[10px] tracking-[0.25em] uppercase text-emerald2-800 font-mono-display">{p.tag}</span>
              {flagship && (
                <span className="glass rounded-full px-3 py-1 text-[10px] tracking-[0.25em] uppercase text-emerald2-800 font-mono-display inline-flex items-center gap-1.5">
                  <Sparkles className="h-3 w-3 text-gold-400" /> Flagship
                </span>
              )}
            </div>
            <span className="absolute top-5 right-5 md:hidden h-9 w-9 rounded-full bg-white/95 grid place-items-center text-emerald2-800 group-hover:bg-emerald2-600 group-hover:text-white transition-all group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
          {/* Content side */}
          <div className="relative md:col-span-5 bg-gradient-to-br from-white via-emerald2-50/50 to-white p-6 lg:p-8 flex flex-col justify-between">
            <div className="hidden md:flex justify-end">
              <span className="h-10 w-10 rounded-full bg-emerald2-50 grid place-items-center text-emerald2-700 group-hover:bg-emerald2-600 group-hover:text-white transition-all group-hover:rotate-45 border border-emerald2-200">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
            <div className="md:mt-2">
              <div className="text-[10px] tracking-[0.28em] uppercase text-emerald2-700/65 font-mono-display">{p.eyebrow}</div>
              <h3 className="mt-3 font-display text-2xl lg:text-[1.75rem] text-emerald2-900 leading-[1.1] tracking-[-0.01em]">{p.title}</h3>
              <p className="mt-3 text-[14px] text-slate-600 leading-relaxed">{p.short}</p>
              {p.chips && (
                <div className="mt-4 flex flex-wrap items-center gap-1.5">
                  {p.chips.map(t => (
                    <span key={t} className="text-[10px] tracking-[0.12em] uppercase font-mono-display rounded-full bg-emerald2-50 text-emerald2-800 px-2.5 py-1 border border-emerald2-100">{t}</span>
                  ))}
                </div>
              )}
            </div>
            <div className="mt-5 pt-4 border-t border-emerald2-100 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.22em] uppercase text-emerald2-700 font-mono-display">
                Explore <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
              <div className={`h-1.5 w-20 rounded-full bg-gradient-to-r ${p.accent}`} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

/* ---------------- Standard Vertical Card (1-col span) ---------------- */
function StandardCard({ p, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08 }}
    >
      <Link href={`/products#${p.slug}`} className="group block relative h-[460px] rounded-[24px] overflow-hidden hairline shine">
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
            <div className="text-[10px] tracking-[0.25em] uppercase text-emerald2-700/65 font-mono-display">{p.eyebrow}</div>
            <h3 className="mt-1.5 font-display text-xl text-emerald2-900 leading-tight">{p.title}</h3>
            <p className="mt-2 text-[13px] text-slate-600 leading-relaxed line-clamp-2">{p.short}</p>
            <div className="mt-4 flex items-center justify-between pt-3 border-t border-emerald2-100/70">
              <span className="text-[11px] tracking-[0.22em] uppercase text-emerald2-700 font-mono-display">Explore →</span>
              <div className={`h-1.5 w-16 rounded-full bg-gradient-to-r ${p.accent}`} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function ProductPreview() {
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

        {/* Editorial Asymmetric Grid — 7 products in 3 rhythmic rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Row 1 :: Hero Biscuits (2-col) + Virgin Coconut Oil (1-col) */}
          <HeroCard p={PRODUCTS[0]} index={0} flagship />
          <StandardCard p={PRODUCTS[1]} index={1} />

          {/* Row 2 :: Three balanced medium cards */}
          <StandardCard p={PRODUCTS[2]} index={2} />
          <StandardCard p={PRODUCTS[3]} index={3} />
          <StandardCard p={PRODUCTS[4]} index={4} />

          {/* Row 3 :: Pink Paradise Fizz wider hero (2-col) + Moringa (1-col) */}
          <HeroCard p={PRODUCTS[5]} index={5} />
          <StandardCard p={PRODUCTS[6]} index={6} />
        </div>
      </div>
    </section>
  )
}
