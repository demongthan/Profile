import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import { socialsData } from '@/lib/data/socials-data'
import { SocialItem } from '@/lib/interface/social-item'

const socials = () => {
    return (
        <div className='flex justify-center items-center gap-x-5 text-lg'>
            {socialsData.map((social:SocialItem, index:number) =>{
                return (
                    <Link href={social.path} key={index} className='hover:scale-125 transition-all duration-500'>
                        <Image src={social.urlIcon} alt={''} width={20} height={20}></Image>
                    </Link>
                )
            })}
            
        </div>
    )
}

export default socials