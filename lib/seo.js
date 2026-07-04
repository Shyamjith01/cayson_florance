/**
 * lib/seo.js
 * Central SEO configuration for Cayson Florance International.
 * Use generateMetadata() to create consistent, complete metadata for every page.
 */

export const siteConfig = {
  name: 'Cayson Florance International',
  shortName: 'Cayson Florance',
  legalName: 'Cayson Florance International Private Limited',
  tagline: 'Health, Nutrition & Agri-Tech Innovation',
  description:
    'Cayson Florance International is a futuristic health, nutrition and bio-processing startup based in Ernakulam, Kerala — upcycling coconut, pineapple, sprouted grains and moringa into world-class functional health foods.',
  url: 'https://caysonflorance.com',
  logo: 'https://caysonflorance.com/logo/logo.png',
  ogImage: 'https://caysonflorance.com/hero_img1.webp',
  twitterHandle: '@caysonflorance',
  locale: 'en_IN',
  country: 'IN',
  address: {
    street: '1st Floor, Door No: 66/1150, Suite B7',
    city: 'Ernakulam North',
    state: 'Kerala',
    zip: '682018',
    country: 'India',
  },
  email: 'contact@caysonflorance.com',
  phone: '+91 9833662866',
  founded: '2024',
  industry: 'Health, Nutrition & Agri-Technology',
}

/**
 * Generate a full Next.js Metadata object for a given page.
 * @param {object} overrides - Page-specific overrides
 * @returns {import('next').Metadata}
 */
export function generateMetadata(overrides = {}) {
  const {
    title,
    description = siteConfig.description,
    keywords = [],
    canonicalPath = '',
    image = siteConfig.ogImage,
    noIndex = false,
  } = overrides

  const canonical = `${siteConfig.url}${canonicalPath}`
  const resolvedTitle = title
    ? `${title} | Cayson Florance`
    : `${siteConfig.name} | ${siteConfig.tagline}`

  const defaultKeywords = [
    'Cayson Florance',
    'health nutrition agri-tech',
    'functional foods Kerala',
    'bio-processing startup India',
    'coconut products',
    'moringa extract',
    'sprouted grain biscuits',
  ]

  return {
    title: resolvedTitle,
    description,
    keywords: [...defaultKeywords, ...keywords],
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    openGraph: {
      type: 'website',
      url: canonical,
      title: resolvedTitle,
      description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: resolvedTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: resolvedTitle,
      description,
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
      images: [image],
    },
  }
}

/**
 * Build an absolute canonical URL from a path.
 * @param {string} path - e.g. '/products'
 * @returns {string}
 */
export function canonical(path = '') {
  return `${siteConfig.url}${path}`
}
