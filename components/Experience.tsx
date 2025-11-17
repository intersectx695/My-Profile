'use client'

import { profileData } from '@/data/profile'

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-normal tracking-tight mb-16 text-black">
          Experience
        </h2>
        <div className="space-y-20">
          {profileData.experiences.map((exp, index) => (
            <div key={index} className="border-b border-gray-200 pb-16 last:border-b-0">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                    {exp.period}
                  </p>
                  {exp.location && (
                    <p className="text-sm text-gray-500">{exp.location}</p>
                  )}
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl md:text-3xl font-normal mb-3 text-black">
                    {exp.role}
                  </h3>
                  <p className="text-xl text-gray-600 mb-6">
                    {exp.company}
                  </p>
                  <div className="space-y-8">
                    {exp.description.map((item, i) => (
                      <div key={i} className="border-l-2 border-gray-300 pl-6">
                        <p className="text-gray-700 leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                  {exp.skills && exp.skills.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-sm uppercase tracking-wider text-gray-500 mb-3">
                        Technologies
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
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

