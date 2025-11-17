'use client'

import { profileData } from '@/data/profile'

export default function DataGenie() {
  const { datagenie } = profileData

  return (
    <section id="datagenie" className="py-24 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-normal tracking-tight mb-6 text-black">
          DataGenie
        </h2>
        <p className="text-2xl md:text-3xl font-light mb-12 text-gray-700">
          {datagenie.role}
        </p>
        
        <div className="max-w-4xl mb-16">
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            {datagenie.description}
          </p>
          {datagenie.mission && (
            <p className="text-lg leading-relaxed text-gray-600 italic border-l-4 border-black pl-6">
              {datagenie.mission}
            </p>
          )}
        </div>

      </div>
    </section>
  )
}

