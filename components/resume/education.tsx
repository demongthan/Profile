"use client"

import React from 'react'
import { useLocale } from 'next-intl';

import { Language } from '@/lib/enum/language';
import { educationData } from '@/lib/data/resume/education-data';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import { ItemsEducationItem } from '@/lib/interface/education/items-education-item';
import ImageModal from '../ImageModal';

const Education = () => {
    const locale = useLocale();

    return (
        <div className='flex flex-col gap-5 text-center xl:text-left w-full'>
            <h3 className='text-4xl font-bold'>{locale==Language.VietNam?educationData.titleVi:educationData.titleEn}</h3>
            <p className='w-full text-black/70 dark:text-white/70 mx-auto xl:mx-0 text-base'>
                {locale==Language.VietNam?educationData.descriptionVi:educationData.descriptionEn}
            </p>

            <ScrollArea className='h-[33rem]'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mr-4'>
                    {educationData.items.map((item:ItemsEducationItem, index:number) => (
                        <div key={index} className={`bg-slate-400 ${item.imageCertificate?"h-[25rem] xl:h-[15rem]":"h-[10rem] xl:h-[15rem]"} px-5 py-5 rounded-xl flex flex-col xl:flex-row lg:items-start gap-1`}>
                            <div className='flex flex-col gap-1 w-full xl:w-2/5 h-[10rem] xl:h-full'>
                                <div className='flex flex-col'>
                                    <span className='text-cyan-800 text-base font-semibold'>{locale==Language.VietNam?item.durationVi:item.durationEn}</span>
                                    
                                    <div>
                                        <h3 className='text-sm'>{locale==Language.VietNam?(item.specializedVi+" - "+item.universityVi)
                                        :(item.specializedEn+ " - "+item.universityEN)}</h3>
                                    </div>
                                </div>

                                <div className='pt-2'>
                                    {item.GPA && (
                                        <div className='flex items-center gap-3 pl-3'>
                                            <span className='w-[6px] h-[6px] rounded-full bg-yellow-500'></span>
                                            <p className='text-white'>{item.GPA}</p>
                                        </div>
                                    )}

                                    <div className='flex items-center gap-3 pl-3'>
                                        <span className='w-[6px] h-[6px] rounded-full bg-yellow-500'></span>
                                        <p className='text-white'>{locale==Language.VietNam?item.ClassificationVi:item.ClassificationEn}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='w-full xl:w-3/5 h-[15rem] xl:h-full'>
                                {item.imageCertificate && (
                                    <ImageModal src={item.imageCertificate}></ImageModal>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <ScrollBar orientation="vertical" />
            </ScrollArea>
        </div>
    )
}

export default Education