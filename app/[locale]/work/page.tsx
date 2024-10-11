"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { RiLiveFill } from "react-icons/ri";
import { GrResources } from "react-icons/gr";
import {Swiper, SwiperSlide} from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import "swiper/css"

import { projectData } from '@/lib/data/project-data'
import { ProjectItem } from '@/lib/interface/project-item'
import { Language } from '@/lib/enum/language';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from "@/components/ui/tooltip"
import WorkSliderBtns from '@/components/work/work-slider-btns';
import ImageSlider from '@/components/work/image-slider';

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
            className='flex flex-col justify-center py-4 xl:py-12 px-2 xl:px-0'
        >
            <div className='flex flex-col xl:flex-row gap-2 xl:gap-5'>
                <div className='w-full xl:w-1/2 flex flex-col xl:justify-between order-2 xl:order-none'>
                    <div className='flex flex-col gap-5 h-1/2'>
                        <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                            {project.num}
                        </div>

                        <h2 className='text-3xl font-bold leading-none text-slate-600 dark:text-white group-hover:text-cyan-400 transition-all duration-500 capitalize'>{locale==Language.VietNam?project.titleVi:project.titleEn}</h2>

                        <h2 className='text-3xl font-bold leading-none text-slate-600 dark:text-white/20 group-hover:text-cyan-400 transition-all duration-500 capitalize'>{project.category}</h2>

                        <p className='text-sm'>{locale==Language.VietNam?project.descriptionVi:project.descriptionEn}</p>

                        <p className='text-cyan-400 font-semibold'>{project.stack}</p>

                        <div className='border border-slate-700 dark:border-white/20'></div>

                        <div className='flex items-center gap-4'>
                            {project.live && (
                                <Link href={project.live}>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-slate-700 dark:bg-white/5 flex justify-center items-center group'>
                                                <RiLiveFill  className='text-white text-3xl group-hover:text-cyan-500'></RiLiveFill>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>{locale==Language.VietNam?"Video dự án":"Live project"}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            )}

                            { project.source && (   
                                <Link href={project.source}>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-slate-700 dark:bg-white/5 flex justify-center items-center group'>
                                                <GrResources className='text-white text-3xl group-hover:text-cyan-500'></GrResources>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>{locale==Language.VietNam?"Nguồn":"Resources project"}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            )}
                        </div>
                    </div>
                    
                </div>

                <div className='w-full xl:w-1/2'>
                    <Swiper 
                        spaceBetween={30}
                        slidesPerView={1}
                        className='h-[33rem] xl:h-[35rem] mb-0 xl:mb-12'
                        onSlideChange={handleSlideChange}
                    >
                        {projectData.map((item, index)=>{
                            return (
                                <SwiperSlide key={index}>
                                    <div className='h-[33rem] relative group flex justify-center item-center'>
                                        <div className='absolute top-0 bottom-0 w-full h-full z-10'></div>

                                        <div className='relative w-full h-full'>
                                            <ImageSlider slides={item.image}></ImageSlider>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}

                        <WorkSliderBtns 
                            containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                            btnStyles='bg-slate-700 dark:bg-cyan-400 hover:bg-cyan-400-hover text-white text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'
                        >
                        </WorkSliderBtns>
                    </Swiper>
                </div>
            </div>
        </motion.section>
    )
}

export default Work