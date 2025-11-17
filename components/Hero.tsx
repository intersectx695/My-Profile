'use client'

import Image from 'next/image'
import { profileData } from '@/data/profile'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-white pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Clear landscape image - no blur */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full aspect-[3/4] md:aspect-[4/5] lg:aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={profileData.image}
                alt={profileData.name}
                fill
                className="object-cover"
                style={{ objectPosition: 'center 20%' }}
                priority
                quality={95}
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            {profileData.location && (
              <p className="text-sm uppercase tracking-wider text-gray-500 mb-6">
                {profileData.location}
              </p>
            )}
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight mb-6 text-black leading-tight">
              {profileData.name}
            </h1>
            
            <p className="text-2xl md:text-3xl font-light text-gray-700 mb-8">
              {profileData.title}
            </p>
            
            <div className="mb-8">
              <p className="text-lg leading-relaxed text-gray-600 mb-6">
                {profileData.bio}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
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
                  Contact
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

