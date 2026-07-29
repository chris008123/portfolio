'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, Zap, CheckCircle2 } from 'lucide-react'
import projectsData from '@/data/projects.json'

/* ------------------ TypeScript types ------------------ */
interface Project {
  id: string
  title: string
  tagline: string
  description: string
  problem: string
  solution: string
  architecture: string[]
  impact: string[]
  metrics: Record<string, string | undefined>
  tech: string[]
  year: string
}

/* ---------- Animation Variants ---------- */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  const projects: Project[] = projectsData.projects as Project[]

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
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Building systems that <span className="gradient-text">scale</span>
          </h2>
          <p className="text-lg text-light-textMuted dark:text-dark-textMuted max-w-2xl leading-relaxed">
            Architected products with real users, real constraints, and measurable impact.
          </p>
        </motion.div>

        {/* Projects List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-5"
        >
          {projects.map((project, index) => {
            const isOpen = expandedProject === project.id
            const caseId = `SYS.${String(index + 1).padStart(2, '0')}`

            return (
              <motion.div key={project.id} variants={itemVariants} className="group">
                <div
                  className={`relative rounded-2xl border overflow-hidden transition-colors duration-300
                    ${isOpen
                      ? 'bg-light-surface dark:bg-dark-surface border-blue-500/40 dark:border-blue-400/40'
                      : 'bg-light-surface/70 dark:bg-dark-surface/60 border-light-border dark:border-dark-border hover:border-blue-500/30 dark:hover:border-blue-400/30'
                    }
                  `}
                >
                  {/* Header — real button for keyboard + screen reader support */}
                  <button
                    type="button"
                    onClick={() => setExpandedProject(isOpen ? null : project.id)}
                    aria-expanded={isOpen}
                    aria-controls={`project-panel-${project.id}`}
                    className="w-full text-left p-6 lg:p-8 relative z-10 flex items-start justify-between gap-6 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wider text-blue-600 dark:text-blue-400 bg-blue-500/10 dark:bg-blue-400/10 px-2 py-1 rounded-md">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
                          {caseId}
                        </span>
                        <span className="text-sm text-light-textMuted dark:text-dark-textMuted">
                          {project.year} &middot; {project.tagline}
                        </span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-2 tracking-tight transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {project.title}
                      </h3>
                      <p className="text-light-textMuted dark:text-dark-textMuted leading-relaxed max-w-3xl">
                        {project.description}
                      </p>
                    </div>
                    <div className="hidden lg:flex items-center justify-center w-9 h-9 rounded-full border border-light-border dark:border-dark-border text-light-textMuted dark:text-dark-textMuted shrink-0 mt-1 transition-transform duration-300 group-hover:border-blue-500/40 dark:group-hover:border-blue-400/40">
                      <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        <ChevronDown className="w-4 h-4" />
                      </motion.span>
                    </div>
                  </button>

                  {/* Quick Metrics — real stat grid, not floating pills */}
                  {Object.values(project.metrics).some(Boolean) && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-px mx-6 lg:mx-8 mb-6 rounded-xl overflow-hidden border border-light-border dark:border-dark-border">
                      {Object.entries(project.metrics)
                        .filter(([, value]) => Boolean(value))
                        .slice(0, 4)
                        .map(([key, value]) => (
                          <div
                            key={key}
                            className="bg-light-bg dark:bg-dark-bg px-4 py-3"
                          >
                            <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 mb-0.5">
                              <Zap className="w-3.5 h-3.5" />
                              <span className="text-lg font-bold leading-none">{value}</span>
                            </div>
                            <span className="text-xs text-light-textMuted dark:text-dark-textMuted capitalize">
                              {key}
                            </span>
                          </div>
                        ))}
                    </div>
                  )}

                  {/* Expanded Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`project-panel-${project.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden relative z-10"
                      >
                        <div className="px-6 lg:px-8 pb-8 border-t border-light-border dark:border-dark-border pt-6 grid lg:grid-cols-2 gap-8">
                          {/* Problem */}
                          <div>
                            <h4 className="flex items-center gap-2 font-semibold mb-3 text-sm uppercase tracking-wide">
                              <span className="w-6 h-6 rounded-full bg-red-500/15 text-red-500 flex items-center justify-center text-xs font-mono">
                                P
                              </span>
                              Problem
                            </h4>
                            <p className="text-sm text-light-textMuted dark:text-dark-textMuted leading-relaxed">
                              {project.problem}
                            </p>
                          </div>

                          {/* Solution */}
                          <div>
                            <h4 className="flex items-center gap-2 font-semibold mb-3 text-sm uppercase tracking-wide">
                              <span className="w-6 h-6 rounded-full bg-green-500/15 text-green-500 flex items-center justify-center text-xs font-mono">
                                S
                              </span>
                              Solution
                            </h4>
                            <p className="text-sm text-light-textMuted dark:text-dark-textMuted leading-relaxed">
                              {project.solution}
                            </p>
                          </div>

                          {/* Architecture — numbered, since layers are genuinely sequential */}
                          {project.architecture?.length > 0 && (
                            <div>
                              <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">
                                Architecture
                              </h4>
                              <ol className="space-y-2">
                                {project.architecture.map((step, i) => (
                                  <li key={i} className="flex items-start gap-3 text-sm text-light-textMuted dark:text-dark-textMuted">
                                    <span className="font-mono text-xs text-blue-600 dark:text-blue-400 mt-0.5 shrink-0">
                                      {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <span className="leading-relaxed">{step}</span>
                                  </li>
                                ))}
                              </ol>
                            </div>
                          )}

                          {/* Impact — check markers, distinct from the numbered architecture */}
                          {project.impact?.length > 0 && (
                            <div>
                              <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">
                                Impact
                              </h4>
                              <ul className="space-y-2">
                                {project.impact.map((point, i) => (
                                  <li key={i} className="flex items-start gap-2.5 text-sm text-light-textMuted dark:text-dark-textMuted">
                                    <CheckCircle2 className="w-4 h-4 text-blue-500 dark:text-blue-400 mt-0.5 shrink-0" />
                                    <span className="leading-relaxed">{point}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        {/* Tech Stack */}
                        <div className="pt-6 border-t border-light-border dark:border-dark-border flex flex-wrap gap-2 px-6 lg:px-8">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 rounded-full text-sm bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-textMuted dark:text-dark-textMuted transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/30 dark:hover:border-blue-400/30"
                            >
                              {tech}
                            </span>
                          ))}
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