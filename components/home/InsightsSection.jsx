'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const ARTICLES = [
  {
    category: 'Sustainability',
    categoryColor: 'bg-[#EAF1EB] text-[#064B3B]',
    title: 'Building a Circular Future for Generations',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80&auto=format&fit=crop',
    date: 'May 5, 2025',
    readTime: '5 min read',
    href: '#',
  },
  {
    category: 'Innovation',
    categoryColor: 'bg-blue-50 text-blue-700',
    title: 'The Future of Agri-Tech',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80&auto=format&fit=crop',
    date: 'May 3, 2025',
    readTime: '5 min read',
    href: '#',
  },
  {
    category: 'Industry News',
    categoryColor: 'bg-amber-50 text-amber-700',
    title: 'Renewable Energy Driving Change',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80&auto=format&fit=crop',
    date: 'May 1, 2025',
    readTime: '3 min read',
    href: '#',
  },
  {
    category: 'Company Updates',
    categoryColor: 'bg-purple-50 text-purple-700',
    title: 'Expanding Impact, Creating Value',
    image: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=600&q=80&auto=format&fit=crop',
    date: 'Apr 28, 2025',
    readTime: '3 min read',
    href: '#',
  },
]

export default function InsightsSection() {
  return (
    <section id="insights" className="py-20 lg:py-28 bg-white" aria-labelledby="insights-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-3"
            >
              <span className="h-px w-6 bg-[#064B3B]" />
              <span className="text-[11px] tracking-[0.22em] uppercase font-mono-display text-[#064B3B] font-semibold">
                Insights & Updates
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              id="insights-heading"
              className="font-display text-3xl lg:text-4xl text-[#1F2926]"
            >
              Ideas. Innovations. Impact.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-[#064B3B] text-sm font-medium hover:gap-3 transition-all"
            >
              View All Insights
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ARTICLES.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={article.href}
                className="group block rounded-2xl border border-[#E5E6E1] overflow-hidden bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`inline-block text-[10px] font-mono-display font-semibold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full ${article.categoryColor}`}>
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-[13.5px] font-semibold text-[#1F2926] leading-snug mb-3 group-hover:text-[#064B3B] transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[11px] text-[#66706C] font-mono-display">
                    <span>{article.date}</span>
                    <span className="h-1 w-1 rounded-full bg-[#66706C]" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
