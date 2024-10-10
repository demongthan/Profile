"use client"

import React from 'react'
import Image from 'next/image'
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

import { linkImageData } from '@/lib/data/link-image-data';
import { Language } from '@/lib/enum/language';

const LanguageToggle = () => {
    const router = useRouter();
    const pathName=usePathname();
    const locale = useLocale();

    return (
        <button className='flex flex-row gap-2 w-[6.3rem] hover:scale-105 transition-all duration-500' onClick={(event: React.MouseEvent<HTMLButtonElement>)=>{
            event.preventDefault();
            const path=locale==Language.VietNam?pathName.replace(Language.VietNam, Language.English):pathName.replace(Language.English, Language.VietNam);
            router.replace(path);
        }}>
            <div className='w-6 h-6'>
                <Image src={locale==Language.VietNam?linkImageData.iconVi:linkImageData.iconEn} alt={''} width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }}></Image>
            </div>

            <span className='font-semibold text-gray-500 dark:text-white'>{locale==Language.VietNam?"Việt Nam":"English"}</span>
        </button>
    )
}

export default LanguageToggle