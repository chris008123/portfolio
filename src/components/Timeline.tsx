'use client'

import { motion } from 'framer-motion'

interface TimelineProps {
  shouldReduceMotion: boolean
}

const milestones = [
  {
    year: '2026',
    title: 'Series B Funding',
    description: '$5k raised at $10 valuation',
    impact: 'Global expansion to 3+ countries',
  },
  {
    year: '2026',
    title: '500 Daily Users',
    description: 'Platform reaches 500 users',
    impact: 'Processing 450+ API requests daily',
  },
  {
    year: '2026',
    title: 'Platform 1.0 Launch',
    description: 'Complete infrastructure overhaul',
    impact: '90% uptime achieved',
  },
  {
    year: '2025',
    title: 'Developer Portal',
    description: 'Internal platform for 100+ engineers',
    impact: '40% improvement in developer velocity',
  },
  {
    year: '2025',
    title: 'Series A Funding',
    description: '$1k raised at $2k valuation',
    impact: 'Team grew from 5 to 20 people',
  },
  {
    year: '2025',
    title: 'Company Founded',
    description: 'Co-founded with mission infrastructure',
    impact: 'First enterprise customer signed',
  },
]

export default function Timeline({ shouldReduceMotion }: TimelineProps) {
  return (
    <section
      id="timeline"
      className="relative py-24 lg:py-32 overflow-hidden"
    >

      {/* 🔥 Animated Tech Glow Background */}
      <motion.div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.2 }}
      >
        <div className="
          w-[900px] h-[900px]
          bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20
          dark:from-blue-500/10 dark:via-purple-500/10 dark:to-cyan-500/10
          blur-[160px]
          rounded-full
          animate-pulse
        " />
      </motion.div>

      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-4 block">
            Impact Timeline
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            From idea to{' '}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              global scale
            </span>
          </h2>

          <p className="text-lg text-light-textMuted dark:text-dark-textMuted max-w-2xl">
            Milestones that mark our journey from a small team with a big vision
            to infrastructure that powers the world.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* ⚡ Animated Vertical Energy Line */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px]
            bg-gradient-to-b from-transparent via-blue-500 to-transparent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ originY: 0 }}
          />

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: shouldReduceMotion ? 0 : index * 0.15,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >

                {/* 🔵 Glowing Node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20">
                  <div className="relative w-5 h-5 rounded-full bg-blue-500">
                    <div className="absolute inset-0 rounded-full bg-blue-500 blur-md opacity-70 animate-ping" />
                  </div>
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="
                      p-6 rounded-2xl
                      bg-light-surface/80 dark:bg-dark-surface/80
                      backdrop-blur-xl
                      border border-light-border dark:border-dark-border
                      hover:border-blue-500/40 dark:hover:border-blue-400/40
                      shadow-lg hover:shadow-blue-500/10
                      transition-all duration-300
                    "
                  >
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                      {milestone.year}
                    </span>

                    <h3 className="text-xl font-bold mt-1 mb-2">
                      {milestone.title}
                    </h3>

                    <p className="text-light-textMuted dark:text-dark-textMuted text-sm mb-3">
                      {milestone.description}
                    </p>

                    <div className="
                      inline-flex items-center gap-2 px-3 py-1 rounded-full
                      bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm
                      border border-blue-500/20
                    ">
                      {milestone.impact}
                    </div>
                  </motion.div>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global Impact Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            mt-24 p-10 rounded-3xl
            bg-gradient-to-br from-blue-500/15 via-purple-500/10 to-cyan-500/15
            dark:from-blue-500/10 dark:via-purple-500/5 dark:to-cyan-500/10
            backdrop-blur-xl
            border border-blue-500/20
            shadow-xl
          "
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">Global Impact</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                ['3+', 'Countries'],
                ['400+', 'Daily Users'],
                ['600B+', 'API Requests'],
                ['99.99%', 'Uptime']
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.08 }}
                  className="transition-transform"
                >
                  <p className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                    {item[0]}
                  </p>
                  <p className="text-light-textMuted dark:text-dark-textMuted">
                    {item[1]}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}