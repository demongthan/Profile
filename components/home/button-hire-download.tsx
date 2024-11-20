import React from 'react'
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Language } from '@/lib/enum/language';
import { linkImageData } from '@/lib/data/link-image-data';

const ButtonHireDownload = () => {
    const t = useTranslations('HomePage');
    const locale = useLocale();
    const router = useRouter();

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = locale==Language.English?linkImageData['cvEnglish']:linkImageData['cvVietNam'];
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleContact=()=>{
        router.push(`${locale}/contact`);
    }

    return (
        <div className='mt-4 flex items-center space-x-6'>
            <Button className='relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden
                bg-red-500 text-white shadow-2x1 transition-all before:absolute before:h-0 before:w-0
                before:rounded-full before:bg-cyan-500 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56'
            onClick={(event: React.MouseEvent<HTMLButtonElement>)=>{
                event.preventDefault();
                handleContact();
            }}>
                <span className='relation z-10'>{t("hireMe")}</span>
            </Button>

            <Button className='before:ease relative h-12 w-40 overflow-hidden bg-orange-600 text-white
            font-semibold shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48
            before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90
            before:bg-green-700 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:-rotate-180'
            onClick={(event: React.MouseEvent<HTMLButtonElement>)=>{
                event.preventDefault();
                handleDownload();
            }}>
                <span className='relation z-10'>{t("downloadCV")}</span>
            </Button>
        </div>
    )
}

export default ButtonHireDownload