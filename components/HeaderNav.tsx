'use client'
import { cn } from '@/lib/utils';
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { Button } from './ui/button';
import { FiArrowLeft, FiMenu, FiX } from 'react-icons/fi';


export default function HeaderNav({ hasBackButton }: { hasBackButton?: boolean }) {
    const router = useRouter();
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const goBack = () => {
        if (window.history.length > 2) {
            router.back();
        } else {
            router.push('/');
        }
    }
    
    return (
        <>
            <header className='h-16 border-b px-4 sticky top-0 bg-card z-40 select-none'>
                <nav className='container mx-auto h-full flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        {hasBackButton ? (
                            <Button variant="ghost" size="sm" className="flex items-center gap-2" onClick={goBack}>
                                <FiArrowLeft size={16} />
                                Back
                            </Button>
                        ) : (
                            <>
                                <div className='hidden md:flex items-center gap-4'>
                                    <EachNavLink href='/' isActive={pathname === '/'}>
                                        Home
                                    </EachNavLink>
                                    <EachNavLink href='/experience' isActive={pathname.includes('/experience')}>
                                        Experience
                                    </EachNavLink>
                                    <EachNavLink href='/portfolio' isActive={pathname.includes('/portfolio')}>
                                        Portfolio
                                    </EachNavLink>
                                    <EachNavLink href='/blog' isActive={pathname.includes('/blog')}>
                                        Blog
                                    </EachNavLink>
                                </div>
                                <Button 
                                    variant="ghost" 
                                    size="sm" 
                                    className="md:hidden"
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                >
                                    {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                                </Button>
                            </>
                        )}
                    </div>
                    <div className='hidden md:flex items-center gap-4'>
                        <EachNavLink href='/contact' isActive={pathname.includes('/contact')}>
                            Contact
                        </EachNavLink>
                    </div>
                </nav>
                
                {isMobileMenuOpen && !hasBackButton && (
                    <div className='md:hidden absolute top-16 left-0 right-0 bg-card border-b shadow-lg'>
                        <div className='flex flex-col p-4 space-y-3'>
                            <MobileNavLink 
                                href='/' 
                                isActive={pathname === '/'}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Home
                            </MobileNavLink>
                            <MobileNavLink 
                                href='/experience' 
                                isActive={pathname.includes('/experience')}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Experience
                            </MobileNavLink>
                            <MobileNavLink 
                                href='/portfolio' 
                                isActive={pathname.includes('/portfolio')}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Portfolio
                            </MobileNavLink>
                            <MobileNavLink 
                                href='/blog' 
                                isActive={pathname.includes('/blog')}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Blog
                            </MobileNavLink>
                            <MobileNavLink 
                                href='/contact' 
                                isActive={pathname.includes('/contact')}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact
                            </MobileNavLink>
                        </div>
                    </div>
                )}
            </header>
        </>
    )
}

const EachNavLink = ({ href, children, isActive }: { href: string, children: React.ReactNode; isActive?: boolean }) => {
    return <Link href={href} className={cn('px-4 py-2 rounded-md transition-colors duration-300', {
        "bg-primary text-primary-foreground": isActive,
        "text-foreground hover:bg-accent hover:text-accent-foreground": !isActive,
    })}>
        {children}
    </Link>
}

const MobileNavLink = ({ href, children, isActive, onClick }: { href: string, children: React.ReactNode; isActive?: boolean; onClick: () => void }) => {
    return <Link 
        href={href} 
        onClick={onClick}
        className={cn('px-4 py-3 rounded-md transition-colors duration-300 block', {
            "bg-primary text-primary-foreground": isActive,
            "text-foreground hover:bg-accent hover:text-accent-foreground": !isActive,
        })}
    >
        {children}
    </Link>
}
