"use client"

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React from 'react'

const transitionVariants={
    initial:{
        x:'100%',
        with:'100%'
    },
    animate:{
        x:'0%',
        with:'0%'
    },
    exit:{
        x:['0%', '100%'],
        with:['0%', '100%']
    }
}

const Transition = () => {
    const pathName=usePathname();
    return (
        <motion.div key={pathName}
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]'
        variants={transitionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{delay:0.2, duration:0.6, ease:'easeInOut'}}>
            1
        </motion.div>
    )
}

export default Transition