'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, Sparkles } from 'lucide-react'

// export const PRODUCTS = [
//   {
//     slug: 'virgin-coconut-oil',
//     tag: 'Product 01',
//     title: 'Virgin Coconut Oil & Sprouted Grain Biscuits',
//     short: 'Cold-pressed VCO paired with sprouted whole-grain biscuits — a daily-ritual wellness duo.',
//     img: '/products/buisketpro.webp',
//     accent: 'from-emerald2-500 to-emerald2-700',
//   },
//   {
//     slug: 'coconut-paneer-milk-powder',
//     tag: 'Product 02',
//     title: 'Coconut Paneer & Coconut Milk Powder',
//     short: 'Plant-based protein paneer and instant coconut milk powder for the modern, dairy-free kitchen.',
//     img: '/products/paneer/paneerProd.webp',
//     accent: 'from-emerald2-400 to-navy-700',
//   },
//   {
//     slug: 'coconut-water-powder',
//     tag: 'Product 03',
//     title: 'Dehydrated Coconut Water Powder',
//     short: 'Pure, freeze-dried coconut water electrolytes — instant hydration, zero additives.',
//     img: 'https://images.pexels.com/photos/20720084/pexels-photo-20720084.jpeg?auto=compress&w=1600&q=80',
//     accent: 'from-emerald2-500 to-emerald2-300',
//   },
//   {
//     slug: 'sparkling-protein',
//     tag: 'Product 04',
//     title: 'Carbonated Sparkling Protein Drink',
//     short: 'A futuristic functional beverage — sparkling, plant-protein-fortified and naturally sweetened.',
//     img: '/products/protien/prodimg1.webp',
//     accent: 'from-navy-700 to-emerald2-600',
//   },
//   {
//     slug: 'moringa-extract',
//     tag: 'Product 05',
//     title: 'Advanced Dry Moringa Extract Powder',
//     short: 'High-potency moringa extract — standardised, lab-validated, ready for premium nutraceutical use.',
//     img: '/products/muringa/muringaprod1.webp',
//     accent: 'from-emerald2-700 to-emerald2-900',
//   },
// ]


export const PRODUCTS = [
  {
    slug: 'premium-sprouted-grain-biscuits',
    tag: 'Product 01',
    title: 'Premium Sprouted Grain Biscuits',
    short:
      '28 superfoods blended into a clean, nutrient-rich biscuit with sprouted grains, nuts, and zero refined sugar.',
    img: '/products/biscuit/homebipro1.webp',
    imgAlt: 'Premium Sprouted Grain Biscuits with 28 Superfoods — healthy snack by Cayson Florance',
    accent: 'from-emerald2-500 to-emerald2-700',
    chips: ['28 superfoods', 'Nuts & Seeds', 'Sprouted Grains', 'Zero Refined Sugar'],
  },
  {
    slug: 'virgin-coconut-oil',
    tag: 'Product 02',
    title: '100% Pure Virgin Coconut Oil',
    short:
      'Cold-pressed coconut wellness oil crafted for cooking, skincare, hair nourishment, and holistic living.',
    img: '/products/oil/prod2.webp',
    imgAlt: '100% Pure Cold Pressed Virgin Coconut Oil by Cayson Florance — Kerala sourced',
    accent: 'from-emerald2-400 to-navy-700',
  },
  {
    slug: 'coconut-paneer',
    tag: 'Product 03',
    title: 'Premium Coconut Paneer',
    short:
      'A soft, dairy-free plant-based paneer crafted from fresh coconut milk for modern healthy lifestyles.',
    img: '/products/paneer/paneerProd.webp',
    imgAlt: 'Premium Coconut Paneer — dairy-free plant-based paneer made from fresh coconut milk',
    accent: 'from-emerald2-500 to-emerald2-300',
  },
  {
    slug: 'coconut-water-powder',
    tag: 'Product 04',
    title: 'Premium Coconut Water Powder',
    short:
      'Advanced low-temperature dried coconut water powder delivering instant hydration and natural electrolytes.',
    img: '/products/coco-powder/cocopowderalt1.webp',
    imgAlt: 'Premium Coconut Water Powder — natural electrolyte hydration drink by Cayson Florance',
    mobileImg: '/products/coco-powder/cocopowder.webp',
    accent: 'from-navy-700 to-emerald2-600',
  },
  {
    slug: 'coconut-milk-cream',
    tag: 'Product 05',
    title: 'Premium Coconut Milk Cream',
    short:
      'First-press coconut milk cream with rich gourmet texture for premium dairy-free culinary experiences.',
    img: '/products/cream/prod1.webp',
    imgAlt: 'Premium Coconut Milk Cream — first-press dairy-free culinary cream by Cayson Florance',
    accent: 'from-emerald2-700 to-emerald2-900',
  },
  {
    slug: 'pink-paradise-fizz',
    tag: 'Product 06',
    title: 'Pink Paradise Fizz',
    short:
      'A sparkling tropical wellness drink infused with pineapple, coconut water, and natural beetroot energy.',
    img: '/products/protien/prodimg1.webp',
    imgAlt: 'Pink Paradise Fizz — tropical sparkling wellness drink with pineapple and beetroot',
    accent: 'from-navy-700 to-emerald2-600',
    chips: ['Tropical Infusion', 'Naturally Sparkling', 'Beetroot Energy', '0g Added Sugar'],
  },
  {
    slug: 'bio-active-moringa-extract',
    tag: 'Product 07',
    title: 'Bio-Active Moringa Dry Extract',
    short:
      'Ultra-fine water-soluble moringa extract developed with advanced nano-extraction wellness technology.',
    img: '/products/muringa/muringaprod1.webp',
    imgAlt: 'Bio-Active Moringa Dry Extract — ultra-fine water-soluble moringa nutraceutical ingredient',
    accent: 'from-emerald2-700 to-emerald2-900',
  },
]

function ProductImg({ src, mobileSrc, fallback, alt, className }) {
  if (mobileSrc) {
    return (
      <picture>
        <source media="(max-width: 639px)" srcSet={mobileSrc} />
        <img
          src={src}
          alt={alt}
          className={className}
          loading="lazy"
          decoding="async"
          onError={(e) => { if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback }}
        />
      </picture>
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={(e) => { if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback }}
    />
  )
}


function HeroCard({ p, index = 0, flagship = false, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.75, delay: index * 0.06 }}
      className={`sm:col-span-2 lg:col-span-2 ${className}`}
    >
      <Link href={`/products#${p.slug}`} className="group block relative h-full rounded-[24px] overflow-hidden shine bg-emerald2-900" aria-label={`Learn more about ${p.title}`}>
        <div className="grid grid-cols-1 md:grid-cols-12 h-full min-h-[460px]">
          {/* Image side */}
          <div className="relative md:col-span-7 min-h-[240px] md:min-h-0 overflow-hidden">
            <ProductImg src={p.img} mobileSrc={p.mobileImg} fallback={p.fallback} alt={p.imgAlt || p.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.6s] group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald2-900/30 via-transparent to-emerald2-900/40 md:to-transparent" />
            <div className="absolute top-5 left-5 flex flex-wrap items-center gap-2">
              <span className="glass rounded-full px-3 py-1 text-[8px] sm:text-[10px] tracking-[0.25em] uppercase text-emerald2-800 font-mono-display">{p.tag}</span>
              {flagship && (
                <span className="glass rounded-full px-3 py-1 text-[8px] sm:text-[10px] tracking-[0.25em] uppercase text-emerald2-800 font-mono-display inline-flex items-center gap-1.5">
                  <Sparkles className="h-3 w-3 text-gold-400" /> Flagship
                </span>
              )}
            </div>
            <span className="absolute top-5 right-5 md:hidden h-9 w-9 rounded-full bg-white/95 grid place-items-center text-emerald2-800 group-hover:bg-emerald2-600 group-hover:text-white transition-all group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
          {/* Content side */}
          <div className="relative md:col-span-5 bg-gradient-to-br pt-3 pb-4 from-white via-emerald2-50/50 to-white p-6 lg:p-8 flex flex-col justify-between">
            <div className="hidden md:flex justify-end">
              <span className="h-10 w-10 rounded-full bg-emerald2-50 grid place-items-center text-emerald2-700 group-hover:bg-emerald2-600 group-hover:text-white transition-all group-hover:rotate-45 border border-emerald2-200">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
            <div className="md:mt-2">
              <div className="text-[10px] tracking-[0.28em] uppercase text-emerald2-700/65 font-mono-display">{p.eyebrow}</div>
              <h3 className="mt-0 sm:mt-3 font-display text-xl sm:text-2xl lg:text-[1.75rem] text-emerald2-900 leading-[1.1] tracking-[-0.01em]">{p.title}</h3>
              <p className="mt-3 text-[13px] sm:text-[12px] text-slate-600 leading-relaxed">{p.short}</p>
              {p.chips && (
                <div className="mt-4 flex flex-wrap items-center gap-1.5">
                  {p.chips.map(t => (
                    <span key={t} className="text-[8px] sm:text-[8.5px] tracking-[0.12em] uppercase font-mono-display rounded-full bg-emerald2-50 text-emerald2-800 px-2 py-0.5 sm:px-2.5 sm:py-1 border border-emerald2-100">
                      {t.split(/(0g)/i).map((part, idx) => 
                        part.toLowerCase() === '0g' ? (
                          <span key={idx} className="normal-case">0g</span>
                        ) : part
                      )}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="mt-3 sm:mt-5 pt-4 border-t border-emerald2-100 flex items-center justify-between">
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

function StandardCard({ p, index = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08 }}
      className={className}
    >
      <Link href={`/products#${p.slug}`} className="group block relative h-[460px] rounded-[24px] overflow-hidden hairline shine" aria-label={`Learn more about ${p.title}`}>
        <div className="absolute inset-0 transition-transform duration-[1.4s] group-hover:scale-110">
          <ProductImg src={p.img} mobileSrc={p.mobileImg} fallback={p.fallback} alt={p.imgAlt || p.title} className="w-full h-full object-cover" />
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
    <section id="products" aria-labelledby="products-preview-heading" className="relative py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[9px] sm:text-[10px]  tracking-[0.25em] uppercase font-mono-display text-emerald2-800">
              <span className="h-px w-4 sm:w-8 bg-emerald2-700" /> 03 · Innovative Products
            </div>
            <h2 id="products-preview-heading" className="mt-6 font-display text-3xl sm:text-5xl lg:text-6xl tracking-[-0.02em] text-emerald2-900 leading-[1.1] sm:leading-[1.02]">
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
          <HeroCard p={PRODUCTS[1]} index={1} className="sm:hidden" />
          <StandardCard p={PRODUCTS[1]} index={1} className="hidden sm:block" />

          {/* Row 2 :: Three balanced medium cards */}
          <HeroCard p={PRODUCTS[2]} index={2} className="sm:hidden" />
          <StandardCard p={PRODUCTS[2]} index={2} className="hidden sm:block" />

          <HeroCard p={PRODUCTS[3]} index={3} className="sm:hidden" />
          <StandardCard p={PRODUCTS[3]} index={3} className="hidden sm:block" />

          <HeroCard p={PRODUCTS[4]} index={4} className="sm:hidden" />
          <StandardCard p={PRODUCTS[4]} index={4} className="hidden sm:block" />

          {/* Row 3 :: Pink Paradise Fizz wider hero (2-col) + Moringa (1-col) */}
          <HeroCard p={PRODUCTS[5]} index={5} />
          <HeroCard p={PRODUCTS[6]} index={6} className="sm:hidden" />
          <StandardCard p={PRODUCTS[6]} index={6} className="hidden sm:block" />
        </div>
      </div>
    </section>
  )
}
