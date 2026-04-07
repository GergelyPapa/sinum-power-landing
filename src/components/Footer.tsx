'use client'

import { ArrowRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-steel-blue-400">⚡</span>
              <span className="font-bold text-xl">SINUM POWER</span>
            </div>
            <p className="text-gray-400 text-sm">
              Ipari energiaoptimalizálás korszerű megoldásokkal.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Megoldás</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#megoldas" className="hover:text-white transition-colors">
                  Mi is az SINUM POWER?
                </a>
              </li>
              <li>
                <a href="#megoldas" className="hover:text-white transition-colors">
                  Funkciók és előnyök
                </a>
              </li>
              <li>
                <a href="#megoldas" className="hover:text-white transition-colors">
                  Eredmények
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Információ</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="https://dellamel.hu/SINUM_POWER" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Hivatalos oldal
                </a>
              </li>
              <li>
                <a href="https://dellamel.hu/SINUM_POWER" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Részletes adatok
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-semibold text-white mb-4">Kezdj Most</h3>
            <a
              href="https://dellamel.hu/SINUM_POWER"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-steel-blue-300 hover:text-steel-blue-200 transition-colors text-sm font-medium"
            >
              Oficális oldal
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            &copy; 2024 SINUM POWER. Ipari energiaoptimalizálás.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="https://dellamel.hu/SINUM_POWER" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Adatvédelem
            </a>
            <span>•</span>
            <a href="https://dellamel.hu/SINUM_POWER" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Felhasználási feltételek
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
