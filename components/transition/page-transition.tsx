"use client"

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation';

const PageTransition = ({children}:{children:React.ReactNode}) => {
    const pathName=usePathname();
    
    return (
        <AnimatePresence>
            <div key={pathName}>
                <motion.div
                    className='h-screen w-screen fixed bg-white dark:bg-slate-800 z-50 top-0 pointer-events-none'
                    initial={{opacity:1}}
                    animate={{
                        opacity:0,
                        transition:{
                            delay:1, 
                            duration:0.4, 
                            ease:"easeInOut"
                        }
                    }}>
                </motion.div>
                {children}
            </div>
        </AnimatePresence>
    )
}

export default PageTransition