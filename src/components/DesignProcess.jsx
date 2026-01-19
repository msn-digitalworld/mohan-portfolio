import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const processSteps = [
  {
    id: 1,
    title: 'Discovery & Analysis',
    description: 'Analyze legacy systems, identify pain points, and understand technical constraints. Use AI tools to generate initial insights and user journey maps.',
    tools: ['ChatGPT', 'Figma AI', 'User Research'],
    icon: '🔍',
  },
  {
    id: 2,
    title: 'AI-Assisted Concepting',
    description: 'Leverage DALL·E and Midjourney for rapid visual exploration. Use Figma AI plugins for component generation and layout suggestions.',
    tools: ['DALL·E', 'Midjourney', 'Figma AI Plugins'],
    icon: '🤖',
  },
  {
    id: 3,
    title: 'Rapid Prototyping',
    description: 'Create wireframes and high-fidelity prototypes in Figma. Iterate quickly using AI-generated variations and design system components.',
    tools: ['Figma', 'Adobe XD', 'Sketch'],
    icon: '⚡',
  },
  {
    id: 4,
    title: 'Design System Development',
    description: 'Build scalable, reusable component libraries. Ensure consistency across all screens while accommodating legacy system constraints.',
    tools: ['Figma', 'Design Tokens', 'Component Libraries'],
    icon: '🎨',
  },
  {
    id: 5,
    title: 'Accessibility & Testing',
    description: 'Ensure WCAG 2.1 AA compliance. Conduct usability testing and iterate based on user feedback and accessibility audits.',
    tools: ['Accessibility Tools', 'Usability Testing', 'WCAG Guidelines'],
    icon: '♿',
  },
  {
    id: 6,
    title: 'Incremental Implementation',
    description: 'Work with engineering teams to implement transitional UX flows. Support phased rollout and ensure visual consistency within existing frameworks.',
    tools: ['React', 'TypeScript', 'Design Handoff'],
    icon: '🚀',
  },
]

export default function DesignProcess() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="process" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-4">
            Design <span className="text-gradient">Process</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-4">
            AI-augmented workflows for rapid iteration and modern design delivery
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-2xl p-6 hover:bg-white/10 transition-all border border-transparent hover:border-primary/30 relative group"
            >
              <div className="absolute top-4 right-4 text-4xl opacity-20 group-hover:opacity-40 transition-opacity">
                {step.icon}
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-orbitron font-bold text-dark-900">
                  {step.id}
                </div>
                <h3 className="text-xl font-orbitron font-bold text-white group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                {step.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {step.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 text-xs font-rajdhani bg-dark-700/80 text-primary rounded-full border border-primary/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Tools Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 glass rounded-2xl p-8 border border-primary/20"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-orbitron font-bold text-white mb-2">
              AI-Assisted Design Acceleration
            </h3>
            <p className="text-gray-400 max-w-3xl mx-auto">
              I leverage cutting-edge AI tools to accelerate the design process, enabling rapid iteration and exploration 
              that would traditionally take weeks to accomplish in days. This approach allows for more time spent on refinement 
              and user testing rather than initial concept generation.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {['Figma AI', 'DALL·E', 'Midjourney', 'ChatGPT'].map((tool, i) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                className="text-center glass rounded-xl p-4 hover:bg-white/10 transition-all"
              >
                <div className="text-3xl mb-2">🤖</div>
                <div className="font-rajdhani font-semibold text-white">{tool}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
