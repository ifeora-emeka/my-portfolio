import PageBody from '@/components/PageBody'
import React from 'react'
import { FiBookOpen } from 'react-icons/fi'

export default function BlogPage() {
    return (
        <PageBody>
            <section className="max-w-2xl mx-auto py-8">
                <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-2">
                    <FiBookOpen className="text-primary" size={28} /> Blog
                </h2>
                <div className="rounded-lg border border-border bg-card p-6 shadow-sm text-center">
                    <p className="text-muted-foreground text-lg">Blog posts coming soon. Stay tuned!</p>
                </div>
            </section>
        </PageBody>
    )
}
