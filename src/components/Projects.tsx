'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, Server, Zap } from 'lucide-react'
import projectsData from '@/data/projects.json'

interface Project {
  id: string
  title: string
  tagline: string
  description: string
  problem: string
  solution: string
  architecture: string[]
  impact: string[]
  metrics: Record<string, string>
  tech: string[]
  year: string
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)
  const projects: Project[] = projectsData.projects

  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-4 block">
            Selected Work
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Building systems that <span className="gradient-text">scale</span>
          </h2>

          <p className="text-lg text-light-textMuted dark:text-dark-textMuted max-w-2xl">
            Architected products with real users, real constraints, and measurable impact.
          </p>
        </motion.div>

        {/* Projects List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {projects.map((project) => {
            const isOpen = expandedProject === project.id

            return (
              <motion.div key={project.id} variants={itemVariants} className="group">
                
                {/* Card */}
                <div
                  onClick={() =>
                    setExpandedProject(isOpen ? null : project.id)
                  }
                  className={`
                    relative cursor-pointer rounded-2xl border overflow-hidden
                    transition-all duration-300

                    ${isOpen
                      ? `
                        bg-light-surface dark:bg-dark-surface
                        border-blue-500/40 dark:border-blue-400/40
                        shadow-[0_0_30px_rgba(37,99,235,0.15)]
                        dark:shadow-[0_0_60px_rgba(59,130,246,0.25)]
                      `
                      : `
                        bg-light-surface/70 dark:bg-dark-surface/60
                        border-light-border dark:border-dark-border
                        hover:border-blue-500/30 dark:hover:border-blue-400/30
                        hover:shadow-[0_0_20px_rgba(37,99,235,0.12)]
                        dark:hover:shadow-[0_0_40px_rgba(59,130,246,0.18)]
                      `
                    }
                  `}
                >

                  {/* Ambient Glow Layer */}
                  <div
                    className="
                      pointer-events-none absolute inset-0 rounded-2xl
                      before:absolute before:inset-0 before:rounded-2xl
                      before:blur-2xl before:opacity-0
                      before:bg-blue-500/5 dark:before:bg-blue-500/10
                      group-hover:before:opacity-100
                      transition-opacity duration-500
                    "
                  />

                  {/* Header Content */}
                  <div className="p-6 lg:p-8 relative z-10">
                    <div className="flex items-start justify-between gap-4">

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                            {project.year}
                          </span>
                          <span className="text-sm text-light-textMuted dark:text-dark-textMuted">
                            {project.tagline}
                          </span>
                        </div>

                        <h3 className="text-2xl lg:text-3xl font-bold mb-2 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {project.title}
                        </h3>

                        <p className="text-light-textMuted dark:text-dark-textMuted">
                          {project.description}
                        </p>
                      </div>

                      <div className="hidden lg:flex items-center text-light-textMuted dark:text-dark-textMuted">
                        {isOpen ? <ChevronUp /> : <ChevronDown />}
                      </div>
                    </div>

                    {/* Quick Metrics */}
                    <div className="flex flex-wrap gap-3 mt-6">
                      {Object.entries(project.metrics)
                        .slice(0, 4)
                        .map(([key, value]) => (
                          <div
                            key={key}
                            className="
                              flex items-center gap-2 px-3 py-1.5 rounded-lg
                              bg-light-bg dark:bg-dark-bg
                              border border-light-border dark:border-dark-border
                              transition-all duration-300
                              hover:shadow-[0_0_10px_rgba(37,99,235,0.18)]
                              dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]
                            "
                          >
                            <Zap className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                            <span className="text-sm font-semibold">
                              {value}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        className="overflow-hidden relative z-10"
                      >
                        <div className="px-6 lg:px-8 pb-8 border-t border-light-border dark:border-dark-border">

                          <div className="pt-6 grid lg:grid-cols-2 gap-8">

                            {/* Problem */}
                            <div>
                              <h4 className="flex items-center gap-2 font-semibold mb-3">
                                <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center text-xs">
                                  P
                                </span>
                                Problem
                              </h4>
                              <p className="text-sm text-light-textMuted dark:text-dark-textMuted">
                                {project.problem}
                              </p>
                            </div>

                            {/* Solution */}
                            <div>
                              <h4 className="flex items-center gap-2 font-semibold mb-3">
                                <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-xs">
                                  S
                                </span>
                                Solution
                              </h4>
                              <p className="text-sm text-light-textMuted dark:text-dark-textMuted">
                                {project.solution}
                              </p>
                            </div>

                          </div>

                          {/* Tech Stack */}
                          <div className="mt-8 pt-6 border-t border-light-border dark:border-dark-border flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="
                                  px-3 py-1.5 rounded-full text-sm
                                  bg-light-bg dark:bg-dark-bg
                                  border border-light-border dark:border-dark-border
                                  text-light-textMuted dark:text-dark-textMuted
                                  transition-all duration-300
                                  hover:text-blue-600 dark:hover:text-blue-400
                                  hover:shadow-[0_0_8px_rgba(37,99,235,0.18)]
                                  dark:hover:shadow-[0_0_18px_rgba(59,130,246,0.35)]
                                "
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}