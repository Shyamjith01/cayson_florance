'use client'
import { motion } from 'framer-motion'
import { Leaf, Sparkles, ShieldCheck, Flame, Heart, Zap, Wheat, Droplets } from 'lucide-react'

const PRODUCTS = [
  // {
  //   slug: 'virgin-coconut-oil',
  //   n: '01',
  //   tag: 'Daily Wellness Duo',
  //   title: 'Virgin Coconut Oil & Sprouted Grain Biscuits',
  //   intro: 'Two daily rituals, one wellness story. Cold-pressed virgin coconut oil paired with sprouted whole-grain biscuits — a clean, plant-powered start to every day.',
  //   img: '/products/biscuit/biscuitpro1.webp',
  //   altImg: '/products/biscuit/altbuscuits.webp',
  //   benefits: [
  //     { i: Heart, t: 'Heart-Friendly MCTs', d: 'Medium-chain triglycerides metabolised directly to energy.' },
  //     { i: Wheat, t: 'Sprouted Grain Nutrition', d: 'Activated grains for higher bio-availability of minerals.' },
  //     { i: ShieldCheck, t: 'Cold-Pressed Purity', d: 'No solvents, no heat damage — just oil and grain.' },
  //   ],
  //   facts: [['<48h', 'Harvest to Press'], ['100%', 'Cold-Pressed'], ['0', 'Additives']],
  // },
  {
    slug: 'virgin-coconut-oil',
    n: '01',
    tag: '28 Superfood Wellness Biscuits',
    title: 'Premium Sprouted Grain Biscuits',
    intro:
      'A revolutionary healthy biscuit crafted with 28 powerful natural superfoods including sprouted grains, ancient millets, premium nuts, seeds, berries, and botanical ingredients. Designed for modern healthy lifestyles, it delivers clean energy, smooth digestion, immunity support, and guilt-free indulgence — completely free from maida, refined sugar, preservatives, and artificial additives.',
    img: '/products/biscuit/prod1.webp',
    altImg: '/products/biscuit/prod2.webp',

    benefits: [
      {
        i: Wheat,
        t: '28 Superfood Blend',
        d: 'Sprouted grains, millets, nuts, and seeds for complete daily nutrition.',
      },
      {
        i: Zap,
        t: 'Zero Refined Sugar',
        d: 'Naturally sweetened for clean energy without sugar crashes.',
      },
      {
        i: Heart,
        t: 'Gut, Brain & Heart Support',
        d: 'Supports digestion, heart wellness, and cognitive health naturally.',
      },
    ],

    facts: [
      ['28', 'Natural Superfoods'],
      ['0', 'Refined Sugar'],
      ['100%', 'Natural Ingredients'],
    ],
  },
  {
    slug: 'virgin-coconut-oil',
    n: '02',
    tag: 'Cold-Pressed Wellness Essential',
    title: '100% Pure Virgin Coconut Oil',

    intro:
      'Crafted from fresh coconut milk using advanced cold-pressed extraction, our Virgin Coconut Oil preserves the coconut’s natural aroma, antioxidants, and healthy nutrients in their purest form. Designed for cooking, skincare, hair wellness, and holistic everyday living — without heat treatment, chemicals, or artificial processing.',

    img: '/products/oil/prod2.webp',
    altImg: '/products/oil/prod1.webp',

    benefits: [
      {
        i: ShieldCheck,
        t: '100% Cold-Pressed Purity',
        d: 'No heat, no chemicals, and no refining — just pure coconut wellness.',
      },
      {
        i: Heart,
        t: 'Healthy Energy & Metabolism',
        d: 'Rich in MCFAs that support metabolism and natural daily energy.',
      },
      {
        i: Sparkles,
        t: 'Skin & Hair Nourishment',
        d: 'Deeply hydrates skin and strengthens hair with natural nutrients.',
      },
    ],

    facts: [
      ['100%', 'Cold-Pressed'],
      ['0', 'Chemical Processing'],
      ['Multi', 'Skin • Hair • Cooking'],
    ],
  },
  // {
  //   slug: 'coconut-paneer-milk-powder',
  //   n: '02',
  //   tag: 'Plant-Based Dairy',
  //   title: 'Coconut Paneer & Coconut Milk Powder',
  //   intro: 'A modern, dairy-free kitchen staple. Our coconut paneer delivers the texture and protein of traditional paneer, while our instant coconut milk powder reconstitutes into rich, creamy milk in seconds.',
  // img: '/products/paneer/paneerProd.webp',
  // altImg: '/products/paneer/paneeralt2.webp',
  //   benefits: [
  //     { i: Leaf, t: 'Plant Protein', d: 'Complete dairy alternative for the modern lactose-free kitchen.' },
  //     { i: Sparkles, t: 'Long Shelf Life', d: 'Stable, ambient-storage milk powder — ready in 30 seconds.' },
  //     { i: Flame, t: 'Chef-Grade Texture', d: 'Holds shape when grilled or simmered, like the classic original.' },
  //   ],
  //   facts: [['100%', 'Dairy-Free'], ['12 mo', 'Shelf Stable'], ['Hi', 'Protein Density']],
  // },
  {
    slug: 'coconut-paneer',
    n: '03',
    tag: 'Plant-Based Dairy Innovation',
    title: 'Premium Coconut Paneer',

    intro:
      'A revolutionary dairy-free paneer crafted from 100% fresh coconut milk, delivering the rich softness and satisfying texture of traditional paneer in a completely plant-based form. Designed for modern healthy lifestyles, it offers clean nutrition, easy digestion, and wholesome goodness without lactose, preservatives, or artificial additives.',

    img: '/products/paneer/paneerProd.webp',
    altImg: '/products/paneer/paneeralt2.webp',

    benefits: [
      {
        i: Leaf,
        t: '100% Vegan & Dairy-Free',
        d: 'Made entirely from fresh coconut milk with zero dairy or lactose.',
      },
      {
        i: Zap,
        t: 'Keto-Friendly Energy',
        d: 'Rich in healthy MCFAs that convert quickly into clean energy.',
      },
      {
        i: Heart,
        t: 'Light & Easy Digestion',
        d: 'Gentle on the stomach and suitable for all age groups.',
      },
    ],

    facts: [
      ['100%', 'Plant-Based'],
      ['0', 'Lactose & Dairy'],
      ['Clean', 'No Preservatives'],
    ],
  },
  // {
  //   slug: 'coconut-water-powder',
  //   n: '03',
  //   tag: 'Instant Hydration',
  //   title: 'Dehydrated Coconut Water Powder',
  //   intro: 'Coconut water in its purest, most portable form. Freeze-dried at low temperature to preserve every electrolyte — hydration that travels in your pocket.',
  // img: '/products/coco-powder/cocopowder.webp',
  // altImg: '/products/coco-powder/cocopowderalt1.webp',
  //   benefits: [
  //     { i: Droplets, t: 'Five Electrolytes', d: 'Potassium, sodium, magnesium, calcium and phosphorus in natural balance.' },
  //     { i: Zap, t: 'Instant Mix', d: 'Reconstitutes into fresh coconut water in under 10 seconds.' },
  //     { i: ShieldCheck, t: 'Freeze-Dried Purity', d: 'Low-temperature drying retains 98% of native micronutrients.' },
  //   ],
  //   facts: [['98%', 'Nutrient Retention'], ['5', 'Natural Electrolytes'], ['0g', 'Added Sugar']],
  // },
  {
    slug: 'coconut-water-powder',
    n: '04',
    tag: 'Natural Hydration Innovation',
    title: 'Premium Coconut Water Powder',

    intro:
      'A refreshing next-generation hydration solution crafted from pure tender coconut water using advanced low-temperature spray and freeze-drying technology. Designed for active modern lifestyles, it delivers natural electrolytes, instant hydration, and clean energy in a convenient travel-friendly form — without preservatives, artificial flavors, or added sugar.',

    img: '/products/coco-powder/cocopowder.webp',
    altImg: '/products/coco-powder/cocopowderalt1.webp',

    benefits: [
      {
        i: Droplets,
        t: 'Natural Electrolyte Boost',
        d: 'Rich in potassium, magnesium, and calcium for instant hydration.',
      },
      {
        i: Zap,
        t: 'Clean Energy Hydration',
        d: 'Refreshes the body naturally without artificial sports drinks.',
      },
      {
        i: Sparkles,
        t: 'Skin & Digestive Wellness',
        d: 'Supports digestion, detoxification, and natural skin glow.',
      },
    ],

    facts: [
      ['100%', 'Natural Coconut Water'],
      ['0', 'Added Sugar'],
      ['Instant', 'Mix & Hydrate'],
    ],
  },
  {
    slug: 'coconut-milk-cream',
    n: '05',
    tag: 'Plant-Based Culinary Luxury',
    title: 'Premium Coconut Milk Cream',

    intro:
      'Crafted from the first pressing of mature handpicked coconuts, our Coconut Milk Cream delivers a naturally rich, velvety texture designed for premium cooking and gourmet wellness lifestyles. Completely dairy-free and preservative-free, it enhances curries, desserts, soups, and everyday recipes with authentic tropical richness and clean plant-based nutrition.',

    img: '/products/cream/prod1.webp',
    altImg: '/products/cream/prod3.webp',

    benefits: [
      {
        i: Droplets,
        t: 'Rich First-Press Creaminess',
        d: 'Naturally thick coconut cream with a smooth gourmet texture.',
      },
      {
        i: Leaf,
        t: '100% Vegan & Dairy-Free',
        d: 'Perfect plant-based alternative to heavy dairy creams.',
      },
      {
        i: Heart,
        t: 'Light & Healthy Cooking',
        d: 'Supports digestion and delivers clean plant-based energy.',
      },
    ],

    facts: [
      ['100%', 'First-Press Coconut'],
      ['0', 'Artificial Thickeners'],
      ['Plant', 'Based & Vegan'],
    ],
  },
  {
    slug: 'pink-paradise-fizz',
    n: '06',
    tag: 'Tropical Sparkling Wellness Drink',
    title: 'Pink Paradise Fizz',

    intro:
      'A vibrant sparkling wellness drink crafted with real pineapple juice, hydrating coconut water powder, and natural beetroot extract. Designed for modern active lifestyles, it delivers refreshing tropical flavor, clean hydration, natural stamina support, and crisp sparkling energy — without artificial colors, preservatives, or chemical-heavy soda ingredients.',

    img: '/products/protien/prodimg1.webp',
    altImg: '/products/protien/prod2.webp',

    benefits: [
      {
        i: Droplets,
        t: 'Natural Electrolyte Hydration',
        d: 'Powered by coconut water minerals for refreshing hydration support.',
      },
      {
        i: Zap,
        t: 'Clean Energy & Stamina',
        d: 'Beetroot and pineapple help boost natural energy and endurance.',
      },
      {
        i: ShieldCheck,
        t: 'Antioxidant-Rich Wellness',
        d: 'Supports immunity and digestion with natural tropical ingredients.',
      },
    ],

    facts: [
      ['100%', 'Natural Color'],
      ['0', 'Artificial Preservatives'],
      ['Real', 'Pineapple Juice'],
    ],
  }, 
  {
    slug: 'bio-active-moringa-extract',
    n: '07',
    tag: 'Next-Generation Wellness Extract',
    title: 'Bio-Active Moringa Dry Extract',

    intro:
      'A revolutionary next-generation moringa innovation developed using advanced Ultrasonic Nano-Extraction and precision Spray-Drying technology. Unlike ordinary moringa powders, this ultra-fine bio-active extract is 100% water-soluble, residue-free, and virtually tasteless — delivering powerful antioxidants, minerals, and plant nutrients in a clean premium wellness format designed for modern nutrition and global health formulations.',

    img: '/products/muringa/muringaprod1.webp',
    altImg: '/products/muringa/muringaprodalt.webp',

    benefits: [
      {
        i: Sparkles,
        t: '100% Instant Solubility',
        d: 'Dissolves completely without grit, residue, or bitterness.',
      },
      {
        i: ShieldCheck,
        t: 'Advanced Bio-Nutrient Extraction',
        d: 'Ultrasonic processing isolates highly active wellness compounds.',
      },
      {
        i: Leaf,
        t: 'Clean Global Wellness Ingredient',
        d: 'Organic, vegan, preservative-free, and export-grade quality.',
      },
    ],

    facts: [
      ['100%', 'Water Soluble'],
      ['0', 'Artificial Fillers'],
      ['Ultra', 'Fine Extract Technology'],
    ],
  }
]

export default function ProductsList() {
  return (
    <section className="relative bg-white">
      {PRODUCTS.map((p, idx) => {
        const reverse = idx % 2 === 1
        return (
          <div key={p.slug} id={p.slug} className={`relative py-14 sm:py-20 lg:py-32 ${idx === 0 ? 'pt-6 sm:pt-10 lg:pt-16' : ''} ${idx % 2 === 0 ? 'bg-white' : 'bg-emerald2-50/30'}`}>
            {idx % 2 === 1 && <div className="absolute inset-0 dot-bg opacity-40" />}
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
              <div className={`grid lg:grid-cols-12 gap-8 sm:gap-12 items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                {/* Visual */}
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.9 }}
                  className="lg:col-span-7 relative">
                  <div className="relative h-[280px] sm:h-[400px] lg:h-[520px] rounded-[20px] sm:rounded-[32px] overflow-hidden hairline">
                    <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald2-900/60 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 right-3 sm:top-6 sm:left-6 sm:right-6 flex justify-between items-start">
                      <span className="glass rounded-full px-3 py-1 text-[10px] tracking-[0.25em] uppercase text-emerald2-800 font-mono-display">Product {p.n}</span>
                      <span className="glass rounded-full px-3 py-1 text-[10px] tracking-[0.25em] uppercase text-emerald2-800 font-mono-display">{p.tag}</span>
                    </div>
                    <div className="absolute inset-x-3 bottom-3 sm:inset-x-6 sm:bottom-6 grid grid-cols-3 gap-1.5 sm:gap-2">
                      {p.facts.map(([v, l], i) => (
                        <div key={i} className="glass rounded-lg sm:rounded-xl p-2 sm:p-3">
                          <div className="font-display text-sm sm:text-base lg:text-xl text-emerald2-900">{v}</div>
                          <div className="text-[7px] sm:text-[8px] lg:text-[9px] tracking-[0.18em] sm:tracking-[0.22em] uppercase text-emerald2-800/65 font-mono-display">{l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Floating alt thumb */}
                  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
                    className={`hidden md:block absolute top-1/2 -mt-10 ${reverse ? '-right-8' : '-left-14'} w-32 h-28 sm:w-44 sm:h-40 rounded-xl sm:rounded-2xl overflow-hidden hairline shadow-[0_20px_60px_-25px_rgba(6,78,59,0.35)]`}>
                    <img src={p.altImg} alt={p.title} className="w-full h-full object-cover" />
                  </motion.div>
                </motion.div>

                {/* Content */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                  className="lg:col-span-5">
                  <div className="flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase font-mono-display text-emerald2-800">
                    <span className="h-px w-8 bg-emerald2-700" /> Product {p.n}
                  </div>
                  <h2 className="mt-3 sm:mt-3 font-display text-2xl sm:text-3xl lg:text-5xl tracking-[-0.02em] text-emerald2-900 leading-[1.1] sm:leading-[1.04]">{p.title}</h2>
                  <p className="mt-3 sm:mt-6 text-slate-600 text-sm sm:text-base lg:text-[0.94rem] leading-relaxed">{p.intro}</p>

                  <div className="mt-5 sm:mt-8 space-y-2.5 sm:space-y-3">
                    {p.benefits.map((b, i) => (
                      <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6 }}
                        className="flex items-start gap-4 group">
                        <div className="h-8 w-8 sm:h-10 sm:w-10 shrink-0 rounded-lg sm:rounded-xl bg-gradient-to-br from-emerald2-600 to-emerald2-800 grid place-items-center text-white shadow-md group-hover:scale-110 transition-transform">
                          <b.i className="h-4.5 w-4.5" />
                        </div>
                        <div className="flex-1 pt-0 mt-0">
                          <div className="font-display text-sm sm:text-md font-medium tracking-[0.4px] text-emerald2-900">{b.t}</div>
                          <div className="text-[11px] sm:text-xs text-slate-600 mt-0.5">{b.d}</div>
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
