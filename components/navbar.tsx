"use client"

import { navData } from '@/lib/data/nav-data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const pathName=usePathname();

    return (
        <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 
        mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
            <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center 
            gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full bg-slate-100'>
                {navData.map((link, index)=>{
                    return (
                        <Link
                        className={`${link.path===pathName && 'text-cyan-300'} relative flex items-center group hover:text-cyan-300 transition-all duration-300`} 
                        key={index} 
                        href={link.path}>
                            <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
                                <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
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