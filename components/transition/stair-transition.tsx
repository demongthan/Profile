"use client"

import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from 'next/navigation';
import Stairs from './stairs';


const StairTransition = () => {
    const pathName=usePathname();
    
    return (
        <AnimatePresence mode="wait">
            <div key={pathName}>
                <div className='h-full w-full fixed top-0 left-0 right-0 pointer-events-none z-[100] flex'>
                    <Stairs></Stairs>
                </div>

                <motion.div
                    className="h-full w-full fixed bg-white dark:bg-slate-800 top-0 pointer-events-none"
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
            </div>
        </AnimatePresence>
    )
}

export default StairTransition