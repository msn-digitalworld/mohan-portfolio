import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'

function AnimatedSphere() {
  const sphereRef = useRef()
  
  useFrame(({ clock }) => {
    sphereRef.current.rotation.x = clock.elapsedTime * 0.2
    sphereRef.current.rotation.y = clock.elapsedTime * 0.3
  })

  return (
    <Sphere ref={sphereRef} args={[1, 100, 100]} scale={2.5}>
      <MeshDistortMaterial
        color="#7b2dff"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0}
        metalness={0.8}
      />
    </Sphere>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* 3D Sphere Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[600px] opacity-60 hidden lg:block">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} color="#00f0ff" intensity={1} />
          <AnimatedSphere />
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-rajdhani text-xl mb-4"
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-orbitron font-bold mb-6"
          >
            <span className="text-white">Mohan </span>
            <span className="text-gradient">Kumar</span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-4xl font-rajdhani text-gray-400 mb-4"
          >
            <span className="text-gradient">UI Developer</span> & Design Modernization Specialist
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            <span className="px-4 py-1 glass rounded-full text-sm font-rajdhani text-primary border border-primary/30">
              ⭐ 9 Years at Yahoo
            </span>
            <span className="px-4 py-1 glass rounded-full text-sm font-rajdhani text-secondary border border-secondary/30">
              🤖 AI-Assisted Design
            </span>
            <span className="px-4 py-1 glass rounded-full text-sm font-rajdhani text-accent border border-accent/30">
              ⚡ Modern UX Flows
            </span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-gray-300 text-lg mb-10 leading-relaxed max-w-2xl"
          >
            With 14+ years of experience including 9 years at Yahoo designing for 200M+ users, I transform 
            outdated legacy interfaces into modern, intuitive experiences. Specializing in redesigning complex 
            systems using AI-augmented design workflows while respecting technical constraints and delivering 
            incremental modernization.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex gap-4 flex-wrap"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 240, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-full font-rajdhani font-semibold text-dark-900 hover:shadow-lg hover:shadow-primary/50 transition-all relative overflow-hidden group"
            >
              <span className="relative z-10">View Design Portfolio</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-secondary"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 neon-border rounded-full font-rajdhani font-semibold text-white hover:bg-white/10 hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              Let's Modernize Together
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1 h-2 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

