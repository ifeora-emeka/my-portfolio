import React from 'react'
import { FiBookOpen, FiCalendar, FiTag, FiArrowLeft } from 'react-icons/fi'
import Link from 'next/link'
import PageBody from '@/components/PageBody'
import { blogs } from '@/data/blog.data'

export default function BlogDetailsPage({ params }: { params: { slug: string } }) {
	const blog = blogs.find((b) => b.slug === params.slug)
	if (!blog) {
		return (
			<PageBody hasBackButton>
				<div className="max-w-4xl mx-auto py-16 text-center">
					<div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
						<FiBookOpen className="text-primary" size={32} />
					</div>
					<h2 className="text-3xl font-bold mb-4 text-primary">
						Blog Post Not Found
					</h2>
					<p className="text-muted-foreground mb-6">
						The blog post you're looking for doesn't exist or has been moved.
					</p>
					<Link
						href="/blog"
						className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
					>
						<FiArrowLeft /> Back to Blog
					</Link>
				</div>
			</PageBody>
		)
	}

	return (
		<PageBody hasBackButton>
			<div className="max-w-4xl mx-auto py-8 px-4">
				<div className="mb-12">
					<div className="relative w-full h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 mb-8">
						<img
							src={blog.image}
							alt={blog.title}
							className="w-full h-full object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
						<div className="absolute top-6 right-6">
							<div className="bg-background/90 backdrop-blur-sm border border-border rounded-full px-4 py-2">
								<span className="text-sm font-medium text-primary">
									{new Date(blog.date).toLocaleDateString('en-US', { 
										year: 'numeric', 
										month: 'long', 
										day: 'numeric' 
									})}
								</span>
							</div>
						</div>
					</div>

					<div className="space-y-6">
						<div>
							<h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent leading-tight">
								{blog.title}
							</h1>
							<p className="text-xl text-muted-foreground leading-relaxed mb-8">
								{blog.description}
							</p>
						</div>

						<div className="flex flex-wrap gap-3 mb-8">
							{blog.tags.map((tag, i) => (
								<span
									key={i}
									className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
								>
									<FiTag size={14} />
									{tag}
								</span>
							))}
						</div>

						<div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-border pt-6">
							<div className="flex items-center gap-2">
								<FiCalendar className="text-primary" size={16} />
								<span>Published {new Date(blog.date).toLocaleDateString()}</span>
							</div>
							<div className="flex items-center gap-2">
								<FiBookOpen className="text-primary" size={16} />
								<span>5 min read</span>
							</div>
						</div>
					</div>
				</div>

				<div className="prose prose-lg max-w-none">
					<div className="rounded-2xl">
						<div className="space-y-6 text-foreground leading-relaxed">
							{blog.content.split('\n').map((line, idx) => {
								if (line.trim() === '') return <div key={idx} className="h-4" />
								
								if (line.startsWith('# ')) {
									return (
										<h2 key={idx} className="text-3xl font-bold mt-10 mb-6 text-primary border-b border-border pb-3">
											{line.replace(/^#+\s*/, '')}
										</h2>
									)
								}
								
								if (line.startsWith('## ')) {
									return (
										<h3 key={idx} className="text-2xl font-bold mt-8 mb-4 text-primary">
											{line.replace(/^#+\s*/, '')}
										</h3>
									)
								}
								
								if (line.startsWith('- ')) {
									return (
										<div key={idx} className="flex items-start gap-3 my-3">
											<div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
											<p className="text-lg">{line.replace(/^-\s*/, '')}</p>
										</div>
									)
								}
								
								if (line.match(/^\d+\./)) {
									return (
										<div key={idx} className="flex items-start gap-3 my-3">
											<div className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
												{line.match(/^(\d+)/)?.[1]}
											</div>
											<p className="text-lg">{line.replace(/^\d+\.\s*/, '')}</p>
										</div>
									)
								}
								
								return (
									<p key={idx} className="text-lg leading-relaxed mb-4">
										{line}
									</p>
								)
							})}
						</div>
					</div>
				</div>

				<div className="mt-12 pt-8 border-t border-border">
					<div className="text-center">
						<div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full mb-6">
							<FiBookOpen className="text-primary" size={20} />
							<span className="text-primary font-medium">
								Thanks for reading!
							</span>
						</div>
						<p className="text-muted-foreground mb-6">
							Enjoyed this article? Check out more of my technical writing.
						</p>
						<Link
							href="/blog"
							className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg"
						>
							<FiArrowLeft />
							Back to All Posts
						</Link>
					</div>
				</div>
			</div>
		</PageBody>
	)
}
