'use client'

import { AlertCircle, Zap, TrendingUp, Eye } from 'lucide-react'

export function Problems() {
  const problems = [
    {
      icon: TrendingUp,
      title: 'Magas Elektromosság Költségek',
      description: 'Az energia számlák folyamatosan nőnek. Sok cég nem tudja, hogy hol lehet megtakarítani.',
    },
    {
      icon: Zap,
      title: 'Nem Hatékony Rendszerek',
      description: 'A meglévő berendezések nem optimálisak. Sok felesleges energia veszteség történik.',
    },
    {
      icon: Eye,
      title: 'Rejtett Energia Veszteségek',
      description: 'A reaktív teljesítmény és power factor problémák észrevétlenek maradnak.',
    },
  ]

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Felismered a Problémát?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ipari vállalatok gyakran szembesülnek ezekkel a kihívásokkal. Te is érintett vagy?
          </p>
        </div>

        {/* Problems grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <div
                key={index}
                className="card-base p-8 sm:p-10 group hover:border-steel-blue-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-red-100 text-red-600 group-hover:bg-red-200 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Emotional hook */}
        <div className="rounded-xl bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 p-8 sm:p-10">
          <div className="flex gap-4 items-start">
            <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                De hogy tudod, mennyit fizetsz túl?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A legtöbb iparvállalatnak nincs pontosságú képe az energiavesztesége méreteről. Az eddigi &quot;szokásos&quot; költségeket fizetik, anélkül, hogy tudnák: léteznek megoldások. Ez a pótlólagos költség általában lényegesen csökkenthető.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
