import Nav from '@/components/site/Nav'
import Hero from '@/components/site/Hero'
import About from '@/components/site/About'
import Impact from '@/components/site/Impact'
import ProductPreview from '@/components/site/ProductPreview'
import CTA from '@/components/site/CTA'
import Footer from '@/components/site/Footer'
import ScrollProgress from '@/components/site/ScrollProgress'
import { generateMetadata as buildMeta } from '@/lib/seo'

export const metadata = buildMeta({
  title: 'Agriculture — Health, Nutrition & Agri-Tech Innovation',
  description:
    'Cayson Florance International — a futuristic health, nutrition and bio-processing startup based in Ernakulam, Kerala. Upcycling coconut, pineapple, sprouted grains and moringa into world-class functional health foods for modern lifestyles.',
  keywords: [
    'Cayson Florance International',
    'Health Tech Startup Kerala',
    'Agri-Tech Startup India',
    'Functional Foods',
    'Zero Waste Bio-Processing',
    'Coconut Products Kerala',
    'Moringa Supplements India',
    'Sprouted Grain Health Foods',
    'Startup India Ernakulam',
  ],
  canonicalPath: '/agriculture',
})

export default function AgriculturePage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main id="main-content">
        <Hero />
        <About />
        <Impact />
        <ProductPreview />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
