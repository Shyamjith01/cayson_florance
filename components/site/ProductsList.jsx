'use client'
import { motion } from 'framer-motion'
import { Leaf, Sparkles, ShieldCheck, Flame, Heart, Zap, Wheat, Droplets } from 'lucide-react'

const PRODUCTS = [
  {
    slug: 'virgin-coconut-oil',
    n: '01',
    tag: 'Daily Wellness Duo',
    title: 'Virgin Coconut Oil & Sprouted Grain Biscuits',
    intro: 'Two daily rituals, one wellness story. Cold-pressed virgin coconut oil paired with sprouted whole-grain biscuits — a clean, plant-powered start to every day.',
    img: '/products/biscuit/biscuitpro1.webp',
    altImg: '/products/biscuit/altbuscuits.webp',
    benefits: [
      { i: Heart, t: 'Heart-Friendly MCTs', d: 'Medium-chain triglycerides metabolised directly to energy.' },
      { i: Wheat, t: 'Sprouted Grain Nutrition', d: 'Activated grains for higher bio-availability of minerals.' },
      { i: ShieldCheck, t: 'Cold-Pressed Purity', d: 'No solvents, no heat damage — just oil and grain.' },
    ],
    facts: [['<48h', 'Harvest to Press'], ['100%', 'Cold-Pressed'], ['0', 'Additives']],
  },
  {
    slug: 'coconut-paneer-milk-powder',
    n: '02',
    tag: 'Plant-Based Dairy',
    title: 'Coconut Paneer & Coconut Milk Powder',
    intro: 'A modern, dairy-free kitchen staple. Our coconut paneer delivers the texture and protein of traditional paneer, while our instant coconut milk powder reconstitutes into rich, creamy milk in seconds.',
    img: 'https://images.unsplash.com/photo-1631255325853-88ee53e458fc?auto=format&fit=crop&w=1800&q=85',
    altImg: 'https://images.unsplash.com/photo-1567011345445-fd175f248019?auto=format&fit=crop&w=1400&q=80',
    benefits: [
      { i: Leaf, t: 'Plant Protein', d: 'Complete dairy alternative for the modern lactose-free kitchen.' },
      { i: Sparkles, t: 'Long Shelf Life', d: 'Stable, ambient-storage milk powder — ready in 30 seconds.' },
      { i: Flame, t: 'Chef-Grade Texture', d: 'Holds shape when grilled or simmered, like the classic original.' },
    ],
    facts: [['100%', 'Dairy-Free'], ['12 mo', 'Shelf Stable'], ['Hi', 'Protein Density']],
  },
  {
    slug: 'coconut-water-powder',
    n: '03',
    tag: 'Instant Hydration',
    title: 'Dehydrated Coconut Water Powder',
    intro: 'Coconut water in its purest, most portable form. Freeze-dried at low temperature to preserve every electrolyte — hydration that travels in your pocket.',
    img: 'https://images.pexels.com/photos/20720084/pexels-photo-20720084.jpeg?auto=compress&w=1800&q=85',
    altImg: 'https://images.unsplash.com/photo-1592907724820-eaacf1251d8c?auto=format&fit=crop&w=1400&q=80',
    benefits: [
      { i: Droplets, t: 'Five Electrolytes', d: 'Potassium, sodium, magnesium, calcium and phosphorus in natural balance.' },
      { i: Zap, t: 'Instant Mix', d: 'Reconstitutes into fresh coconut water in under 10 seconds.' },
      { i: ShieldCheck, t: 'Freeze-Dried Purity', d: 'Low-temperature drying retains 98% of native micronutrients.' },
    ],
    facts: [['98%', 'Nutrient Retention'], ['5', 'Natural Electrolytes'], ['0g', 'Added Sugar']],
  },
  {
    slug: 'sparkling-protein',
    n: '04',
    tag: 'Functional Beverage',
    title: 'Carbonated Sparkling Protein Drink',
    intro: 'A futuristic functional beverage that finally tastes like the future. Sparkling, plant-protein-fortified and naturally sweetened — designed for the post-soda generation.',
    img: 'https://images.unsplash.com/photo-1775199603078-e1d964929e10?auto=format&fit=crop&w=1800&q=85',
    altImg: 'https://images.unsplash.com/photo-1675897275724-202ce4be4f23?auto=format&fit=crop&w=1400&q=80',
    benefits: [
      { i: Zap, t: '15g Plant Protein', d: 'Coconut and pea protein blend, complete amino acid profile.' },
      { i: Sparkles, t: 'Naturally Sparkling', d: 'Filtered CO₂ carbonation — no sugar, no synthetic sweeteners.' },
      { i: Heart, t: 'Post-Workout Ready', d: 'Hydration plus protein — the new functional default.' },
    ],
    facts: [['15g', 'Plant Protein'], ['0g', 'Added Sugar'], ['<100', 'Calories']],
  },
  {
    slug: 'moringa-extract',
    n: '05',
    tag: 'Premium Nutraceutical',
    title: 'Advanced Dry Moringa Extract Powder',
    intro: 'A nutraceutical-grade moringa concentrate — standardised for active compounds, lab-validated for purity, and engineered for premium supplement and functional-food formulations.',
    img: 'https://images.pexels.com/photos/6833682/pexels-photo-6833682.jpeg?auto=compress&w=1800&q=85',
    altImg: 'https://images.pexels.com/photos/33500190/pexels-photo-33500190.jpeg?auto=compress&w=1400&q=80',
    benefits: [
      { i: Leaf, t: '46+ Antioxidants', d: 'One of nature’s most antioxidant-dense leaf extracts.' },
      { i: ShieldCheck, t: 'Lab-Standardised', d: 'Every batch validated for active phytochemical content.' },
      { i: Sparkles, t: 'B2B & B2C Ready', d: 'Sold as nutraceutical input and direct consumer wellness blend.' },
    ],
    facts: [['46+', 'Antioxidants'], ['Std.', 'Lab Validated'], ['90+', 'Nutrients']],
  },
]

export default function ProductsList() {
  return (
    <section className="relative bg-white">
      {PRODUCTS.map((p, idx) => {
        const reverse = idx % 2 === 1
        return (
          <div key={p.slug} id={p.slug} className={`relative py-28 lg:py-32 ${idx === 0 ? 'pt-10 lg:pt-16' : ''} ${idx % 2 === 0 ? 'bg-white' : 'bg-emerald2-50/30'}`}>
            {idx % 2 === 1 && <div className="absolute inset-0 dot-bg opacity-40" />}
            <div className="relative mx-auto max-w-7xl px-6">
              <div className={`grid lg:grid-cols-12 gap-12 items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                {/* Visual */}
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.9 }}
                  className="lg:col-span-7 relative">
                  <div className="relative h-[520px] rounded-[32px] overflow-hidden hairline">
                    <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald2-900/60 via-transparent to-transparent" />
                    <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                      <span className="glass rounded-full px-3 py-1 text-[10px] tracking-[0.25em] uppercase text-emerald2-800 font-mono-display">Product {p.n}</span>
                      <span className="glass rounded-full px-3 py-1 text-[10px] tracking-[0.25em] uppercase text-emerald2-800 font-mono-display">{p.tag}</span>
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
                    className={`hidden md:block absolute top-1/2 -mt-10 ${reverse ? '-right-8' : '-left-14'} w-44 h-40 rounded-2xl overflow-hidden hairline shadow-[0_20px_60px_-25px_rgba(6,78,59,0.35)]`}>
                    <img src={p.altImg} alt={p.title} className="w-full h-full object-cover" />
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
                          <b.i className="h-4.5 w-4.5" />
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
