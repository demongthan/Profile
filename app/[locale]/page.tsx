"use client"

import React from 'react'
import { useTranslations } from 'next-intl';

const Home = () => {
    const t = useTranslations('IndexPage');
    console.log(useTranslations('IndexPage'), t('title'));
    return(<div>
        <h1 className='text-4xl mb-4 font-semibold text-black'>{t('title')}</h1>
        <p>{t('description')}</p>
    </div>)
}

export default Home