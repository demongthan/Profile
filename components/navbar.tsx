"use client"

import { usePathname } from 'next/navigation'

import React from 'react'
import { navData } from '@/lib/data/nav-data'
import { NavItem } from '@/lib/interface/nav-item'
import { useLocale } from 'next-intl'
import { Link } from '@/i18n/routing'

const Navbar = () => {
    const pathName=usePathname();
    const locale = useLocale();

    return (
        <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 
        mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
            <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center 
            gap-y-10 px-4 md:px-40 xl:px-0 h-[30px] xl:h-max py-6 backdrop-blur-sm text-xl xl:rounded-full bg-slate-200 dark:bg-slate-400'>
                {navData.map((link:NavItem, index:number)=>{
                    return (
                        <Link
                        className={`${pathName===("/"+locale+link.path) && 'text-cyan-500 dark:text-indigo-600'} relative flex items-center group hover:text-cyan-300 dark:hover:text-indigo-600 transition-all duration-300`} 
                        key={index} 
                        href={`${link.path}`}>
                            <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
                                <div className='relative flex items-center p-[6px] rounded-[3px] text-black dark:text-white'>
                                    <div className='text-[12px] leading-none font-semibold capitalize'>
                                        {link.name}
                                    </div>
                                </div>
                            </div>

                            <link.icon></link.icon>
                        </Link>)
                })}
            </div>
        </nav>
    )
}

export default Navbar