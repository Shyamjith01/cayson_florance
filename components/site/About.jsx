'use client'
import { motion } from 'framer-motion'
import { MapPin, Recycle, Sprout, Factory } from 'lucide-react'
import Image from 'next/image'
import aboutUsImg from '@/public/aboutusimg.webp'
import "./site.css"

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-20 items-center">
          <div className="lg:col-span-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase font-mono-display text-emerald2-800">
                <span className="h-px w-4 sm:w-8 bg-emerald2-700" /> 01 · About Us
              </div>
              <h2 className="mt-4 sm:mt-6 font-display text-3xl sm:text-4xl lg:text-6xl tracking-[-0.02em] text-emerald2-900 leading-[1.08] sm:leading-[1.02]">
                A <span className="gradient-emerald">zero-waste future</span>, engineered from Kerala.
              </h2>
              <p className="mt-5 sm:mt-8 text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                At <span className="text-emerald2-800 font-medium">Cayson Florance International Pvt Ltd</span>, we believe in a zero-waste future. Based in <span className="text-emerald2-800 font-medium">Ernakulam, Kerala</span>, our state-of-the-art bio-processing facility works directly with local farmers to convert fresh agricultural produce into high-value nutrition — ensuring maximum purity and a sustainable farming ecosystem.
              </p>
              <div className="mt-6 sm:mt-10 flex items-center gap-2 sm:gap-4 flex-wrap">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full glass-emerald px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-[12px] font-medium text-emerald2-800">
                  <MapPin className="h-3.5 w-3.5" /> Ernakulam, Kerala
                </div>
                <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full glass-emerald px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-[12px] font-medium text-emerald2-800">
                  <Factory className="h-3.5 w-3.5" /> State-of-the-Art Bio-Processing
                </div>
                <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full glass-emerald px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-[12px] font-medium text-emerald2-800">
                  <Sprout className="h-3.5 w-3.5" /> Direct Farmer Partnerships
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right visual stack */}
          <div className="lg:col-span-7 relative">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
              className="relative h-[320px] sm:h-[420px] lg:h-[520px] rounded-[20px] sm:rounded-[32px] overflow-hidden hairline">
              {/* <img src="https://images.pexels.com/photos/10208795/pexels-photo-10208795.jpeg?auto=compress&w=1600&q=80" alt="Kerala coconut plantation" className="absolute inset-0 w-full h-full object-cover" /> */}
              <Image src={aboutUsImg} alt="Kerala coconut plantation" placeholder="blur" fill className="object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-emerald2-900/65 via-emerald2-900/15 to-transparent" />
              <div className="absolute top-3 left-3 right-3 sm:top-5 sm:left-5 sm:right-5 flex justify-between">
                <span className="glass rounded-full px-3 py-1 text-[8px] sm:text-[10px] tracking-[0.25em] uppercase text-emerald2-800 font-mono-display">Kerala · Plantation</span>
                <span className="glass rounded-full px-3 py-1 text-[8px] sm:text-[10px] tracking-[0.25em] uppercase text-emerald2-800 font-mono-display">Phase 01</span>
              </div>
              <div className="absolute inset-x-3 bottom-3 sm:inset-x-5 sm:bottom-5 glass rounded-xl sm:rounded-2xl p-3 sm:p-5">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="text-[8px] sm:text-[10px] tracking-[0.25em] uppercase text-emerald2-800/70 font-mono-display">Sourcing Region</div>
                    <div className="mt-1 font-display text-base sm:text-2xl text-emerald2-900">Kerala · Tamil Nadu</div>
                    <div className="mt-1 text-[10px] sm:text-xs text-slate-600">Direct partnerships · Fair pricing · Reduced post-harvest loss</div>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-2xl sm:text-3xl gradient-emerald">500+</div>
                    <div className="text-[8px] sm:text-[10px] tracking-[0.22em] uppercase text-emerald2-800/65 font-mono-display">Farmers</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating mini-card */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
              className=" floating-card">
              <div className="glass rounded-2xl p-4 sm:p-5 w-56 sm:w-72 shadow-[0_20px_60px_-25px_rgba(6,78,59,0.35)]">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald2-600 to-emerald2-800 grid place-items-center text-white">
                    <Recycle className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.25em] uppercase text-emerald2-800/70 font-mono-display">Operating Model</div>
                    <div className="font-display text-lg text-emerald2-900">Zero-Waste Bio-Processing</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
