import Nav from '@/components/site/Nav'
import Hero from '@/components/site/Hero'
import Marquee from '@/components/site/Marquee'
import Overview from '@/components/site/Overview'
import Ecosystem from '@/components/site/Ecosystem'
import Sectors from '@/components/site/Sectors'
import GlobalNetwork from '@/components/site/GlobalNetwork'
import Investors from '@/components/site/Investors'
import Sustainability from '@/components/site/Sustainability'
import Subsidiaries from '@/components/site/Subsidiaries'
import CTA from '@/components/site/CTA'
import Footer from '@/components/site/Footer'
import ScrollProgress from '@/components/site/ScrollProgress'

const App = () => {
  return (
    <main className="relative">
      <ScrollProgress />
      <Nav />
      <Hero />
      <Marquee />
      <Overview />
      <Ecosystem />
      <Sectors />
      <GlobalNetwork />
      <Investors />
      <Sustainability />
      <Subsidiaries />
      <CTA />
      <Footer />
    </main>
  )
}

export default App
