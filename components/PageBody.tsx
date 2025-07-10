import React from 'react'
import HeaderNav from './HeaderNav'

type Props = {
    children?: React.ReactNode;
    hasBackButton?: boolean;
}

export default function PageBody({ children, hasBackButton }: Props) {
    return (
        <>
            <div className='min-h-screen flex-1 flex flex-col'>
                <HeaderNav hasBackButton={hasBackButton} />
                <main className='px-4'>
                    {children}
                </main>
            </div>
        </>
    )
}