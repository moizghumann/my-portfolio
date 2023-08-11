import React from 'react'
import Image from 'next/image'
import anotherme from '../public/images/ultimate_(1)-transformed.jpeg'
import Section from './Section'
import AboutExtended from './AboutExtended'

const About = () => {
    return (
        <Section>

            <div className=' grid grid-cols-2 gap-8 mt-20 
            xs:gap-3 xs:mt-0 xs:grid-cols-12
            xss:grid-cols-7 xss:gap-2
            xt:grid-cols-12 xt:mt-0 xt:mx-10 xt:gap-4
            xl:mt-44 xl:grid-cols-12 xl:gap-5
            '>
                <div className=' rounded-xl overflow-hidden relative 
                xs:col-span-7 
                xss:col-span-4
                xt:col-span-7
                xl:col-span-8 '>
                    <Image src={anotherme}
                        alt='moiz'
                        fill={true}
                        style={{ objectFit: "cover" }}
                        quality={100}
                        priority
                    />
                </div>
                <div className='flex flex-col justify-around items-center border-2 border-[#e6e1c5] rounded-xl p-5 xs:p-2  xss:p-2 xss:col-span-3 min-w-fit text-9xl xss:text-5xl
                xs:text-5xl xs:col-span-5
                xt:text-[100px] xt:col-span-5
                xl:col-span-4 xl:text-[100px] xl:items-start
                xm:text-[110px] xm:items-center'>
                    <h1 className='  text-[#e6e1c5] font-semibold tracking-tight text-center 
                    xl:text-start
                    xm:text-center xm:w-1/2'>The one</h1>
                    <h1 className='  text-[#e6e1c5] font-semibold tracking-tight'>Who</h1>
                    <h1 className='  text-[#e6e1c5] font-semibold tracking-tight'>Gets</h1>
                    <h1 className='  text-[#e6e1c5] font-semibold tracking-tight'>Shit</h1>
                    <h1 className='  text-[#cbf420] font-semibold tracking-tight opacity-90'>Done!</h1>
                </div>

                <AboutExtended />
            </div>
        </Section>
    )
}

export default About