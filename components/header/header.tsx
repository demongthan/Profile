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
            <div className='w-[80%]'>
                <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
                    <Link href={'/'}>
                        <Image src={linkImageData.logo} alt={'logo'} width={220} height={48}></Image>
                    </Link>

                    <div className='flex flex-row gap-20 justify-end items-center'>
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