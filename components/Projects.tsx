'use client'

import { profileData } from '@/data/profile'

export default function Projects() {
  if (!profileData.projects || profileData.projects.length === 0) return null

  return (
    <section id="projects" className="py-24 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-normal tracking-tight mb-16 text-black">
          Projects
        </h2>
        <div className="space-y-20">
          {profileData.projects.map((project, index) => (
            <div key={index} className="border-b border-gray-200 pb-20 last:border-b-0">
              <h3 className="text-2xl md:text-3xl font-normal mb-6 text-black">
                {project.title}
              </h3>
              <div className="max-w-4xl">
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {project.description}
                </p>
                {project.businessImpact && (
                  <div className="bg-gray-50 p-6 mb-8 border-l-4 border-black">
                    <p className="text-sm uppercase tracking-wider text-gray-500 mb-3">
                      Business Impact
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {project.businessImpact}
                    </p>
                  </div>
                )}
                <div>
                  <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">
                    Technologies Used
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

