'use client'
import React, { useState } from "react"
import { notFound } from "next/navigation"
import { projects } from "@/data/projects.data"
import { FiExternalLink, FiGithub, FiPlayCircle, FiCalendar, FiUsers, FiAward, FiTarget, FiX, FiImage, FiVideo } from "react-icons/fi"
import PageBody from "@/components/PageBody"



export default function ProjectDetailsPage({project}: { project: typeof projects[0] | undefined }) {
    
    const [selectedMedia, setSelectedMedia] = useState(0)
    const [showVideo, setShowVideo] = useState(false)
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)

    if (!project) return notFound()

    const allMedia = [
        ...(project.videoUrl ? [{ type: 'video', url: project.videoUrl, poster: project.images[0] }] : []),
        ...project.images.map(img => ({ type: 'image', url: img }))
    ]

    const handlePlayVideo = () => {
        setIsVideoPlaying(true)
        setShowVideo(true)
    }

    return (
        <PageBody hasBackButton>
            <div className="max-w-4xl mx-auto py-8 px-4">
                <div className="mb-12">
                    <div className="relative w-full h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 group mb-6">
                        {allMedia[selectedMedia]?.type === 'video' ? (
                            <>
                                <video
                                    className="w-full h-full object-cover"
                                    src={allMedia[selectedMedia].url}
                                    // @ts-ignore
                                    poster={allMedia[selectedMedia]?.poster}
                                    controls={isVideoPlaying}
                                    preload="metadata"
                                />
                                {!isVideoPlaying && (
                                    <div className="absolute inset-0 bg-background/20 flex items-center justify-center">
                                        <button
                                            onClick={handlePlayVideo}
                                            className="bg-primary/90 hover:bg-primary text-primary-foreground rounded-full p-8 shadow-2xl transition-all duration-300 hover:scale-110"
                                        >
                                            <FiPlayCircle size={56} />
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <img
                                src={allMedia[selectedMedia]?.url}
                                alt={project.name}
                                className="w-full h-full object-cover"
                            />
                        )}

                        <div className="absolute top-4 right-4 flex gap-2">
                            <div className="bg-background/90 backdrop-blur-sm border border-border rounded-full px-3 py-2 flex items-center gap-2">
                                {allMedia[selectedMedia]?.type === 'video' ? (
                                    <FiVideo className="text-primary" size={16} />
                                ) : (
                                    <FiImage className="text-primary" size={16} />
                                )}
                                <span className="text-xs font-medium text-primary">
                                    {selectedMedia + 1} / {allMedia.length}
                                </span>
                            </div>
                        </div>
                    </div>

                    {allMedia.length > 1 && (
                        <div className="flex gap-3 overflow-x-auto pb-2">
                            {allMedia.map((media, idx) => (
                                <div key={idx} className="flex-shrink-0">
                                    <button
                                        onClick={() => {
                                            setSelectedMedia(idx)
                                            setIsVideoPlaying(false)
                                        }}
                                        className={`relative w-24 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${selectedMedia === idx
                                                ? 'border-primary shadow-lg scale-105'
                                                : 'border-border hover:border-primary/50'
                                            }`}
                                    >
                                        {media.type === 'video' ? (
                                            <>
                                                <img
                                                    // @ts-ignore
                                                    src={media.poster}
                                                    alt="Video thumbnail"
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-background/30 flex items-center justify-center">
                                                    <FiPlayCircle className="text-white" size={20} />
                                                </div>
                                            </>
                                        ) : (
                                            <img
                                                src={media.url}
                                                alt={`${project.name} preview ${idx + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        )}
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="space-y-12">
                    <div>
                        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                            {project.name}
                        </h1>
                        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-foreground text-lg">{project.company}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FiCalendar size={18} />
                                <span className="text-base">{project.dateStarted} - {project.dateEnded}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FiUsers size={18} />
                                <span className="text-base">Team of {project.teamSize}</span>
                            </div>
                        </div>
                        <p className="text-xl text-foreground leading-relaxed max-w-4xl">
                            {project.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener"
                            className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold flex items-center gap-3 hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
                        >
                            <FiExternalLink size={20} />
                            View Live Project
                        </a>
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener"
                            className="bg-muted text-foreground px-8 py-4 rounded-xl font-semibold flex items-center gap-3 hover:bg-muted/80 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
                        >
                            <FiGithub size={20} />
                            View Source Code
                        </a>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
                            <FiAward className="text-primary" size={32} />
                            Key Achievements
                        </h2>
                        <div className="grid gap-6">
                            {project.keyAchievements.map((achievement, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-6 rounded-xl bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors duration-300">
                                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
                                    <p className="text-foreground text-lg">{achievement}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
                            <FiTarget className="text-primary" size={32} />
                            Role & Impact
                        </h2>
                        <div className="p-8 rounded-xl bg-gradient-to-br from-card to-card/50 border border-border/50">
                            <p className="text-foreground text-xl leading-relaxed">
                                <span className="font-bold text-primary text-2xl">{project.role}</span> - {project.description}
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-primary">Technologies Used</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {project.technologies.map((tech, idx) => (
                                <div key={idx} className="flex flex-col items-center gap-3 p-6 rounded-xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group">
                                    <img
                                        src={tech.logo}
                                        alt={tech.name}
                                        className="w-12 h-12 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <span className="font-semibold text-foreground text-center">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center pt-8">
                        <div className="inline-flex items-center gap-2 px-8 py-4 bg-primary/10 rounded-full">
                            <FiCalendar className="text-primary" size={24} />
                            <span className="text-primary font-bold text-xl">
                                {project.year} Project
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </PageBody>
    )
}
