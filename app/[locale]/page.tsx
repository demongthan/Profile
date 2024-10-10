"use client"

import React from 'react'
import { useTranslations } from 'next-intl';

import TypeWriteEffect from '@/components/home/type-write-effect';
import ButtonHireDownload from '@/components/home/button-hire-download';
import Photo from '@/components/home/photo';
import Stats from '@/components/home/stats';

const Home = () => {
    const t = useTranslations('HomePage');

    return(
        <div className='flex flex-col w-full gap-4 xl:gap-14'>
            <div className='flex flex-col xl:flex-row gap-5 w-full relative'>
                <div className='flex flex-col item-center w-full xl:w-1/2 gap-1 xl:gap-5 pt-3 xl:pt-16 order-2 xl:order-none px-2 xl:px-0'>
                    <div className='text-center xl:text-left'>
                        <h1 className='text-gray-400 text-[8px] xl:text-xs text-inherit'>{t('welcome')}</h1>
                        <h1 className='text-xl xl:text-3xl font-semibold text-gray-400 pb-0 xl:pb-4'>
                            {t("hi")} <span className="text-cyan-500 text-3xl xl:text-5xl">Nguyen Van Nam</span>
                        </h1>
                        
                        <div className='text-2xl xl:text-6xl'>
                            <TypeWriteEffect></TypeWriteEffect>
                        </div>
                    </div>

                    <p className='mt-1 xl:mt-4 text-base text-black dark:text-white font-medium mx-auto text-center xl:text-left'>
                        {t("description")}
                    </p>

                    <ButtonHireDownload></ButtonHireDownload>
                </div>
                
                <div className='order-1 xl:order-none w-full xl:w-1/2'>
                    <Photo></Photo>
                </div>
            </div>

            <Stats></Stats>
        </div>
    )
}

export default Home