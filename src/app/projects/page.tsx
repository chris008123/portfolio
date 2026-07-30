// Save this file as: src/app/projects/page.tsx

'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, Filter, X } from 'lucide-react'
import projectsData from '@/data/projects.json'
import ProjectCard, { Project } from '@/components/ProjectCard'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import { useTheme } from '@/components/ThemeProvider'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function ProjectsPage() {
  const { theme, toggleTheme } = useTheme()
  const shouldReduceMotion = useReducedMotion()
  const isDark = theme === 'dark'

  const projects: Project[] = projectsData.projects as Project[]
  const [activeTech, setActiveTech] = useState<string | null>(null)

  const techFrequency = useMemo(() => {
    const counts = new Map<string, number>()
    projects.forEach((p) => p.tech.forEach((t) => counts.set(t, (counts.get(t) ?? 0) + 1)))
    return Array.from(counts.entries()).sort((a, b) => b[1] - a[1])
  }, [projects])

  const filteredProjects = useMemo(() => {
    if (!activeTech) return projects
    return projects.filter((p) => p.tech.includes(activeTech))
  }, [projects, activeTech])

  const groupedByYear = useMemo(() => {
    const groups = new Map<string, Project[]>()
    filteredProjects.forEach((p) => {
      const list = groups.get(p.year) ?? []
      list.push(p)
      groups.set(p.year, list)
    })
    return Array.from(groups.entries()).sort((a, b) => Number(b[0]) - Number(a[0]))
  }, [filteredProjects])

  const years = projects.map((p) => Number(p.year)).filter((n) => !Number.isNaN(n))
  const yearSpan = years.length > 0 ? `${Math.min(...years)}–${Math.max(...years)}` : ''

  return (
    <div className="min-h-screen relative">
      <ParticleBackground isDark={isDark} shouldReduceMotion={shouldReduceMotion ?? false} />
      <Header isDark={isDark} onToggleTheme={toggleTheme} />

      <main className="py-24 lg:py-32 min-h-screen relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-light-textMuted dark:text-dark-textMuted hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 rounded-md px-1"
          >
            <ArrowLeft className="w-4 h-4" />
            Back home
          </Link>

          {/* Header */}
          <div className="mb-10">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-4 block">
              All Work
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              The full <span className="gradient-text">build log</span>
            </h1>
            <p className="text-lg text-light-textMuted dark:text-dark-textMuted max-w-2xl leading-relaxed">
              Every system shipped, {yearSpan ? `${yearSpan}, ` : ''}with the problem it solved and the
              stack behind it.
            </p>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-3 gap-px rounded-xl overflow-hidden border border-light-border dark:border-dark-border mb-12 max-w-xl">
            <div className="bg-light-surface/70 dark:bg-dark-surface/60 px-5 py-4">
              <div className="text-2xl font-bold leading-none mb-1">{projects.length}</div>
              <span className="text-xs text-light-textMuted dark:text-dark-textMuted">Projects</span>
            </div>
            <div className="bg-light-surface/70 dark:bg-dark-surface/60 px-5 py-4">
              <div className="text-2xl font-bold leading-none mb-1">{yearSpan || '—'}</div>
              <span className="text-xs text-light-textMuted dark:text-dark-textMuted">Years active</span>
            </div>
            <div className="bg-light-surface/70 dark:bg-dark-surface/60 px-5 py-4">
              <div className="text-2xl font-bold leading-none mb-1">{techFrequency.length}</div>
              <span className="text-xs text-light-textMuted dark:text-dark-textMuted">Technologies</span>
            </div>
          </div>

          {/* Tech filter */}
          <div className="flex flex-wrap items-center gap-2 mb-14">
            <span className="inline-flex items-center gap-1.5 text-sm text-light-textMuted dark:text-dark-textMuted mr-1">
              <Filter className="w-3.5 h-3.5" />
              Filter:
            </span>
            {techFrequency.slice(0, 10).map(([tech, count]) => (
              <button
                key={tech}
                onClick={() => setActiveTech(activeTech === tech ? null : tech)}
                className={`px-3 py-1.5 rounded-full text-sm border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60
                  ${activeTech === tech
                    ? 'bg-blue-600 dark:bg-blue-500 border-blue-600 dark:border-blue-500 text-white'
                    : 'bg-light-bg dark:bg-dark-bg border-light-border dark:border-dark-border text-light-textMuted dark:text-dark-textMuted hover:border-blue-500/30 dark:hover:border-blue-400/30'
                  }`}
              >
                {tech} <span className="opacity-60">({count})</span>
              </button>
            ))}
            {activeTech && (
              <button
                onClick={() => setActiveTech(null)}
                className="inline-flex items-center gap-1 text-sm text-light-textMuted dark:text-dark-textMuted hover:text-red-500 transition-colors px-2 py-1.5"
              >
                <X className="w-3.5 h-3.5" />
                Clear
              </button>
            )}
          </div>

          {/* Grouped project list */}
          {groupedByYear.length === 0 ? (
            <p className="text-light-textMuted dark:text-dark-textMuted">
              No projects match that filter.
            </p>
          ) : (
            <div className="space-y-16">
              {groupedByYear.map(([year, yearProjects]) => (
                <div key={year}>
                  <div className="flex items-center gap-4 mb-6">
                    <h2 className="text-sm font-mono tracking-wider text-blue-600 dark:text-blue-400 shrink-0">
                      {year}
                    </h2>
                    <div className="h-px flex-1 bg-light-border dark:bg-dark-border" />
                  </div>

                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    className="space-y-5"
                  >
                    {yearProjects.map((project) => {
                      const globalIndex = projects.findIndex((p) => p.id === project.id)
                      return (
                        <motion.div key={project.id} variants={itemVariants}>
                          <ProjectCard project={project} index={globalIndex} variant="full" />
                        </motion.div>
                      )
                    })}
                  </motion.div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}