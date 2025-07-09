import React from 'react'
import { FiHome } from 'react-icons/fi'

export default function page() {
  return (
    <div className='min-h-[80vh] flex flex-col justify-center items-center'>
      <div className='flex items-center gap-3 mb-4'>
        <FiHome className='text-primary' size={36} />
        <h1 className='text-4xl font-bold'>
          Emeka S. Ifeora
        </h1>
      </div>
      <div className='w-20 bg-primary h-2 mb-4 rounded-full' />
      <p className='text-lg text-muted-foreground'>
        Senior Software Engineer
      </p>
    </div>
  )
}
