import React from 'react'
import { FiBriefcase } from 'react-icons/fi'
import { experiences } from '@/data/experience.data'

export default function ExperiencePage() {
  return (
    <section className="max-w-2xl mx-auto py-8">
      <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-2">
        <FiBriefcase className="text-primary" size={28} /> Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-semibold text-foreground">{exp.title}</span>
              <span className="text-sm text-muted-foreground">{exp.period}</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-primary font-medium">{exp.company}</span>
              <span className="text-muted-foreground text-xs">{exp.location}</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
