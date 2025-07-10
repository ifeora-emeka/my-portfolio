import React from 'react'
import { FiBriefcase, FiMapPin, FiCalendar, FiHome } from 'react-icons/fi'
import { experiences } from '@/data/experience.data'
import PageBody from '@/components/PageBody'

export default function ExperiencePage() {
    return (
        <PageBody>
            <div className="max-w-4xl mx-auto py-8 px-4">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                        <FiBriefcase className="text-primary" size={32} />
                    </div>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-3">
                        Professional Experience
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Over 7 years of experience in full-stack development, leading teams, and delivering scalable solutions
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
                    
                    <div className="space-y-12">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className="relative">
                                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                                
                                <div className="ml-20">
                                    <div className="group hover:shadow-xl transition-all duration-500 rounded-2xl border border-border/50 bg-gradient-to-br from-card via-card to-card/50 overflow-hidden">
                                        <div className="p-8">
                                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                                        <span className="text-sm font-medium text-primary uppercase tracking-wider">
                                                            {exp.period}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                                        {exp.title}
                                                    </h3>
                                                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                                        <div className="flex items-center gap-2">
                                                            <FiHome size={16} />
                                                            <span className="font-medium text-foreground">{exp.company}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <FiMapPin size={16} />
                                                            <span>{exp.location}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="hidden lg:block">
                                                    <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                                                        <FiBriefcase className="text-primary" size={32} />
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-lg -m-4"></div>
                                                <p className="relative text-muted-foreground leading-relaxed text-base p-4">
                                                    {exp.description}
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <div className="h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
                        <FiCalendar className="text-primary" size={20} />
                        <span className="text-primary font-medium">
                            {new Date().getFullYear() - 2018}+ Years of Experience
                        </span>
                    </div>
                </div>
            </div>
        </PageBody>
    )
}
