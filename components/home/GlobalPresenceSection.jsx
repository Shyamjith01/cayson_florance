'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useMemo } from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from 'react-simple-maps'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json'

/* ─── Pin locations (lat/lng) ─── */
const LOCATIONS = [
  { id: 'usa', coordinates: [-98, 38], label: 'USA', color: '#2E6B57' },
  { id: 'uk', coordinates: [-1.5, 52], label: 'UK', color: '#2E6B57' },
  { id: 'uae', coordinates: [54, 24], label: 'UAE', color: '#2E6B57' },
  { id: 'india', coordinates: [78.5, 21], label: 'India', color: '#064B3B', isMain: true },
  { id: 'singapore', coordinates: [103.8, 1.35], label: 'Singapore', color: '#2E6B57' },
  { id: 'australia', coordinates: [134, -25], label: 'Australia', color: '#2E6B57' },
]

const INDIA_COORDS = [78.5, 21]

/* ─── Curved connections from India to each location ─── */
const CONNECTIONS = LOCATIONS.filter(l => l.id !== 'india').map(loc => ({
  from: INDIA_COORDS,
  to: loc.coordinates,
}))

/* ─── Pin marker SVG ─── */
function PinMarker({ color = '#064B3B', isMain = false }) {
  return (
    <g transform="translate(-10, -28)">
      {isMain && (
        <circle cx="10" cy="14" r="16" fill={color} opacity="0.1">
          <animate attributeName="r" values="14;20;14" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.12;0.04;0.12" dur="2.5s" repeatCount="indefinite" />
        </circle>
      )}
      <path
        d="M10,28 C4,20 0,14 0,9 C0,4 4.5,0 10,0 C15.5,0 20,4 20,9 C20,14 16,20 10,28Z"
        fill={color}
      />
      <circle cx="10" cy="9" r="3.5" fill="white" />
    </g>
  )
}

/* ─── Dot-Matrix World Map using react-simple-maps ─── */
function DotMatrixWorldMap() {
  return (
    <div className="relative w-full h-full">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 145,
          center: [30, 20],
        }}
        width={1000}
        height={480}
        style={{ width: '100%', height: '100%' }}
      >
        {/* Land masses rendered as dot pattern using SVG pattern fill */}
        <defs>
          <pattern id="dotPattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="1.8" fill="#9BB596" opacity="0.7" />
          </pattern>
        </defs>

        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="url(#dotPattern)"
                stroke="#C5D8BF"
                strokeWidth={0.5}
                style={{
                  default: { outline: 'none' },
                  hover: { outline: 'none' },
                  pressed: { outline: 'none' },
                }}
              />
            ))
          }
        </Geographies>

        {/* Connection lines from India */}
        {CONNECTIONS.map((conn, i) => (
          <Line
            key={`line-${i}`}
            from={conn.from}
            to={conn.to}
            stroke="#064B3B"
            strokeWidth={1}
            strokeDasharray="5 4"
            strokeOpacity={0.3}
            strokeLinecap="round"
          />
        ))}

        {/* Location pin markers */}
        {LOCATIONS.map((loc) => (
          <Marker key={loc.id} coordinates={loc.coordinates}>
            <PinMarker color={loc.color} isMain={loc.isMain} />
          </Marker>
        ))}
      </ComposableMap>

      {/* Floating India info card */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute"
        style={{ top: '28%', left: '28%' }}
      >
        {/* Connector line */}
        <div className="absolute -left-8 top-1/2 w-8 h-px bg-[#064B3B]/25" />
        <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-[#E5E6E1]/60 px-3.5 py-3 flex items-center gap-3 min-w-[210px]">
          <div className="w-[56px] h-[56px] rounded-lg overflow-hidden flex-shrink-0 border border-[#E5E6E1]/80">
            <Image
              src="/home/india_office.jpg"
              alt="India Head Office"
              width={56}
              height={56}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="text-[14px] font-semibold text-[#1F2926] leading-tight">India</h4>
            <p className="text-[11px] text-[#66706C] mt-0.5">Head Office</p>
            <p className="text-[10px] text-[#064B3B] font-medium mt-1">Projects · Partnerships · Impact</p>
          </div>
        </div>
      </motion.div>

      {/* Legend — right side */}
      <div className="absolute top-[32%] right-5 space-y-3">
        {[
          { type: 'pin', color: '#064B3B', label: 'Operations' },
          { type: 'pin', color: '#2E6B57', label: 'Partners' },
          { type: 'circle', color: '#8FAF89', label: 'Future Expansion' },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2.5">
            {item.type === 'pin' ? (
              <svg width="14" height="20" viewBox="0 0 14 20" className="flex-shrink-0">
                <path
                  d="M7,19 C3.5,13.5 0.5,9.5 0.5,6 C0.5,2.7 3.4,0.5 7,0.5 C10.6,0.5 13.5,2.7 13.5,6 C13.5,9.5 10.5,13.5 7,19Z"
                  fill={item.color}
                />
                <circle cx="7" cy="6" r="2.2" fill="white" />
              </svg>
            ) : (
              <div className="w-[14px] h-[14px] rounded-full border-2 flex-shrink-0" style={{ borderColor: item.color }} />
            )}
            <span className="text-[12px] text-[#1F2926] font-medium whitespace-nowrap">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function GlobalPresenceSection() {
  return (
    <section id="sustainability" className="relative py-20 lg:py-12 lg:pb-3 bg-[#F5F7F3] overflow-hidden" aria-labelledby="global-heading">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-[0.35fr_0.65fr] gap-8 items-center">

          {/* Left — Text content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="h-px w-6 bg-[#064B3B]" />
              <span className="text-[11px] tracking-[0.22em] uppercase font-mono text-[#064B3B] font-semibold">
                Global Presence
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              id="global-heading"
              className="font-display text-3xl lg:text-[40px] text-[#1F2926] leading-[1.15] mb-5"
            >
              A global network.{' '}
              <br />
              <span className="text-[#064B3B]">Delivering local impact.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-[#66706C] text-[14.5px] leading-relaxed mb-8 max-w-sm"
            >
              With partners and operations across continents, we are bringing sustainable solutions where they are needed most.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-[#064B3B] text-white text-sm font-medium px-6 py-3 hover:bg-[#053D30] transition-all duration-300 group shadow-md hover:shadow-lg"
              >
                Explore Our Presence
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
              </Link>
            </motion.div>
          </div>

          {/* Right — Map (wider) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden"
            style={{ minHeight: '440px' }}
          >
            <DotMatrixWorldMap />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
