import React from 'react'
import { FiMail, FiPhone, FiGlobe, FiMapPin, FiSend, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import PageBody from '@/components/PageBody'

export default function ContactPage() {
    return (
        <PageBody>
            <section className="max-w-2xl mx-auto py-8">
                <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-2">
                    <FiMapPin className="text-primary" size={28} /> Contact
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
                            <div className="mb-4">
                                <p className="text-lg text-foreground font-semibold flex items-center gap-2">
                                    <FiMapPin className="text-primary" /> Emeka S. Ifeora
                                </p>
                                <p className="text-muted-foreground">Senior Software Engineer</p>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <FiMail className="text-primary" />
                                    <span className="text-muted-foreground">chukwuemeka.ifeora@idegin.com</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FiPhone className="text-primary" />
                                    <span className="text-muted-foreground">+234 8109188680</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FiGlobe className="text-primary" />
                                    <a href="https://chukwuemeka.idegin.com" className="text-accent underline hover:text-primary transition-colors">chukwuemeka.idegin.com</a>
                                </div>
                            </div>
                            <div className="flex gap-4 mt-6">
                                <a href="https://linkedin.com/in/chukwuemeka-ifeora" target="_blank" rel="noopener" className="text-muted-foreground hover:text-primary transition-colors text-2xl"><FiLinkedin /></a>
                                <a href="https://github.com/chukwuemeka-ifeora" target="_blank" rel="noopener" className="text-muted-foreground hover:text-primary transition-colors text-2xl"><FiGithub /></a>
                                <a href="https://twitter.com/ifeoraemeka" target="_blank" rel="noopener" className="text-muted-foreground hover:text-primary transition-colors text-2xl"><FiTwitter /></a>
                            </div>
                        </div>
                        <div className="rounded-lg overflow-hidden border border-border bg-card">
                            <iframe
                                src="https://www.google.com/maps?q=Lagos,Nigeria&output=embed"
                                width="100%"
                                height="220"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"
                                className="w-full h-[220px]"
                            ></iframe>
                        </div>
                    </div>
                    <form className="rounded-lg border border-border bg-card p-6 shadow-sm flex flex-col gap-4">
                        <h3 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2"><FiSend className="text-primary" /> Send a Message</h3>
                        <Input type="text" placeholder="Your Name" className="bg-background border-border text-foreground" required />
                        <Input type="email" placeholder="Your Email" className="bg-background border-border text-foreground" required />
                        <Textarea placeholder="Your Message" className="bg-background border-border text-foreground min-h-[100px]" required />
                        <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 mt-2 flex items-center gap-2 justify-center">
                            <FiSend /> Send
                        </Button>
                    </form>
                </div>
            </section>
        </PageBody>
    )
}
