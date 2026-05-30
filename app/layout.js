import './globals.css'
import { Inter, Playfair_Display, Space_Grotesk } from 'next/font/google'
import JsonLd from '@/components/SEO/JsonLd'
import { organizationSchema } from '@/lib/schema'
import { siteConfig } from '@/lib/seo'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' })
const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-space', display: 'swap' })

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Cayson Florance International | Health, Nutrition & Agri-Tech Innovation',
    template: '%s | Cayson Florance',
  },
  description:
    'Cayson Florance International is a futuristic health, nutrition and bio-processing startup based in Ernakulam, Kerala — upcycling coconut, pineapple, sprouted grains and moringa into world-class functional health foods.',
  keywords: [
    'Cayson Florance International',
    'Health Nutrition Agri-Tech',
    'Functional Foods India',
    'Bio-Processing Kerala',
    'Coconut Products',
    'Moringa Extract',
    'Sprouted Grain Biscuits',
    'Virgin Coconut Oil',
    'Plant Based Foods',
    'Startup India',
  ],
  authors: [{ name: 'Cayson Florance International', url: siteConfig.url }],
  creator: 'Cayson Florance International',
  publisher: 'Cayson Florance International',
  category: 'Health & Nutrition',
  classification: 'Business',
  robots: {
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
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'Cayson Florance International | Health, Nutrition & Agri-Tech Innovation',
    description:
      'A futuristic health, nutrition and bio-processing startup based in Ernakulam, Kerala — upcycling coconut, pineapple, sprouted grains and moringa into world-class functional health foods.',
    locale: 'en_IN',
    images: [
      {
        url: `${siteConfig.url}/hero_img1.webp`,
        width: 1200,
        height: 630,
        alt: 'Cayson Florance International — Health, Nutrition & Agri-Tech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cayson Florance International | Health, Nutrition & Agri-Tech Innovation',
    description:
      'Upcycling coconut, pineapple, sprouted grains and moringa into world-class functional health foods from Kerala.',
    site: '@caysonflorance',
    creator: '@caysonflorance',
    images: [`${siteConfig.url}/hero_img1.webp`],
  },
  icons: {
    icon: '/logo/logo.png',
    apple: '/logo/logo.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: '',   // Add Google Search Console verification token here
    other: {
      'msvalidate.01': '', // Add Bing Webmaster Tools token here
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${playfair.variable} ${space.variable}`}>
      <head>
        <JsonLd schema={organizationSchema()} />
        <script dangerouslySetInnerHTML={{__html:'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);'}} />
      </head>
      <body className="font-sans antialiased bg-white text-slate-900 overflow-x-hidden">
        {/* Skip to main content — required for WCAG AA accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-emerald2-800 focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
