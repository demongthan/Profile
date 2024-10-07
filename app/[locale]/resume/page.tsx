"use client"

import { motion } from 'framer-motion'
import React from 'react'
import { useTranslations } from 'next-intl';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from "@/components/ui/tooltip"
import Experience from '@/components/resume/experience'

const Resume = () => {
    const t = useTranslations('ResumePage');

    return (
        <motion.div
            initial={{opacity:0}}
            animate={{
                opacity:1,
                transition:{
                    delay:2.4,
                    duration: 0.4,
                    ease: "easeInOut"
                }
            }}
            className='min-h-[80vh] w-full flex item-center justify-center py-12 xl:py-0'
        >
            <Tabs 
                defaultValue='experience'
                className='flex flex-col xl:flex-row gap-10 w-full'
            >
                <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
                    <TabsTrigger value="experience">{t("experience")}</TabsTrigger>
                    <TabsTrigger value="education">{t("education")}</TabsTrigger>
                    <TabsTrigger value="skill">{t("skills")}</TabsTrigger>
                    <TabsTrigger value="about">{t("about")}</TabsTrigger>
                </TabsList>

                <div className='min-h-[70vh] w-full'>
                    <TabsContent value='experience' className='w-full'>
                        <Experience></Experience>
                    </TabsContent>

                    <TabsContent value='education' className='w-full'>
                        experience is
                    </TabsContent>

                    <TabsContent value='skills' className='w-full'>

                    </TabsContent>

                    <TabsContent value='about' className='w-full'>

                    </TabsContent>
                </div>
            </Tabs>
        </motion.div>
    )
}

export default Resume