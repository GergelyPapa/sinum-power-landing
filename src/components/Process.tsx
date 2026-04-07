'use client'

import { ArrowRight, Zap } from 'lucide-react'

export function Process() {
  const steps = [
    {
      number: '1',
      title: 'Felmérés (Assessment)',
      description: 'Komplex energiadiagnózis és rendszerelemzés. Megvizsgáljuk a meglévő fogyasztást és azonosítjuk az optimalizálási lehetőségeket.',
      icon: '📋',
    },
    {
      number: '2',
      title: 'Telepítés (Installation)',
      description: 'A SINUM POWER rendszer integrációja meglévő infrastruktúrába. Szükségtelen drága berendezéscsere, gyors implementáció.',
      icon: '⚙️',
    },
    {
      number: '3',
      title: 'Optimalizálás (Optimization)',
      description: 'Valós adatokon alapuló tuning és paraméterezés. A rendszer azonnal elkezdi az energia megtakarítást.',
      icon: '✨',
    },
    {
      number: '4',
      title: 'Monitoring (24/7)',
      description: 'Folyamatos felügyelet és automata beavatkozás. Realtime adatok és riportok az optimalizálás eredményeiről.',
      icon: '📊',
    },
  ]

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Hogyan Működik az Implementáció?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Egyszerű, 4 lépéses folyamat a teljes energiaoptimalizáláshoz
          </p>
        </div>

        {/* Process steps - Desktop */}
        <div className="hidden lg:block mb-12">
          <div className="flex items-center justify-between relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center w-1/4">
                {/* Step circle */}
                <div className="relative z-10 mb-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-steel-blue-500 to-steel-blue-900 flex items-center justify-center text-white font-bold text-3xl shadow-lg hover:shadow-xl transition-shadow">
                    {step.icon}
                  </div>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute top-10 left-1/2 w-1/2 h-1 bg-gradient-to-r from-steel-blue-500 to-gray-300" style={{ width: 'calc(100% + 40px)', left: '50%', transform: 'translateX(-50%)' }}></div>
                )}

                {/* Text */}
                <div className="mt-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process steps - Mobile */}
        <div className="lg:hidden space-y-6 mb-12">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="flex items-start gap-6">
                {/* Circle with icon */}
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-steel-blue-500 to-steel-blue-900 text-white text-2xl shadow-lg">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="flex justify-center mt-6 mb-2">
                  <ArrowRight className="w-5 h-5 text-gray-400 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Timeline info box */}
        <div className="rounded-xl bg-gradient-to-r from-steel-blue-50 to-blue-50 border-2 border-steel-blue-200 p-8 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <p className="text-sm font-semibold text-steel-blue-900 uppercase tracking-wide mb-2">Felmérés</p>
              <p className="text-gray-700 text-sm">1-2 hét alatt</p>
            </div>

            <div className="hidden md:block w-px bg-gray-300"></div>

            <div className="text-center md:text-left">
              <p className="text-sm font-semibold text-steel-blue-900 uppercase tracking-wide mb-2">Telepítés</p>
              <p className="text-gray-700 text-sm">1-2 hét alatt</p>
            </div>

            <div className="hidden md:block w-px bg-gray-300"></div>

            <div className="text-center md:text-left">
              <p className="text-sm font-semibold text-steel-blue-900 uppercase tracking-wide mb-2">Hatások</p>
              <p className="text-gray-700 text-sm">Azonnal mérhető</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
