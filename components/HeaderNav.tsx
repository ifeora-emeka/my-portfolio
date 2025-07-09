'use client'
import { cn } from '@/lib/utils';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'


export default function HeaderNav() {
    const pathname = usePathname();
    return (
        <>
            <header className='h-16 border-b px-4 sticky top-0 bg-card z-40'>
                <nav className='container mx-auto h-full flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
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
                    <div className='flex items-center gap-4'>
                        <EachNavLink href='/contact' isActive={pathname.includes('/contact')}>
                            Contact
                        </EachNavLink>
                    </div>
                </nav>
            </header>
        </>
    )
}

const EachNavLink = ({ href, children, isActive }: { href: string, children: React.ReactNode; isActive?: boolean }) => {
    return <Link href={href} className={cn('px-4 py-1 transition-colors duration-300', {
        "bg-primary text-primary-foreground": isActive,
        "text-foreground hover:bg-accent hover:text-accent-foreground": !isActive,
    })}>
        {children}
    </Link>
}
