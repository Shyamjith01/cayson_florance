/**
 * app/sitemap.js
 * Dynamic XML sitemap for Cayson Florance International.
 * Automatically includes all pages and all product anchors.
 * Accessible at /sitemap.xml
 */

import { PRODUCT_SEO_DATA } from '@/lib/schema'

const BASE_URL = 'https://caysonflorance.com'

export default function sitemap() {
  const now = new Date().toISOString()

  // Static pages
  const staticPages = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  // Product anchor pages (each product section on /products)
  const productPages = PRODUCT_SEO_DATA.map((product) => ({
    url: `${BASE_URL}/products#${product.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // Home section anchors
  const homeSections = [
    { anchor: 'about', priority: 0.7 },
    { anchor: 'impact', priority: 0.7 },
    { anchor: 'products', priority: 0.75 },
    { anchor: 'contact', priority: 0.65 },
  ].map(({ anchor, priority }) => ({
    url: `${BASE_URL}/#${anchor}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority,
  }))

  return [...staticPages, ...productPages, ...homeSections]
}
