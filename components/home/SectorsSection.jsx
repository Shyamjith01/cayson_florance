'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const SECTORS = [
  {
    number: '01',
    name: 'Agriculture & Plantations',
    href: '/agriculture',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=700&q=80&auto=format&fit=crop',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.5c0-5 4-9 9-7.5C16 6.5 20 10 19.5 15c-.5 4-4 7-9 6C6.5 20.2 4 17 4.5 12.5Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c1-3 3.5-5 6-5" />
      </svg>
    ),
  },
  {
    number: '02',
    name: 'Dairy, Livestock & Poultry',
    href: '#',
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=700&q=80&auto=format&fit=crop',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6 2 3 6 3 10c0 3 1.5 5 3 6l1 4h10l1-4c1.5-1 3-3 3-6 0-4-3-8-9-8Z" />
      </svg>
    ),
  },
  {
    number: '03',
    name: 'Food Processing & Beverages',
    href: '#',
    image: 'https://images.unsplash.com/photo-1506617420156-8e4536971650?w=700&q=80&auto=format&fit=crop',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2h-3M9 3a2 2 0 012-2h2a2 2 0 012 2M9 3h6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: '04',
    name: 'Mining & Rare Earth Materials',
    href: '#',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80&auto=format&fit=crop',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    number: '05',
    name: 'Renewable Energy & Power Systems',
    href: '#',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=700&q=80&auto=format&fit=crop',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    number: '06',
    name: 'Real Estate & Infrastructure',
    href: '#',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80&auto=format&fit=crop',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5M9 3.75H4.5A2.25 2.25 0 002.25 6v15M9 3.75h6M9 3.75v15m6-15h4.5A2.25 2.25 0 0121.75 6v15m-12.75 0h6M12 3.75v-.75a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75v.75" />
      </svg>
    ),
  },
  {
    number: '07',
    name: 'International Trade & Logistics',
    href: '#',
    image: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=700&q=80&auto=format&fit=crop',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
  },
  {
    number: '08',
    name: 'Technology & Industrial Machinery',
    href: '#',
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=700&q=80&auto=format&fit=crop',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: '09',
    name: 'Automotive & Mobility',
    href: '#',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=700&q=80&auto=format&fit=crop',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
]

/* ─── Card styling: hairline-defined, paper-light surface, single hover event ───
   The one deliberate motion is the image: it sits desaturated/duotone at rest
   (tinted with the brand green via mix-blend-mode) and resolves to full color
   on hover, like a reading coming online. Everything else stays quiet. */
const sectorStyles = `
  .sector-card {
    background: #FFFFFF;
    border: 1px solid #E5E1D4;
    border-radius: 18px;
    transition: border-color 0.5s ease, box-shadow 0.5s ease, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .sector-card:hover {
    border-color: #A9C9BC;
    box-shadow: 0 16px 40px -20px rgba(6, 75, 59, 0.28);
    transform: translateY(-3px);
  }

  .sector-frame {
    position: relative;
    overflow: hidden;
    border-bottom: 1px solid #E5E1D4;
  }

  .sector-frame img {
    transition: transform 1.3s cubic-bezier(0.22, 1, 0.36, 1);
    filter: saturate(1);
  }

  .sector-card:hover .sector-frame img {
    transform: scale(1.045);
  }

  .sector-duotone {
    position: absolute;
    inset: 0;
    background: #0B3B2E;
    mix-blend-mode: color;
    opacity: 0.94;
    transition: opacity 1s ease;
  }

  .sector-card:hover .sector-duotone {
    opacity: 0;
  }

  .sector-wash {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(6,20,15,0.05) 0%, rgba(6,20,15,0.35) 100%);
  }

  .sector-chip {
    background: rgba(248, 247, 242, 0.88);
    backdrop-filter: blur(6px);
    border: 1px solid rgba(255,255,255,0.5);
  }

  .sector-arrow {
    border: 1px solid #E5E1D4;
    transition: border-color 0.4s ease, background-color 0.4s ease, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .sector-card:hover .sector-arrow {
    background-color: #064B3B;
    border-color: #064B3B;
    transform: translate(2px, -2px);
  }

  .sector-arrow svg {
    transition: color 0.4s ease;
    color: #064B3B;
  }

  .sector-card:hover .sector-arrow svg {
    color: #F8F7F2;
  }

  .sector-rule {
    transition: width 0.5s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.5s ease;
  }

  .sector-card:hover .sector-rule {
    width: 32px;
    background-color: #10B981;
  }

  @media (prefers-reduced-motion: reduce) {
    .sector-card, .sector-frame img, .sector-duotone, .sector-arrow, .sector-rule {
      transition: none !important;
    }
  }
`

function SectorCard({ sector, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Link
        href={sector.href}
        className="sector-card group block h-full overflow-hidden"
        aria-label={`Explore ${sector.name} sector`}
      >
        {/* Image frame — separated from the content block by a hairline */}
        <div className="sector-frame h-[176px]">
          <img
            src={sector.image}
            alt={sector.name}
            className="w-full h-full object-cover"
          />
          <div className="sector-duotone" aria-hidden="true" />
          <div className="sector-wash" aria-hidden="true" />

          {/* Index chip */}
          <span className="absolute top-3 left-3 h-8 px-3 rounded-full sector-chip
            flex items-center text-[13px] font-mono tracking-[0.2em] text-[#1F2926]">
            {sector.number}
          </span>

          {/* Icon chip */}
          <span className="absolute top-3 right-3 h-8 w-8 rounded-full sector-chip
            flex items-center justify-center text-[#064B3B]">
            {sector.icon}
          </span>
        </div>

        {/* Content block */}
        <div className="p-5">
          <div className="sector-rule w-5 h-[2px] bg-[#064B3B]/50 rounded-full mb-3" />

          <h3 className="text-[16px] font-semibold text-[#1F2926] leading-[1.35] tracking-wide">
            {sector.name}
          </h3>

          <div className="flex items-center justify-between mt-4">
            <span className="text-[11px] tracking-[0.15em] uppercase text-[#66706C] font-mono">
              Explore sector
            </span>
            <span className="sector-arrow h-8 w-8 rounded-full flex items-center justify-center shrink-0">
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function SectorsSection() {
  return (
    <>
      <style jsx global>{sectorStyles}</style>
      <section id="sectors" className="py-20 lg:py-28 lg:pt-15 bg-[#F8F7F2]" aria-labelledby="sectors-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <div className="max-w-md">
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
              className="max-w-sm text-[#66706C] text-[14px] leading-relaxed lg:text-right"
            >
              We operate across a wide range of industries that work together to create a stronger, more sustainable and self-reliant future.
            </motion.p>
          </div>

          {/* Grid — generous gap for clear separation between cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {SECTORS.map((sector, i) => (
              <SectorCard key={sector.number} sector={sector} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}