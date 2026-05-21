import Nav from '@/components/site/Nav'
import Hero from '@/components/site/Hero'
import About from '@/components/site/About'
import Impact from '@/components/site/Impact'
import ProductPreview from '@/components/site/ProductPreview'
import CTA from '@/components/site/CTA'
import Footer from '@/components/site/Footer'
import ScrollProgress from '@/components/site/ScrollProgress'

const App = () => {
  return (
    <main className="relative">
      <ScrollProgress />
      <Nav />
      <Hero />
      <About />
      <Impact />
      <ProductPreview />
      <CTA />
      <Footer />
    </main>
  )
}

export default App
