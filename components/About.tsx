import React from 'react'
import Image from 'next/image'
import anotherme from '../public/images/ultimate_(1)-transformed.jpeg'
import Section from './Section'

const About = () => {
    return (
        <Section>

            <div className=' grid grid-cols-2 gap-8 mt-20 xs:gap-3 xss:gap-2 xs:mt-0 xs:grid-cols-4 xss:grid-cols-7 '>
                <div className=' rounded-xl overflow-hidden relative xs:col-span-2 xss:col-span-4 '>
                    <Image src={anotherme}
                        alt='moiz'
                        fill={true}
                        style={{ objectFit: "cover" }}
                        quality={100}
                        priority
                    />
                </div>
                <div className='flex flex-col justify-around items-start border-2 border-[#e6e1c5] rounded-xl p-5 xs:p-2 xss:p-2 min-w-fit '>
                    <h1 className=' text-9xl xs:text-[62px] xss:text-5xl text-[#e6e1c5] font-semibold tracking-tight'>The one</h1>
                    <h1 className=' text-9xl xs:text-[62px] xss:text-5xl text-[#e6e1c5] font-semibold tracking-tight'>Who</h1>
                    <h1 className=' text-9xl xs:text-[62px] xss:text-5xl text-[#e6e1c5] font-semibold tracking-tight'>Gets</h1>
                    <h1 className=' text-9xl xs:text-[62px] xss:text-5xl text-[#e6e1c5] font-semibold tracking-tight'>Shit</h1>
                    <h1 className=' text-9xl xs:text-[62px] xss:text-5xl text-[#cbf420] font-semibold tracking-tight opacity-90'>Done!</h1>
                </div>
            </div>

        </Section>
    )
}

export default About