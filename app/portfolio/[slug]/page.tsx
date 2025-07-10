import React from 'react'
import ProjectDetailsPage from './portfolio-details-page'
import { projects } from '@/data/projects.data'


type Props = {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
export default async function page({ params, searchParams }: Props) {
    const { slug } = await params
    const project = projects.find(p => p.slug === slug)
    return (
        <ProjectDetailsPage project={project} />
    )
}
