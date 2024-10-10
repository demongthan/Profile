"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useLocale } from 'next-intl';
import { BsArrowDownRight } from 'react-icons/bs'

import { serviceData } from '@/lib/data/service-data'
import { ServiceItem } from '@/lib/interface/service-item'
import { Link } from '@/i18n/routing'
import { Language } from '@/lib/enum/language';

const Services = () => {
    const locale = useLocale();

    return (
        <div className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
            <div>
                <motion.div 
                    initial={{opacity:0}}
                    animate={{
                        opacity:1, 
                        transition:{
                            delay:2.4, 
                            duration:0.4
                        }
                    }}
                    className='grid grid-cols-1 md:grid-cols-2 gap-7 xl:gap-16'
                >
                    {serviceData.map((service:ServiceItem, index:number) =>{
                        return(
                            <div key={index} className='flex-1 flex flex-col justify-center gap-2 xl:gap-6 group h-72'>
                                <div className='w-full flex justify-between items-center h-10'>
                                    <div className='text-5xl font-extrabold text-transparent text-outline dark:text-outline-dark
                                    group-hover:cursor-pointer group-hover:text-outline-hover transition-all duration-500'>
                                        {service.num}
                                    </div>

                                    <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-slate-300 dark:bg-wh dark:bg-gray-400 group-hover:bg-cyan-500 
                                    transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                                        <BsArrowDownRight className='text-primary text-3xl'></BsArrowDownRight>
                                    </Link>
                                </div>

                                <h2 className='text-xl xl:text-4xl font-bold leading-none text-slate-500 dark:text-slate-300 group-hover:text-cyan-500 transition-all duration-500 h-6'>{service.title}</h2>

                                <p className='text-black/60 h-56 text-xs xl:text-sm dark:text-white'>{locale==Language.VietNam?service.descriptionVi:service.descriptionEn}</p>

                                <div className='border-b w-full'></div>
                                
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </div>
    )
}

export default Services