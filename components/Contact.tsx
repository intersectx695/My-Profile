'use client'

import { profileData } from '@/data/profile'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-normal tracking-tight mb-16 text-black">
          Contact
        </h2>
        <div className="max-w-2xl">
          <div className="space-y-8 mb-12">
            {profileData.email && (
              <div>
                <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                  Email
                </p>
                <a
                  href={`mailto:${profileData.email}`}
                  className="text-xl text-black hover:opacity-70 transition-opacity"
                >
                  {profileData.email}
                </a>
              </div>
            )}
            {profileData.phone && (
              <div>
                <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                  Phone
                </p>
                <a
                  href={`tel:${profileData.phone}`}
                  className="text-xl text-black hover:opacity-70 transition-opacity"
                >
                  {profileData.phone}
                </a>
              </div>
            )}
          </div>
          <div className="pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-6">
              {profileData.linkedin && (
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 font-medium text-sm uppercase tracking-wide"
                >
                  LinkedIn
                </a>
              )}
              {profileData.github && (
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 font-medium text-sm uppercase tracking-wide"
                >
                  GitHub
                </a>
              )}
              {profileData.email && (
                <a
                  href={`mailto:${profileData.email}`}
                  className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition-all duration-300 font-medium text-sm uppercase tracking-wide"
                >
                  Email
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

