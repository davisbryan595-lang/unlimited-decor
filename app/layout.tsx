import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Navbar from '@/components/navbar'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Unlimited Decor LLC | Luxury Event Décor & Gift Services | Detroit',
  description: 'Detroit\'s premier event décor company. Balloon arches, room setups, gift baskets, and full event planning. Book luxury decorations for any occasion.',
  keywords: 'event décor, balloons, Detroit, room setup, gift baskets, event planning',
  openGraph: {
    title: 'Unlimited Decor LLC | Luxury Event Décor Services',
    description: 'Transform your moments into memories with luxury event décor',
    type: 'website',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-white text-foreground">
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
