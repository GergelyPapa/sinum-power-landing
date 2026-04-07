'use client'

import { ArrowRight, Check } from 'lucide-react'

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-steel-blue-900 via-steel-blue-800 to-steel-blue-950">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-steel-blue-700 rounded-full opacity-20 blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-steel-blue-700 rounded-full opacity-20 blur-3xl -ml-36 -mb-36"></div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Urgency badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-400 bg-opacity-20 px-4 py-2 border border-emerald-400 border-opacity-30">
          <Check className="w-4 h-4 text-emerald-300" />
          <span className="text-sm font-medium text-emerald-200">Ipari megoldás, azonnal elérhető</span>
        </div>

        {/* Main headline */}
        <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Tudja meg,
          <span className="block mt-2">mennyit fizet túl az energián</span>
        </h2>

        {/* Subheadline */}
        <p className="mb-10 text-lg sm:text-xl text-steel-blue-100 max-w-2xl mx-auto leading-relaxed">
          A SINUM POWER megoldás azonnal csökkenti az energia költségeket ipari felhasználók számára. Nézd meg a részleteket a hivatalos oldalon.
        </p>

        {/* Key points */}
        <div className="mb-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <Check className="w-6 h-6 text-emerald-300 flex-shrink-0 mt-0.5" />
            <div className="text-left">
              <p className="font-semibold text-white">Gyors Telepítés</p>
              <p className="text-sm text-steel-blue-200">1-2 hét alatt</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Check className="w-6 h-6 text-emerald-300 flex-shrink-0 mt-0.5" />
            <div className="text-left">
              <p className="font-semibold text-white">20-30% Megtakarítás</p>
              <p className="text-sm text-steel-blue-200">Azonnal mérhető</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Check className="w-6 h-6 text-emerald-300 flex-shrink-0 mt-0.5" />
            <div className="text-left">
              <p className="font-semibold text-white">Beruházás Nélkül</p>
              <p className="text-sm text-steel-blue-200">Nincs új berendezés</p>
            </div>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a
            href="https://dellamel.hu/SINUM_POWER"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg bg-white text-steel-blue-900 hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl active:scale-95"
          >
            Tovább a részletekhez
            <ArrowRight className="ml-2 w-6 h-6" />
          </a>

          <a
            href="https://dellamel.hu/SINUM_POWER"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:bg-opacity-10 transition-all duration-300"
          >
            Hivatalos oldal megnyitása
          </a>
        </div>

        {/* Secondary text */}
        <p className="text-steel-blue-200 text-sm">
          Összes linkünk a dellamel.hu/SINUM_POWER címre mutat. Ott találsz minden információt.
        </p>
      </div>

      {/* Bottom decoration */}
      <div className="relative z-5 mt-16 mx-auto max-w-3xl px-4">
        <div className="rounded-xl bg-white bg-opacity-5 border border-white border-opacity-10 backdrop-blur-sm p-6 sm:p-8">
          <p className="text-center text-steel-blue-100 text-sm sm:text-base">
            <span className="font-semibold text-white">Nem szükséges egyeztetnivaló vagy kapcsolattartás innen.</span> A teljes megoldásról a hivatalos SINUM POWER oldalon találsz információt. Kattints az alábbi gombra.
          </p>
        </div>
      </div>
    </section>
  )
}
