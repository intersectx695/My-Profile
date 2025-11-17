'use client'

import { profileData } from '@/data/profile'

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-normal tracking-tight mb-16 text-black">
          Education
        </h2>
        <div className="space-y-20">
          {profileData.education.map((edu, index) => (
            <div key={index} className="border-b border-gray-200 pb-16 last:border-b-0">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                    {edu.period}
                  </p>
                </div>
                    <div className="md:col-span-2">
                      <h3 className="text-2xl md:text-3xl font-normal mb-3 text-black">
                        {edu.degree}
                      </h3>
                      <p className="text-xl text-gray-600 mb-6">
                        {edu.institution}
                      </p>
                      {edu.description && (
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                          {edu.description}
                        </p>
                      )}
                      {edu.achievements && edu.achievements.length > 0 && (
                        <div className="bg-gray-50 border-l-4 border-black p-6 mb-6">
                          <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">
                            Key Achievements
                          </p>
                          <ul className="space-y-3">
                            {edu.achievements.map((achievement, i) => (
                              <li key={i} className="text-gray-800 font-medium">
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                  {edu.honors && edu.honors.length > 0 && (
                    <div className="pt-6 border-t border-gray-200">
                      <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">
                        Honors
                      </p>
                      <ul className="space-y-2">
                        {edu.honors.map((honor, i) => (
                          <li key={i} className="text-gray-700">
                            {honor}
                          </li>
                        ))}
                      </ul>
                    </div>
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

