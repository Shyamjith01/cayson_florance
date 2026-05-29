'use client'
import { motion } from 'framer-motion'
import {
  Leaf, Sparkles, ShieldCheck, Flame, Heart, Zap, Wheat, Droplets, Sprout,
  FlaskConical, Brain, Activity, Sun, Microscope, Atom, Cherry, Coffee,
  TreePine, Apple, Snowflake, Waves, Beaker, Layers, ArrowRight, Star
} from 'lucide-react'

const PRODUCTS = [
  {
    slug: 'sprouted-grain-biscuits',
    n: '01',
    tag: '28 Superfood Wellness Biscuits',
    title: 'Premium Sprouted Grain Biscuits',
    intro:
      'A revolutionary healthy biscuit crafted with 28 powerful natural superfoods including sprouted grains, ancient millets, premium nuts, seeds, berries, and botanical ingredients. Made without maida, refined sugar, preservatives, or artificial additives, it delivers clean energy, smooth digestion, immunity support, and guilt-free nourishment for modern healthy lifestyles.',
    img: '/products/biscuit/prod3.jpg',
    altImg: '/products/biscuit/prod3.jpg',
    whyDifferent: [
      {
        t: '28 Natural Superfoods',
        d: 'A powerful blend of sprouted grains, millets, nuts, seeds, berries, and botanicals.',
      },
      {
        t: 'Sprouted Grain Activation',
        d: 'Sprouting improves mineral absorption and supports smooth digestion naturally.',
      },
      {
        t: <>Zero Refined Sugar Using <strong>Monk Fruit</strong></>,
        d: 'Sweetened naturally using monk fruit and banana powder without white sugar.',
      },
      {
        t: 'No Maida or Preservatives',
        d: 'Made with clean natural ingredients and absolutely no artificial additives.',
      },
    ],

    tech: {
      name: 'Sprouted Grain Nutrient Retention Technology',


      desc:
        'Advanced low-heat sprouting and slow-bake processing preserves nutrients, improves digestibility, and maintains authentic ingredient flavor without chemical processing.',

      steps: [
        'Sprouting',
        'Low-Heat Activation',
        'Nutrient Blending',
        'Slow-Bake Retention',
      ],

    },

    perfectFor: [
      'Fitness Enthusiasts',
      'Busy Professionals',
      'Healthy Families',
      'Kids & Seniors',
      'Diabetic-Friendly Lifestyles',
    ],

    benefits: [
      {
        i: Wheat,
        t: '28 Superfood Blend',
        d: 'Sprouted grains, millets, nuts, and seeds for complete daily nutrition.',
      },
      {
        i: Zap,
        t: <>Zero Refined Sugar Using <strong>Monk Fruit</strong></>,
        d: 'Naturally sweetened with monk fruit for clean energy without sugar crashes.',
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
      'Crafted from the freshest coconut milk using advanced cold-pressed extraction technology, our Premium Virgin Coconut Oil preserves the coconut’s original aroma, antioxidants, healthy enzymes, and natural nutrients in their purest form. Completely free from heat treatment, chemical refining, bleaching, and artificial processing, it is designed as a holistic wellness essential for healthy cooking, glowing skin, nourished hair, and everyday family wellness.',
    img: '/products/oil/prod2.webp',
    altImg: '/products/oil/prod1.webp',
    whyDifferent: [
      {
        t: '100% Pure & Unrefined',
        d: 'Extracted directly from fresh coconut milk without bleaching or chemical refining.',
      },
      {
        t: 'Advanced Cold-Pressed Processing',
        d: 'Low-temperature extraction preserves antioxidants, Vitamin E, and healthy enzymes naturally.',
      },
      {
        t: 'Multi-Purpose Wellness Essential',
        d: 'Designed for cooking, skincare, hair nourishment, and holistic daily wellness.',
      },
      {
        t: 'No Chemicals or Preservatives',
        d: 'Completely free from artificial aromas, additives, and synthetic processing.',
      },
    ],

    tech: {
      name: 'Advanced Cold-Pressed Extraction Technology',
      desc:
        'Fresh coconut milk undergoes precision low-temperature cold extraction to preserve healthy fats, natural aroma, antioxidants, enzymes, and nutrient integrity without heat damage or chemical treatment.',

      steps: [
        'Fresh Coconut Selection',
        'Milk Extraction',
        'Cold-Pressed Processing',
        'Natural Filtration',
      ],
    },
    perfectFor: [
      'Healthy Cooking',
      'Natural Skincare',
      'Hair Nourishment',
      'Baby Care',
      'Family Wellness',
    ],

    benefits: [
      {
        i: ShieldCheck,
        t: '100% Cold-Pressed Purity',
        d: 'No heat, chemicals, bleaching, or artificial refining involved.',
      },
      {
        i: Heart,
        t: 'Healthy Energy & Metabolism',
        d: 'Rich in MCFAs that support metabolism, heart health, and clean energy.',
      },
      {
        i: Sparkles,
        t: 'Skin & Hair Nourishment',
        d: 'Deeply hydrates skin and strengthens hair with natural coconut nutrients.',
      },
    ],

    facts: [
      ['100%', 'Cold-Pressed'],
      ['0', 'Chemical Processing'],
      ['Multi', 'Cooking • Skin • Hair'],
    ],
  },
  {
    slug: 'coconut-paneer',
    n: '03',
    tag: 'Plant-Based Dairy Innovation',
    title: 'Premium Coconut Paneer',
    intro:
      'A revolutionary plant-based paneer crafted from 100% fresh coconut milk, delivering the rich softness and satisfying texture of traditional paneer in a completely dairy-free form. Designed for modern healthy lifestyles, it offers clean nutrition, easy digestion, keto-friendly energy, and wholesome goodness without lactose, preservatives, artificial stabilizers, or chemical additives.',
    img: '/products/paneer/paneerProd.webp',
    altImg: '/products/paneer/paneeralt2.webp',
    whyDifferent: [
      {
        t: '100% Dairy-Free & Vegan',
        d: 'Made exclusively from fresh coconut milk with zero dairy or animal derivatives.',
      },
      {
        t: 'Ultra-Soft Coconut Texture',
        d: 'Naturally creamy, juicy, and absorbs flavors beautifully during cooking.',
      },
      {
        t: 'No Chemicals or Preservatives',
        d: 'Free from artificial stabilizers, preservatives, and synthetic additives.',
      },
      {
        t: 'Clean Plant-Based Nutrition',
        d: 'Rich in healthy coconut fats and wholesome natural goodness.',
      },
    ],
    tech: {
      name: 'Plant-Based Coconut Structuring Technology',
      desc:
        'Fresh coconut milk undergoes natural plant-based structuring and stabilization to create a rich, soft paneer texture without dairy compounds, artificial thickeners, or chemical processing.',

      steps: [
        'Fresh Coconut Selection',
        'Milk Extraction',
        'Natural Structuring',
        'Fresh Processing',
      ],
    },
    perfectFor: [
      'Vegans',
      'Lactose Intolerance',
      'Keto Diets',
      'Healthy Families',
      'Fitness Meals',
    ],

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
  {
    slug: 'coconut-water-powder',
    n: '04',
    tag: 'Natural Hydration Innovation',

    title: 'Premium Coconut Water Powder',

    intro:
      'A refreshing next-generation hydration solution crafted from pure tender coconut water using advanced low-temperature spray and freeze-drying technology. Designed for active modern lifestyles, it delivers natural electrolytes, instant hydration, clean energy, and convenient travel-friendly wellness — without preservatives, artificial flavors, added sugar, or chemical-heavy sports drink ingredients.',

    img: '/products/coco-powder/cocopowder.webp',

    altImg: '/products/coco-powder/cocopowderalt1.webp',

    whyDifferent: [
      {
        t: '100% Real Tender Coconut Source',
        d: 'Crafted directly from fresh coconut water while preserving its natural nutrients.',
      },
      {
        t: 'Advanced Spray & Freeze Drying',
        d: 'Low-temperature dehydration preserves aroma, taste, and essential electrolytes.',
      },
      {
        t: 'Instant Anywhere Hydration',
        d: 'Portable wellness hydration designed for travel, gym, office, and outdoor lifestyles.',
      },
      {
        t: 'No Artificial Sports Formula',
        d: 'Free from preservatives, synthetic flavors, added sugar, and chemical additives.',
      },
    ],

    tech: {
      name: 'Advanced Spray & Freeze-Drying Technology',


      desc:
        'Fresh tender coconut water undergoes controlled low-temperature dehydration to preserve natural electrolytes, minerals, aroma, taste, and hydration properties without nutrient damage.',

      steps: [
        'Fresh Coconut Collection',
        'Low-Temperature Drying',
        'Powder Stabilization',
        'Instant Dissolve Processing',
      ],


    },

    perfectFor: [
      'Athletes',
      'Fitness Enthusiasts',
      'Travelers',
      'Outdoor Activities',
      'Daily Natural Hydration',
    ],

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
      'Crafted from the very first pressing of mature handpicked coconuts, our Premium Coconut Milk Cream delivers rich velvety texture, authentic tropical flavor, and naturally creamy plant-based goodness for modern gourmet cooking. Completely dairy-free and preservative-free, it enhances curries, soups, desserts, and premium recipes with luxurious restaurant-style richness — without artificial thickeners, cornstarch, or chemical additives.',
    img: '/products/cream/prod1.webp',
    altImg: '/products/cream/prod3.webp',
    whyDifferent: [
      {
        t: '100% First-Press Coconut Richness',
        d: 'Made from the richest first extraction of mature handpicked coconuts.',
      },
      {
        t: 'Naturally Thick Creamy Texture',
        d: 'Dense velvety consistency without artificial thickeners or stabilizers.',
      },
      {
        t: 'Authentic Tropical Aroma',
        d: 'Pure naturally sweet coconut fragrance without synthetic enhancers.',
      },
      {
        t: 'Completely Vegan & Dairy-Free',
        d: 'A clean plant-based alternative to heavy dairy cooking creams.',
      },
    ],
    tech: {
      name: 'First-Press Coconut Cream Extraction',
      desc:
        'Premium mature coconuts undergo first-press extraction and natural stabilization to preserve authentic richness, creamy texture, and healthy plant-based fats without artificial processing.',
      steps: [
        'Mature Coconut Selection',
        'First Press Extraction',
        'Cream Separation',
        'Natural Stabilization',
      ],
    },
    perfectFor: [
      'Gourmet Cooking',
      'Plant-Based Diets',
      'Healthy Kitchens',
      'Luxury Desserts',
      'Dairy-Free Recipes',
    ],
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
      'A vibrant sparkling wellness drink crafted with real Pineapple Juice, hydrating Coconut Water Powder, and natural Beetroot Powder for a refreshing fusion of tropical flavor, electrolyte hydration, and clean plant-powered stamina. Designed for modern active lifestyles, this ruby-pink functional beverage delivers crisp sparkling refreshment, natural antioxidants, and smooth energy support — without artificial colors, chemical preservatives, or heavy commercial soda ingredients.',
    img: '/products/protien/prodimg1.webp',
    altImg: '/products/protien/prod2.webp',
    whyDifferent: [
      {
        t: 'Real Pineapple Juice Infusion',
        d: 'Authentic tropical pineapple flavor with naturally sweet tangy refreshment.',
      },
      {
        t: 'Natural Beetroot Color & Stamina',
        d: 'Ruby-pink color and natural nitrates from real beetroot powder.',
      },
      {
        t: 'Coconut Water Electrolyte Hydration',
        d: 'Powered by tender coconut minerals like potassium and magnesium.',
      },
      {
        t: 'Clean Sparkling Wellness Formula',
        d: 'No synthetic dyes, high-fructose syrup, or chemical preservatives.',
      },
    ],
    tech: {
      name: 'Functional Tropical Beverage Carbonation',
      desc:
        'Premium pineapple juice, coconut water powder, and beetroot extract are blended using precision carbonation technology to create a clean sparkling wellness drink with natural hydration, tropical flavor, and functional nutrition.',
      steps: [
        'Fruit Juice Infusion',
        'Electrolyte Blending',
        'Natural Botanical Enhancement',
        'Precision Carbonation',
      ],
    },
    perfectFor: [
      'Post-Workout Hydration',
      'Summer Refreshment',
      'Active Lifestyles',
      'Healthy Social Gatherings',
      'Plant-Powered Energy',
    ],
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
      'A revolutionary next-generation moringa innovation developed using advanced Ultrasonic Nano-Extraction and precision Spray-Drying technology. Unlike ordinary moringa powders, this ultra-fine bio-active extract is 100% water-soluble, residue-free, virtually tasteless, and scientifically refined for premium wellness applications. Designed for modern nutrition, functional beverages, nutraceuticals, and global wellness formulations, it delivers concentrated antioxidants, minerals, and bio-active plant nutrients in a clean-label export-grade format.',
    img: '/products/muringa/muringaprod1.webp',
    altImg: '/products/muringa/muringaprodalt.webp',
    whyDifferent: [
      {
        t: 'Ultrasonic Nano-Extraction',
        d: 'Advanced extraction isolates highly active bio-nutrients from moringa cells.',
      },
      {
        t: '100% Instant Water Solubility',
        d: 'Dissolves completely without grit, sludge, bitterness, or residue.',
      },
      {
        t: 'Virtually Taste-Free Formula',
        d: 'Enhances nutrition without affecting flavor, aroma, or beverage texture.',
      },
      {
        t: 'Global Export-Grade Ingredient',
        d: 'Clean-label, vegan, preservative-free, and internationally scalable.',
      },
    ],
    tech: {
      name: 'Ultrasonic Nano-Extraction Technology',
      desc:
        'Advanced ultrasonic extraction combined with precision spray-drying breaks down plant cellular structures to isolate highly active bio-nutrients, creating an ultra-fine instant-soluble moringa wellness extract.',
      steps: [
        'Premium Leaf Selection',
        'Ultrasonic Extraction',
        'Spray-Drying',
        'Ultra-Fine Processing',
      ],
    },
    perfectFor: [
      'Nutraceutical Brands',
      'Functional Beverages',
      'Protein Formulations',
      'Global Wellness Companies',
      'B2B Ingredient Buyers',
    ],
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
                      <span className="glass rounded-full px-3 py-1 text-[8px] sm:text-[10px] tracking-[0.25em] uppercase text-emerald2-800 font-mono-display">Product {p.n}</span>
                      <span className="glass rounded-full px-3 py-1 text-[8px] sm:text-[10px] tracking-[0.25em] uppercase text-emerald2-800 font-mono-display">{p.tag}</span>
                    </div>
                    <div className="absolute inset-x-3 bottom-3 sm:inset-x-6 sm:bottom-6 grid grid-cols-3 gap-1.5 sm:gap-2">
                      {p.facts.map(([v, l], i) => (
                        <div key={i} className="glass rounded-lg sm:rounded-xl p-2 py-1 sm:p-3 flex flex-col justify-center">
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
                  className="lg:col-span-5 px-1 sm:px-0">
                  <div className="flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase font-mono-display text-emerald2-800">
                    <span className="h-px w-4 sm:w-8 bg-emerald2-700" /> Product {p.n}
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
              {/* ROW 2 :: Why It's Different — horizontal feature strip */}
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.8 }}
                className="mt-16 lg:mt-20">
                <div className="flex items-end justify-between mb-5">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-emerald2-700/70 font-mono-display inline-flex items-center gap-2">
                    <Star className="h-3 w-3 text-gold-400" /> Why It's Different
                  </div>
                  <div className="hidden sm:block h-px flex-1 mx-5 bg-gradient-to-r from-emerald2-200 to-transparent" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {p?.whyDifferent?.map((w, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.5 }}
                      className="group glass rounded-2xl p-5 hover:-translate-y-0.5 transition-all duration-300">
                      <div className="text-[10px] tracking-[0.3em] uppercase text-emerald2-700/55 font-mono-display">0{i + 1}</div>
                      <div className="mt-2 font-display text-lg text-emerald2-900 leading-tight">{w.t}</div>
                      <div className="mt-1.5 text-[12.5px] text-slate-600 leading-snug">{w.d}</div>
                      <div className="mt-3 h-px bg-gradient-to-r from-emerald2-300/60 to-transparent" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* ROW 3 :: Technology highlight + Perfect For */}
              <div className="mt-12 grid lg:grid-cols-12 gap-5 lg:gap-6">
                {/* Technology process */}
                <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.8 }}
                  className="lg:col-span-7 relative rounded-[20px] sm:rounded-[24px] bg-gradient-to-br from-emerald2-50 via-white to-emerald2-50/50 border border-emerald2-100 shadow-sm p-5 sm:p-7 lg:p-9 text-emerald2-900 overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-emerald2-200/20 blur-3xl" />
                  <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-gold-200/20 blur-3xl" />
                  <div className="relative">
                    <div className="flex items-start justify-between gap-3 sm:gap-4">
                      <div className="pr-2 sm:pr-4">
                        <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[8px] sm:text-[10px] tracking-[0.3em] uppercase text-emerald2-600 font-mono-display">
                          <FlaskConical className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> Innovation Spotlight
                        </div>
                        <h3 className="mt-2 sm:mt-3 font-display text-xl sm:text-2xl lg:text-3xl text-emerald2-900 leading-tight">{p?.tech?.name}</h3>
                        <p className="mt-2 sm:mt-3 text-[13px] sm:text-[14px] text-slate-600 max-w-xl leading-relaxed">{p.tech.desc}</p>
                      </div>
                      <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 rounded-xl bg-white border border-emerald2-100 shadow-sm grid place-items-center text-emerald2-600">
                        <Microscope className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                    </div>

                    {/* Process steps */}
                    <div className="mt-4 sm:mt-6 flex items-center gap-1.5 sm:gap-2 lg:gap-3 overflow-x-auto pb-4 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-emerald2-50 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-emerald2-200 [&::-webkit-scrollbar-thumb]:rounded-full">
                      {p.tech.steps.map((s, i, arr) => (
                        <div key={s} className="flex items-center gap-1.5 sm:gap-2 lg:gap-3 shrink-0">
                          <div className="relative rounded-lg sm:rounded-xl border border-emerald2-100 bg-white shadow-sm px-3 py-2 sm:px-4 sm:py-2.5">
                            <div className="text-[8px] sm:text-[9px] tracking-[0.25em] uppercase text-emerald2-600 font-mono-display">Step 0{i + 1}</div>
                            <div className="font-display text-sm sm:text-base text-emerald2-900 mt-0.5">{s}</div>
                          </div>
                          {i < arr.length - 1 && <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-emerald2-300 shrink-0" />}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Perfect For */}
                <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.8 }}
                  className="lg:col-span-5 rounded-[24px] glass p-5 lg:p-9 flex flex-col sm:p-7">
                  <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-emerald2-700/70 font-mono-display">
                    <Heart className="h-3.5 w-3.5 text-emerald2-600" /> Perfect For
                  </div>
                  <h3 className="mt-3 font-display text-2xl text-emerald2-900 leading-tight">Built for the people who care most.</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.perfectFor.map((a, i) => (
                      <motion.span key={a} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.4 }}
                        className="text-[9px] sm:text-[10.5px] tracking-[0.1em] uppercase font-mono-display rounded-full bg-white border border-emerald2-200/80 text-emerald2-900 px-3.5 py-1 sm:py-2 shadow-sm hover:border-emerald2-400 hover:bg-emerald2-50 transition-colors">
                        {a}
                      </motion.span>
                    ))}
                  </div>
                  <div className="mt-auto pt-6 flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-emerald2-700/60 font-mono-display">
                    <TreePine className="h-3 w-3" /> Sourced via 500+ partner farmers · Kerala · Tamil Nadu
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
