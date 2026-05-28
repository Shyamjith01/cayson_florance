'use client'
import { motion } from 'framer-motion'
import { Leaf, Sparkles, ShieldCheck, Flame, Heart, Zap, Wheat, Droplets, Sprout, FlaskConical } from 'lucide-react'

const PRODUCTS = [
  {
    slug: 'premium-sprouted-grain-biscuits',
    n: '01',
    tag: 'Daily Wellness Ritual · Flagship',
    title: 'Premium Sprouted Grain Biscuits',
    intro: 'Twenty-eight superfoods, sprouted grains, nuts and seeds — blended into a clean, nutrient-rich biscuit with zero refined sugar. Our flagship product, engineered as a complete daily wellness ritual in every bite.',
    img: '/products/biscuit/prod1.webp',
    fallback: 'https://images.unsplash.com/photo-1574156754673-0b54b2934ded?auto=format&fit=crop&w=1800&q=85',
    altImg: '/products/biscuit/prod2.webp',
    altFallback: 'https://images.pexels.com/photos/11579274/pexels-photo-11579274.jpeg?auto=compress&w=1400&q=80',
    benefits: [
      { i: Wheat, t: '28 Superfoods', d: 'A carefully composed blend of grains, sprouts, nuts and botanicals.' },
      { i: Sprout, t: 'Sprouted Grain Nutrition', d: 'Activated grains for higher bio-availability of minerals and protein.' },
      { i: ShieldCheck, t: 'Zero Refined Sugar', d: 'Naturally sweetened — nothing refined, nothing artificial.' },
    ],
    facts: [['28', 'Superfoods'], ['0g', 'Refined Sugar'], ['100%', 'Sprouted']],
  },
  {
    slug: 'virgin-coconut-oil',
    n: '02',
    tag: 'Multipurpose Wellness',
    title: '100% Pure Virgin Coconut Oil',
    intro: 'Cold-pressed coconut wellness oil crafted for cooking, skincare, hair nourishment and holistic living. No solvents, no heat damage — just the cleanest oil that nature can yield.',
    img: '/products/oil/prod2.webp',
    fallback: 'https://images.pexels.com/photos/30863190/pexels-photo-30863190.jpeg?auto=compress&w=1800&q=85',
    altImg: '/products/oil/prod1.webp',
    altFallback: 'https://images.pexels.com/photos/3986706/pexels-photo-3986706.jpeg?auto=compress&w=1400&q=80',
    benefits: [
      { i: Heart, t: 'Heart-Friendly MCTs', d: 'Medium-chain triglycerides metabolised directly to energy.' },
      { i: Sparkles, t: 'Multipurpose Use', d: 'Cooking, skincare, haircare — one bottle, full ritual.' },
      { i: ShieldCheck, t: 'Cold-Pressed Purity', d: 'No solvents, no heat damage — lab-validated clean.' },
    ],
    facts: [['<48h', 'Harvest to Press'], ['100%', 'Cold-Pressed'], ['0', 'Additives']],
  },
  {
    slug: 'coconut-paneer',
    n: '03',
    tag: 'Plant-Based Dairy',
    title: 'Premium Coconut Paneer',
    intro: 'A soft, dairy-free plant-based paneer crafted from fresh coconut milk for modern, healthy lifestyles. Holds shape when grilled or simmered — the chef-grade alternative for the lactose-free kitchen.',
    img: '/products/paneer/paneerProd.webp',
    fallback: 'https://images.unsplash.com/photo-1631255325853-88ee53e458fc?auto=format&fit=crop&w=1800&q=85',
    altImg: '/products/paneer/paneer2.webp',
    altFallback: 'https://images.unsplash.com/photo-1567011345445-fd175f248019?auto=format&fit=crop&w=1400&q=80',
    benefits: [
      { i: Leaf, t: 'Plant Protein', d: 'A complete dairy alternative for the modern lactose-free kitchen.' },
      { i: Flame, t: 'Chef-Grade Texture', d: 'Holds shape when grilled or simmered, like the classic original.' },
      { i: Sparkles, t: 'Fresh-Press Coconut', d: 'Crafted from first-press fresh coconut milk — nothing reconstituted.' },
    ],
    facts: [['100%', 'Dairy-Free'], ['Hi', 'Protein Density'], ['Fresh', 'First-Press']],
  },
  {
    slug: 'coconut-water-powder',
    n: '04',
    tag: 'Instant Hydration',
    title: 'Premium Coconut Water Powder',
    intro: 'Advanced low-temperature dried coconut water powder delivering instant hydration and a full spectrum of natural electrolytes — hydration that travels in your pocket.',
    img: '/products/coco-powder/cocopowder.webp',
    fallback: 'https://images.pexels.com/photos/20720084/pexels-photo-20720084.jpeg?auto=compress&w=1800&q=85',
    altImg: '/products/coco-powder/cocopowder2.webp',
    altFallback: 'https://images.unsplash.com/photo-1592907724820-eaacf1251d8c?auto=format&fit=crop&w=1400&q=80',
    benefits: [
      { i: Droplets, t: 'Five Electrolytes', d: 'Potassium, sodium, magnesium, calcium and phosphorus in natural balance.' },
      { i: Zap, t: 'Instant Mix', d: 'Reconstitutes into fresh coconut water in under 10 seconds.' },
      { i: ShieldCheck, t: 'Low-Temp Dried', d: 'Advanced low-temperature drying retains 98% of native micronutrients.' },
    ],
    facts: [['98%', 'Nutrient Retention'], ['5', 'Electrolytes'], ['0g', 'Added Sugar']],
  },
  {
    slug: 'coconut-milk-cream',
    n: '05',
    tag: 'Gourmet Plant-Based',
    title: 'Premium Coconut Milk Cream',
    intro: 'First-press coconut milk cream with a rich, gourmet texture — engineered for premium dairy-free culinary experiences. Whips, simmers, and folds like the finest dairy cream.',
    img: '/products/cream/prod1.webp',
    fallback: 'https://images.unsplash.com/photo-1567011345445-fd175f248019?auto=format&fit=crop&w=1800&q=85',
    altImg: '/products/cream/prod2.webp',
    altFallback: 'https://images.unsplash.com/photo-1631255325853-88ee53e458fc?auto=format&fit=crop&w=1400&q=80',
    benefits: [
      { i: Sparkles, t: 'First-Press Cream', d: 'Only the first pressing — the richest, most velvety fraction.' },
      { i: Flame, t: 'Gourmet Texture', d: 'Whips, simmers and folds like the finest dairy cream.' },
      { i: Leaf, t: 'Dairy-Free Luxury', d: 'Premium plant-based culinary experience — no compromises.' },
    ],
    facts: [['1st', 'Press Only'], ['Gourmet', 'Texture'], ['100%', 'Dairy-Free']],
  },
  {
    slug: 'pink-paradise-fizz',
    n: '06',
    tag: 'Functional Beverage',
    title: 'Pink Paradise Fizz',
    intro: 'A sparkling tropical wellness drink infused with pineapple, coconut water and natural beetroot energy. Sparkling, naturally pink, and powered by real fruit — the future of functional refreshment.',
    img: '/products/protien/prodimg1.webp',
    fallback: 'https://images.unsplash.com/photo-1775199603078-e1d964929e10?auto=format&fit=crop&w=1800&q=85',
    altImg: '/products/protien/prodimg2.webp',
    altFallback: 'https://images.unsplash.com/photo-1675897275724-202ce4be4f23?auto=format&fit=crop&w=1400&q=80',
    benefits: [
      { i: Heart, t: 'Tropical Wellness', d: 'Pineapple, coconut water and beetroot — nature’s most vibrant trio.' },
      { i: Sparkles, t: 'Naturally Sparkling', d: 'Filtered CO₂ carbonation — no synthetic sweeteners, no artificial colours.' },
      { i: Zap, t: 'Beetroot Energy', d: 'Natural nitrates for clean, sustained, plant-powered energy.' },
    ],
    facts: [['Real', 'Fruit Infusion'], ['0g', 'Added Sugar'], ['Natural', 'Sparkle']],
  },
  {
    slug: 'bio-active-moringa-extract',
    n: '07',
    tag: 'Premium Nutraceutical',
    title: 'Bio-Active Moringa Dry Extract',
    intro: 'Ultra-fine, water-soluble moringa extract developed with advanced nano-extraction wellness technology — engineered for premium supplement, functional-food and nutraceutical formulations.',
    img: '/products/muringa/muringaprod1.webp',
    fallback: 'https://images.pexels.com/photos/6833682/pexels-photo-6833682.jpeg?auto=compress&w=1800&q=85',
    altImg: '/products/muringa/muringaprod2.webp',
    altFallback: 'https://images.pexels.com/photos/33500190/pexels-photo-33500190.jpeg?auto=compress&w=1400&q=80',
    benefits: [
      { i: FlaskConical, t: 'Nano-Extraction Tech', d: 'Advanced nano-extraction yields an ultra-fine, water-soluble matrix.' },
      { i: Leaf, t: '46+ Antioxidants', d: 'One of nature’s most antioxidant-dense leaf extracts.' },
      { i: ShieldCheck, t: 'Lab-Standardised', d: 'Every batch validated for active phytochemical content.' },
    ],
    facts: [['Water', 'Soluble'], ['46+', 'Antioxidants'], ['Nano', 'Extraction']],
  },
]

function ProductImg({ src, fallback, alt, className }) {
  return (
    <img src={src} alt={alt} className={className}
      onError={(e) => { if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback }} />
  )
}

export default function ProductsList() {
  return (
    <section className="relative bg-white">
      {PRODUCTS.map((p, idx) => {
        const reverse = idx % 2 === 1
        const isFlagship = idx === 0
        return (
          <div key={p.slug} id={p.slug} className={`relative py-24 lg:py-28 ${idx === 0 ? 'pt-10 lg:pt-14' : ''} ${idx % 2 === 0 ? 'bg-white' : 'bg-emerald2-50/30'}`}>
            {idx % 2 === 1 && <div className="absolute inset-0 dot-bg opacity-40" />}
            <div className="relative mx-auto max-w-7xl px-6">
              <div className={`grid lg:grid-cols-12 gap-12 items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                {/* Visual */}
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.9 }}
                  className="lg:col-span-7 relative">
                  <div className="relative h-[480px] lg:h-[520px] rounded-[32px] overflow-hidden hairline">
                    <ProductImg src={p.img} fallback={p.fallback} alt={p.title}
                      className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald2-900/60 via-transparent to-transparent" />
                    <div className="absolute top-6 left-6 right-6 flex justify-between items-start gap-3">
                      <div className="flex flex-wrap gap-2">
                        <span className="glass rounded-full px-3 py-1 text-[10px] tracking-[0.25em] uppercase text-emerald2-800 font-mono-display">Product {p.n}</span>
                        {isFlagship && <span className="glass rounded-full px-3 py-1 text-[10px] tracking-[0.25em] uppercase text-emerald2-800 font-mono-display inline-flex items-center gap-1.5"><Sparkles className="h-3 w-3 text-gold-400" /> Flagship</span>}
                      </div>
                      <span className="glass rounded-full px-3 py-1 text-[10px] tracking-[0.25em] uppercase text-emerald2-800 font-mono-display whitespace-nowrap">{p.tag}</span>
                    </div>
                    <div className="absolute inset-x-6 bottom-6 grid grid-cols-3 gap-2">
                      {p.facts.map(([v, l], i) => (
                        <div key={i} className="glass rounded-xl p-3">
                          <div className="font-display text-xl text-emerald2-900">{v}</div>
                          <div className="text-[9px] tracking-[0.22em] uppercase text-emerald2-800/65 font-mono-display">{l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Floating alt thumb */}
                  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
                    className={`hidden md:block absolute ${reverse ? '-bottom-10 -right-8' : '-bottom-10 -left-8'} w-56 h-40 rounded-2xl overflow-hidden hairline shadow-[0_20px_60px_-25px_rgba(6,78,59,0.35)]`}>
                    <ProductImg src={p.altImg} fallback={p.altFallback} alt={p.title} className="w-full h-full object-cover" />
                  </motion.div>
                </motion.div>

                {/* Content */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                  className="lg:col-span-5">
                  <div className="flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase font-mono-display text-emerald2-800">
                    <span className="h-px w-8 bg-emerald2-700" /> Product {p.n}
                  </div>
                  <h2 className="mt-5 font-display text-4xl lg:text-5xl tracking-[-0.02em] text-emerald2-900 leading-[1.04]">{p.title}</h2>
                  <p className="mt-6 text-slate-600 text-lg leading-relaxed">{p.intro}</p>

                  <div className="mt-8 space-y-3">
                    {p.benefits.map((b, i) => (
                      <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6 }}
                        className="flex items-start gap-4 group">
                        <div className="h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br from-emerald2-600 to-emerald2-800 grid place-items-center text-white shadow-md group-hover:scale-110 transition-transform">
                          <b.i className="h-4 w-4" />
                        </div>
                        <div className="flex-1 pt-1">
                          <div className="font-display text-lg text-emerald2-900">{b.t}</div>
                          <div className="text-sm text-slate-600 mt-0.5">{b.d}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
