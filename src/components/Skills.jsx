import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, Float, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

const skills = [
  // Design Tools
  { name: 'Figma', level: 95, color: '#F24E1E', category: 'design' },
  { name: 'Figma AI', level: 90, color: '#FF7262', category: 'design' },
  { name: 'Adobe XD', level: 92, color: '#FF61F6', category: 'design' },
  { name: 'Sketch', level: 88, color: '#FDB900', category: 'design' },
  { name: 'Adobe Photoshop', level: 85, color: '#31A8FF', category: 'design' },
  { name: 'Adobe Illustrator', level: 85, color: '#FF9A00', category: 'design' },
  // AI Design Tools
  { name: 'DALL·E', level: 90, color: '#10A37F', category: 'ai-design' },
  { name: 'Midjourney', level: 88, color: '#5E17EB', category: 'ai-design' },
  { name: 'ChatGPT (Design)', level: 92, color: '#00A67E', category: 'ai-design' },
  { name: 'Figma AI Plugins', level: 90, color: '#FF7262', category: 'ai-design' },
  // Frontend Development
  { name: 'React', level: 90, color: '#61DAFB', category: 'frontend' },
  { name: 'TypeScript', level: 88, color: '#3178C6', category: 'frontend' },
  { name: 'Next.js', level: 85, color: '#000000', category: 'frontend' },
  { name: 'Tailwind CSS', level: 92, color: '#06B6D4', category: 'frontend' },
  { name: 'Angular', level: 80, color: '#DD0031', category: 'frontend' },
  // Design Systems & Principles
  { name: 'Design Systems', level: 93, color: '#7B2DFF', category: 'design-principles' },
  { name: 'Accessibility (WCAG)', level: 90, color: '#0057B7', category: 'design-principles' },
  { name: 'Responsive Design', level: 95, color: '#00D9FF', category: 'design-principles' },
  { name: 'Usability Testing', level: 88, color: '#FF6B6B', category: 'design-principles' },
]

function SkillSphere({ skills }) {
  const groupRef = useRef()
  
  useFrame(({ clock }) => {
    groupRef.current.rotation.y = clock.elapsedTime * 0.1
  })

  const radius = 3
  const positions = skills.map((_, i) => {
    const phi = Math.acos(-1 + (2 * i) / skills.length)
    const theta = Math.sqrt(skills.length * Math.PI) * phi
    return [
      radius * Math.cos(theta) * Math.sin(phi),
      radius * Math.sin(theta) * Math.sin(phi),
      radius * Math.cos(phi),
    ]
  })

  return (
    <group ref={groupRef}>
      {skills.map((skill, i) => (
        <Float key={skill.name} speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh position={positions[i]}>
            <sphereGeometry args={[0.3, 32, 32]} />
            <meshStandardMaterial color={skill.color} emissive={skill.color} emissiveIntensity={0.3} />
          </mesh>
          <Text
            position={[positions[i][0], positions[i][1] - 0.5, positions[i][2]]}
            fontSize={0.2}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {skill.name}
          </Text>
        </Float>
      ))}
    </group>
  )
}

function SkillBar({ skill, delay, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="mb-6 glass rounded-xl p-4 hover:bg-white/10 transition-all group"
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-3">
          <div 
            className="w-3 h-3 rounded-full animate-pulse"
            style={{ backgroundColor: skill.color, boxShadow: `0 0 10px ${skill.color}` }}
          />
          <span className="font-rajdhani text-gray-200 font-semibold group-hover:text-white transition-colors">
            {skill.name}
          </span>
        </div>
        <span className="text-primary font-orbitron text-sm font-bold">{skill.level}%</span>
      </div>
      <div className="h-2.5 bg-dark-700 rounded-full overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.2, delay: delay + 0.3, ease: 'easeOut' }}
          className="h-full rounded-full relative overflow-hidden"
          style={{ 
            background: `linear-gradient(90deg, ${skill.color}, #7b2dff, ${skill.color})`,
            backgroundSize: '200% 100%',
          }}
        >
          <motion.div
            animate={{ backgroundPosition: ['0%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0"
            style={{
              background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)`,
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = ['all', 'design', 'ai-design', 'frontend', 'design-principles']
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(s => s.category === activeCategory)

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-4">
            Design & <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-4">
            Expert in modern design tools, AI-assisted workflows, and frontend development for legacy system modernization
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-rajdhani capitalize transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-primary to-accent text-dark-900'
                  : 'glass text-gray-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Skills Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-[400px] hidden lg:block"
          >
            <Canvas camera={{ position: [0, 0, 8] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <SkillSphere skills={filteredSkills} />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
          </motion.div>

          {/* Skill Bars */}
          <div>
            {filteredSkills.map((skill, i) => (
              <SkillBar
                key={skill.name}
                skill={skill}
                delay={i * 0.1}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

