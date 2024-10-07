"use client"

import React from 'react'
import CountUp from 'react-countup';
import { useLocale } from 'next-intl';

import { statsData } from '@/lib/data/stats-data'
import { StatItem } from '@/lib/interface/stats-item'
import { Language } from '@/lib/enum/language';

const Stats = () => {
    const locale = useLocale();

    return (
        <div className='flex flex-wrap gap-6 w-full mx-auto xl:max-w-none text-black'>
            {statsData.map((item:StatItem, index:number) =>{
                return (
                    <div key={index} className='flex-1 flex gap-4 items-center justify-center dark:text-white xl:justify-start'>
                        <CountUp 
                            end={item.num} 
                            duration={5} 
                            delay={2} 
                            className='text-4xl xl:text-6xl font-extrabold'>
                        </CountUp>

                        <p className={`text-xl font-medium ${(locale==Language.English && item.textEn.length<15) || (locale==Language.VietNam && item.textVi.length<15)?"max-w-[200px]":"max-w-[350px]"}`}>
                            <span className='text-gray-400'>{locale==Language.English?item.textEn:item.textVi}</span>
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default Stats