"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Select, SelectValue } from '@/components/ui/select'
import { SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger } from '@radix-ui/react-select'

const Contact = () => {
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
            <div className='flex flex-col xl:flex-row gap-5'>
                <div className='xl:h-[54%] order-2 xl:order-none'>
                    <form className='flex flex-col gap-6 p-10 bg-slate-400 rounded-xl'>
                        <h3 className='text-4xl text-cyan-400'>Let's work together</h3>

                        <p className='text-white/60'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro provident voluptates quis, obcaecati, expedita aliquam praesentium recusandae dolore mollitia sunt sapiente maiores autem repellendus reiciendis, repudiandae iste eos aliquid unde.
                        </p>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <Input type="firstname" placeholder='First Name'></Input>
                            <Input type="lastname" placeholder='Last Name'></Input>
                            <Input type="email" placeholder='Email Address'></Input>
                            <Input type="phone" placeholder='Phone Number'></Input>
                        </div>

                        <Select>
                            <SelectTrigger className='w-full'>
                                <SelectValue placeholder="Select a service"></SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Select a Service</SelectLabel>
                                    <SelectItem value='wd'>Web Developer</SelectItem>
                                    <SelectItem value='f'>Freelancer</SelectItem>
                                    <SelectItem value='gd'>Game Developer</SelectItem>
                                    <SelectItem value='p'>Photoshop</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </form>
                </div>

                <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>

                </div>
            </div>
        </motion.section>
    )
}

export default Contact