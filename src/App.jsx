import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import DesignProcess from './components/DesignProcess'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import ParticleBackground from './components/ParticleBackground'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  if (loading) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-dark-900">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl mb-4"
        >
          🤖
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-orbitron text-gradient animate-pulse"
        >
          Loading Portfolio...
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ duration: 2, delay: 0.5 }}
          className="h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-4"
        />
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-dark-900">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <DesignProcess />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="py-8 text-center border-t border-dark-700/50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gray-500 font-rajdhani mb-2">
            © 2024 Mohan Kumar. Built with React, Three.js & AI-Augmented Design
          </p>
          <p className="text-gray-600 text-sm font-rajdhani">
            Transforming legacy systems into modern experiences
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

