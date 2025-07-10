import PageBody from '@/components/PageBody'
import React from 'react'
import Link from 'next/link'
import { FiBookOpen, FiArrowRight } from 'react-icons/fi'
import { blogs } from '@/data/blog.data'

export default function BlogPage() {
	return (
		<PageBody>
			<div className="max-w-4xl mx-auto py-8 px-4">
				<div className="text-center mb-12">
					<div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
						<FiBookOpen className="text-primary" size={32} />
					</div>
					<h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-3">
						Technical Blog
					</h1>
					<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
						Insights, tutorials, and best practices in modern web development and software engineering
					</p>
				</div>

				<div className="space-y-8">
					{blogs.map((blog, idx) => (
						<Link key={idx} href={`/blog/${blog.slug}`} className="block group">
							<article className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card via-card to-card/50 hover:shadow-2xl transition-all duration-500">
								<div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
									<img
										src={blog.image}
										alt={blog.title}
										className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
									<div className="absolute top-4 right-4">
										<div className="bg-background/90 backdrop-blur-sm border border-border rounded-full px-3 py-1">
											<span className="text-xs font-medium text-primary">
												{new Date(blog.date).toLocaleDateString('en-US', { 
													year: 'numeric', 
													month: 'short', 
													day: 'numeric' 
												})}
											</span>
										</div>
									</div>
								</div>
								
								<div className="p-8">
									<div className="mb-4">
										<h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-3 leading-tight">
											{blog.title}
										</h2>
										<p className="text-muted-foreground leading-relaxed text-base line-clamp-2">
											{blog.description}
										</p>
									</div>
									
									<div className="flex flex-wrap gap-2 mb-6">
										{blog.tags.map((tag, i) => (
											<span
												key={i}
												className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
											>
												{tag}
											</span>
										))}
									</div>
									
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-2 text-sm text-muted-foreground">
											<FiBookOpen size={16} className="text-primary" />
											<span>5 min read</span>
										</div>
										<div className="flex items-center gap-2 text-primary font-medium">
											<span>Read more</span>
											<FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
										</div>
									</div>
								</div>
								
								<div className="h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent"></div>
							</article>
						</Link>
					))}
				</div>
			</div>
		</PageBody>
	)
}
