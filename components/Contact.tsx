import React from 'react'
import Section from './Section'

const Contact = () => {
    return (
        <Section>
            <div className='  flex flex-col justify-center items-center mb-20 xs:mb-20 xs:pb-10 xs:pt-7 xss:mb-0 xss:h-fit xss:pb-7 xss:pt-[137px] xt:pb-20 xl:mb-24 xl:mt-40'>
                <div className=' p-2 px-4 pb-4 xs:pb-2 xss:pb-[10px] xs:pt-1 xs:px-2 xss:px-[10px] xss:mt-0 border-2 hover:bg-[#E6E1C5] transition duration-300 ease-in-out hover:cursor-pointer border-[#E6E1C5] rounded-2xl mx-4 mt-10 mb-6 w-fit
                xs:rounded-xl 
                xss:rounded-xl
                xt:rounded-2xl xt:px-4 xt:pt-2 xt:pb-4'>
                    <a href="mailto:moizghuman@gmail.com"
                        className='text-[#CEFF1A] hover:text-[#0E1421] transition duration-300 ease-in-out text-7xl font-medium tracking-tight text-center cursor-pointer
                        xs:text-3xl
                        xss:text-[27px] xss:font-semibold
                        xt:text-5xl xt:font-medium
                    xl:text-6xl'>
                        moizghuman@gmail.com
                    </a >
                </div>
                <div className=' left-1 relative h-16 w-54 px-4 border-4 border-pink-950 bg-pink-700 cursor-pointer rounded-2xl flex flex-row justify-center items-center font-medium text-xl mt-[5px] -rotate-6'>
                    <a href="mailto:moizghuman@gmail.com">
                        get in touch with me
                    </a>
                    <div className=' block absolute h-8 w-8 border-4 border-pink-950 bg-pink-700 
                    rounded-tl-xl rotate-45 top-[-19px] left-36 border-r-0 border-b-0'></div>
                </div>
            </div>
        </Section >
    )
}

export default Contact