// Save this file as: src/app/page.tsx

'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Manifesto from '@/components/Manifesto'
import ProjectsTeaser from '@/components/ProjectsTeaser'
import Timeline from '@/components/Timeline'
import Insights from '@/components/Insights'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import { useTheme } from '@/components/ThemeProvider'

/* ---------- Animation presets ---------- */
const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Home() {
  const { theme, toggleTheme } = useTheme()
  const shouldReduceMotion = useReducedMotion()
  const isDark = theme === 'dark'

  return (
    <motion.main
      className="min-h-screen relative"
      initial={shouldReduceMotion ? false : 'hidden'}
      animate="visible"
      variants={pageVariants}
    >
      {/* Particle Background */}
      <ParticleBackground
        isDark={isDark}
        shouldReduceMotion={shouldReduceMotion ?? false}
      />

      {/* Navigation */}
      <Header isDark={isDark} onToggleTheme={toggleTheme} />

      {/* Hero (usually handles its own animation) */}
      <Hero shouldReduceMotion={shouldReduceMotion ?? false} />

      {/* About */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-120px' }}
      >
        <About />
      </motion.section>

      {/* Manifesto */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-120px' }}
      >
        <Manifesto />
      </motion.section>

      {/* Projects (teaser — full list lives at /projects) */}
      <ProjectsTeaser />

      {/* Timeline */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-120px' }}
      >
        <Timeline shouldReduceMotion={shouldReduceMotion ?? false} />
      </motion.section>

      {/* Insights */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-120px' }}
      >
        <Insights />
      </motion.section>

      {/* Contact */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Contact />
      </motion.section>

      {/* Footer */}
      <Footer />
    </motion.main>
  )
}