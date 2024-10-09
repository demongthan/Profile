import React from 'react'
import {PiCaretLeftBold, PiCaretRightBold, } from "react-icons/pi"
import { useSwiper } from 'swiper/react'

interface Props{
    containerStyles?:string,
    btnStyles?:string
    iconsStyles?:string
}

const WorkSliderBtns = ({containerStyles, btnStyles, iconsStyles}:Props) => {
    const swiper=useSwiper();

    return (
        <div className={containerStyles}>
            <button className={btnStyles} onClick={(event: React.MouseEvent<HTMLButtonElement>)=>{
                event.preventDefault();
                swiper.slidePrev();
            }}>
                <PiCaretLeftBold className={iconsStyles}></PiCaretLeftBold>
            </button>

            <button className={btnStyles} onClick={(event: React.MouseEvent<HTMLButtonElement>)=>{
                event.preventDefault();
                swiper.slideNext();
            }}>
                <PiCaretRightBold className={iconsStyles}></PiCaretRightBold>
            </button>
        </div>
    )
}

export default WorkSliderBtns