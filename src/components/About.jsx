import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import profilePic from '../portfolio_images/Yahoo/mohan.jpg'

const stats = [
  { number: '14+', label: 'Years Experience', icon: '🚀' },
  { number: '9', label: 'Years at Yahoo', icon: '⭐' },
  { number: '200M+', label: 'Users Reached', icon: '👥' },
  { number: '95%+', label: 'Avg Accessibility Score', icon: '♿' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-4">
          UI Developer with a strong UI/UX design mindset and 8+ years of hands-on front-end development experience, backed by 14+ years in the industry. Skilled in creating clean, intuitive, and accessible interfaces and translating designs into scalable React applications.Transforming legacy interfaces into modern experiences through design creativity and AI-augmented workflows
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Avatar Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl rotate-6 opacity-50" />
              <div className="absolute inset-0 glass rounded-2xl flex items-center justify-center overflow-hidden">
                <img 
                  src={profilePic} 
                  alt="Mohan Kumar - UI Developer" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-orbitron text-primary mb-4">
              Design Modernization Specialist with 9 Years at Yahoo
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm a UI Developer with 14+ years of experience, including 9 years at Yahoo where I designed interfaces 
              for 200M+ users. I specialize in redesigning legacy systems into modern, intuitive experiences. My unique 
              blend of design intuition, technical adaptability, and AI-augmented workflows allows me to transform outdated 
              interfaces while respecting architectural constraints and delivering incremental value.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              At Yahoo, I led major redesign initiatives for the homepage, email interface, and news applications. I thrive 
              within constraints and enjoy the challenge of rethinking user experiences for complex, legacy systems. Using 
              AI-assisted design tools like Figma AI, DALL·E, and Midjourney, I accelerate the design process through 
              rapid prototyping and visual exploration. My approach focuses on pragmatic, iterative modernization—delivering 
              value quickly while building toward long-term transformation goals.
            </p>
            <div className="glass rounded-xl p-4 mb-8 border border-primary/20">
              <p className="text-gray-300 leading-relaxed">
                <span className="text-primary font-semibold">🎯 Philosophy:</span> Bridge the gap between legacy systems 
                and modern design through AI-augmented workflows, creating transitional UIs that improve usability and aesthetics 
                while accommodating real-world technical constraints. Experience designing at scale for millions of users.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass rounded-xl p-5 text-center hover:bg-white/10 transition-all border border-transparent hover:border-primary/30"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-orbitron font-bold text-gradient mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 font-rajdhani">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

