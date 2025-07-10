'use client'
import React from 'react'
import { FiGrid, FiExternalLink, FiGithub } from 'react-icons/fi'
import { projects } from '@/data/projects.data'
import PageBody from '@/components/PageBody'
import Link from 'next/link'

export default function ProjectsPage() {
  return (
    <PageBody>
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <FiGrid className="text-primary" size={32} />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-3">
            Portfolio
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects showcasing expertise in full-stack development and modern web technologies
          </p>
        </div>
        
        <div className="grid gap-8">
          {projects.map((project, idx) => (
            <Link
              key={idx}
              href={`/portfolio/${project.slug}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card via-card to-card/50 hover:shadow-2xl transition-all duration-500">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
                  {project.images && project.images.length > 0 ? (
                    <img
                      src={project.images[0]}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                        <FiGrid className="text-primary" size={24} />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="bg-background/90 backdrop-blur-sm border border-border rounded-full px-3 py-1">
                      <span className="text-xs font-medium text-primary">{project.year}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="font-medium text-primary">{project.company}</span>
                        <span>•</span>
                        <span>{project.dateStarted.split('-')[0]} - {project.dateEnded.split('-')[0]}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20"
                      >
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-3.5 h-3.5"
                        />
                        {tech.name}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <div onClick={(e) => { e.preventDefault(); window.open(project.liveUrl, '_blank'); }} className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 hover:bg-primary/90 transition-colors cursor-pointer">
                        <FiExternalLink size={14} />
                        Live Demo
                      </div>
                      <div onClick={(e) => { e.preventDefault(); window.open(project.githubUrl, '_blank'); }} className="bg-muted text-foreground px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 hover:bg-muted/80 transition-colors cursor-pointer">
                        <FiGithub size={14} />
                        Code
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Team: {project.teamSize} members
                    </div>
                  </div>
                </div>
                
                <div className="h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageBody>
  )
}
