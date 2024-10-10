"use client"

import React from 'react'
import { useLocale } from 'next-intl';

import { skillData } from '@/lib/data/resume/skill-data'
import { Language } from '@/lib/enum/language';
import { SkillListItem } from '@/lib/interface/skill/skillList-item';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from "@/components/ui/tooltip"
import Image from 'next/image';

const Skill = () => {
    const locale = useLocale();

    return (
        <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-5 text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{locale==Language.VietNam?skillData.titleVi:skillData.titleEn}</h3>

                <p className='w-full text-black/70 dark:text-white/70 mx-auto xl:mx-0 text-base'>
                    {locale==Language.VietNam?skillData.descriptionVi:skillData.descriptionEn}
                </p>

                <ul className='grid grid-cols-2 pt-0 xl:pt-10 xl:grid-cols-4 gap-3 xl:gap-5'>
                    {skillData.skillList.map((skill:SkillListItem, index:number) =>{
                        return (
                            <li key={index} className='flex items-center justify-center'>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className='w-full h-[100px] xl:h-[130px] bg-slate-300 rounded-xl flex justify-center items-center group'>
                                            <Image src={skill.icon} alt={''} height={80} width={80} className='group-hover:scale-105'></Image>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p className='capitalize'>{skill.name}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </li>
                        )
                    })} 
                </ul>
            </div>
        </div>
    )
}

export default Skill