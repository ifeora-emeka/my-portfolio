import React from 'react'
import PageBody from '@/components/PageBody'

export default function BlogDetailsLoader() {
    return (
        <PageBody hasBackButton>
            <div className="max-w-4xl mx-auto py-8 px-4">
                <div className="mb-12">
                    <div className="relative w-full h-96 rounded-2xl overflow-hidden bg-muted/30 animate-pulse mb-8" />
                    
                    <div className="space-y-6">
                        <div>
                            <div className="h-16 bg-muted/30 rounded-lg mb-6 animate-pulse" />
                            <div className="h-8 bg-muted/30 rounded w-3/4 mb-8 animate-pulse" />
                        </div>

                        <div className="flex flex-wrap gap-3 mb-8">
                            {[...Array(4)].map((_, idx) => (
                                <div key={idx} className="h-10 w-24 bg-muted/30 rounded-full animate-pulse" />
                            ))}
                        </div>

                        <div className="flex items-center gap-6 border-t border-muted/30 pt-6">
                            <div className="h-6 w-40 bg-muted/30 rounded animate-pulse" />
                            <div className="h-6 w-28 bg-muted/30 rounded animate-pulse" />
                        </div>
                    </div>
                </div>

                <div className="prose prose-lg max-w-none">
                    <div className="bg-muted/20 border border-muted/30 rounded-2xl p-8">
                        <div className="space-y-6">
                            <div className="h-8 bg-muted/30 rounded mb-6 animate-pulse" />
                            
                            {[...Array(8)].map((_, idx) => (
                                <div key={idx} className="space-y-3">
                                    <div className="h-6 bg-muted/30 rounded animate-pulse" />
                                    <div className="h-6 bg-muted/30 rounded w-5/6 animate-pulse" />
                                    <div className="h-6 bg-muted/30 rounded w-4/6 animate-pulse" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-muted/30">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-muted/20 rounded-full mb-6">
                            <div className="w-5 h-5 bg-muted/30 rounded animate-pulse" />
                            <div className="h-5 w-32 bg-muted/30 rounded animate-pulse" />
                        </div>
                        <div className="h-6 w-64 bg-muted/30 rounded mx-auto mb-6 animate-pulse" />
                        <div className="h-12 w-48 bg-muted/30 rounded-xl mx-auto animate-pulse" />
                    </div>
                </div>
            </div>
        </PageBody>
    )
}
