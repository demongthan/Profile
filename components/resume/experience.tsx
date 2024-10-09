"use client"

import React from 'react'
import { useLocale } from 'next-intl';

import { experienceData } from '@/lib/data/resume/experience-data'
import { Language } from '@/lib/enum/language';
import { ItemsExperienceItem } from '@/lib/interface/experience/items-experience-item';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';

const Experience = () => {
    const locale = useLocale();

    return (
        <div className='flex flex-col gap-5 text-center xl:text-left w-full'>
            <h3 className='text-4xl font-bold'>{locale==Language.VietNam?experienceData.titleVi:experienceData.titleEn}</h3>
            <p className='w-full text-black/70 dark:text-white/70 mx-auto xl:mx-0 text-base'>
                {locale==Language.VietNam?experienceData.descriptionVi:experienceData.descriptionEn}
            </p>

            <ScrollArea className='h-[33rem]'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mr-4'>
                    {experienceData.items.map((item:ItemsExperienceItem, index:number) => (
                        <div key={index} className='bg-slate-400 h-[15rem] px-5 py-3 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                            <div className='flex flex-col h-[3rem]'>
                                <span className='text-cyan-800 text-base font-semibold'>{locale==Language.VietNam?item.durationVi:item.durationEn}</span>
                                
                                <div>
                                    <h3 className='text-sm'>{locale==Language.VietNam?(item.positionVi+" - "+item.companyVi)
                                    :(item.positionEn+ " - "+item.companyEn)}</h3>
                                </div>
                            </div>
                            
                            <p className='text-xl text-orange-200 font-semibold h-[1.5rem]'>{item.nameProject}</p>
                            
                            <ScrollArea className='h-[10.5rem] py-2'>
                                <table className="table-fixed mr-2 text-sm text-white">
                                    <tbody>
                                        <tr>
                                            <td className='border-r w-1/5 pr-1 text-left align-top'>Team size</td>
                                            <td className='w-4/5 pl-2'>{item.teamSize}</td>
                                        </tr>
                                        <tr className='pt-2'>
                                            <td className='border-r w-1/5 pr-1 text-left align-top'>Mô tả</td>
                                            <td className='w-4/5 pl-2'>{locale==Language.VietNam?item.descriptionVi:item.descriptionEn}</td>
                                        </tr>
                                        <tr className='pt-2'>
                                            <td className='border-r w-1/5 pr-1 text-left align-top'>Vị trí</td>
                                            <td className='w-4/5 pl-2'>{locale==Language.VietNam?item.positionInTeamVi:item.positionInTeamEn}</td>
                                        </tr>
                                        {item.responsibilityEn && (
                                            <tr className='pt-2'>
                                                <td className='border-r w-1/5 pr-1 text-left align-top'>Trách nhiệm</td>
                                                <td className='w-4/5 pl-2'>{locale==Language.VietNam?item.responsibilityVi:item.responsibilityEn}</td>
                                            </tr>
                                        )}
                                        <tr className='pt-2'>
                                            <td className='border-r w-1/5 pr-1 text-left align-top'>Công nghệ</td>
                                            <td className='w-4/5 pl-2'>{locale==Language.VietNam?item.technology:item.technology}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <ScrollBar orientation="vertical" />
                            </ScrollArea>
                        </div>
                    ))}
                </div>
                <ScrollBar orientation="vertical" />
            </ScrollArea>
        </div>
    )
}

export default Experience