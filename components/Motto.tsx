import React from 'react'
import Section from './Section'
import Badge from './Badge'



const Motto = () => {
    return (
        <Section>
            <div className='  grid place-items-center xl:h-screen xs:h-60vh mb-7 xs:mt-10 '>
                <div className=' flex flex-col justify-center items-center w-9/12'>
                    <Badge badgeText='Motto' />
                    <h1 className=' text-8xl xs:text-6xl font-semibold tracking-tight text-center mt-4'>
                        Design experiences that people never forget
                    </h1>
                </div>
            </div>
        </Section>
    )
}

export default Motto