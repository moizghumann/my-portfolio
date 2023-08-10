import React from 'react'
import Section from './Section'
import Badge from './Badge'



const Motto = () => {
    return (
        <Section>
            <div className='  grid place-items-center xl:h-screen xs:h-fit xs:py-28 mb-7 xs:mt-10 xss:my-0 xss:h-screen xl:mb-20 '>
                <div className=' flex flex-col justify-center items-center w-9/12 xss:w-fit xl:w-9/12'>
                    <Badge badgeText='Motto' />
                    <h1 className=' xl:text-[105px] xs:text-6xl xss:text-5xl xt:text-7xl font-semibold tracking-tight text-center mt-4'>
                        Design experiences that people never forget
                    </h1>
                </div>
            </div>
        </Section>
    )
}

export default Motto