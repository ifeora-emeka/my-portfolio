import React from 'react'
import { FiMail, FiPhone, FiGlobe, FiMapPin, FiSend, FiLinkedin, FiGithub, FiTwitter, FiClock, FiUser, FiExternalLink } from 'react-icons/fi'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import PageBody from '@/components/PageBody'
import { contactInfo } from '@/data/contact.data'

export default function ContactPage() {
    return (
        <PageBody>
            <div className="max-w-4xl mx-auto py-12 px-4">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-full mb-8 relative">
                        <FiMail className="text-primary" size={48} />
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        </div>
                    </div>
                    <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-6">
                        Let's Connect
                    </h1>
                    <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
                        Ready to bring your vision to life? I'm passionate about creating exceptional digital experiences and would love to discuss your next project.
                    </p>
                </div>

                <div className="space-y-12">
                    <div className="bg-gradient-to-br from-card via-card to-card/80 rounded-3xl border border-border/50 p-10 shadow-2xl">
                        <div className="flex items-center gap-6 mb-8">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                                <FiUser className="text-primary" size={32} />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-2">{contactInfo.name}</h2>
                                <p className="text-xl text-primary font-semibold">{contactInfo.title}</p>
                                <p className="text-muted-foreground">{contactInfo.availability.status}</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <a 
                                href={`mailto:${contactInfo.email}`}
                                className="group flex items-center gap-4 p-6 rounded-2xl bg-background/50 hover:bg-primary/10 transition-all duration-300 hover:scale-105 border border-border/30 hover:border-primary/30"
                            >
                                <div className="min-w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <FiMail className="text-primary" size={24} />
                                </div>
                                <div className="flex-1 grid grid-cols-1">
                                    <p className="text-sm text-muted-foreground">Email</p>
                                    <p className="font-semibold text-foreground text-lg truncate">{contactInfo.email}</p>
                                </div>
                                <FiExternalLink className="text-muted-foreground group-hover:text-primary transition-colors" size={18} />
                            </a>

                            <a 
                                href={`tel:${contactInfo.phone}`}
                                className="group flex items-center gap-4 p-6 rounded-2xl bg-background/50 hover:bg-primary/10 transition-all duration-300 hover:scale-105 border border-border/30 hover:border-primary/30"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <FiPhone className="text-primary" size={24} />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-muted-foreground">Phone</p>
                                    <p className="font-semibold text-foreground text-lg">{contactInfo.phone}</p>
                                </div>
                                <FiExternalLink className="text-muted-foreground group-hover:text-primary transition-colors" size={18} />
                            </a>

                            <div className="flex items-center gap-4 p-6 rounded-2xl bg-background/50 border border-border/30">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                    <FiMapPin className="text-primary" size={24} />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-muted-foreground">Location</p>
                                    <p className="font-semibold text-foreground text-lg">{contactInfo.location}</p>
                                    <p className="text-sm text-muted-foreground">{contactInfo.timezone}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-6 rounded-2xl bg-background/50 border border-border/30">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                    <FiClock className="text-primary" size={24} />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-muted-foreground">Response Time</p>
                                    <p className="font-semibold text-foreground text-lg">{contactInfo.availability.responseTime}</p>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-border/50 pt-8">
                            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                    <FiGlobe className="text-primary" size={20} />
                                </div>
                                Social Media & Links
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {contactInfo.socialMedia.map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-4 p-5 rounded-2xl bg-background/50 hover:bg-primary/10 transition-all duration-300 hover:scale-105 border border-border/30 hover:border-primary/30"
                                    >
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                            {social.icon === 'FiLinkedin' && <FiLinkedin className="text-primary" size={24} />}
                                            {social.icon === 'FiGithub' && <FiGithub className="text-primary" size={24} />}
                                            {social.icon === 'FiTwitter' && <FiTwitter className="text-primary" size={24} />}
                                            {social.icon === 'FiGlobe' && <FiGlobe className="text-primary" size={24} />}
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-semibold text-foreground text-lg">{social.name}</p>
                                            <p className="text-sm text-muted-foreground">Connect with me</p>
                                        </div>
                                        <FiExternalLink className="text-muted-foreground group-hover:text-primary transition-colors" size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-card via-card to-card/80 rounded-3xl border border-border/50 p-10 shadow-2xl">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-foreground mb-3">Send Me a Message</h2>
                            <p className="text-muted-foreground text-lg">Have a project in mind? I'd love to hear about it and discuss how we can work together.</p>
                        </div>
                        
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground">First Name</label>
                                    <Input 
                                        type="text" 
                                        placeholder="Enter your first name" 
                                        className="bg-background/50 border-border/50 text-foreground h-14 rounded-2xl text-lg" 
                                        required 
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground">Last Name</label>
                                    <Input 
                                        type="text" 
                                        placeholder="Enter your last name" 
                                        className="bg-background/50 border-border/50 text-foreground h-14 rounded-2xl text-lg" 
                                        required 
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground">Email Address</label>
                                <Input 
                                    type="email" 
                                    placeholder="your.email@example.com" 
                                    className="bg-background/50 border-border/50 text-foreground h-14 rounded-2xl text-lg" 
                                    required 
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground">Subject</label>
                                <Input 
                                    type="text" 
                                    placeholder="What's this about?" 
                                    className="bg-background/50 border-border/50 text-foreground h-14 rounded-2xl text-lg" 
                                    required 
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground">Message</label>
                                <Textarea 
                                    placeholder="Tell me about your project, goals, timeline, and any specific requirements..." 
                                    className="bg-background/50 border-border/50 text-foreground min-h-[160px] rounded-2xl resize-none text-lg" 
                                    required 
                                />
                            </div>
                            <Button className="w-full h-16 text-xl font-bold rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center gap-4">
                                <FiSend size={24} />
                                Send Message
                            </Button>
                        </form>
                    </div>

                    <div className="bg-gradient-to-br from-card via-card to-card/80 rounded-3xl border border-border/50 p-10 shadow-2xl">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-foreground mb-3">What I Can Help You With</h2>
                            <p className="text-muted-foreground text-lg">Specialized services to bring your digital vision to life</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {contactInfo.services.map((service, idx) => (
                                <div 
                                    key={idx}
                                    className="group bg-primary/5 hover:bg-primary/10 rounded-2xl p-6 text-center border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
                                >
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                                        <FiGlobe className="text-primary" size={20} />
                                    </div>
                                    <p className="text-primary font-bold text-lg">{service}</p>
                                    <p className="text-muted-foreground text-sm mt-2">Expert level delivery</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-3xl border border-border/50 overflow-hidden shadow-2xl">
                        <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 border-b border-border/50">
                            <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                                <FiMapPin className="text-primary" size={28} />
                                My Location
                            </h2>
                            <p className="text-muted-foreground">Based in Lagos, Nigeria - Available worldwide for remote work</p>
                        </div>
                        <iframe
                            src="https://www.google.com/maps?q=Lagos,Nigeria&output=embed"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                            className="w-full h-[400px] grayscale hover:grayscale-0 transition-all duration-500"
                        ></iframe>
                    </div>
                </div>
            </div>
        </PageBody>
    )
}
