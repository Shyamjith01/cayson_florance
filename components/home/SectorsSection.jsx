'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const SECTORS = [
  {
    number: '01',
    category: 'Agribusiness',
    name: 'Agriculture & Plantations',
    href: '/agriculture',
    description: 'Pioneering climate-smart cultivation, regenerative soil health, and organic high-yield sustainable plantations.',
    tags: ['Regenerative Farming', 'Smart Agri-Tech', 'Organic Yields'],
    image: '/home/sectors/Agriculturalandland.webp',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21V9m0 0a3 3 0 016-3 6.002 6.002 0 01-6 6zm0 0a3 3 0 00-6-3 6.002 6.002 0 006 6z" />
      </svg>
    ),
  },
  {
    number: '02',
    category: 'Food Systems',
    name: 'Dairy, Livestock & Poultry',
    href: '#',
    description: 'Ethical livestock stewardship, automated climate-controlled facilities, and verifiable farm-to-table traceability.',
    tags: ['Ethical Welfare', 'Automated Dairy', 'Traceable Supply'],
    image: '/home/sectors/Dairy,Livestock& Poultry.jpeg',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    number: '03',
    category: 'Manufacturing',
    name: 'Food Processing & Beverages',
    href: '#',
    description: 'Value-added clean-label food transformation, circular zero-waste packaging, and cold-chain beverage production.',
    tags: ['Clean-Label', 'Zero-Waste Pack', 'Global Export'],
    image: '/home/sectors/Food_processing_and_beverage_pro…_202609022112.jpeg',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.942A6.75 6.75 0 0114.77 17.25h-5.54a6.75 6.75 0 01-3.46-.908L4.2 15.4" />
      </svg>
    ),
  },
  {
    number: '04',
    category: 'Natural Resources',
    name: 'Mining & Rare Earth Materials',
    href: '#',
    description: 'Responsible critical mineral extraction, rare earth refinement for the clean energy transition, and ecological land reclamation.',
    tags: ['Critical Minerals', 'Clean Refining', 'Eco-Reclamation'],
    image: '/home/sectors/miningandrareearthmaterial.webp',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    number: '05',
    category: 'Clean Energy',
    name: 'Renewable Energy & Power Systems',
    href: '#',
    description: 'Utility-scale solar arrays, wind generation farms, and distributed battery energy storage for decentralized grids.',
    tags: ['Solar & Wind', 'Battery Storage', 'Smart Grids'],
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80&auto=format&fit=crop',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    number: '06',
    category: 'Built Environment',
    name: 'Real Estate & Infrastructure',
    href: '#',
    description: 'Biophilic architectural developments, low-carbon materials, and high-efficiency smart city infrastructure.',
    tags: ['Biophilic Design', 'Net-Zero Towers', 'Smart Infra'],
    image: '/home/sectors/Real Estate & Infrastructure.webp',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5M9 3.75H4.5A2.25 2.25 0 002.25 6v15M9 3.75h6M9 3.75v15m6-15h4.5A2.25 2.25 0 0121.75 6v15m-12.75 0h6M12 3.75v-.75a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75v.75" />
      </svg>
    ),
  },
  {
    number: '07',
    category: 'Global Commerce',
    name: 'International Trade & Logistics',
    href: '#',
    description: 'Decarbonized maritime trade routes, integrated multimodal freight networks, and IoT-tracked cold-chain corridors.',
    tags: ['Decarbonized Freight', 'Cold-Chain IoT', 'Global Corridors'],
    image: '/home/sectors/International Trade & Logistics.webp',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
  },
  {
    number: '08',
    category: 'Industrial Tech',
    name: 'Technology & Industrial Machinery',
    href: '#',
    description: 'Precision automated robotics, predictive industrial IoT sensors, and high-durability heavy machinery engineering.',
    tags: ['Precision Robotics', 'Predictive IoT', 'Heavy Engineering'],
    image: '/home/sectors/Technology & Industrial Machinery.webp',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: '09',
    category: 'Mobility',
    name: 'Automotive & Mobility',
    href: '#',
    description: 'Advanced electric powertrain assemblies, commercial fleet decarbonization solutions, and zero-emission urban transit.',
    tags: ['EV Powertrains', 'Fleet Transition', 'Clean Transit'],
    image: '/home/sectors/Automotive and Mobility.webp',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
]

function SectorCard({ sector, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.09, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Link
        href={sector.href}
        className="group relative flex flex-col h-full rounded-[22px] bg-white border border-[#E8E4D9] hover:border-[#064B3B]/30 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_24px_48px_-12px_rgba(6,75,59,0.15)] transition-all duration-500 hover:-translate-y-1.5 overflow-hidden"
        aria-label={`Explore ${sector.name} sector`}
      >
        {/* Top Image Window */}
        <div className="relative h-[210px] w-full overflow-hidden bg-[#1A2E26]">
          <Image
            src={sector.image}
            alt={sector.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Cinematic lighting gradient scrim */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500"
            style={{
              background:
                'linear-gradient(180deg, rgba(0, 0, 0, 0.48) 0%, rgba(0, 0, 0, 0.08) 40%, rgba(6, 75, 59, 0.25) 85%, rgba(6, 75, 59, 0.5) 100%)',
            }}
          />

          {/* Top Pill: Index + Live Dot + Category */}
          <div className="absolute top-3.5 left-3.5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 shadow-sm">
            <span className="font-mono text-[11px] font-bold text-white tracking-widest">
              {sector.number}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            <span className="text-[10px] font-mono tracking-[0.16em] uppercase text-white/90 font-medium">
              {sector.category}
            </span>
          </div>

          {/* Top Right: Glass Icon Disc */}
          <div className="absolute top-3.5 right-3.5 h-9 w-9 rounded-full bg-black/45 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/95 group-hover:bg-[#064B3B] group-hover:border-emerald-400/50 group-hover:text-emerald-300 transition-all duration-300 shadow-sm">
            {sector.icon}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 flex flex-col flex-1 justify-between bg-white">
          <div>
            {/* Title */}
            <h3 className="font-display text-[19px] sm:text-[20px] font-bold text-[#1F2926] group-hover:text-[#064B3B] leading-[1.3] transition-colors duration-300 mb-2.5">
              {sector.name}
            </h3>

            {/* Description */}
            <p className="text-[13px] text-[#55605B] leading-[1.65] mb-5 line-clamp-2">
              {sector.description}
            </p>

            {/* Capabilities / Focus Tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {sector.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#F5F4EE] text-[#48534E] border border-[#E9E5DC] group-hover:border-[#064B3B]/15 group-hover:bg-[#EEF6F2] group-hover:text-[#064B3B] transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card Footer: Explore Sector Link + Animated Arrow */}
          <div className="pt-4 border-t border-[#EFECE4] flex items-center justify-between">
            <span className="text-[11px] font-mono tracking-[0.18em] uppercase text-[#737E79] font-semibold group-hover:text-[#064B3B] transition-colors duration-300 flex items-center gap-1.5">
              Explore Sector
            </span>

            <span className="h-8 w-8 rounded-full border border-[#DCD7CB] bg-[#FAF9F5] flex items-center justify-center text-[#1F2926] group-hover:bg-[#064B3B] group-hover:border-[#064B3B] group-hover:text-white transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-sm">
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300" aria-hidden="true" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function SectorsSection() {
  return (
    <section id="sectors" className="py-20 lg:py-28 bg-[#F8F7F2]" aria-labelledby="sectors-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="h-px w-6 bg-[#064B3B]" />
              <span className="text-[11px] tracking-[0.22em] uppercase font-mono text-[#064B3B] font-semibold">
                Our Sectors
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              id="sectors-heading"
              className="font-display text-3xl lg:text-4xl text-[#1F2926] leading-tight"
            >
              Diverse sectors.{' '}
              <span className="text-[#064B3B]">One sustainable vision.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="max-w-md text-[#66706C] text-[14px] leading-relaxed lg:text-right"
          >
            We operate across a wide range of industries that work together to create a stronger, more sustainable and self-reliant future.
          </motion.p>
        </div>

        {/* Grid: 3 columns on large screens, 2 on medium, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {SECTORS.map((sector, i) => (
            <SectorCard key={sector.number} sector={sector} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}