'use client'

import { profileData } from '@/data/profile'

const skillCategories = [
  { title: 'Core Languages', skills: profileData.skills?.core || [] },
  { title: 'ML Libraries', skills: profileData.skills?.ml || [] },
  { title: 'Data Engineering', skills: profileData.skills?.dataEngineering || [] },
  { title: 'Infrastructure', skills: profileData.skills?.infra || [] },
  { title: 'Cloud Platforms', skills: profileData.skills?.cloud || [] },
  { title: 'LLM Tools', skills: profileData.skills?.llm || [] },
  { title: 'Databases', skills: profileData.skills?.databases || [] },
  { title: 'Frameworks', skills: profileData.skills?.frameworks || [] },
]

// Skills that should be highlighted (larger size)
const highlightedSkills = ['Agentic AI', 'Time Series Analysis', 'Anomaly Detection', 'Spark Big Data']

// Generate varied sizes and weights for word cloud effect
const getWordCloudStyle = (skill: string, index: number) => {
  // Check if skill should be highlighted
  if (highlightedSkills.includes(skill)) {
    return 'text-3xl md:text-4xl font-bold'
  }
  
  const sizeClasses = ['text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl']
  const weightClasses = ['font-normal', 'font-medium', 'font-semibold']
  const size = sizeClasses[index % sizeClasses.length]
  const weight = weightClasses[index % weightClasses.length]
  return `${size} ${weight}`
}

export default function Skills() {
  if (!profileData.skills) return null

  // Flatten all skills for word cloud
  const allSkills = skillCategories.flatMap(category => category.skills)

  return (
    <section id="skills" className="py-24 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-normal tracking-tight mb-16 text-black">
          Technical Skills
        </h2>
        
        {/* Word Cloud */}
        <div className="py-12">
          <div className="flex flex-wrap gap-6 justify-center items-center leading-relaxed">
            {allSkills.map((skill, i) => (
              <span
                key={i}
                className={`${getWordCloudStyle(skill, i)} text-gray-700 hover:text-black transition-colors cursor-default`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

