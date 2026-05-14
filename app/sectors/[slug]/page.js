import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'
import CTA from '@/components/site/CTA'
import SectorHero from '@/components/site/SectorHero'
import SectorBody from '@/components/site/SectorBody'
import { notFound } from 'next/navigation'

const DATA = {
  'distilleries': {
    tag: 'Vertical 01',
    title: 'Industrial Distilleries & Beverages',
    sub: 'Luxury beverage industry meets futuristic industrial infrastructure.',
    img: 'https://images.unsplash.com/photo-1596303275732-8d41472abf65?auto=format&fit=crop&w=2400&q=80',
    intro: 'From pineapple brandy and cashew apple spirits to grain ethanol — we operate one of the most ambitious export-grade distillation footprints emerging from South Asia and Africa.',
    pillars: [
      { t: 'Premium Spirits', d: 'Pineapple brandy and cashew apple eau-de-vie distilled to international luxury standards.' },
      { t: 'Industrial Ethanol', d: 'Grain and molasses-based ethanol production for fuel-blending and industrial export.' },
      { t: 'Bottling & Brand', d: 'In-house brand portfolio with bonded warehousing across UK and UAE distribution hubs.' },
    ],
    stats: [['120M L','Annual Capacity'],['7','Distillery Units'],['38','Export Markets']],
  },
  'tissue-culture': {
    tag: 'Vertical 02', title: 'Advanced Tissue Culture Lab',
    sub: 'Futuristic biotech agriculture ecosystem.',
    img: 'https://images.unsplash.com/photo-1616996691604-26dfd478cbbc?auto=format&fit=crop&w=2400&q=80',
    intro: 'A precision biotech infrastructure producing certified, disease-resistant, high-yield saplings for our own plantations and third-party agribusiness partners.',
    pillars: [
      { t: 'High-Yield Saplings', d: 'Banana, pineapple, jackfruit, avocado and mango cultivars at industrial scale.' },
      { t: 'Plant Pathology', d: 'In-house genomics and disease screening — every release is field-validated.' },
      { t: 'Plantation Support', d: 'Direct supply pipeline for our 48,000 acres and contracted partner farms.' },
    ],
    stats: [['24M','Saplings / Year'],['18','Crop Programs'],['99.4%','Survival Rate']],
  },
  'aquaculture': {
    tag: 'Vertical 03', title: 'Advanced Aquaculture',
    sub: 'Luxury aquaculture and premium seafood ecosystem.',
    img: 'https://images.unsplash.com/photo-1593011951191-3c69a6bfc151?auto=format&fit=crop&w=2400&q=80',
    intro: 'Engineered aquatic infrastructure producing premium, traceable, export-grade seafood for luxury hospitality and global retail.',
    pillars: [
      { t: 'Closed-Loop Systems', d: 'Recirculating aquaculture with full water-quality telemetry.' },
      { t: 'Premium Species', d: 'Sea bass, prawn, tilapia and high-value freshwater species portfolio.' },
      { t: 'Cold Chain Export', d: 'Owned cold-chain to Gulf, EU and North American retail partners.' },
    ],
    stats: [['38k MT','Annual Production'],['12','Hatcheries'],['46','Retail Partners']],
  },
  'mining': {
    tag: 'Vertical 04', title: 'Mining & Manufacturing',
    sub: 'Heavy industrial futuristic infrastructure.',
    img: 'https://images.unsplash.com/photo-1658135354486-99c51db347be?auto=format&fit=crop&w=2400&q=80',
    intro: 'Active operations across copper, lithium, cobalt and gold — vertically integrated downstream into copper sheet, wire and cable manufacturing.',
    pillars: [
      { t: 'Critical Minerals', d: 'Copper, lithium, cobalt and gold — the metals of the electrification age.' },
      { t: 'Value Addition', d: 'Sheet, rod, wire and cable manufacturing serving global EV and grid customers.' },
      { t: 'Responsible Mining', d: 'Audited ESG framework, community partnerships and rehabilitation programs.' },
    ],
    stats: [['6','Active Mines'],['450 kT','Refined Output'],['3','Continents']],
  },
  'agriculture': {
    tag: 'Vertical 05', title: 'High-Value Agriculture',
    sub: 'Luxury organic agriculture ecosystem.',
    img: 'https://images.unsplash.com/photo-1583052924678-f36e9dab1811?auto=format&fit=crop&w=2400&q=80',
    intro: 'Avocado, mango and jackfruit super-plantations, organic grain estates and drone-assisted precision farming across 48,000 acres.',
    pillars: [
      { t: 'Super Plantations', d: 'Avocado, mango, jackfruit, pineapple and cashew at export-grade scale.' },
      { t: 'Precision Farming', d: 'Drone surveillance, satellite imagery and AI-driven yield optimization.' },
      { t: 'Organic Grains', d: 'Certified organic rice, millets and pulses for premium global retail.' },
    ],
    stats: [['48,000 ac','Under Cultivation'],['11','Crop Verticals'],['62','Export Countries']],
  },
  'energy': {
    tag: 'Vertical 06', title: 'Green Energy & BESS',
    sub: 'Futuristic clean energy infrastructure.',
    img: 'https://images.unsplash.com/photo-1467579424161-6bbc141569d7?auto=format&fit=crop&w=2400&q=80',
    intro: 'A 2.4 GW renewable pipeline — solar parks, onshore wind, emerging wave energy pilots and grid-scale battery storage systems powering both our own operations and sovereign offtakers.',
    pillars: [
      { t: 'Solar & Wind', d: 'Utility-scale solar parks and onshore wind farms across India and Africa.' },
      { t: 'Wave & Pilots', d: 'Emerging wave-energy installations and hybrid microgrid demonstrators.' },
      { t: 'BESS', d: 'Grid-scale lithium battery storage built around our own mining-to-cell value chain.' },
    ],
    stats: [['2.4 GW','Pipeline'],['1.1 GWh','BESS Capacity'],['6','Markets']],
  },
}

export function generateStaticParams() {
  return Object.keys(DATA).map(slug => ({ slug }))
}

const SectorPage = ({ params }) => {
  const d = DATA[params.slug]
  if (!d) return notFound()
  return (
    <main className="relative">
      <Nav />
      <SectorHero d={d} />
      <SectorBody d={d} />
      <CTA />
      <Footer />
    </main>
  )
}

export default SectorPage
