// Save this file as: app/projects/page.tsx

import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import projectsData from '@/data/projects.json'
import ProjectCard, { Project } from '@/components/ProjectCard'

export const metadata: Metadata = {
  title: 'Projects | Chris Aidoo',
  description: 'A full look at the systems and products Chris Aidoo has built and shipped.',
}

export default function ProjectsPage() {
  const projects: Project[] = projectsData.projects as Project[]

  return (
    <main className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-light-textMuted dark:text-dark-textMuted hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 rounded-md px-1"
        >
          <ArrowLeft className="w-4 h-4" />
          Back home
        </Link>

        <div className="mb-16">
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-4 block">
            All Work
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Every system, <span className="gradient-text">end to end</span>
          </h1>
          <p className="text-lg text-light-textMuted dark:text-dark-textMuted max-w-2xl leading-relaxed">
            {projects.length} projects — problem, architecture, and measured impact for each.
          </p>
        </div>

        <div className="space-y-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} variant="full" />
          ))}
        </div>
      </div>
    </main>
  )
}