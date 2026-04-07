import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SINUM POWER - Ipari Energiaoptimalizálás | Költségmegtakarítás',
  description: 'Akár 20-30% energiamegtakarítás ipari rendszerekhez. SINUM POWER - Ipari környezetben bizonyított megoldás. Tudja meg mennyit fizet túl!',
  keywords: 'energiaoptimalizálás, költségmegtakarítás, ipari energia, power factor, reaktív teljesítmény',
  authors: [{ name: 'SINUM POWER' }],
  viewport: 'width=device-width, initial-scale=1.0',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'hu_HU',
    url: 'https://sinum-power-landing.vercel.app',
    siteName: 'SINUM POWER',
    title: 'SINUM POWER - Ipari Energiaoptimalizálás',
    description: 'Akár 20-30% energiamegtakarítás ipari rendszerekhez',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'SINUM POWER Industrial Energy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SINUM POWER - Ipari Energiaoptimalizálás',
    description: 'Akár 20-30% energiamegtakarítás ipari rendszerekhez',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hu">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#1e3a8a" />
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-weight='bold' fill='%231e3a8a'>⚡</text></svg>" />
      </head>
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
