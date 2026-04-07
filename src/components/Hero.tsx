'use client'

import { ArrowRight, Zap } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-steel-blue-50 via-white to-white pt-16 pb-20 sm:pt-24 sm:pb-32 lg:pt-32">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-steel-blue-100 rounded-full opacity-30 blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-steel-blue-50 rounded-full opacity-40 blur-3xl -ml-36 -mb-36"></div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-steel-blue-100 px-4 py-2 text-sm font-medium text-steel-blue-900">
            <Zap className="w-4 h-4" />
            <span>Ipari környezetben bizonyított</span>
          </div>

          {/* Main headline */}
          <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
            Akár 20-30% 
            <span className="gradient-text"> energiamegtakarítás</span>
          </h1>

          {/* Subheadline */}
          <p className="mb-10 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tudja meg mennyit fizet túl az energián! A SINUM POWER ipari rendszereinek optimalizálása meglepő eredményeket hozhat.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="https://dellamel.hu/SINUM_POWER"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary group"
            >
              Megnézem a hivatalos oldalt
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#megoldas"
              className="cta-secondary"
            >
              Tudjon meg többet
            </a>
          </div>

          {/* Trust elements */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-center pt-8 border-t border-gray-200">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-steel-blue-900">20-30%</div>
              <p className="text-sm text-gray-600">Energia megtakarítás</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-steel-blue-900">Gyors</div>
              <p className="text-sm text-gray-600">Megtérülés</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-steel-blue-900">24/7</div>
              <p className="text-sm text-gray-600">Monitoring</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating card visual - represents industrial setting */}
      <div className="relative z-5 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
        <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-steel-blue-900 to-steel-blue-800 p-8 sm:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-steel-blue-700 mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-6 h-6 text-yellow-300" />
              </div>
              <h3 className="text-white font-semibold mb-2">Energiahatékonyság</h3>
              <p className="text-steel-blue-200 text-sm">Optimalizált teljesítménynél</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-steel-blue-700 mx-auto mb-4 flex items-center justify-center">
                <span className="text-yellow-300 text-xl font-bold">📊</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Valós Monitoring</h3>
              <p className="text-steel-blue-200 text-sm">Adatok alapján optimizálás</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-steel-blue-700 mx-auto mb-4 flex items-center justify-center">
                <span className="text-yellow-300 text-xl font-bold">💰</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Költségcsökkentés</h3>
              <p className="text-steel-blue-200 text-sm">Azonnal érzékelható megtakarítás</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
