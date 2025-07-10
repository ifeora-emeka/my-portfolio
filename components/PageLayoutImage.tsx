import React from 'react'
import { Button } from './ui/button'
import { FiDownload } from 'react-icons/fi'

export default function PageLayoutImage() {
    return (
        <div className='hidden lg:flex lg:max-w-[500px] lg:w-[500px] md:h-screen overflow-hidden sticky top-0 transition-all duration-300 ease-in-out group'>
            <div className='z-5 group-hover:bg-primary/40 fixed h-full w-20 lg:w-[500px] transition-colors duration-300' />
            <Button size={'lg'} className='fixed -bottom-16 group-hover:bottom-16 left-1/6 shadow-lg z-10 flex items-center gap-2'>
                <FiDownload size={18} />
                Download CV
            </Button>
            <img src='/me.jpg' alt='Emeka Ifeora' className='w-full object-cover' />
        </div>
    )
}
