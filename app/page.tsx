import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Achievements from '@/components/Achievements'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Certifications from '@/components/Certifications'
import DataGenie from '@/components/DataGenie'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Achievements />
      <Projects />
      <Skills />
      <Certifications />
      <DataGenie />
      <Contact />
      <Footer />
    </main>
  )
}

