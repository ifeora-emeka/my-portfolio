import React from 'react'
import HeaderNav from './HeaderNav';

type Props = {
    children?: React.ReactNode;
}

export default function PageLayout({ children }: Props) {
    return (
        <div className='flex min-h-screen container mx-auto border-x bg-card'>
            <div className='flex lg:max-w-[800px] max-w-0 md:h-screen overflow-hidden sticky top-0'>
                <img src='/me.jpg' alt='me' className='w-full' />
            </div>
            <div className='min-h-screen flex-1 flex flex-col'>
                <HeaderNav />
                <main className='lg:p-8 p-4'>
                    {children}
                </main>
            </div>
        </div>
    )
}