import React from 'react'
import { Button } from './ui/button'
import { FiDownload, FiMapPin, FiCode, FiStar, FiAward, FiTrendingUp } from 'react-icons/fi'

export default function PageLayoutImage() {
    return (
        <div className='hidden lg:flex lg:max-w-[500px] lg:w-[500px] md:h-screen overflow-hidden sticky top-0 transition-all duration-300 ease-in-out group relative'>
            <div className='absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10' />
            
            <div className='absolute top-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-4 group-hover:translate-y-0'>
                <div className='bg-background/90 backdrop-blur-sm rounded-2xl p-4 border border-border/50 shadow-lg'>
                    <div className='flex items-center gap-3 mb-2'>
                        <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center'>
                            <FiMapPin className='text-primary' size={16} />
                        </div>
                        <div>
                            <p className='text-xs text-muted-foreground'>Location</p>
                            <p className='text-sm font-semibold text-foreground'>Lagos, Nigeria</p>
                        </div>
                    </div>
                    <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
                </div>
            </div>

            <div className='absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0'>
                <div className='bg-background/90 backdrop-blur-sm rounded-2xl p-4 border border-border/50 shadow-lg'>
                    <div className='flex items-center gap-3'>
                        <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center'>
                            <FiCode className='text-primary' size={16} />
                        </div>
                        <div>
                            <p className='text-xs text-muted-foreground'>Experience</p>
                            <p className='text-sm font-semibold text-foreground'>7+ Years</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='absolute bottom-32 left-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-1000 transform translate-x-4 group-hover:translate-x-0'>
                <div className='bg-background/90 backdrop-blur-sm rounded-2xl p-4 border border-border/50 shadow-lg'>
                    <div className='flex items-center gap-3 mb-2'>
                        <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center'>
                            <FiStar className='text-primary' size={16} />
                        </div>
                        <div>
                            <p className='text-xs text-muted-foreground'>Rating</p>
                            <div className='flex items-center gap-1'>
                                {[...Array(5)].map((_, i) => (
                                    <FiStar key={i} className='text-yellow-500 fill-current' size={12} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='absolute bottom-32 right-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-1200 transform -translate-x-4 group-hover:translate-x-0'>
                <div className='bg-background/90 backdrop-blur-sm rounded-2xl p-4 border border-border/50 shadow-lg'>
                    <div className='flex items-center gap-3'>
                        <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center'>
                            <FiTrendingUp className='text-primary' size={16} />
                        </div>
                        <div>
                            <p className='text-xs text-muted-foreground'>Projects</p>
                            <p className='text-sm font-semibold text-foreground'>50+ Completed</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20'>
                <Button 
                    size={'lg'} 
                    className='opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-8 group-hover:translate-y-0 shadow-2xl bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl px-8 py-4 font-bold text-lg flex items-center gap-3 border border-primary/20 hover:scale-105'
                >
                    <FiDownload size={20} />
                    Download CV
                </Button>
            </div>

            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-700'>
                <div className='bg-background/95 backdrop-blur-sm rounded-3xl p-6 border border-border/50 shadow-2xl'>
                    <div className='text-center'>
                        <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                            <FiAward className='text-primary' size={32} />
                        </div>
                        <h3 className='text-xl font-bold text-foreground mb-2'>Full Stack Developer</h3>
                        <p className='text-sm text-muted-foreground mb-4'>Building scalable solutions</p>
                        <div className='flex justify-center gap-2'>
                            <div className='w-2 h-2 bg-primary rounded-full animate-pulse'></div>
                            <div className='w-2 h-2 bg-primary/50 rounded-full animate-pulse delay-100'></div>
                            <div className='w-2 h-2 bg-primary/30 rounded-full animate-pulse delay-200'></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent z-5' />
            
            <img 
                src='/me.jpg' 
                alt='Emeka Ifeora' 
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700' 
            />
        </div>
    )
}
