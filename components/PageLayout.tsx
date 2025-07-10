import React from 'react'
import PageLayoutImage from './PageLayoutImage';

type Props = {
    children?: React.ReactNode;
}

export default function PageLayout({ children }: Props) {
    return (
        <div className='flex min-h-screen xl:w-[1200px] xl:max-w-[1200px] mx-auto border-x bg-card'>
            <PageLayoutImage />
            {children}
        </div>
    )
}