import React from 'react'
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';

const ButtonHireDownload = () => {
    const t = useTranslations('HomePage');

    return (
        <div className='mt-4 flex items-center space-x-6'>
            <Button className='relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden
                bg-red-500 text-white shadow-2x1 transition-all before:absolute before:h-0 before:w-0
                before:rounded-full before:bg-cyan-500 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56'>
                <span className='relation z-10'>{t("hireMe")}</span>
            </Button>

            <Button className='before:ease relative h-12 w-40 overflow-hidden bg-orange-600 text-white
            font-semibold shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48
            before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90
            before:bg-green-700 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:-rotate-180'>
                <span className='relation z-10'>{t("downloadCV")}</span>
            </Button>
        </div>
    )
}

export default ButtonHireDownload