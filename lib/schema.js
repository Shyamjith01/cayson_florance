/**
 * lib/schema.js
 * JSON-LD Structured Data generators for Cayson Florance International.
 * Supports: Organization, WebSite, BreadcrumbList, Product schemas.
 * These improve Rich Snippets, Knowledge Graph eligibility, and AI search visibility.
 */

import { siteConfig } from './seo'

/**
 * Organization + WebSite combined schema — used in root layout.
 */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.legalName,
        alternateName: siteConfig.shortName,
        url: siteConfig.url,
        logo: {
          '@type': 'ImageObject',
          url: siteConfig.logo,
          width: 512,
          height: 512,
        },
        description: siteConfig.description,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        foundingDate: siteConfig.founded,
        industry: siteConfig.industry,
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.state,
          postalCode: siteConfig.address.zip,
          addressCountry: siteConfig.address.country,
        },
        areaServed: 'Worldwide',
        knowsAbout: [
          'Health Foods',
          'Nutrition',
          'Agri-Technology',
          'Bio-Processing',
          'Coconut Products',
          'Moringa Extract',
          'Sprouted Grains',
          'Functional Foods',
          'Plant-Based Foods',
        ],
        sameAs: [],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          '@id': `${siteConfig.url}/#organization`,
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${siteConfig.url}/products?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
        inLanguage: 'en-IN',
      },
    ],
  }
}

/**
 * BreadcrumbList schema.
 * @param {Array<{name: string, url: string}>} items
 */
export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * Product schema for individual product entries.
 * @param {object} product
 */
export function productSchema({
  name,
  description,
  image,
  url,
  category,
  keywords = [],
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image: image.startsWith('http') ? image : `${siteConfig.url}${image}`,
    url: url.startsWith('http') ? url : `${siteConfig.url}${url}`,
    brand: {
      '@type': 'Brand',
      name: siteConfig.shortName,
    },
    manufacturer: {
      '@type': 'Organization',
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    category,
    keywords: keywords.join(', '),
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
      seller: {
        '@type': 'Organization',
        name: siteConfig.legalName,
      },
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Origin',
        value: 'Kerala, India',
      },
      {
        '@type': 'PropertyValue',
        name: 'Processing',
        value: 'Zero-Waste Bio-Processing',
      },
    ],
  }
}

/**
 * WebPage schema for standard pages.
 * @param {object} opts
 */
export function webPageSchema({ name, description, url, breadcrumb = [] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: url.startsWith('http') ? url : `${siteConfig.url}${url}`,
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    about: { '@id': `${siteConfig.url}/#organization` },
    inLanguage: 'en-IN',
  }
}

/**
 * All 7 products data for sitemap & schema generation.
 */
export const PRODUCT_SEO_DATA = [
  {
    slug: 'sprouted-grain-biscuits',
    title: 'Premium Sprouted Grain Biscuits',
    description:
      'A revolutionary healthy biscuit crafted with 28 powerful natural superfoods including sprouted grains, ancient millets, premium nuts, seeds, berries, and botanical ingredients. Made without maida, refined sugar, or preservatives.',
    image: '/products/biscuit/prod3.jpg',
    category: 'Health Foods / Biscuits & Snacks',
    keywords: [
      'Premium Sprouted Grain Biscuits',
      'Healthy Biscuits India',
      '28 Superfood Biscuits',
      'No Maida Biscuits',
      'Monk Fruit Sweetened Biscuits',
      'Clean Energy Snacks',
    ],
  },
  {
    slug: 'virgin-coconut-oil',
    title: '100% Pure Virgin Coconut Oil',
    description:
      'Cold-pressed from fresh coconut milk without heat or chemicals. Preserves natural aroma, antioxidants, Vitamin E, and enzymes. Multi-purpose for cooking, skincare, and hair nourishment.',
    image: '/products/oil/prod2.webp',
    category: 'Health Foods / Cooking Oils',
    keywords: [
      'Virgin Coconut Oil',
      'Cold Pressed Coconut Oil India',
      'Pure Coconut Oil Kerala',
      'Unrefined VCO',
      'Coconut Oil for Cooking and Skin',
    ],
  },
  {
    slug: 'coconut-paneer',
    title: 'Premium Coconut Paneer',
    description:
      'A revolutionary plant-based paneer crafted from 100% fresh coconut milk. Dairy-free, vegan, keto-friendly, and completely preservative-free. Rich, soft, and absorbs flavors beautifully.',
    image: '/products/paneer/paneerProd.webp',
    category: 'Health Foods / Plant-Based Dairy',
    keywords: [
      'Coconut Paneer',
      'Plant Based Paneer India',
      'Dairy Free Paneer',
      'Vegan Paneer',
      'Keto Friendly Paneer',
      'Coconut Milk Paneer',
    ],
  },
  {
    slug: 'coconut-water-powder',
    title: 'Premium Coconut Water Powder',
    description:
      'Advanced spray and freeze-dried coconut water powder delivering natural electrolytes, instant hydration, and clean energy. No preservatives, artificial flavors, or added sugar.',
    image: '/products/coco-powder/cocopowder.webp',
    category: 'Health Foods / Hydration & Sports Nutrition',
    keywords: [
      'Coconut Water Powder',
      'Natural Electrolyte Powder',
      'Instant Coconut Water',
      'Sports Hydration India',
      'Travel Hydration Drink',
    ],
  },
  {
    slug: 'coconut-milk-cream',
    title: 'Premium Coconut Milk Cream',
    description:
      'First-press coconut milk cream with rich, velvety texture and authentic tropical flavor. 100% dairy-free, vegan, no artificial thickeners. Perfect for gourmet cooking and dairy-free recipes.',
    image: '/products/cream/prod1.webp',
    category: 'Health Foods / Plant-Based Dairy',
    keywords: [
      'Coconut Milk Cream',
      'Plant Based Cooking Cream',
      'Dairy Free Cream India',
      'Vegan Cooking Cream',
      'First Press Coconut Cream',
    ],
  },
  {
    slug: 'pink-paradise-fizz',
    title: 'Pink Paradise Fizz',
    description:
      'A vibrant sparkling wellness drink with real Pineapple Juice, Coconut Water Powder, and natural Beetroot Powder. Natural electrolytes, antioxidants, and clean energy without artificial colors or preservatives.',
    image: '/products/protien/prodimg1.webp',
    category: 'Functional Beverages / Sparkling Drinks',
    keywords: [
      'Pink Paradise Fizz',
      'Functional Beverage India',
      'Sparkling Wellness Drink',
      'Natural Pineapple Drink',
      'Beetroot Sparkling Drink',
      'Healthy Fizzy Drink',
    ],
  },
  {
    slug: 'bio-active-moringa-extract',
    title: 'Bio-Active Moringa Dry Extract',
    description:
      'Next-generation moringa innovation using Ultrasonic Nano-Extraction and Spray-Drying. 100% water-soluble, residue-free, virtually tasteless. Export-grade nutraceutical ingredient.',
    image: '/products/muringa/muringaprod1.webp',
    category: 'Nutraceuticals / Plant Extracts',
    keywords: [
      'Bio Active Moringa Extract',
      'Moringa Dry Extract',
      'Water Soluble Moringa',
      'Moringa Nutraceutical Ingredient',
      'Export Grade Moringa',
      'Ultrasonic Moringa Extract',
    ],
  },
]
