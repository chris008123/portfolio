'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Zap, CheckCircle2 } from 'lucide-react'

export interface Project {
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
  featured?: boolean
}

interface ProjectCardProps {
  project: Project
  index: number
  /** 'full' = accordion with all detail (used on /projects). 'teaser' = compact, no expand (used on homepage). */
  variant?: 'full' | 'teaser'
  onExpandChange?: (id: string | null) => void
  isOpenControlled?: boolean
}

export default function ProjectCard({
  project,
  index,
  variant = 'full',
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const caseId = `SYS.${String(index + 1).padStart(2, '0')}`
  const isTeaser = variant === 'teaser'

  return (
    <div
      id={project.id}
      className={`relative rounded-2xl border overflow-hidden transition-colors duration-300 scroll-mt-24
        ${isOpen
          ? 'bg-light-surface dark:bg-dark-surface border-blue-500/40 dark:border-blue-400/40'
          : 'bg-light-surface/70 dark:bg-dark-surface/60 border-light-border dark:border-dark-border hover:border-blue-500/30 dark:hover:border-blue-400/30'
        }
      `}
    >
      {/* Header */}
      <button
        type="button"
        onClick={() => !isTeaser && setIsOpen(!isOpen)}
        aria-expanded={isTeaser ? undefined : isOpen}
        aria-controls={isTeaser ? undefined : `project-panel-${project.id}`}
        disabled={isTeaser}
        className={`w-full text-left p-6 lg:p-8 relative z-10 flex items-start justify-between gap-6 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${isTeaser ? 'cursor-default' : ''}`}
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
        {!isTeaser && (
          <div className="hidden lg:flex items-center justify-center w-9 h-9 rounded-full border border-light-border dark:border-dark-border text-light-textMuted dark:text-dark-textMuted shrink-0 mt-1 transition-transform duration-300">
            <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown className="w-4 h-4" />
            </motion.span>
          </div>
        )}
      </button>

      {/* Quick Metrics */}
      {Object.values(project.metrics).some(Boolean) && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px mx-6 lg:mx-8 mb-6 rounded-xl overflow-hidden border border-light-border dark:border-dark-border">
          {Object.entries(project.metrics)
            .filter(([, value]) => Boolean(value))
            .slice(0, 4)
            .map(([key, value]) => (
              <div key={key} className="bg-light-bg dark:bg-dark-bg px-4 py-3">
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

      {/* Expanded Content — only ever rendered in 'full' variant */}
      {!isTeaser && (
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
                <div>
                  <h4 className="flex items-center gap-2 font-semibold mb-3 text-sm uppercase tracking-wide">
                    <span className="w-6 h-6 rounded-full bg-red-500/15 text-red-500 flex items-center justify-center text-xs font-mono">P</span>
                    Problem
                  </h4>
                  <p className="text-sm text-light-textMuted dark:text-dark-textMuted leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 font-semibold mb-3 text-sm uppercase tracking-wide">
                    <span className="w-6 h-6 rounded-full bg-green-500/15 text-green-500 flex items-center justify-center text-xs font-mono">S</span>
                    Solution
                  </h4>
                  <p className="text-sm text-light-textMuted dark:text-dark-textMuted leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                {project.architecture?.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Architecture</h4>
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

                {project.impact?.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Impact</h4>
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
      )}

      {/* Teaser tech preview — compact, no expand needed */}
      {isTeaser && (
        <div className="px-6 lg:px-8 pb-6 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-textMuted dark:text-dark-textMuted"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-3 py-1 rounded-full text-xs text-light-textMuted dark:text-dark-textMuted">
              +{project.tech.length - 4} more
            </span>
          )}
        </div>
      )}
    </div>
  )
}