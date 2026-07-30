'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import projectsData from '@/data/projects.json'
import ProjectCard, { Project } from '@/components/ProjectCard'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function ProjectsTeaser() {
  const allProjects: Project[] = projectsData.projects as Project[]

  // Prefer explicitly featured projects; fall back to the first 3 if none are flagged.
  const featured = allProjects.filter((p) => p.featured)
  const teaserProjects = (featured.length > 0 ? featured : allProjects).slice(0, 3)

  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
        >
          <div>
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-4 block">
              Selected Work
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              Building systems that <span className="gradient-text">scale</span>
            </h2>
            <p className="text-lg text-light-textMuted dark:text-dark-textMuted max-w-2xl leading-relaxed">
              Architected products with real users, real constraints, and measurable impact.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 shrink-0 text-sm font-medium text-blue-600 dark:text-blue-400 hover:gap-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 rounded-md px-1"
          >
            View all projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-5"
        >
          {teaserProjects.map((project, index) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Link href={`/projects#${project.id}`} className="block group">
                <ProjectCard project={project} index={index} variant="teaser" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}