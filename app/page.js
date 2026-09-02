import Nav from '@/components/site/Nav'
import HeroSection from '@/components/home/HeroSection'
import StatsBar from '@/components/home/StatsBar'
import AboutUsSection from '@/components/home/AboutUsSection'
import WhyCaysonSection from '@/components/home/WhyCaysonSection'
import SectorsSection from '@/components/home/SectorsSection'
import GlobalPresenceSection from '@/components/home/GlobalPresenceSection'
import ImpactStatsSection from '@/components/home/ImpactStatsSection'
import InsightsSection from '@/components/home/InsightsSection'
import CTASection from '@/components/home/CTASection'
import { generateMetadata as buildMeta } from '@/lib/seo'
import Footer from '@/components/site/Footer'

export const metadata = buildMeta({
  title: 'Building a Sustainable Future Across Industries',
  description:
    'Cayson Florance International Pvt. Ltd. — building integrated sustainable solutions across agriculture, food, infrastructure, renewable energy, trade, and more. Rooted in India. Growing globally.',
  keywords: [
    'Cayson Florance International',
    'Sustainable Business India',
    'Multi-sector Company Kerala',
    'Agriculture Infrastructure Renewable Energy',
    'Global Sustainable Solutions',
    'Impact Investment India',
    'Integrated Business Solutions',
  ],
  canonicalPath: '',
})

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="bg-[#F8F7F2]">
        {/* Hero — full viewport */}
        <HeroSection />

        {/* Stats bar overlapping hero */}
        <StatsBar />

        {/* About Us */}
        <AboutUsSection />

        {/* Why Cayson */}
        <div className="mt-5 lg:mt-8">
          <WhyCaysonSection />
        </div>

        {/* Sectors */}
        <SectorsSection />

        {/* Global Presence */}
        <GlobalPresenceSection />

        {/* Impact Stats */}
        <ImpactStatsSection />

        {/* Insights */}
        <InsightsSection />

        {/* Final CTA */}
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
