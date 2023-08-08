import React from 'react'
import Image from 'next/image'
import anotherme from '../public/images/ultimate_(1)-transformed.jpeg'
import Section from './Section'

const About = () => {
    return (
        <Section>

            <div className=' grid grid-cols-2 gap-8 mt-20 
            xs:gap-3 xs:mt-0 xs:grid-cols-10 
            xss:grid-cols-7 xss:gap-2
            xt:grid-cols-10 xt:mt-32'>
                <div className=' rounded-xl overflow-hidden relative 
                xs:col-span-6 
                xss:col-span-4
                xt:col-span-7 '>
                    <Image src={anotherme}
                        alt='moiz'
                        fill={true}
                        style={{ objectFit: "cover" }}
                        quality={100}
                        priority
                    />
                </div>
                <div className='flex flex-col justify-around items-start border-2 border-[#e6e1c5] rounded-xl p-5 xs:p-2 xs:col-span-4 xss:p-2 min-w-fit text-9xl xs:text-[55px] xss:text-5xl
                xt:text-[80px] xt:col-span-3'>
                    <h1 className='  text-[#e6e1c5] font-semibold tracking-tight'>The one</h1>
                    <h1 className='  text-[#e6e1c5] font-semibold tracking-tight'>Who</h1>
                    <h1 className='  text-[#e6e1c5] font-semibold tracking-tight'>Gets</h1>
                    <h1 className='  text-[#e6e1c5] font-semibold tracking-tight'>Shit</h1>
                    <h1 className='  text-[#cbf420] font-semibold tracking-tight opacity-90'>Done!</h1>
                </div>
            </div>

        </Section>
    )
}

export default About