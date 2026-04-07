import { Hero } from '@/components/Hero'
import { Problems } from '@/components/Problems'
import { Solution } from '@/components/Solution'
import { Benefits } from '@/components/Benefits'
import { Results } from '@/components/Results'
import { Process } from '@/components/Process'
import { FinalCTA } from '@/components/FinalCTA'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation - Simple header */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-steel-blue-900">⚡</span>
              <span className="font-bold text-lg text-gray-900 hidden sm:inline">SINUM POWER</span>
              <span className="font-bold text-lg text-gray-900 sm:hidden">SINUM</span>
            </div>

            {/* CTA Button */}
            <a
              href="https://dellamel.hu/SINUM_POWER"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 text-sm font-semibold rounded-lg bg-steel-blue-900 text-white hover:bg-steel-blue-800 transition-colors"
            >
              Tovább
            </a>
          </div>
        </div>
      </header>

      {/* Main content sections */}
      <Hero />
      <Problems />
      <Solution />
      <Benefits />
      <Results />
      <Process />
      <FinalCTA />
      <Footer />
    </main>
  )
}
