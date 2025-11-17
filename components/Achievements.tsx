'use client'

import { profileData } from '@/data/profile'

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-normal tracking-tight mb-16 text-black">
          Achievements
        </h2>
        <div className="space-y-20">
          {profileData.achievements.map((achievement, index) => (
            <div key={index} className="border-b border-gray-200 pb-20 last:border-b-0">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  {achievement.year && (
                    <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                      {achievement.year}
                    </p>
                  )}
                  <p className="text-sm uppercase tracking-wider text-gray-500">
                    {achievement.type}
                  </p>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl md:text-3xl font-normal mb-6 text-black">
                    {achievement.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    {achievement.description}
                  </p>
                  {achievement.link && (
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 hover:text-black underline transition-colors"
                    >
                      Learn more →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

