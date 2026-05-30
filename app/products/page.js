import Nav from '@/components/site/Nav'
import ProductsHero from '@/components/site/ProductsHero'
import ProductsList from '@/components/site/ProductsList'
import CTA from '@/components/site/CTA'
import Footer from '@/components/site/Footer'
import ScrollProgress from '@/components/site/ScrollProgress'
import JsonLd from '@/components/SEO/JsonLd'
import { breadcrumbSchema, PRODUCT_SEO_DATA } from '@/lib/schema'
import { siteConfig, generateMetadata as buildMeta } from '@/lib/seo'

export const metadata = buildMeta({
  title: 'Innovative Wellness Products',
  description:
    'Explore Cayson Florance International\'s full range of 7 innovative health and nutrition products: Premium Sprouted Grain Biscuits, Virgin Coconut Oil, Coconut Paneer, Coconut Water Powder, Coconut Milk Cream, Pink Paradise Fizz, and Bio-Active Moringa Dry Extract.',
  keywords: [
    'Cayson Florance Products',
    'Premium Sprouted Grain Biscuits',
    'Virgin Coconut Oil India',
    'Coconut Paneer Dairy Free',
    'Coconut Water Powder',
    'Coconut Milk Cream',
    'Pink Paradise Fizz Drink',
    'Bio Active Moringa Extract',
    'Functional Health Foods India',
    'Plant Based Nutrition Products',
    'Health Nutrition Products Kerala',
    'Agri Tech Products India',
  ],
  canonicalPath: '/products',
  image: `${siteConfig.url}/products/prodbg.webp`,
})

const breadcrumbItems = [
  { name: 'Home', url: siteConfig.url },
  { name: 'Innovative Products', url: `${siteConfig.url}/products` },
]

export default function ProductsPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema(breadcrumbItems)} />
      <ScrollProgress />
      <Nav />
      <main id="main-content">
        <ProductsHero />
        <ProductsList />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
