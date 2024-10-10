import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const TypeWriteEffect = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Full Stack Web Developer',
                1000,
                'Game Developer',
                1000,
                'Designer',
                1000,
                'Freelancer',
                1000
            ]}
            wrapper="span"
            speed={50}
            className='text-indigo-700 font-bold dark:text-amber-300'
            repeat={Infinity}
        >
        </TypeAnimation>
    )
}

export default TypeWriteEffect