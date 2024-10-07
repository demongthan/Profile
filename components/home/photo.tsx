import React from 'react'
import {motion } from 'framer-motion'
import Image from 'next/image'
import { linkImageData } from '@/lib/data/link-image-data'

const Photo = () => {
    return (
        <div className='w-1/2 h-full relative flex justify-center items-center'>
            <motion.div
                initial={{opacity:0}}
                animate={{
                    opacity:1,
                    transition:{delay:2, duration:0.4, ease:'easeIn' }
            }}>
                <motion.div
                    initial={{opacity:0}}
                    animate={{
                        opacity:1,
                        transition:{delay:2.4, duration:0.4, ease:'easeIn' }
                    }}>
                    <div className='w-[298px] h-[298px] xl:w-[500px] xl:h-[500px] mix-blend-lighten absolute'>
                        <Image src={linkImageData.selfie} alt={''} priority quality={100} fill className='object-contain rounded-full bg-white dark:bg-slate-800'></Image>
                    </div>
                </motion.div>

                <motion.svg
                    className={'w-[600px] xl:w-[500px] h-[600px] xl:h-[500px]'}
                    fill={'transparent'}
                    viewBox={"0 0 500 500"}
                    xmlns={"http://wwww.w3.org/2000/svg"}
                >
                    <motion.circle
                        cx="250"
                        cy="250"
                        r="250"
                        stroke={"#15803D"}
                        strokeWidth={"5"}
                        strokeLinecap={"round"}
                        strokeLinejoin={"round"}
                        initial={{strokeDasharray:"24 10 0 0"}}
                        animate={{
                            strokeDasharray:["15 120", "16 25 92 72", "4 250 22 22"],
                            rotate:[120, 360]
                        }}
                        transition={{
                            duration:8,
                            repeat:Infinity,
                            repeatType:"reverse"
                        }}
                        style={{
                            transformOrigin: "50% 50%",
                        }}
                    >
                    </motion.circle>
                </motion.svg>
            </motion.div>
        </div>
    )
}

export default Photo