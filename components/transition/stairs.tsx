import { motion } from 'framer-motion';
import React from 'react'

const stairAnimation={
    initial:{
        top:"0%"
    },
    animate:{
        top:"100%"
    },
    exit:{
        top:["100%", "0%"]
    }
}

const reverseIndex=(index:number):number=>{
    const totalSteps:number=6;
    return totalSteps-index-1;
}

const arrNum=[0, 1, 2, 3, 4, 5];

const Stairs = () => {
    return (
        <>
            {arrNum.map((_:number)=>{
                return(<motion.div 
                    key={_}
                    className='h-full w-full bg-slate-800 dark:bg-white relative'
                    variants={stairAnimation}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    transition={{delay:reverseIndex(_)*0.1, duration:0.4, ease:'easeInOut'}}>
                </motion.div>)
            })}
        </>
    )
}

export default Stairs