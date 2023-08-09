import React from 'react'
import Image from 'next/image'
import anotherme from '../public/images/moiz.jpg'
import Section from './Section'

const About = () => {
    return (
        <Section>
            <div className=' grid grid-cols-2 gap-8'>
                <div className=' rounded-xl overflow-hidden relative'>
                    <Image src={anotherme}
                        alt='moiz'
                        fill={true}
                        style={{ objectFit: "cover" }}
                        quality={100}
                        priority
                    />
                </div>
                <div className='flex flex-col justify-around items-start border-2 border-black rounded-xl p-5'>
                    <h1 className=' text-9xl text-black font-semibold tracking-tight'>stoic</h1>
                    <h1 className=' text-9xl text-black font-semibold tracking-tight'>stoic</h1>
                    <h1 className=' text-9xl text-black font-semibold tracking-tight'>stoic</h1>
                    <h1 className=' text-9xl text-black font-semibold tracking-tight'>stoic</h1>
                </div>
            </div>
        </Section>
    )
}

export default About