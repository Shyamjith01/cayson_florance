'use client'
import { motion } from 'framer-motion'
import {
  Leaf, Sparkles, ShieldCheck, Flame, Heart, Zap, Wheat, Droplets, Sprout,
  FlaskConical, Brain, Activity, Sun, Microscope, Atom, Cherry, Coffee,
  TreePine, Apple, Snowflake, Waves, Beaker, Layers, ArrowRight, Star
} from 'lucide-react'

/* ---------------- PRODUCT DATA (rich storytelling) ---------------- */
const PRODUCTS = [
  {
    slug: 'premium-sprouted-grain-biscuits',
    n: '01',
    category: 'Functional Superfood Innovation',
    tag: 'Daily Wellness Ritual',
    title: 'Premium Sprouted Grain Biscuits',
    flagship: true,
    intro: [
      'Twenty-eight carefully composed superfoods, sprouted whole grains, nuts, seeds and botanicals — orchestrated into a single, daily-wellness biscuit. Engineered for the modern household that refuses to compromise between flavour, clean ingredients and real nutrition.',
      'No refined sugar. No artificial additives. Just a thoughtful nutritional bouquet that turns one of the world\u2019s most loved everyday formats into a true functional food \u2014 a flagship in our wellness portfolio.',
    ],
    whyDifferent: [
      { t: '28 Composed Superfoods', d: 'A measured blend, not a marketing claim.' },
      { t: 'Sprouted-Grain Activation', d: 'Higher mineral and protein bio-availability.' },
      { t: 'Zero Refined Sugar', d: 'Naturally sweetened, never compromised.' },
      { t: 'Nuts \u00b7 Seeds \u00b7 Botanicals', d: 'A complete daily nutritional matrix.' },
    ],
    benefits: [
      { i: Activity, t: 'Sustained Energy', d: 'Complex carbohydrates and plant protein for slow, steady release.' },
      { i: Heart, t: 'Cardiometabolic Care', d: 'Soluble fibre, plant omega-3 and antioxidant phytochemicals.' },
      { i: Brain, t: 'Cognitive Wellness', d: 'Walnut, almond and brahmi-class botanicals for focus.' },
      { i: ShieldCheck, t: 'Gut Health', d: 'Sprouted-grain fibre nourishes a balanced microbiome.' },
    ],
    perfectFor: ['Working Professionals', 'Fitness Enthusiasts', 'Families', 'Kids & Seniors', 'Wellness Households'],
    tech: {
      name: 'Sprouted-Activation Methodology',
      desc: 'Low-heat enzymatic sprouting followed by slow-bake retention preserves enzyme activity and micronutrient density.',
      steps: ['Soak', 'Sprout', 'Blend', 'Slow-Bake'],
    },
    facts: [['28', 'Superfoods'], ['0g', 'Refined Sugar'], ['100%', 'Sprouted'], ['12+', 'Active Nutrients']],
    img: '/products/biscuit/prod1.webp',
    fallback: 'https://images.unsplash.com/photo-1574156754673-0b54b2934ded?auto=format&fit=crop&w=1800&q=85',
    altImg: '/products/biscuit/prod2.webp',
    altFallback: 'https://images.pexels.com/photos/11579274/pexels-photo-11579274.jpeg?auto=compress&w=1400&q=80',
    moodBg: 'from-amber-50/40 via-white to-emerald2-50/30',
    floatA: { v: '28', l: 'Superfoods', i: Wheat },
    floatB: { v: '0g', l: 'Refined Sugar', i: ShieldCheck },
  },
  {
    slug: 'virgin-coconut-oil',
    n: '02',
    category: 'Cold-Pressed Wellness Essential',
    tag: 'Multipurpose Wellness',
    title: '100% Pure Virgin Coconut Oil',
    intro: [
      'A single, uncompromising bottle for the entire daily wellness ritual \u2014 cold-pressed within forty-eight hours of harvest, never touched by solvents or heat-damage. The result is an oil so clean it crosses categories: cooking, skincare, hair, and holistic living.',
      'Our cold-press chain is owned end-to-end \u2014 from our partner-farmer coconuts to our Ernakulam bio-processing facility \u2014 so every drop carries the same purity, the same MCT profile, the same provenance.',
    ],
    whyDifferent: [
      { t: '<48h Harvest-to-Press', d: 'Living oil, captured at peak freshness.' },
      { t: 'Cold-Press Only', d: 'No solvents. No heat. No compromise.' },
      { t: 'Lab-Validated Purity', d: 'Every batch independently tested.' },
      { t: 'Single-Origin', d: 'Traceable to specific partner farms.' },
    ],
    benefits: [
      { i: Heart, t: 'Heart-Friendly MCTs', d: 'Medium-chain triglycerides metabolised directly to clean energy.' },
      { i: Flame, t: 'High Smoke Point', d: 'Stable at cooking temperatures \u2014 ideal for daily Indian cuisine.' },
      { i: Sparkles, t: 'Skin & Hair Ritual', d: 'Deep moisturisation, scalp nourishment, gentle make-up removal.' },
      { i: Atom, t: 'Lauric Acid Richness', d: 'Naturally supports immunity and metabolism.' },
    ],
    perfectFor: ['Health-Conscious Cooks', 'Skincare Enthusiasts', 'New Parents', 'Ayurveda Followers', 'Athletes'],
    tech: {
      name: 'Cold-Press Extraction',
      desc: 'Mechanical pressing at sub-40\u00b0C preserves volatile aroma compounds and lauric acid integrity.',
      steps: ['Harvest', 'Grate', 'Cold-Press', 'Filter'],
    },
    facts: [['<48h', 'Farm to Press'], ['100%', 'Cold-Pressed'], ['0', 'Additives'], ['~62%', 'Lauric Acid']],
    img: '/products/oil/prod2.webp',
    fallback: 'https://images.pexels.com/photos/30863190/pexels-photo-30863190.jpeg?auto=compress&w=1800&q=85',
    altImg: '/products/oil/prod1.webp',
    altFallback: 'https://images.pexels.com/photos/3986706/pexels-photo-3986706.jpeg?auto=compress&w=1400&q=80',
    moodBg: 'from-yellow-50/40 via-white to-emerald2-50/30',
    floatA: { v: '<48h', l: 'Press Time', i: Snowflake },
    floatB: { v: '62%', l: 'Lauric Acid', i: Atom },
  },
  {
    slug: 'coconut-paneer',
    n: '03',
    category: 'Plant-Based Dairy Innovation',
    tag: 'Chef-Grade Texture',
    title: 'Premium Coconut Paneer',
    intro: [
      'A soft, dairy-free paneer crafted entirely from first-press coconut milk \u2014 designed for the modern Indian kitchen that has fallen out of love with conventional dairy but refused to give up the textures it grew up on.',
      'Holds shape on the tawa. Soaks gravy like the original. Melts and grills like the best plant-based cheeses on the global market. A serious culinary tool, not a substitute.',
    ],
    whyDifferent: [
      { t: 'First-Press Coconut Milk', d: 'The richest, most velvety fraction.' },
      { t: 'Chef-Grade Texture', d: 'Holds, grills, simmers, soaks.' },
      { t: 'Zero Dairy. Zero Lactose.', d: 'Plant-only, every batch.' },
      { t: 'Clean Label', d: 'No synthetic emulsifiers or gums.' },
    ],
    benefits: [
      { i: Leaf, t: 'Complete Plant Protein', d: 'Engineered amino balance suitable for daily consumption.' },
      { i: Flame, t: 'Culinary Versatility', d: 'Tikka, curry, salad, grill \u2014 one ingredient, every format.' },
      { i: Heart, t: 'Heart-Healthy Fats', d: 'Naturally rich in medium-chain triglycerides.' },
      { i: Sparkles, t: 'Lactose-Free Living', d: 'Premium experience for the lactose-intolerant household.' },
    ],
    perfectFor: ['Vegan Households', 'Lactose-Intolerant', 'Modern Indian Kitchens', 'Health Restaurants', 'Athletes'],
    tech: {
      name: 'First-Press Coagulation',
      desc: 'Proprietary acid-set coagulation of only the first-press milk fraction creates the chef-grade structure.',
      steps: ['Press', 'Coagulate', 'Set', 'Brine'],
    },
    facts: [['100%', 'Dairy-Free'], ['1st', 'Press Only'], ['Hi', 'Protein Density'], ['0', 'Lactose']],
    img: '/products/paneer/paneerProd.webp',
    fallback: 'https://images.unsplash.com/photo-1631255325853-88ee53e458fc?auto=format&fit=crop&w=1800&q=85',
    altImg: '/products/paneer/paneer2.webp',
    altFallback: 'https://images.unsplash.com/photo-1567011345445-fd175f248019?auto=format&fit=crop&w=1400&q=80',
    moodBg: 'from-stone-50/40 via-white to-emerald2-50/30',
    floatA: { v: '1st', l: 'Press Fraction', i: Layers },
    floatB: { v: '0', l: 'Lactose', i: ShieldCheck },
  },
  {
    slug: 'coconut-water-powder',
    n: '04',
    category: 'Advanced Hydration Science',
    tag: 'Instant Electrolytes',
    title: 'Premium Coconut Water Powder',
    intro: [
      'Coconut water in its purest, most portable form. Low-temperature spray-dried at sub-60\u00b0C to preserve the five native electrolytes \u2014 potassium, sodium, magnesium, calcium and phosphorus \u2014 in their natural ratio.',
      'Stir into water, shake into a bottle, blend into post-workout fuel. Ten seconds of preparation, the full electrolyte profile of a fresh tender coconut, zero of the logistics.',
    ],
    whyDifferent: [
      { t: 'Low-Temp Spray-Drying', d: '98% native nutrient retention.' },
      { t: 'Five Electrolytes', d: 'Potassium, sodium, magnesium, calcium, phosphorus.' },
      { t: 'No Reconstitution Sugar', d: 'Naturally sweet, naturally functional.' },
      { t: 'Pocket-Format Hydration', d: 'Year-shelf-life sachets and stick-packs.' },
    ],
    benefits: [
      { i: Droplets, t: 'Cellular Hydration', d: 'Electrolytes restore intracellular fluid balance fast.' },
      { i: Zap, t: 'Post-Workout Recovery', d: 'Rapid glycogen and electrolyte replenishment.' },
      { i: Sun, t: 'Heat Resilience', d: 'Engineered for Indian summer hydration needs.' },
      { i: Heart, t: 'Cardiovascular Support', d: 'Potassium-rich, blood-pressure friendly.' },
    ],
    perfectFor: ['Athletes', 'Travellers', 'Outdoor Workers', 'Endurance Sports', 'Hot-Climate Households'],
    tech: {
      name: 'Low-Temperature Spray-Drying',
      desc: 'Sub-60\u00b0C atomisation locks in volatile nutrients and preserves the native electrolyte profile.',
      steps: ['Filter', 'Atomise', 'Dry', 'Pack'],
    },
    facts: [['98%', 'Nutrient Retention'], ['5', 'Electrolytes'], ['10s', 'Mix Time'], ['0g', 'Added Sugar']],
    img: '/products/coco-powder/cocopowder.webp',
    fallback: 'https://images.pexels.com/photos/20720084/pexels-photo-20720084.jpeg?auto=compress&w=1800&q=85',
    altImg: '/products/coco-powder/cocopowder2.webp',
    altFallback: 'https://images.unsplash.com/photo-1592907724820-eaacf1251d8c?auto=format&fit=crop&w=1400&q=80',
    moodBg: 'from-sky-50/40 via-white to-emerald2-50/30',
    floatA: { v: '98%', l: 'Retention', i: Snowflake },
    floatB: { v: '5', l: 'Electrolytes', i: Waves },
  },
  {
    slug: 'coconut-milk-cream',
    n: '05',
    category: 'Gourmet Plant-Based Dairy',
    tag: 'First-Press Luxury',
    title: 'Premium Coconut Milk Cream',
    intro: [
      'The first press of a freshly grated coconut yields the richest, most velvety fraction \u2014 we bottle only that. The result is a culinary cream with the body of full-fat dairy, the cleanliness of plant-only sourcing, and a flavour profile chefs immediately recognise.',
      'Whip it, fold it, simmer it, glaze it. From patisserie kitchens to home Sunday roasts, this is dairy-free luxury without the compromises that defined plant cream a decade ago.',
    ],
    whyDifferent: [
      { t: 'First-Press Only', d: 'Only the richest fraction makes the bottle.' },
      { t: 'Gourmet Texture', d: 'Whips, folds and simmers like the original.' },
      { t: 'Long Shelf Life', d: 'Stable at ambient temperatures, ready when you are.' },
      { t: 'Clean Plant Label', d: 'No synthetic stabilisers or thickeners.' },
    ],
    benefits: [
      { i: Sparkles, t: 'Patisserie-Grade', d: 'Whipped peaks, glossy folds, restaurant-quality finish.' },
      { i: Flame, t: 'Heat-Stable', d: 'Holds structure in curries, sauces and reductions.' },
      { i: Leaf, t: 'Dairy-Free Luxury', d: 'Plant-based without flavour compromise.' },
      { i: Heart, t: 'Naturally Indulgent', d: 'Rich mouthfeel from natural plant fats.' },
    ],
    perfectFor: ['Pastry Chefs', 'Home Bakers', 'Vegan Gourmets', 'Cafes & Restaurants', 'Modern Indian Cooks'],
    tech: {
      name: 'First-Press Fractionation',
      desc: 'Mechanical separation isolates only the densest first-press cream fraction \u2014 around 18% of total yield.',
      steps: ['Grate', 'First-Press', 'Fractionate', 'Bottle'],
    },
    facts: [['18%', 'Yield Fraction'], ['1st', 'Press Only'], ['Gourmet', 'Texture'], ['100%', 'Plant-Based']],
    img: '/products/cream/prod1.webp',
    fallback: 'https://images.unsplash.com/photo-1567011345445-fd175f248019?auto=format&fit=crop&w=1800&q=85',
    altImg: '/products/cream/prod2.webp',
    altFallback: 'https://images.unsplash.com/photo-1631255325853-88ee53e458fc?auto=format&fit=crop&w=1400&q=80',
    moodBg: 'from-rose-50/30 via-white to-emerald2-50/30',
    floatA: { v: '18%', l: 'Yield', i: Layers },
    floatB: { v: '1st', l: 'Press', i: Sparkles },
  },
  {
    slug: 'pink-paradise-fizz',
    n: '06',
    category: 'Functional Tropical Beverage',
    tag: 'Sparkling Wellness',
    title: 'Pink Paradise Fizz',
    intro: [
      'A sparkling tropical wellness drink that finally tastes like the future. Real pineapple, fresh coconut water and natural beetroot energy \u2014 carbonated into a vibrant pink fizz that delivers genuine functional nutrition with zero added sugar.',
      'Designed for the post-soda generation, this is the beverage you reach for at the gym, on a flight, mid-afternoon at the desk, or as a clean cocktail base. Bright, alive, plant-powered.',
    ],
    whyDifferent: [
      { t: 'Real Fruit Infusion', d: 'Pineapple, beetroot and coconut water \u2014 nothing synthetic.' },
      { t: 'Natural Carbonation', d: 'Filtered CO\u2082 only, no synthetic sweeteners.' },
      { t: 'Beetroot Nitrates', d: 'Natural compounds for clean energy and circulation.' },
      { t: '0g Added Sugar', d: 'All sweetness comes from real fruit.' },
    ],
    benefits: [
      { i: Zap, t: 'Clean Energy', d: 'Beetroot nitrates support natural endurance and focus.' },
      { i: Cherry, t: 'Antioxidant Bouquet', d: 'Vibrant polyphenols from pineapple and beetroot.' },
      { i: Droplets, t: 'Hydration Plus', d: 'Coconut water electrolytes in every can.' },
      { i: Sparkles, t: 'Smarter Refreshment', d: 'The clean alternative to mass-market sodas.' },
    ],
    perfectFor: ['Fitness Lifestyle', 'Vegan Consumers', 'Gen-Z Wellness', 'Clean Cocktail Bases', 'Cafe Culture'],
    tech: {
      name: 'Cold-Infusion Carbonation',
      desc: 'Real fruit cold-infused into coconut water then carbonated with filtered CO\u2082 \u2014 no concentrates, no syrups.',
      steps: ['Infuse', 'Blend', 'Carbonate', 'Can'],
    },
    facts: [['0g', 'Added Sugar'], ['Real', 'Fruit'], ['Natural', 'Nitrates'], ['<90', 'Calories']],
    img: '/products/protien/prodimg1.webp',
    fallback: 'https://images.unsplash.com/photo-1775199603078-e1d964929e10?auto=format&fit=crop&w=1800&q=85',
    altImg: '/products/protien/prodimg2.webp',
    altFallback: 'https://images.unsplash.com/photo-1675897275724-202ce4be4f23?auto=format&fit=crop&w=1400&q=80',
    moodBg: 'from-pink-50/40 via-white to-emerald2-50/30',
    floatA: { v: 'Real', l: 'Fruit Infusion', i: Cherry },
    floatB: { v: '0g', l: 'Added Sugar', i: ShieldCheck },
  },
  {
    slug: 'bio-active-moringa-extract',
    n: '07',
    category: 'Advanced Nutraceutical',
    tag: 'Bio-Tech Wellness',
    title: 'Bio-Active Moringa Dry Extract',
    intro: [
      'A nutraceutical-grade moringa concentrate developed with advanced nano-extraction technology \u2014 the result is an ultra-fine, fully water-soluble matrix that bypasses the texture and absorption limitations of traditional leaf powders.',
      'Engineered for premium supplement formulators, functional-food brands and the discerning B2C wellness shelf. Every batch is lab-standardised for active phytochemical content and validated for purity.',
    ],
    whyDifferent: [
      { t: 'Nano-Extraction Tech', d: 'Bypasses absorption limits of traditional powders.' },
      { t: 'Fully Water-Soluble', d: 'Disperses cleanly in liquids, no chalkiness.' },
      { t: 'Standardised Extract', d: 'Validated active phytochemical content per batch.' },
      { t: 'Nutraceutical Grade', d: 'B2B and premium B2C formulator-ready.' },
    ],
    benefits: [
      { i: Leaf, t: '46+ Antioxidants', d: 'Among nature\u2019s most antioxidant-dense leaf extracts.' },
      { i: ShieldCheck, t: 'Immunity Support', d: 'Polyphenols, vitamin C and bio-flavonoids in concentration.' },
      { i: Activity, t: 'Anti-Inflammatory', d: 'Isothiocyanates known to support inflammatory balance.' },
      { i: Microscope, t: 'Lab-Validated', d: 'Every batch tested for purity and potency.' },
    ],
    perfectFor: ['Supplement Brands', 'Functional-Food R&D', 'Premium Pharmacies', 'Wellness Clinics', 'Export Markets'],
    tech: {
      name: 'Nano-Extraction Process',
      desc: 'Ultrasonic cavitation breaks down cellular structures, releasing phytochemicals into a water-soluble matrix.',
      steps: ['Harvest', 'Ultrasonic', 'Filter', 'Standardise'],
    },
    facts: [['46+', 'Antioxidants'], ['100%', 'Soluble'], ['Lab', 'Validated'], ['Nano', 'Extraction']],
    img: '/products/muringa/muringaprod1.webp',
    fallback: 'https://images.pexels.com/photos/6833682/pexels-photo-6833682.jpeg?auto=compress&w=1800&q=85',
    altImg: '/products/muringa/muringaprod2.webp',
    altFallback: 'https://images.pexels.com/photos/33500190/pexels-photo-33500190.jpeg?auto=compress&w=1400&q=80',
    moodBg: 'from-emerald2-50/50 via-white to-navy-50/30',
    floatA: { v: '46+', l: 'Antioxidants', i: Leaf },
    floatB: { v: 'Nano', l: 'Extraction', i: Beaker },
  },
]

/* ---------------- Helper image with fallback ---------------- */
function ProductImg({ src, fallback, alt, className }) {
  return (
    <img src={src} alt={alt} className={className}
      onError={(e) => { if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback }} />
  )
}

/* ---------------- Single Product Section ---------------- */
function ProductSection({ p, idx }) {
  const reverse = idx % 2 === 1
  return (
    <section id={p.slug} className={`relative overflow-hidden ${idx === 0 ? 'pt-12 lg:pt-16 pb-24 lg:pb-28' : 'py-24 lg:py-28'} bg-gradient-to-b ${p.moodBg}`}>
      {idx % 2 === 1 && <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />}
      <div className="absolute -top-32 right-0 w-[480px] h-[480px] rounded-full bg-emerald2-500/8 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-0 w-[480px] h-[480px] rounded-full bg-navy-700/6 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* ROW 1 :: Cinematic visual + Editorial content */}
        <div className={`grid lg:grid-cols-12 gap-10 lg:gap-12 items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
          {/* Visual */}
          <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.9 }}
            className="lg:col-span-7 relative">
            <div className="relative h-[500px] lg:h-[560px] rounded-[32px] overflow-hidden hairline">
              <ProductImg src={p.img} fallback={p.fallback} alt={p.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald2-900/65 via-emerald2-900/10 to-transparent" />

              {/* Top tags */}
              <div className="absolute top-5 left-5 right-5 flex justify-between items-start gap-3">
                <div className="flex flex-wrap gap-2">
                  <span className="glass rounded-full px-3 py-1 text-[10px] tracking-[0.25em] uppercase text-emerald2-800 font-mono-display">Product {p.n}</span>
                  {p.flagship && (
                    <span className="glass rounded-full px-3 py-1 text-[10px] tracking-[0.25em] uppercase text-emerald2-800 font-mono-display inline-flex items-center gap-1.5">
                      <Sparkles className="h-3 w-3 text-gold-400" /> Flagship
                    </span>
                  )}
                </div>
                <span className="glass rounded-full px-3 py-1 text-[10px] tracking-[0.25em] uppercase text-emerald2-800 font-mono-display whitespace-nowrap">{p.tag}</span>
              </div>

              {/* Floating ingredient card A — top right of image */}
              <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.35, duration: 0.7 }}
                className="absolute top-20 right-5 lg:right-7 hidden sm:block">
                <div className="glass rounded-2xl px-4 py-3 w-44 animate-float-slow">
                  <div className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-emerald2-600 to-emerald2-800 grid place-items-center text-white">
                      <p.floatA.i className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-display text-lg text-emerald2-900 leading-none">{p.floatA.v}</div>
                      <div className="text-[9px] tracking-[0.22em] uppercase text-emerald2-800/65 font-mono-display mt-0.5">{p.floatA.l}</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating ingredient card B — middle left */}
              <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.7 }}
                className="absolute top-[44%] left-5 lg:left-7 hidden md:block">
                <div className="glass rounded-2xl px-4 py-3 w-44">
                  <div className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-navy-700 to-emerald2-700 grid place-items-center text-white">
                      <p.floatB.i className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-display text-lg text-emerald2-900 leading-none">{p.floatB.v}</div>
                      <div className="text-[9px] tracking-[0.22em] uppercase text-emerald2-800/65 font-mono-display mt-0.5">{p.floatB.l}</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Quick facts strip at bottom */}
              <div className="absolute inset-x-5 bottom-5 grid grid-cols-4 gap-2">
                {p.facts.map(([v, l], i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.06 }}
                    className="glass rounded-xl p-2.5 sm:p-3">
                    <div className="font-display text-base sm:text-lg text-emerald2-900 leading-none">{v}</div>
                    <div className="text-[8.5px] sm:text-[9px] tracking-[0.2em] uppercase text-emerald2-800/65 font-mono-display mt-1">{l}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating alt thumbnail under card */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.25 }}
              className={`hidden md:block absolute ${reverse ? '-bottom-12 -right-8' : '-bottom-12 -left-8'} w-52 h-36 rounded-2xl overflow-hidden hairline shadow-[0_25px_60px_-25px_rgba(6,78,59,0.4)]`}>
              <ProductImg src={p.altImg} fallback={p.altFallback} alt={p.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald2-900/40 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Editorial content */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="lg:col-span-5">
            <div className="flex items-center gap-3 text-[10px] tracking-[0.28em] uppercase font-mono-display text-emerald2-800">
              <span className="h-px w-6 bg-emerald2-700" /> Product {p.n}
              <span className="h-1 w-1 rounded-full bg-emerald2-400" />
              <span className="text-emerald2-700/80">{p.category}</span>
            </div>
            <h2 className="mt-5 font-display text-4xl lg:text-5xl xl:text-[3.25rem] tracking-[-0.02em] text-emerald2-900 leading-[1.04]">{p.title}</h2>
            <div className="mt-6 space-y-4 text-slate-600 text-[15.5px] leading-relaxed">
              {p.intro.map((para, i) => <p key={i}>{para}</p>)}
            </div>

            {/* Benefits 2x2 grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {p.benefits.map((b, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="group relative rounded-2xl bg-white border border-emerald2-100/70 p-4 hover:border-emerald2-300 hover:-translate-y-0.5 hover:shadow-[0_15px_30px_-15px_rgba(6,78,59,0.2)] transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 shrink-0 rounded-lg bg-gradient-to-br from-emerald2-600 to-emerald2-800 grid place-items-center text-white shadow-sm group-hover:scale-110 transition-transform">
                      <b.i className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-display text-[15px] text-emerald2-900 leading-tight">{b.t}</div>
                      <div className="text-[12px] text-slate-600 mt-1 leading-snug">{b.d}</div>
                    </div>
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
            {p.whyDifferent.map((w, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.5 }}
                className="group glass rounded-2xl p-5 hover:-translate-y-0.5 transition-all duration-300">
                <div className="text-[10px] tracking-[0.3em] uppercase text-emerald2-700/55 font-mono-display">0{i+1}</div>
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
            className="lg:col-span-7 relative rounded-[24px] bg-gradient-to-br from-emerald2-900 via-emerald2-800 to-navy-900 p-7 lg:p-9 text-white overflow-hidden">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-emerald2-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-gold-400/10 blur-3xl" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-emerald2-300 font-mono-display">
                    <FlaskConical className="h-3.5 w-3.5" /> Innovation Spotlight
                  </div>
                  <h3 className="mt-3 font-display text-2xl lg:text-3xl text-white leading-tight">{p.tech.name}</h3>
                  <p className="mt-3 text-[14px] text-emerald2-100/85 max-w-xl leading-relaxed">{p.tech.desc}</p>
                </div>
                <div className="h-12 w-12 rounded-xl glass-dark border border-white/15 grid place-items-center text-emerald2-300">
                  <Microscope className="h-5 w-5" />
                </div>
              </div>

              {/* Process steps */}
              <div className="mt-6 flex items-center gap-2 lg:gap-3 overflow-x-auto pb-2">
                {p.tech.steps.map((s, i, arr) => (
                  <div key={s} className="flex items-center gap-2 lg:gap-3 shrink-0">
                    <div className="relative rounded-xl border border-white/15 bg-white/5 backdrop-blur px-4 py-2.5">
                      <div className="text-[9px] tracking-[0.25em] uppercase text-emerald2-300 font-mono-display">Step 0{i+1}</div>
                      <div className="font-display text-base text-white mt-0.5">{s}</div>
                    </div>
                    {i < arr.length - 1 && <ArrowRight className="h-4 w-4 text-emerald2-400 shrink-0" />}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Perfect For */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.8 }}
            className="lg:col-span-5 rounded-[24px] glass p-7 lg:p-9 flex flex-col">
            <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-emerald2-700/70 font-mono-display">
              <Heart className="h-3.5 w-3.5 text-emerald2-600" /> Perfect For
            </div>
            <h3 className="mt-3 font-display text-2xl text-emerald2-900 leading-tight">Built for the people who care most.</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.perfectFor.map((a, i) => (
                <motion.span key={a} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="text-[11.5px] tracking-[0.1em] uppercase font-mono-display rounded-full bg-white border border-emerald2-200/80 text-emerald2-900 px-3.5 py-2 shadow-sm hover:border-emerald2-400 hover:bg-emerald2-50 transition-colors">
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
    </section>
  )
}

/* ---------------- Top-level list ---------------- */
export default function ProductsList() {
  return (
    <div className="relative bg-white">
      {PRODUCTS.map((p, i) => (
        <ProductSection key={p.slug} p={p} idx={i} />
      ))}
    </div>
  )
}
