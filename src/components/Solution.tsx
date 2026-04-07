'use client'

import { CheckCircle2, Lightbulb } from 'lucide-react'

export function Solution() {
  const features = [
    'Komplex energiavizsgálat és diagnózis',
    'Részletes rendszeroptimalizálás',
    'Real-time monitoring rendszer',
    'Power factor és reaktív teljesítmény kezelés',
    '24/7 rendszerfigyelés és automata beavatkozás',
    'Teljes körű dokumentáció és riportok',
  ]

  return (
    <section id="megoldas" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Mit Csinál a SINUM POWER?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Egy komplex, ipari szintű megoldás, amely azonnal csökkenti az energia költségeket és javítja a hatékonyságot.
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Features list */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Explanation */}
          <div className="card-base p-8 sm:p-10 bg-white">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-steel-blue-100">
                  <Lightbulb className="w-6 h-6 text-steel-blue-900" />
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                  Hogyan működik?
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                A SINUM POWER egy intelligens rendszer, amely <span className="font-semibold">automatikusan elemzi és optimalizálja</span> az ipari energiafogyasztást.
              </p>

              <p className="leading-relaxed">
                Azonosítja a <span className="font-semibold">nem hatékony működési pontokat</span>, csökkenti a <span className="font-semibold">reaktív teljesítményt</span>, és optimalizálja a <span className="font-semibold">power factort</span>.
              </p>

              <p className="leading-relaxed">
                Az eredmény? Azonnal mérhető költségmegtakarítás, nem szükséges drága berendezéscsere, és <span className="font-semibold">teljes körű monitoring</span> az összes paraméterről.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">Teljesítményadatok</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-steel-blue-900">20-30%</div>
                  <p className="text-xs text-gray-600 mt-1">Energia megtakarítás</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-steel-blue-900">ROI</div>
                  <p className="text-xs text-gray-600 mt-1">&lt; 2 év</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
