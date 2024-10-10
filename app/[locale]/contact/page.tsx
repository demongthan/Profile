"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';

import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { infoContactData } from '@/lib/data/info-contact-data'
import { InfoContactItem } from '@/lib/interface/info-contact-item'
import { Language } from '@/lib/enum/language';

const Contact = () => {
    const locale = useLocale();
    const t = useTranslations('ContactPage');

    return (
        <motion.section
            initial={{opacity:0}}
            animate={{
                opacity:1,
                transition:{
                    delay: 2.4,
                    duration: 0.4,
                    ease: 'easeInOut'
                }
            }}
            className='py-6'
        >
            <div className='flex flex-col xl:flex-row gap-20'>
                <div className='xl:w-1/2 order-2 xl:order-none'>
                    <form className='flex flex-col gap-6 p-10 bg-zinc-600 rounded-xl'>
                        <h3 className='text-4xl text-cyan-400'>{t("title")}</h3>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
                            <Input type="firstname" placeholder={locale==Language.VietNam?"Họ":'First Name'}></Input>
                            <Input type="lastname" placeholder={locale==Language.VietNam?"Tên":'Last Name'}></Input>
                            <Input type="email" placeholder='Email'></Input>
                            <Input type="phone" placeholder={locale==Language.VietNam?"Điện thoai":'First Name'}></Input>
                        </div>

                        <Select>
                            <SelectTrigger className='w-full'>
                                <SelectValue placeholder={locale==Language.VietNam?"Lựa chọn Dịch vụ":"Select a service"}></SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>{locale==Language.VietNam?"Lựa chọn Dịch vụ":"Select a service"}</SelectLabel>
                                    <SelectItem value='wd'>Web Developer</SelectItem>
                                    <SelectItem value='f'>Freelancer</SelectItem>
                                    <SelectItem value='gd'>Game Developer</SelectItem>
                                    <SelectItem value='p'>Photoshop</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        <Textarea 
                            className='h-[200px]'
                            placeholder={locale==Language.VietNam?"Nhập nội dung tin nhắn.":'Type your message here.'}
                        >
                        </Textarea>

                        <Button size="sm" className='max-w-40'>{t("titleBtn")}</Button>
                    </form>
                </div>

                <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
                    <ul className='flex flex-col gap-10'>
                        {infoContactData.map((item:InfoContactItem, index:number)=>{
                            return (
                                <li key={index} className='flex items-center gap-6'>
                                    <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-zinc-600 text-cyan-400 rounded-md flex items-center justify-center'>
                                        <item.icon className='text-[28px]'></item.icon>
                                    </div>
                                    
                                    <div className='flex-1'>
                                        <p className='text-white/60'>{locale==Language.VietNam?item.titleVi:item.titleEn}</p>
                                        <h3 className='text-xl'>{locale==Language.VietNam?item.descriptionVi:item.descriptionEn}</h3>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact