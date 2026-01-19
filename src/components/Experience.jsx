import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experiences = [
  {
    id: 1,
    role: 'Solutions Architect',
    company: 'Jeeva.ai',
    period: '2025 - 2026',
    description: 'Leading UI/UX design and modernization for AI-powered lead generation platform. Designing intuitive dashboards for SDR agents, AI agent orchestration interfaces, and real-time analytics panels. Using Figma AI and DALL·E for rapid prototyping and visual exploration. Creating scalable design systems for AI-driven workflows.',
    technologies: ['Figma', 'Figma AI', 'DALL·E', 'React', 'TypeScript', 'AI/ML Integration', 'Design Systems'],
    achievements: ['Designed AI agent dashboard reducing onboarding by 40%', 'Created responsive design system for lead generation tools', 'Improved user engagement by 55% through UX optimization', 'Led design for real-time analytics visualization'],
  },
  {
    id: 2,
    role: 'Senior UI/UX Designer & Interactive Developer',
    company: 'Yahoo',
    period: '2013 - 2025',
    description: '9+ years of experience redesigning and modernizing Yahoo\'s web and mobile interfaces. Led UI modernization initiatives for Yahoo homepage, news portal, email interface, and various product dashboards. Specialized in responsive design, accessibility, and creating intuitive user experiences for millions of users. Worked on legacy system transformations while maintaining brand consistency.',
    technologies: ['Figma', 'Sketch', 'Adobe XD', 'React', 'JavaScript', 'Responsive Design', 'Accessibility (WCAG)', 'Design Systems'],
    achievements: ['Redesigned Yahoo homepage improving engagement by 35%', 'Modernized email interface used by 200M+ users', 'Led mobile-first redesign initiatives', 'Achieved 98% accessibility compliance', 'Created reusable component libraries'],
  },
  {
    id: 3,
    role: 'UI/UX Designer',
    company: 'Realbridge',
    period: '2012 - 2013',
    description: 'Designed customer engagement analytics dashboards and marketing campaign interfaces. Created data visualization components for customer journey mapping, campaign performance tracking, and predictive analytics. Focused on transforming complex data into intuitive, actionable interfaces for marketing teams.',
    technologies: ['Adobe XD', 'Sketch', 'Photoshop', 'HTML/CSS', 'JavaScript', 'Data Visualization', 'Analytics UI'],
    achievements: ['Designed analytics dashboard increasing campaign efficiency by 30%', 'Created customer journey visualization tools', 'Improved data comprehension through intuitive UI design'],
  },
  {
    id: 4,
    role: 'Flash Programmer',
    company: 'Lionbridge',
    period: '2011 - 2012',
    description: 'Designed interfaces for localization and translation management platforms. Created UI for content workflow tools, multilingual dashboard interfaces, and collaboration platforms. Focused on creating culturally-aware designs that work across different languages and regions.',
    technologies: ['Sketch', 'Adobe Photoshop', 'Illustrator', 'HTML/CSS', 'Multilingual UI Design'],
    achievements: ['Designed localization workflow interfaces', 'Created multilingual UI templates', 'Improved content management efficiency'],
  },
  {
    id: 5,
    role: 'Flash Designer',
    company: 'Xerago',
    period: '2010 - 2011',
    description: 'Started career designing web interfaces and user experiences. Created wireframes, mockups, and prototypes for various client projects. Gained foundational experience in responsive design, user-centered design, and modern design tools.',
    technologies: ['Photoshop', 'Illustrator', 'HTML/CSS', 'JavaScript', 'Wireframing'],
    achievements: ['Completed 10+ design projects', 'Mastered design fundamentals', 'Built foundation in UX principles'],
  },
]

function TimelineItem({ experience, index, isInView }) {
  const isLeft = index % 2 === 0

  return (
    <div className={`flex items-center gap-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="flex-1 glass rounded-2xl p-6 hover:bg-white/10 transition-all border border-transparent hover:border-primary/30"
      >
        <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
          <div className="flex-1">
            <h3 className="text-xl font-orbitron font-bold text-white mb-1">
              {experience.role}
            </h3>
            <p className="text-primary font-rajdhani font-semibold">{experience.company}</p>
          </div>
          <span className="px-4 py-1 text-sm font-rajdhani neon-border rounded-full text-gray-300 whitespace-nowrap">
            {experience.period}
          </span>
        </div>
        <p className="text-gray-300 mb-4 leading-relaxed">
          {experience.description}
        </p>
        {experience.achievements && (
          <div className="mb-4 space-y-1">
            {experience.achievements.map((achievement, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                <span className="text-primary">✓</span>
                <span>{achievement}</span>
              </div>
            ))}
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.1 }}
              className="px-3 py-1 text-xs font-rajdhani bg-dark-700/80 text-primary rounded-full border border-primary/20 hover:border-primary/50 transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.3, delay: index * 0.2 + 0.2 }}
        className="relative z-10 flex-shrink-0"
      >
        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-primary to-accent animate-glow" />
      </motion.div>

      {/* Empty Space for Alignment */}
      <div className="flex-1 hidden lg:block" />
    </div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-4">
            14+ years of experience transforming legacy systems into modern, intuitive experiences. 9 years at Yahoo designing for millions of users.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden lg:block"
          />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <TimelineItem
                key={exp.id}
                experience={exp}
                index={i}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

