'use client'
import PageBody from '@/components/PageBody'
import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'

export default function page() {
  return (
    <PageBody>
      <div className='min-h-[80vh] flex flex-col lg:justify-center'>
        <div className='flex flex-col lg:hidden items-center text-center mb-8'>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className='relative mb-6'
          >
            <div className='w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20'>
              <img src='/me.jpg' alt='Emeka Ifeora' className='w-full h-full object-cover' />
            </div>
            <div className='absolute -bottom-2 -right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center'>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className='w-3 h-3 bg-primary-foreground rounded-full'
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button size="lg" className='mb-6 shadow-lg'>
              <FiDownload className='mr-2' size={18} />
              Download CV
            </Button>
          </motion.div>
        </div>

        <div className='lg:text-left text-center'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className='text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent'>
              Emeka S. Ifeora
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "5rem" }}
            transition={{ duration: 1, delay: 0.5 }}
            className='bg-primary h-1 mb-6 lg:mx-0 mx-auto rounded-full'
          />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <p className='text-xl lg:text-2xl text-muted-foreground mb-6'>
              Senior Software Engineer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className='max-w-2xl lg:mx-0 mx-auto'
          >
            <p className='text-muted-foreground leading-relaxed mb-8'>
              Detail-oriented and experienced Full Stack Developer with over 7 years of proven success in web application development. Proficient in creating high-quality, efficient, and scalable front-end code.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className='flex flex-wrap gap-3 lg:justify-start justify-center'
          >
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB'].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                className='px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium'
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </PageBody>
  )
}
