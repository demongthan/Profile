"use client"

import React from 'react'
import { useLocale } from 'next-intl';
import { Language } from '@/lib/enum/language';
import { aboutData } from '@/lib/data/resume/about-data';
import { InfoAboutItem } from '@/lib/interface/about/info-about-item';

const About = () => {
    const locale = useLocale();

    return (
        <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-5 text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{locale==Language.VietNam?aboutData.titleVi:aboutData.titleEn}</h3>

                <p className='w-full text-black/70 dark:text-white/70 mx-auto xl:mx-0 text-base'>
                    {locale==Language.VietNam?aboutData.descriptionVi:aboutData.descriptionEn}
                </p>

                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-x-10'>
                    {aboutData.info.map((about:InfoAboutItem, index:number) =>{
                        return (
                            <li key={index} className='flex items-center justify-center xl:justify-start gap-4 text-xl'>
                                <span className='w-[25%] text-slate-600 dark:text-slate-400 h-full'>{locale==Language.VietNam?about.fieldNameVi:about.fieldNameEn}</span>
                                <span className='w-[75%] h-full'>{locale==Language.VietNam?about.fieldValueVi:about.fieldValueEn}</span>
                            </li>
                        )
                    })} 
                </ul>
            </div>
        </div>
    )
}

export default About