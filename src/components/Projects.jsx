import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import yahooLogin from '../portfolio_images/Yahoo/login_page2.png';
import yahooHomepage from '../portfolio_images/Yahoo/yahoo_homepage2.png';
import jeevaDash from '../portfolio_images/Jeeva/jeeva_dashboard2.png';
import yahoonewsApp from '../portfolio_images/Yahoo/yahoo_news_app.png';
import yahooFin from '../portfolio_images/Yahoo/yahoo_fin2.png';
import yahooSports from '../portfolio_images/Yahoo/yahoo_sports.png';

const projects = [
  {
    id: 1,
    title: 'Yahoo Homepage Redesign',
    description: 'Led comprehensive redesign of Yahoo homepage serving 200M+ monthly users. Modernized legacy interface with responsive design, improved content hierarchy, and enhanced user engagement. Used Figma for prototyping and collaborated with engineering teams for incremental rollout. Improved user engagement by 35% and reduced bounce rate by 28%.',
    image: yahooHomepage,
    tags: ['Figma', 'Sketch', 'React', 'Responsive Design', 'Design System'],
    category: 'modernization',
    company: 'Yahoo',
    github: 'https://www.behance.net/gallery/186471083/Yahoo-Re-Design-Case-Study',
    live: 'https://www.yahoo.com',
    featured: true,
    beforeAfter: false,
    caseStudy: 'https://www.behance.net/gallery/186471083/Yahoo-Re-Design-Case-Study',
  },
  {
    id: 2,
    title: 'Yahoo Email Interface Modernization',
    description: 'Redesigned Yahoo Mail interface for 200M+ active users. Transformed outdated email client into modern, intuitive experience. Focused on improved readability, better mobile experience, and streamlined navigation. Used AI-assisted design workflows for rapid iteration. Achieved 98% accessibility compliance and improved user satisfaction scores.',
    image: yahooLogin,
    tags: ['Figma', 'Adobe XD', 'React', 'Accessibility (WCAG)', 'Mobile-First'],
    category: 'modernization',
    company: 'Yahoo',
    github: 'https://dribbble.com/search/yahoo-email-redesign',
    live: 'https://mail.yahoo.com',
    featured: true,
    beforeAfter: false,
    caseStudy: 'https://www.behance.net/search/projects?search=yahoo%20email%20redesign',
  },
  {
    id: 3,
    title: 'Jeeva.ai AI Lead Generation Dashboard',
    description: 'Designed comprehensive dashboard for AI-powered lead generation platform. Created intuitive interfaces for SDR agents to monitor lead scoring, AI agent orchestration, and campaign performance. Used Figma AI for rapid prototyping and DALL·E for visual exploration. Reduced agent onboarding time by 40% and improved lead conversion tracking.',
    image: jeevaDash,
    tags: ['Figma AI', 'DALL·E', 'React', 'Data Visualization', 'AI/ML UI'],
    category: 'modernization',
    company: 'Jeeva.ai',
    github: 'https://dribbble.com/search/ai-dashboard',
    live: 'https://app.jeeva.ai/autogpt',
    featured: true,
    beforeAfter: false,
    caseStudy: 'https://www.behance.net/search/projects?search=ai%20dashboard%20design',
  },
  {
    id: 4,
    title: 'Yahoo News Mobile App Redesign',
    description: 'Redesigned Yahoo News mobile application with focus on personalization and content consumption. Created modern card-based layouts, improved typography hierarchy, and implemented dark mode. Used responsive design principles and accessibility best practices. Increased daily active users by 25% and improved content engagement metrics.',
    image: yahoonewsApp,
    tags: ['Figma', 'Sketch', 'React Native', 'Mobile UI', 'Dark Mode'],
    category: 'modernization',
    company: 'Yahoo',
    github: 'https://dribbble.com/search/news-app-redesign',
    live: 'https://www.yahoo.com/news',
    beforeAfter: false,
    featured: true,
    caseStudy: 'https://dribbble.com/shots/15576177-Yahoo-App-Redesign',
  },
  {
    id: 5,
    title: 'Yahoo Finance Dashboard',
    description: 'Designed and enhanced Yahoo Finance dashboards to analyze market trends, user engagement, and content performance at scale. Built intuitive data visualizations for stock movements, financial news consumption, and portfolio interactions, along with real-time market insights. Improved data clarity and decision-making efficiency by 30% through simplified financial metrics and user-focused dashboard design.',
    image: yahooFin,
    tags: ['Adobe XD', 'Sketch', 'Data Visualization', 'Analytics UI', 'Marketing Tools'],
    category: 'modernization',
    company: 'Yahoo',
    github: 'https://www.xerago.com/customer-stories',
    live: 'https://finance.yahoo.com/',
    beforeAfter: false,
    featured: true,
    caseStudy: 'https://finance.yahoo.com/about/whatsnew/',
  },
  {
    id: 6,
    title: 'Yahoo Sports Content Localization',
    description: 'Designed interfaces for Yahoo Sports content localization and regional publishing workflows. Built multilingual dashboards, editorial workflow tools, and collaboration features to support global sports coverage. Delivered culturally aware, region-specific designs that improved publishing efficiency and reduced localization errors.',
    image: yahooSports,
    tags: ['Sketch', 'Adobe XD', 'Multilingual UI', 'Workflow Design', 'Collaboration Tools'],
    category: 'modernization',
    company: 'Yahoo',
    github: 'https://www.lionbridge.com/language-cloud',
    live: 'https://www.lionbridge.com',
    beforeAfter: true,
    caseStudy: 'https://www.lionbridge.com/case-study/multilingual-marketing-retail-case-study',
  },
]

function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`glass rounded-2xl overflow-hidden cursor-pointer group relative ${
        project.featured ? 'ring-2 ring-primary/50' : ''
      }`}
      onClick={() => onClick(project)}
    >
      {project.featured && (
        <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-primary to-accent rounded-full text-xs font-orbitron text-dark-900 font-bold">
          ⭐ Featured
        </div>
      )}
      {project.beforeAfter && (
        <div className="absolute top-4 left-4 z-10 px-3 py-1 glass border border-primary/50 rounded-full text-xs font-rajdhani text-primary font-semibold">
          Before & After
        </div>
      )}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="text-xl font-orbitron font-bold text-white group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            {project.company && (
              <p className="text-xs text-primary font-rajdhani mt-1">{project.company}</p>
            )}
          </div>
          <span className="ml-2 text-2xl" title="Modernization Project">🎨</span>
        </div>
        <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.1 }}
              className="px-3 py-1 text-xs font-rajdhani bg-dark-700/80 text-primary rounded-full border border-primary/20 hover:border-primary/50 transition-colors"
            >
              {tag}
            </motion.span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-3 py-1 text-xs font-rajdhani text-gray-500">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        className="glass rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            ✕
          </button>
        </div>
        <div className="p-8">
          <div className="mb-4">
            <h3 className="text-3xl font-orbitron font-bold text-gradient mb-2">
              {project.title}
            </h3>
            {project.company && (
              <p className="text-primary font-rajdhani font-semibold text-lg">{project.company}</p>
            )}
          </div>
          <p className="text-gray-400 leading-relaxed mb-6">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 text-sm font-rajdhani neon-border text-white rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="space-y-4">
            <div className="flex gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-gradient-to-r from-primary to-accent rounded-full text-center font-rajdhani text-dark-900 font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all"
              >
                View Design Portfolio
              </a>
              <a
                href={project.caseStudy || project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 glass rounded-full text-center font-rajdhani text-white hover:bg-white/10 transition-colors"
              >
                Case Study
              </a>
            </div>
            <p className="text-xs text-gray-500 text-center">
              * Links to design inspiration and portfolio examples showcasing similar modernization work
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const categories = ['all', 'modernization']
  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-4">
            Design <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-4">
            Before & After: Transforming legacy systems into modern, intuitive experiences using AI-augmented design workflows
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-center mb-8"
            >
              <p className="text-sm text-gray-500 max-w-2xl mx-auto">
                💡 <span className="text-primary">Note:</span> Projects showcase real work from Yahoo (9 years), Jeeva.ai, Xerago, and Lionbridge. 
                Links point to company websites, case studies, and design portfolios showcasing similar modernization work.
              </p>
            </motion.div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-rajdhani capitalize transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-primary to-accent text-dark-900 font-semibold'
                  : 'glass text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat === 'all' ? 'All Projects' : cat === 'modernization' ? 'Modernization' : cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

