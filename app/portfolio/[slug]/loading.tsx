import React from 'react'
import PageBody from '@/components/PageBody'

export default function ProjectDetailsLoader() {
    return (
        <PageBody hasBackButton>
            <div className="max-w-4xl mx-auto py-8 px-4">
                <div className="mb-12">
                    <div className="relative w-full h-96 rounded-2xl overflow-hidden bg-muted/30 animate-pulse mb-6" />
                    
                    <div className="flex gap-3 overflow-x-auto pb-2">
                        {[...Array(5)].map((_, idx) => (
                            <div key={idx} className="flex-shrink-0">
                                <div className="w-24 h-16 bg-muted/30 rounded-lg animate-pulse" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-12">
                    <div>
                        <div className="h-16 bg-muted/30 rounded-lg mb-4 animate-pulse" />
                        <div className="flex flex-wrap gap-6 mb-8">
                            <div className="h-6 w-32 bg-muted/30 rounded animate-pulse" />
                            <div className="h-6 w-40 bg-muted/30 rounded animate-pulse" />
                            <div className="h-6 w-28 bg-muted/30 rounded animate-pulse" />
                        </div>
                        <div className="space-y-3">
                            <div className="h-6 bg-muted/30 rounded animate-pulse" />
                            <div className="h-6 bg-muted/30 rounded w-5/6 animate-pulse" />
                            <div className="h-6 bg-muted/30 rounded w-4/6 animate-pulse" />
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <div className="h-14 w-48 bg-muted/30 rounded-xl animate-pulse" />
                        <div className="h-14 w-44 bg-muted/20 rounded-xl animate-pulse" />
                    </div>

                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-muted/30 rounded animate-pulse" />
                            <div className="h-8 w-48 bg-muted/30 rounded animate-pulse" />
                        </div>
                        <div className="grid gap-6">
                            {[...Array(3)].map((_, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-6 rounded-xl bg-muted/20 border border-muted/30">
                                    <div className="w-3 h-3 bg-muted/30 rounded-full mt-2 flex-shrink-0 animate-pulse" />
                                    <div className="flex-1 space-y-2">
                                        <div className="h-5 bg-muted/30 rounded animate-pulse" />
                                        <div className="h-5 bg-muted/30 rounded w-3/4 animate-pulse" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-muted/30 rounded animate-pulse" />
                            <div className="h-8 w-40 bg-muted/30 rounded animate-pulse" />
                        </div>
                        <div className="p-8 rounded-xl bg-muted/20 border border-muted/30">
                            <div className="space-y-3">
                                <div className="h-6 bg-muted/30 rounded animate-pulse" />
                                <div className="h-6 bg-muted/30 rounded w-4/5 animate-pulse" />
                                <div className="h-6 bg-muted/30 rounded w-3/5 animate-pulse" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="h-8 w-56 bg-muted/30 rounded mb-6 animate-pulse" />
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {[...Array(10)].map((_, idx) => (
                                <div key={idx} className="flex flex-col items-center gap-3 p-6 rounded-xl bg-muted/20 border border-muted/30">
                                    <div className="w-12 h-12 bg-muted/30 rounded flex-shrink-0 animate-pulse" />
                                    <div className="h-4 bg-muted/30 rounded w-16 animate-pulse" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center pt-8">
                        <div className="inline-flex items-center gap-2 px-8 py-4 bg-muted/20 rounded-full">
                            <div className="w-6 h-6 bg-muted/30 rounded animate-pulse" />
                            <div className="h-5 w-32 bg-muted/30 rounded animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>
        </PageBody>
    )
}
