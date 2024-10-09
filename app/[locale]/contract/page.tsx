"use client"

import React from 'react'
import { motion } from 'framer-motion'

const Contract = () => {
    return (
        <motion.section
            initial={{opacity:0}}
            animate={{
                opacity:1,
                transition:{
                    delay: 2.4,
                    duration: 0.4,
                    ease: 'easeInOut'
                }
            }}
            className='py-6'
        >
            <div className='flex flex-col xl:flex-row gap-5'>
                <div className='xl:h-[54%] order-2 xl:order-none'>
                    <form className='flex flex-col gap-6 p-10 bg-slate-400 rounded-xl'>
                        <h3 className='text-4xl text-cyan-400'>Let's work together</h3>

                        <p className='text-white/60'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro provident voluptates quis, obcaecati, expedita aliquam praesentium recusandae dolore mollitia sunt sapiente maiores autem repellendus reiciendis, repudiandae iste eos aliquid unde.
                        </p>

                        
                    </form>
                </div>

                <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>

                </div>
            </div>
        </motion.section>
    )
}

export default Contract