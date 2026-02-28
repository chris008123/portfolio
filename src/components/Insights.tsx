'use client'

import { motion } from 'framer-motion'
import { FileText, ExternalLink, Clock } from 'lucide-react'

const insights = [
  {
    id: 1,
    title: 'The Future of Platform Engineering',
    excerpt: 'Why self-service infrastructure is revolutionizing how teams build and deploy software at scale.',
    date: 'January 2024',
    readTime: '8 min read',
    type: 'Essay',
  },
  {
    id: 2,
    title: 'Building Systems That Last',
    excerpt: 'Lessons learned from maintaining a platform serving 500 million users. Trade-offs, decisions, and what I would do differently.',
    date: 'November 2023',
    readTime: '12 min read',
    type: 'Architecture',
  },
  {
    id: 3,
    title: 'The Art of API Design',
    excerpt: 'How we unified 50+ microservices under a single API gateway and what it taught us about developer experience.',
    date: 'August 2023',
    readTime: '10 min read',
    type: 'Technical',
  },
  {
    id: 4,
    title: 'Scaling to a Billion Requests Per Day',
    excerpt: 'A deep dive into the infrastructure decisions that enabled us to handle 10,000% traffic growth without downtime.',
    date: 'May 2023',
    readTime: '15 min read',
    type: 'Case Study',
  },
]

export default function Insights() {
  return (
    <section id="insights" className="py-24 lg:py-32 relative bg-light-surface/50 dark:bg-dark-surface/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-4 block">
            Thought Leadership
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Engineering{' '}
            <span className="gradient-text">perspectives</span>
          </h2>
          <p className="text-lg text-light-textMuted dark:text-dark-textMuted max-w-2xl">
            Thoughts on building scalable systems, leading engineering teams, 
            and the future of platform engineering.
          </p>
        </motion.div>

        {/* Insights Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {insights.map((insight, index) => (
            <motion.article
              key={insight.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-6 lg:p-8 rounded-2xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all duration-300 cursor-pointer"
            >
              {/* Meta */}
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  {insight.type}
                </span>
                <div className="flex items-center gap-1.5 text-light-textMuted dark:text-dark-textMuted text-sm">
                  <Clock className="w-4 h-4" />
                  {insight.readTime}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {insight.title}
              </h3>

              {/* Excerpt */}
              <p className="text-light-textMuted dark:text-dark-textMuted mb-4 line-clamp-2">
                {insight.excerpt}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-light-border dark:border-dark-border">
                <span className="text-sm text-light-textMuted dark:text-dark-textMuted">
                  {insight.date}
                </span>
                <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Read more</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 lg:p-12 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 border border-blue-500/20"
        >
          <div className="max-w-2xl mx-auto text-center">
            <FileText className="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Stay updated
            </h3>
            <p className="text-light-textMuted dark:text-dark-textMuted mb-6">
              I share weekly insights on engineering leadership, platform architecture, 
              and building systems that scale. No spam, just thoughtful engineering.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border focus:border-blue-500 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
