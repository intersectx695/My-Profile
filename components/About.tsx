'use client'

import { profileData } from '@/data/profile'

export default function About() {
  return (
    <section id="about" className="py-24 bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-normal tracking-tight mb-16 text-black">
          About
        </h2>
        <div className="prose prose-lg max-w-none">
          <div>
            {profileData.about && (
              <p className="text-lg leading-relaxed text-gray-700">
                {profileData.about}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

