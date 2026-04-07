'use client'

import { DollarSign, Zap, BarChart3, Gauge } from 'lucide-react'

export function Benefits() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Költségcsökkentés',
      description: 'Azonnal mérhető energiaszámla csökkentés havonta',
      metric: '20-30%',
    },
    {
      icon: Zap,
      title: 'Energia Stabilitás',
      description: 'Kiegyensúlyozott és stabil energiafogyasztás',
      metric: '99.9%',
    },
    {
      icon: BarChart3,
      title: 'Hatékonyság Javulás',
      description: 'Termelékenység növekedés azonos energiabevitellel',
      metric: '+15%',
    },
    {
      icon: Gauge,
      title: 'Power Factor Optimalizálás',
      description: 'Reaktív teljesítmény kezelés és csökkentés',
      metric: 'cos φ: 0.95+',
    },
  ]

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Az Előnyök, Amelyek Számítanak
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Konkrét, mérhető eredmények, amelyeket te is látni fogsz
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="card-base p-8 sm:p-10 text-center group hover:border-steel-blue-300 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-steel-blue-100 to-steel-blue-50 group-hover:from-steel-blue-200 group-hover:to-steel-blue-100 transition-all">
                    <Icon className="w-7 h-7 text-steel-blue-900" />
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-2xl sm:text-3xl font-bold text-steel-blue-900 mb-2">
                    {benefit.metric}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Additional benefits section */}
        <div className="mt-12 sm:mt-16 rounded-xl bg-gradient-to-r from-steel-blue-50 to-blue-50 border border-steel-blue-200 p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Üzemeltetési Előnyök
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold">✓</span>
                  <span className="text-gray-700">Nincs szükség új berendezésekre</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold">✓</span>
                  <span className="text-gray-700">Rövid telepítési idő</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold">✓</span>
                  <span className="text-gray-700">Azonnali hatások</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Pénzügyi Előnyök
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold">✓</span>
                  <span className="text-gray-700">Gyors ROI (< 2 év)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold">✓</span>
                  <span className="text-gray-700">Hosszú távú megtakarítás</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold">✓</span>
                  <span className="text-gray-700">Mérhető hozam</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
