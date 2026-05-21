import Nav from '@/components/site/Nav'
import ProductsHero from '@/components/site/ProductsHero'
import ProductsList from '@/components/site/ProductsList'
import CTA from '@/components/site/CTA'
import Footer from '@/components/site/Footer'
import ScrollProgress from '@/components/site/ScrollProgress'

export const metadata = {
  title: 'Innovative Products — Cayson Florance International',
  description: 'Cinematic, functional and scientifically engineered — explore our five flagship health, nutrition and bio-processed products: Virgin Coconut Oil, Coconut Paneer, Coconut Water Powder, Sparkling Protein Drink and Moringa Extract.',
}

const ProductsPage = () => {
  return (
    <main className="relative">
      <ScrollProgress />
      <Nav />
      <ProductsHero />
      <ProductsList />
      <CTA />
      <Footer />
    </main>
  )
}

export default ProductsPage
