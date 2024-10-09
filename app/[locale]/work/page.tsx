"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import "swiper/css"

import { projectData } from '@/lib/data/project-data'
import { ProjectItem } from '@/lib/interface/project-item'
import { Language } from '@/lib/enum/language';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from "@/components/ui/tooltip"
import WorkSliderBtns from '@/components/WorkSliderBtns';

const Work = () => {
    const [project, setProject]=useState<ProjectItem>(projectData[0]);
    const locale = useLocale();

    const handleSlideChange=(e:SwiperType )=>{
        const currentIndex:number=e.activeIndex;

        setProject(projectData[currentIndex]);
    }

    return (
        <motion.section
            initial={{opacity:0}}
            animate={{opacity:1,
                transition:{
                    delay:2.4,
                    duration: 0.4,
                    ease: "easeInOut"
                }
            }}
            className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
        >
            <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
                <div className='w-full xl:w-1/2 flex flex-col xl:justify-between order-2 xl:order-none'>
                    <div className='flex flex-col gap-5 h-1/2'>
                        <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                            {project.num}
                        </div>

                        <h2 className='text-5xl font-bold leading-none text-white group-hover:text-cyan-400 transition-all duration-500 capitalize'>{project.category}</h2>

                        <p>{locale==Language.VietNam?project.descriptionVi:project.descriptionEn}</p>

                        <p>{project.stack}</p>

                        <div className='border border-white/20'></div>

                        <div className='flex items-center gap-4'>
                            <Link href={project.source}>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                                            <BsArrowUpRight className='text-white text-3xl group-hover:text-cyan-500'></BsArrowUpRight>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Live project</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>

                            <Link href={project.source}>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                                            <BsArrowUpRight className='text-white text-3xl group-hover:text-cyan-500'></BsArrowUpRight>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Live project</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                        </div>
                    </div>
                    
                </div>

                <div className='w-full xl:w-1/2'>
                    <Swiper 
                        spaceBetween={30}
                        slidesPerView={1}
                        className='xl:h-[520px] mb-12'
                        onSlideChange={handleSlideChange}
                    >
                        {projectData.map((project, index)=>{
                            return (
                                <SwiperSlide key={index}>
                                    <div className='h-[460px] relative group flex justify-center item-center bg-pink-50/20'>
                                        <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>

                                        <div className='relative w-full h-full'>

                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}

                        <WorkSliderBtns 
                            containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                            btnStyles='bg-cyan-400 hover:bg-cyan-400-hover text-slate-400 text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'
                        >
                        </WorkSliderBtns>
                    </Swiper>
                </div>
            </div>
        </motion.section>
    )
}

export default Work