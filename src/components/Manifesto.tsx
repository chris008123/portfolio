'use client'

import { motion } from 'framer-motion'

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="py-24 lg:py-32 relative overflow-hidden 
      bg-light-surface/50 dark:bg-dark-surface/50"
    >
      {/* ✨ Animated Glow Background */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.2 }}
        className="
          pointer-events-none
          absolute inset-0
          flex items-center justify-center
        "
      >
        <div
          className="
            w-[600px] h-[600px]
            bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20
            dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10
            blur-[120px]
            rounded-full
            animate-pulse
          "
        />
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-6 block">
            Founder's Manifesto
          </span>
          
          <blockquote className="text-3xl lg:text-5xl font-bold leading-tight mb-8">
            "The best technology is invisible. It works so well that people 
            never have to think about it—they just{' '}
            <span className="gradient-text">get things done</span>."
          </blockquote>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8" />
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            
            {/* Your cards unchanged */}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="p-6 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border"
            >
              <h3 className="font-semibold text-lg mb-3">Long-term Thinking</h3>
              <p className="text-light-textMuted dark:text-dark-textMuted text-sm">
                We build for the next decade, not the next quarter. Sustainable 
                engineering outpaces short-term optimization.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="p-6 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border"
            >
              <h3 className="font-semibold text-lg mb-3">Radical Simplicity</h3>
              <p className="text-light-textMuted dark:text-dark-textMuted text-sm">
                Complexity is the enemy of reliability. Every feature must earn 
                its place in the codebase.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="p-6 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border"
            >
              <h3 className="font-semibold text-lg mb-3">User-Centric Design</h3>
              <p className="text-light-textMuted dark:text-dark-textMuted text-sm">
                Technology exists to serve people, not the other way around. 
                Empathy drives every architectural decision.
              </p>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}