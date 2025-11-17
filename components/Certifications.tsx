'use client'

import { profileData } from '@/data/profile'

export default function Certifications() {
  if (!profileData.certifications || profileData.certifications.length === 0) return null

  return (
    <section id="certifications" className="py-24 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-normal tracking-tight mb-16 text-black">
          Certifications
        </h2>
        <div className="space-y-8">
          {profileData.certifications.map((cert, index) => (
            <div key={index} className="border-b border-gray-200 pb-8 last:border-b-0">
              <p className="text-lg text-gray-700 leading-relaxed">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

