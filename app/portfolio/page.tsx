import React from 'react'
import { FiGrid } from 'react-icons/fi'
import { projects } from '@/data/projects.data'

export default function ProjectsPage() {
  return (
    <section className="max-w-2xl mx-auto py-8">
      <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-2">
        <FiGrid className="text-primary" size={28} /> Portfolio
      </h2>
      <div className="grid gap-6">
        {projects.map((project, idx) => (
          <div key={idx} className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-semibold text-foreground">{project.name}</span>
              <span className="text-sm text-muted-foreground">{project.year}</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-primary font-medium">{project.company}</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
