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
        <div className='flex flex-col w-full gap-14'>
            <div className='flex flex-row gap-5 w-full'>
                <div className='flex flex-col item-center w-1/2 gap-5 pt-16'>
                    <div>
                        <h1 className='text-gray-400 text-xs text-inherit'>{t('welcome')}</h1>
                        <h1 className='text-3xl font-semibold text-gray-400 pb-4'>
                            {t("hi")} <span className="text-cyan-500 text-5xl">Nguyen Van Nam</span>
                        </h1>

                        <TypeWriteEffect></TypeWriteEffect>
                    </div>

                    <p className='mt-4 text-base text-black dark:text-white font-medium'>
                        {t("description")}
                    </p>

                    <ButtonHireDownload></ButtonHireDownload>
                </div>
                
                <Photo></Photo>
            </div>

            <Stats></Stats>
        </div>
    )
}

export default Home