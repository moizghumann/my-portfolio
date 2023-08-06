import React from 'react'
import Section from './Section'

const Services = () => {
    return (
        <Section>
            <div className=' h-full mt-20 xs:mt-10'>

                <h1 className=' text-4xl xs:text-4xl xss:text-3xl font-semibold tracking-tight text-[#cbf420] opacity-90'>
                    What I do
                </h1>
                <div className=' text-6xl xs:text-[32px] xss:text-4xl w-full font-medium tracking-tight mt-4 xs:mt-3'>
                    <div className=' py-4 xss:py-2 xs:py-3 border-t-2  border-[#e6e1c561]'>Design user interfaces</div>
                    <div className=' py-4 xss:py-2 xs:py-3 border-t-2 border-[#e6e1c561]'>Craft engaging user experiences</div>
                    <div className=' py-4 xss:py-2 xs:py-3 border-t-2 border-[#e6e1c561]'>Develop design into websites</div>
                    <div className=' py-4 xss:py-2 xs:py-3 border-t-2 border-[#e6e1c561]'>Connect frontend to backend APIs</div>
                    <div className=' py-4 xss:py-2 xs:py-3 border-t-2 border-[#e6e1c561]'>Manage the product</div>
                    <div className='border-t-2 border-[#e6e1c561]'></div>
                </div>
            </div>


        </Section >
    )
}

export default Services