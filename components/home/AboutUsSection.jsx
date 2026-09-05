// 'use client'

// import { motion } from 'framer-motion'
// import Image from 'next/image'

// const fadeUp = (delay = 0) => ({
//   initial: { opacity: 0, y: 24 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true, margin: '-40px' },
//   transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
// })

// const STATS = [
//   {
//     icon: (
//       <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//         <circle cx="12" cy="8" r="6" />
//         <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
//       </svg>
//     ),
//     value: '11+',
//     label: 'Years of Purpose',
//   },
//   {
//     icon: (
//       <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//         <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//         <circle cx="9" cy="7" r="4" />
//         <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
//         <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//       </svg>
//     ),
//     value: '2.5M+',
//     label: 'Lives Impacted',
//   },
//   {
//     icon: (
//       <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//         <path d="M7 20h10" />
//         <path d="M10 20c5.5-2.5.8-6.4 3-10" />
//         <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8Z" />
//         <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4.1.9-4.9 2Z" />
//       </svg>
//     ),
//     value: '3.0M+',
//     label: 'Farmers Empowered',
//   },
//   {
//     icon: (
//       <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//         <circle cx="12" cy="12" r="10" />
//         <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
//         <path d="M2 12h20" />
//       </svg>
//     ),
//     value: '45+',
//     label: 'Countries Connected',
//   },
// ]

// const PILLARS = [
//   {
//     title: 'Global Perspective',
//     description: 'Connecting markets, ideas and communities to create a better and more inclusive tomorrow.',
//     icon: (
//       <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//         <circle cx="12" cy="12" r="9" />
//         <path d="M3.6 9h16.8" />
//         <path d="M3.6 15h16.8" />
//         <path d="M11.5 3a17 17 0 0 0 0 18" />
//         <path d="M12.5 3a17 17 0 0 1 0 18" />
//       </svg>
//     ),
//   },
//   {
//     title: 'Sustainable by Choice',
//     description: 'We build responsible businesses that create lasting environmental and social value.',
//     icon: (
//       <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//         <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
//         <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
//       </svg>
//     ),
//   },
//   {
//     title: 'People at the Core',
//     description: 'We grow together with our partners, farmers and communities, empowering a better future.',
//     icon: (
//       <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//         <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
//         <circle cx="9" cy="7" r="4" />
//         <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
//         <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//       </svg>
//     ),
//   },
//   {
//     title: 'Innovation for Good',
//     description: 'We continuously innovate to deliver future-ready solutions that make a real impact.',
//     icon: (
//       <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//         <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
//         <path d="M9 18h6" />
//         <path d="M10 22h4" />
//         <line x1="12" y1="2" x2="12" y2="4" />
//         <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
//         <line x1="19.07" y1="4.93" x2="17.66" y2="6.34" />
//       </svg>
//     ),
//   },
// ]

// export default function AboutUsSection() {
//   return (
//     <section
//       id="about"
//       className="py-20 lg:py-28 bg-[#F8F7F2] relative overflow-hidden"
//       aria-labelledby="about-us-heading"
//     >
//       <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

//         {/* ─── TOP: Left Content + Right Image ─────────────────────────────── */}
//         <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20 lg:items-stretch">

//           {/* LEFT COLUMN ──────────────────────── */}
//           <div className="flex-1 flex flex-col justify-between">

//             <div>
//               {/* Tagline */}
//               <motion.p {...fadeUp(0)} className="text-[11.5px] font-bold tracking-[0.22em] uppercase text-[#064B3B] mb-5">
//                 About Us
//               </motion.p>

//               {/* Headline */}
//               <motion.h2
//                 {...fadeUp(0.08)}
//                 id="about-us-heading"
//                 className="font-display text-[38px] sm:text-[46px] lg:text-[50px] font-semibold leading-[1.08] tracking-tight text-[#1F2926]"
//               >
//                 Built on Purpose.<br />
//                 <span className="text-[#064B3B]">Driven by Impact.</span>
//               </motion.h2>

//               {/* Gold Accent Bar */}
//               <motion.div {...fadeUp(0.14)} className="w-11 h-[2.5px] bg-[#C9A96E] rounded-full mt-6 mb-7" aria-hidden="true" />

//               {/* Body Copy */}
//               <motion.div {...fadeUp(0.18)} className="space-y-4 text-[#586159] text-[14.5px] sm:text-[15px] leading-[1.72] max-w-[520px]">
//                 <p>Cayson Florance International Pvt. Ltd. is a diversified health-tech, agri-tech and bio-processing company dedicated to building a sustainable future.</p>
//                 <p>From innovative health and nutrition solutions to smart agricultural systems and advanced bio-processing, we create value that empowers people, supports farmers and strengthens industries.</p>
//                 <p>Guided by integrity and innovation, we partner with communities and businesses worldwide to deliver responsible solutions that protect our planet and build a better tomorrow.</p>
//               </motion.div>
//             </div>

//             {/* Stats Card — pinned to bottom of left column */}
//             <motion.div
//               {...fadeUp(0.28)}
//               className="mt-10 bg-white rounded-2xl border border-[#EDF0EB] shadow-[0_2px_24px_rgba(0,0,0,0.04)] overflow-hidden"
//             >
//               {/* 4 equal-width stat cells */}
//               <div className="grid grid-cols-4 divide-x divide-[#EDF0EB]">
//                 {STATS.map((stat) => (
//                   <div key={stat.label} className="flex flex-col items-start justify-start py-6 px-4 sm:px-5 gap-0">
//                     {/* Icon badge */}
//                     <div className="w-9 h-9 rounded-full bg-[#EBF3EE] flex items-center justify-center text-[#064B3B] mb-3 shrink-0">
//                       {stat.icon}
//                     </div>
//                     {/* Value */}
//                     <span className="font-display text-[22px] sm:text-[24px] font-bold text-[#1A2420] leading-none tracking-tight">
//                       {stat.value}
//                     </span>
//                     {/* Label */}
//                     <span className="text-[11px] sm:text-[11.5px] text-[#6E7A6E] font-medium mt-1.5 leading-[1.4]">
//                       {stat.label}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//           </div>

//           {/* RIGHT COLUMN — Image ─────────────────────────── */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: '-50px' }}
//             transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
//             className="flex-1 relative min-h-[420px] lg:min-h-0"
//           >
//             <div className="relative w-full h-full min-h-[420px] rounded-[28px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] group">

//               <Image
//                 src="/home/aboutus.webp"
//                 alt="Cayson Florance International — Sustainable Headquarters"
//                 fill
//                 priority
//                 sizes="(max-width: 1024px) 100vw, 50vw"
//                 className="object-cover object-center transition-transform duration-[2s] ease-out group-hover:scale-[1.04]"
//               />

//               {/* Bottom gradient for overlay readability */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent pointer-events-none" />

//               {/* Our Vision Overlay — frosted glass */}
//               <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5">
//                 <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl px-5 py-4 sm:px-6 sm:py-5 shadow-[0_8px_32px_rgba(0,0,0,0.25)] flex items-center gap-4 sm:gap-5">

//                   {/* Icon pill */}
//                   <div className="shrink-0 flex items-center gap-3">
//                     <div className="w-10 h-10 rounded-full border border-[#D4AF37]/50 bg-[#0A2010]/30 flex items-center justify-center text-[#D4AF37]">
//                       <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//                         <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
//                         <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
//                       </svg>
//                     </div>
//                     <span className="text-[#D4AF37] font-semibold text-[14px] tracking-wide whitespace-nowrap">
//                       Our Vision
//                     </span>
//                   </div>

//                   {/* Divider */}
//                   <div className="w-px h-9 bg-white/25 shrink-0" aria-hidden="true" />

//                   {/* Statement */}
//                   <p className="text-white/90 text-[12.5px] sm:text-[13px] leading-[1.6] font-light">
//                     To be a global leader in sustainable innovation, creating lasting value for people, partners and the planet.
//                   </p>

//                 </div>
//               </div>

//             </div>
//           </motion.div>

//         </div>

//         {/* ─── BOTTOM: 4 Value Pillars ─────────────────────────────────────── */}
//         <div className="mt-20 sm:mt-24">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
//             {PILLARS.map((pillar, i) => (
//               <motion.div
//                 key={pillar.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: '-30px' }}
//                 transition={{ duration: 0.55, delay: 0.09 * i, ease: [0.22, 1, 0.36, 1] }}
//                 className="group bg-white border border-[#EDF0EA] rounded-2xl p-6 sm:p-7 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-0.5 flex flex-col gap-4"
//               >
//                 {/* Icon */}
//                 <div className="w-11 h-11 rounded-full bg-[#EBF3EE] flex items-center justify-center text-[#064B3B] transition-transform duration-300 group-hover:scale-105 shrink-0">
//                   {pillar.icon}
//                 </div>

//                 {/* Text */}
//                 <div>
//                   <h3 className="text-[15px] font-bold text-[#1A2420] leading-tight mb-2">
//                     {pillar.title}
//                   </h3>
//                   <div className="w-7 h-[2px] bg-[#C9A96E] rounded-full mb-3 transition-all duration-300 group-hover:w-10 group-hover:bg-[#064B3B]" aria-hidden="true" />
//                   <p className="text-[13px] text-[#606B61] leading-[1.65]">
//                     {pillar.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   )
// }


'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

const STATS = [
  {
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M7 20h10" />
        <path d="M10 20c5.5-2.5.8-6.4 3-10" />
        <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8Z" />
        <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4.1.9-4.9 2Z" />
      </svg>
    ),
    value: 'Agri',
    label: 'Plantations & Allied Activities',
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 3v18h18" />
        <path d="M7 16v-5" />
        <path d="M12 16V8" />
        <path d="M17 16v-9" />
      </svg>
    ),
    value: 'Energy',
    label: 'Power & Renewable Systems',
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 7h16v10H4z" />
        <path d="M8 7V4h8v3" />
        <path d="M4 12h16" />
        <path d="M10 12v2h4v-2" />
      </svg>
    ),
    value: 'Industry',
    label: 'Processing, Technology & Machinery',
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15 15 0 0 1 0 20" />
        <path d="M12 2a15 15 0 0 0 0 20" />
      </svg>
    ),
    value: 'Trade',
    label: 'Logistics & Global Commerce',
  },
]

const PILLARS = [
  {
    title: 'Diversified Business Scope',
    description:
      'Our company objects span agriculture, food processing, energy, infrastructure, technology, trade and mobility-related activities.',
    icon: (
      <svg
        className="w-[22px] h-[22px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    title: 'Responsible Resource Focus',
    description:
      'Our business scope includes activities connected to natural resources, renewable energy, recycling and responsible resource utilisation.',
    icon: (
      <svg
        className="w-[22px] h-[22px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
  },
  {
    title: 'Integrated Capabilities',
    description:
      'Our objects cover activities ranging from production and processing to equipment, infrastructure, storage, logistics and commercial operations.',
    icon: (
      <svg
        className="w-[22px] h-[22px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 21h18" />
        <path d="M5 21V8l7-5 7 5v13" />
        <path d="M9 21v-5h6v5" />
        <path d="M8 10h.01" />
        <path d="M16 10h.01" />
      </svg>
    ),
  },
  {
    title: 'Trade & Technology',
    description:
      'The company’s authorised scope also includes international trade, logistics, software, technology, industrial machinery and automotive-related activities.',
    icon: (
      <svg
        className="w-[22px] h-[22px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3.6 9h16.8" />
        <path d="M3.6 15h16.8" />
        <path d="M11.5 3a17 17 0 0 0 0 18" />
        <path d="M12.5 3a17 17 0 0 1 0 18" />
      </svg>
    ),
  },
]

export default function AboutUsSection() {
  return (
    <section
      id="about"
      className="py-20 lg:py-28 lg:pb-0 bg-[#F8F7F2] relative overflow-hidden"
      aria-labelledby="about-us-heading"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* ─── TOP: Left Content + Right Image ─────────────────────────────── */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20 lg:items-stretch">

          {/* LEFT COLUMN */}
          <div className="flex-1   flex flex-col justify-between">
            <div>
              {/* Tagline */}
              <motion.p
                {...fadeUp(0)}
                className="text-[11.5px] font-bold tracking-[0.22em] uppercase text-[#064B3B] mb-5"
              >
                About Us
              </motion.p>

              {/* Headline */}
              <motion.h2
                {...fadeUp(0.08)}
                id="about-us-heading"
                className="font-display text-[38px] sm:text-[46px] lg:text-[50px] font-semibold leading-[1.08] tracking-tight text-[#1F2926]"
              >
                Diversified by Vision.<br />
                <span className="text-[#064B3B]">
                  Built for Opportunity.
                </span>
              </motion.h2>

              {/* Gold Accent Bar */}
              <motion.div
                {...fadeUp(0.14)}
                className="w-11 h-[2.5px] bg-[#C9A96E] rounded-full mt-6 mb-7"
                aria-hidden="true"
              />

              {/* Body Copy */}
              <motion.div
                {...fadeUp(0.18)}
                className="space-y-4 text-[#586159] text-[14.5px] sm:text-[15px] leading-[1.72] max-w-[520px]"
              >
                <p>
                  Cayson Florance International Pvt. Ltd. is a diversified
                  company with a broad authorised business scope across
                  agriculture, food and beverage processing, energy,
                  infrastructure, technology, trade and mobility-related
                  activities.
                </p>

                <p>
                  Our company objects include plantations and agricultural
                  activities, dairy, livestock and poultry, food processing,
                  minerals and rare earth materials, renewable energy and
                  power systems, property and construction, and industrial
                  technology.
                </p>

                <p>
                  The scope further extends to international trade, cargo,
                  warehousing and logistics, software and machinery, as well
                  as automotive-related business activities—creating a
                  diversified foundation for developing opportunities across
                  interconnected industries.
                </p>
              </motion.div>
            </div>

            {/* Scope Card — same existing UI */}
            <motion.div
              {...fadeUp(0.28)}
              className="mt-8 bg-white rounded-2xl border border-[#EDF0EB] shadow-[0_2px_20px_rgba(0,0,0,0.04)] overflow-hidden"
            >
              <div className="grid grid-cols-4 divide-x divide-[#EDF0EB]">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-start py-4 px-4 sm:px-5"
                  >
                    {/* Icon */}
                    <div className="w-9 h-9 rounded-full bg-[#EBF3EE] flex items-center justify-center text-[#064B3B] mb-3 shrink-0">
                      {stat.icon}
                    </div>
                    {/* Value */}
                    <span className="font-display text-[17px] sm:text-[20px] font-bold text-[#1A2420] leading-none tracking-wide">
                      {stat.value}
                    </span>
                    {/* Label */}
                    <span className="text-[11px] sm:text-[10px] text-[#6E7A6E] font-medium mt-1.5 leading-[1.35]">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN — Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              duration: 0.85,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex-1 relative min-h-[420px] lg:min-h-0"
          >
            <div className="relative w-full h-full min-h-[420px] rounded-[28px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] group">

              <Image
                src="/home/aboutus.webp"
                alt="Cayson Florance International"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-[2s] ease-out group-hover:scale-[1.04]"
              />

              {/* Bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent pointer-events-none" />

              {/* Overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5">
                <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl px-5 py-4 sm:px-6 sm:py-3 shadow-[0_8px_32px_rgba(0,0,0,0.25)] flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">

                  <div className="shrink-0 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-[#D4AF37]/50 bg-[#0A2010]/30 flex items-center justify-center text-[#D4AF37]">
                      <svg
                        className="w-5.3 h-4"
                        viewBox="0 0 27 21"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                      </svg>
                    </div>

                    <span className="text-[#D4AF37] font-semibold text-[14px] tracking-wide whitespace-nowrap">
                      Our Direction
                    </span>
                  </div>

                  <div
                    className="hidden sm:block w-px h-9 bg-white/25 shrink-0"
                    aria-hidden="true"
                  />

                  <p className="text-white/90 text-[12.5px] sm:text-[12px] leading-[1.6] font-light">
                    Building diversified capabilities across interconnected
                    sectors and creating a strong foundation for responsible
                    and sustainable growth.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ─── BOTTOM: 4 Value Pillars ─────────────────────────────────────── */}
        <div className="mt-20 sm:mt-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  duration: 0.55,
                  delay: 0.09 * i,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group bg-white border border-[#EDF0EA] rounded-2xl p-6 sm:p-7 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-0.5 flex flex-col gap-4"
              >
                <div className="w-11 h-11 rounded-full bg-[#EBF3EE] flex items-center justify-center text-[#064B3B] transition-transform duration-300 group-hover:scale-105 shrink-0">
                  {pillar.icon}
                </div>

                <div>
                  <h3 className="text-[15px] font-bold text-[#1A2420] leading-tight mb-2">
                    {pillar.title}
                  </h3>

                  <div
                    className="w-7 h-[2px] bg-[#C9A96E] rounded-full mb-3 transition-all duration-300 group-hover:w-10 group-hover:bg-[#064B3B]"
                    aria-hidden="true"
                  />

                  <p className="text-[13px] text-[#606B61] leading-[1.65]">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}