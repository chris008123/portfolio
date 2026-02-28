'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Linkedin, Github, Twitter } from 'lucide-react'

interface HeroProps {
  shouldReduceMotion: boolean
}

export default function Hero({ shouldReduceMotion }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <motion.div
          variants={shouldReduceMotion ? {} : containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border text-sm text-light-textMuted dark:text-dark-textMuted">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Building the future
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Infrastructure for{' '}
              <span className="gradient-text">tomorrow</span>,{' '}
              <br />
              built today.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl lg:text-2xl text-light-textMuted dark:text-dark-textMuted mb-8 max-w-xl"
            >
              Co-founder building systems that scale to billions. 
              Turning complex engineering challenges into elegant, 
              resilient infrastructure.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
              >
                View Work
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-light-border dark:border-dark-border hover:bg-light-surface dark:hover:bg-dark-surface transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-light-surface dark:hover:bg-dark-surface transition-colors text-light-textMuted dark:text-dark-textMuted hover:text-light-text dark:hover:text-dark-text"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Portrait */}
          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Portrait Frame */}
              <div className="relative w-72 h-72 lg:w-96 lg:h-96 mx-auto">
                {/* Gradient Background */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10" />
                
                {/* Portrait Placeholder */}
                <div className="absolute inset-2 rounded-xl overflow-hidden bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border">
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                    <div className="text-center">
                      <img
                        src="/me.jpeg"
                        alt="Co-founder Portrait"
                        className="absolute inset-0 w-full h-full object-cover object-[50%_20%]"
                       />
                      <p className="text-light-textMuted dark:text-dark-textMuted text-sm">
                        Add your portrait here
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-blue-500/10 blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-purple-500/10 blur-2xl" />
              </div>

              {/* Floating Stats */}
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [0, -10, 0] }}
                transition={shouldReduceMotion ? {} : { duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 lg:left-[-60px] p-4 rounded-xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border shadow-lg"
              >
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">500M+</p>
                <p className="text-sm text-light-textMuted dark:text-dark-textMuted">Users Served</p>
              </motion.div>

              <motion.div
                animate={shouldReduceMotion ? {} : { y: [0, 10, 0] }}
                transition={shouldReduceMotion ? {} : { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-6 -right-6 lg:right-[-60px] p-4 rounded-xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border shadow-lg"
              >
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">99.99%</p>
                <p className="text-sm text-light-textMuted dark:text-dark-textMuted">Uptime Achieved</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
            transition={shouldReduceMotion ? {} : { duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-light-border dark:border-dark-border flex items-start justify-center p-2"
          >
            <motion.div
              animate={shouldReduceMotion ? {} : { opacity: [1, 0] }}
              transition={shouldReduceMotion ? {} : { duration: 1, repeat: Infinity }}
              className="w-1 h-2 rounded-full bg-light-textMuted dark:bg-dark-textMuted"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
