import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const contactInfo = [
  { icon: '📧', label: 'Email', value: 'mohankumar.mk26@gmail.com', href: 'mailto:mohankumar.mk26@gmail.com' },
  { icon: '📱', label: 'Phone', value: '+91 9940454858', href: 'tel:+91 9940454858' },
  { icon: '📍', label: 'Location', value: 'Bangalore, India', href: '#' },
]

const socials = [
  { name: 'GitHub', icon: '🐙', href: 'https://github.com/msn-digitalworld' },
  { name: 'LinkedIn', icon: '💼', href: 'https://www.linkedin.com/in/mohankr26/' },
  { name: 'Twitter', icon: '🐦', href: 'https://x.com/MohanKR26' },
  { name: 'Portfolio', icon: '🌐', href: 'https://msn-digitalworld.github.io/mohan-portfolio/' },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-4">
            Let's Modernize <span className="text-gradient">Together</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4" />
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12 text-lg">
            Ready to transform your legacy systems into modern, intuitive experiences? 
            Whether it's redesigning outdated interfaces, implementing AI-assisted design workflows, or creating scalable design systems—let's collaborate!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-orbitron text-white mb-8">
              Let's Connect
            </h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 glass rounded-xl p-4 hover:bg-white/10 transition-colors group"
                >
                  <span className="text-3xl">{info.icon}</span>
                  <div>
                    <p className="text-gray-500 text-sm">{info.label}</p>
                    <p className="text-white font-rajdhani group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-rajdhani text-gray-400 mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socials.map((social, i) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-12 h-12 glass rounded-full flex items-center justify-center text-xl hover:bg-white/10 transition-colors"
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 border border-primary/10">
              <div className="mb-6">
                <label className="block text-gray-300 mb-2 font-rajdhani font-semibold">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600 rounded-xl text-white font-rajdhani focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-gray-600"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-300 mb-2 font-rajdhani font-semibold">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600 rounded-xl text-white font-rajdhani focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-gray-600"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-300 mb-2 font-rajdhani font-semibold">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600 rounded-xl text-white font-rajdhani focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none placeholder:text-gray-600"
                  placeholder="Tell me about your project or how we can collaborate..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-primary to-accent rounded-xl font-rajdhani font-semibold text-dark-900 disabled:opacity-50 transition-opacity"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    >
                      ⏳
                    </motion.span>
                    Sending...
                  </span>
                ) : submitted ? (
                  <span className="flex items-center justify-center gap-2">
                    ✅ Message Sent!
                  </span>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

