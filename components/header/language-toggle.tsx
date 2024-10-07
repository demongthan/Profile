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
        <button className='flex flex-row gap-2 w-[7rem] hover:scale-105 transition-all duration-500' onClick={(event: React.MouseEvent<HTMLButtonElement>)=>{
            event.preventDefault();

            const path=locale==Language.VietNam?pathName.replace(Language.VietNam, Language.English):pathName.replace(Language.English, Language.VietNam);
            router.replace(path);
        }}>
            {locale==Language.VietNam?(
                <>
                    <Image src={linkImageData.iconVi} alt={''} width={20} height={20}></Image>
                    <span className='font-semibold text-gray-500 dark:text-white -mt-[1px]'>Việt Nam</span>
                </>
            ):(
                <>
                    <Image src={linkImageData.iconEn} alt={''} width={20} height={20}></Image>
                    <span className='font-semibold text-gray-500 dark:text-white -mt-[1px]'>English</span>
                </>
            )}
            
        </button>
    )
}

export default LanguageToggle