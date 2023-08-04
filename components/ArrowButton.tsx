import React from 'react'
import arrow from '../public/right-arrow.svg'
import Image from 'next/image'

const ArrowButton = () => {
    return (
        <div className=' rounded-full grid place-items-center p-2 bg-[#0e1420] hover:scale-110 duration-150 cursor-pointer'>
            <Image src={arrow} alt='arrow button' width={40} height={40} className=' -rotate-45 hover:scale-150 duration-150' />
        </div>
    )
}

export default ArrowButton