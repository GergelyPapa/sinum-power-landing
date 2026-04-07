'use client'

import { TrendingDown, Award, BarChart3 } from 'lucide-react'

export function Results() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Meglepő Eredmények
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ipari felhasználók tapasztalatai alapján, az alábbi eredmények érhetőek el
          </p>
        </div>

        {/* Main stats - Large cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {/* Stat 1: Cost savings */}
          <div className="card-base p-10 sm:p-12 text-center group hover:shadow-lg">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-emerald-100 to-green-100 mb-6 group-hover:scale-110 transition-transform">
              <TrendingDown className="w-8 h-8 text-emerald-600" />
            </div>

            <h3 className="text-4xl sm:text-5xl font-bold text-steel-blue-900 mb-3">
              20-30%
            </h3>

            <p className="text-lg font-semibold text-gray-900 mb-3">
              Energiamegtakarítás
            </p>

            <p className="text-gray-600 text-sm sm:text-base">
              Első évben mérhető költségcsökkentés az energiaszámlán
            </p>
          </div>

          {/* Stat 2: ROI */}
          <div className="card-base p-10 sm:p-12 text-center group hover:shadow-lg">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-100 to-steel-blue-100 mb-6 group-hover:scale-110 transition-transform">
              <Award className="w-8 h-8 text-steel-blue-600" />
            </div>

            <h3 className="text-4xl sm:text-5xl font-bold text-steel-blue-900 mb-3">
              &lt;2 év
            </h3>

            <p className="text-lg font-semibold text-gray-900 mb-3">
              Megtérülési Idő
            </p>

            <p className="text-gray-600 text-sm sm:text-base">
              Gyors beruházási hozam, aztán tiszta nyereség
            </p>
          </div>

          {/* Stat 3: Stability */}
          <div className="card-base p-10 sm:p-12 text-center group hover:shadow-lg">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 mb-6 group-hover:scale-110 transition-transform">
              <BarChart3 className="w-8 h-8 text-amber-600" />
            </div>

            <h3 className="text-4xl sm:text-5xl font-bold text-steel-blue-900 mb-3">
              99.9%
            </h3>

            <p className="text-lg font-semibold text-gray-900 mb-3">
              Felügyeleti Uptime
            </p>

            <p className="text-gray-600 text-sm sm:text-base">
              Folyamatos monitoring és automata optimalizálás
            </p>
          </div>
        </div>

        {/* Detailed results info */}
        <div className="rounded-xl bg-gradient-to-r from-steel-blue-900 to-steel-blue-800 text-white p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-xl">📊</span>
                Konkrét Adatok
              </h3>
              <ul className="space-y-3 text-steel-blue-100">
                <li className="flex items-start gap-3">
                  <span className="inline-block flex-shrink-0 h-5 w-5 rounded-full bg-emerald-400 text-steel-blue-900 font-bold text-sm flex items-center justify-center mt-0.5">✓</span>
                  <span>Tipikus energiamegtakarítás 20-30%</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block flex-shrink-0 h-5 w-5 rounded-full bg-emerald-400 text-steel-blue-900 font-bold text-sm flex items-center justify-center mt-0.5">✓</span>
                  <span>Power factor javulás 0.85-ről 0.95+ értékre</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block flex-shrink-0 h-5 w-5 rounded-full bg-emerald-400 text-steel-blue-900 font-bold text-sm flex items-center justify-center mt-0.5">✓</span>
                  <span>Reaktív teljesítmény 40-50% csökkentés</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-xl">⏱️</span>
                Gyors Implementáció
              </h3>
              <ul className="space-y-3 text-steel-blue-100">
                <li className="flex items-start gap-3">
                  <span className="inline-block flex-shrink-0 h-5 w-5 rounded-full bg-emerald-400 text-steel-blue-900 font-bold text-sm flex items-center justify-center mt-0.5">✓</span>
                  <span>Üzemeltetésbe helyezés 1-2 hét alatt</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block flex-shrink-0 h-5 w-5 rounded-full bg-emerald-400 text-steel-blue-900 font-bold text-sm flex items-center justify-center mt-0.5">✓</span>
                  <span>Nincs szükség termelésleállásra</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block flex-shrink-0 h-5 w-5 rounded-full bg-emerald-400 text-steel-blue-900 font-bold text-sm flex items-center justify-center mt-0.5">✓</span>
                  <span>Dokumentáció és riportok azonnal</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Trust seal */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 uppercase tracking-widest font-semibold mb-3">
            Ipari Megoldás
          </p>
          <p className="text-lg text-gray-900 font-medium">
            Ipari környezetben
            <span className="text-steel-blue-900 font-bold"> bizonyított és tesztelt</span>
            megoldás a valódi eredményekhez
          </p>
        </div>
      </div>
    </section>
  )
}
