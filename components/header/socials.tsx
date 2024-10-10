import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import { socialsData } from '@/lib/data/socials-data'
import { SocialItem } from '@/lib/interface/social-item'

const socials = () => {
    return (
        <div className='flex justify-center items-center gap-x-2 xl:gap-x-5 text-lg'>
            {socialsData.map((social:SocialItem, index:number) =>{
                return (
                    <Link href={social.path} key={index} className='hover:scale-125 transition-all duration-500 w-6 h-6'>
                        <Image src={social.urlIcon} alt={''} width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }}></Image>
                    </Link>
                )
            })}
            
        </div>
    )
}

export default socials