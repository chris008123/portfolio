'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start"
        >
          {/* Left - Section Title */}
          <div>
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-4 block">
              About
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Engineering at the intersection of{' '}
              <span className="gradient-text">scale</span> and{' '}
              <span className="gradient-text">simplicity</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <p className="text-lg text-light-textMuted dark:text-dark-textMuted leading-relaxed">
              As co-founder, I've spent the last decade building infrastructure that powers 
              how billions of people interact with technology daily. Our mission has always 
              been simple: make the complex feel effortless.
            </p>
            <p className="text-lg text-light-textMuted dark:text-dark-textMuted leading-relaxed">
              I believe great engineering isn't about using the newest tools—it's about 
              understanding trade-offs deeply enough to make the right choices. From 
              distributed systems that span continents to APIs used by Fortune 500 companies, 
              every line of code serves a purpose.
            </p>
            <p className="text-lg text-light-textMuted dark:text-dark-textMuted leading-relaxed">
              My leadership philosophy centers on hiring exceptional people, giving them 
              autonomy to solve hard problems, and removing obstacles. The best systems 
              emerge from teams that understand the "why" behind what they're building.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-light-border dark:border-dark-border">
              <div>
                <p className="text-3xl lg:text-4xl font-bold text-light-text dark:text-dark-text">3+</p>
                <p className="text-sm text-light-textMuted dark:text-dark-textMuted">Years Building</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-bold text-light-text dark:text-dark-text">500M+</p>
                <p className="text-sm text-light-textMuted dark:text-dark-textMuted">Daily Users</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-bold text-light-text dark:text-dark-text">$2B+</p>
                <p className="text-sm text-light-textMuted dark:text-dark-textMuted">Company Value</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
