"use client"

import React, { useState } from 'react'
import Image from 'next/image'

import { linkImageData } from '@/lib/data/link-image-data';
import { useRouter } from 'next/navigation';

const LanguageToggle = () => {
    const [isVi, setIsVi]=useState<boolean>(true);
    const router = useRouter();

    return (
        <button className='flex flex-row gap-2 w-[7rem] hover:scale-105 transition-all duration-500' onClick={(event: React.MouseEvent<HTMLButtonElement>)=>{
            event.preventDefault();

            setIsVi(!isVi);
            router.replace(`/${!isVi?"vi":"en"}`);
        }}>
            {isVi?(
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