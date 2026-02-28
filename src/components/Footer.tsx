'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-light-border dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">CA</span>
            </div>
            <div>
              <p className="font-semibold">Chris Aidoo</p>
              <p className="text-sm text-light-textMuted dark:text-dark-textMuted">
                © {currentYear} All rights reserved.
              </p>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="flex items-center gap-6 text-sm text-light-textMuted dark:text-dark-textMuted">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span>99.99% Uptime</span>
            </div>
            <div className="hidden sm:block">•</div>
            <div className="hidden sm:flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Privacy First</span>
            </div>
          </div>

          {/* Built With */}
          <div className="flex items-center gap-2 text-sm text-light-textMuted dark:text-dark-textMuted">
            <span>Built with</span>
            <motion.span
              animate={false}
              className="gradient-text font-medium"
            >
              Next.js
            </motion.span>
            <span>•</span>
            <span>Tailwind</span>
          </div>
        </div>

        {/* Performance Score */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-light-border dark:border-dark-border flex flex-wrap items-center justify-center gap-6"
        >
          <div className="flex items-center gap-2">
            <span className="text-sm text-light-textMuted dark:text-dark-textMuted">Performance:</span>
            <span className="px-2 py-1 rounded text-xs font-medium bg-green-500/20 text-green-600 dark:text-green-400">
              Lighthouse 100
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-light-textMuted dark:text-dark-textMuted">Accessibility:</span>
            <span className="px-2 py-1 rounded text-xs font-medium bg-green-500/20 text-green-600 dark:text-green-400">
              100
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-light-textMuted dark:text-dark-textMuted">SEO:</span>
            <span className="px-2 py-1 rounded text-xs font-medium bg-green-500/20 text-green-600 dark:text-green-400">
              100
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
