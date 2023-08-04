import React from 'react'
import Image from 'next/image'
import anotherme from '../public/images/ultimate_(1)-transformed.jpeg'
import Section from './Section'

const About = () => {
    return (
        <Section>
            <div className=' grid grid-cols-2 gap-8 mt-20'>
                <div className=' rounded-xl overflow-hidden relative'>
                    <Image src={anotherme}
                        alt='moiz'
                        fill={true}
                        style={{ objectFit: "cover" }}
                        quality={100}
                        priority
                    />
                </div>
                <div className='flex flex-col justify-around items-start border-2 border-[#e6e1c5] rounded-xl p-5'>
                    <h1 className=' text-9xl text-[#e6e1c5] font-semibold tracking-tight'>The one</h1>
                    <h1 className=' text-9xl text-[#e6e1c5] font-semibold tracking-tight'>Who</h1>
                    <h1 className=' text-9xl text-[#e6e1c5] font-semibold tracking-tight'>Gets</h1>
                    <h1 className=' text-9xl text-[#e6e1c5] font-semibold tracking-tight'>Shit</h1>
                    <h1 className=' text-9xl text-[#cbf420] font-semibold tracking-tight opacity-90'>Done!</h1>
                </div>
            </div>
        </Section>
    )
}

export default About