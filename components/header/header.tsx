import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import { linkImageData } from '@/lib/data/link-image-data'
import Socials from './socials'
import LanguageToggle from './language-toggle'
import DarkModeToggle from './dark-mode-toggle'

const Header = () => {
    return (
        <header className='absolute z-30 w-full flex justify-center items-center xl:h-[90px]'>
            <div className='w-full xl:w-[80%]'>
                <div className='flex flex-row justify-between items-center w-full py-1 xl:py-8'>
                    <Link href={'/'} className='hidden xl:block'>
                        <Image src={linkImageData.logo} alt={'logo'} width={220} height={48}></Image>
                    </Link>

                    <Link href={'/'} className='block xl:hidden'>
                        <Image src={linkImageData.logoMobile} alt={'logo'} width={40} height={40}></Image>
                    </Link>

                    <div className='flex flex-row gap-6 xl:gap-20 justify-end items-center'>
                        <Socials></Socials>
                        
                        <div className='flex flex-row items-center pt-1'>
                            <LanguageToggle></LanguageToggle>

                            <DarkModeToggle></DarkModeToggle>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header