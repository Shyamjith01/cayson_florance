import Nav from '@/components/site/Nav'
import Hero from '@/components/site/Hero'
import Overview from '@/components/site/Overview'
import Ecosystem from '@/components/site/Ecosystem'
import Sectors from '@/components/site/Sectors'
import GlobalNetwork from '@/components/site/GlobalNetwork'
import Investors from '@/components/site/Investors'
import Sustainability from '@/components/site/Sustainability'
import CTA from '@/components/site/CTA'
import Footer from '@/components/site/Footer'

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Overview />
      <Ecosystem />
      <Sectors />
      <GlobalNetwork />
      <Investors />
      <Sustainability />
      <CTA />
      <Footer />
    </main>
  )
}

export default App
