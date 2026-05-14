import './globals.css'
import { Inter, Playfair_Display, Space_Grotesk } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' })
const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-space', display: 'swap' })

export const metadata = {
  title: 'Cayson Florance International — Building the Future of Global Agro-Industrial Infrastructure',
  description: 'A multinational diversified conglomerate operating across agriculture, industrial manufacturing, renewable energy, mining, logistics, exports and infrastructure across India, UAE, USA, UK, Zambia and Congo.',
  keywords: 'Cayson Florance, conglomerate, agro-industrial, renewable energy, mining, distilleries, aquaculture, tissue culture, global logistics',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${space.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{__html:'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);'}} />
      </head>
      <body className="font-sans antialiased bg-white text-slate-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
